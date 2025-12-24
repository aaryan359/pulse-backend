// ws/agent.ts
import { WebSocketServer, WebSocket } from "ws";
import { prisma } from "../config/db.config";
import { setAgentManager } from "./agentManager";
import { forwardTerminalOutput } from "./terminalForward";


export function initAgentWSS() {
  const agents = new Map<number, WebSocket>();

  const wss = new WebSocketServer({ noServer: true });

  wss.on("connection", (ws) => {
    let serverId: number | null = null;

    ws.on("message", async (raw) => {
      const msg = JSON.parse(raw.toString());

      // 🔐 Register agent
      if (msg.type === "agent:register") {
        const { server_uuid } = msg.data;

        const server = await prisma.server.findUnique({
          where: { uuid: server_uuid },
        });

        if (!server) {
          ws.close();
          return;
        }

        serverId = server.id;
        agents.set(server.id, ws);

        ws.send(JSON.stringify({ type: "agent:ready" }));
        return;
      }

      //  Agent → Backend → Frontend
      if (msg.type === "terminal:stdout" && serverId !== null) {
        
        forwardTerminalOutput(serverId, msg.data);
      }
    });

    ws.on("close", () => {
      if (serverId !== null) {
        agents.delete(serverId);
      }
    });
  });

  setAgentManager({
    getAgent(serverId: number) {
      return agents.get(serverId);
    },
  });

  return wss;
}
