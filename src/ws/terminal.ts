// ws/terminal.ts
import { WebSocketServer } from "ws";
import { terminalSessions } from "../utils/terminalSessions";

import { getAgentManager } from "./agentManager";

export function initTerminalWSS() {
    const wss = new WebSocketServer({ noServer: true });

    wss.on("connection", (ws, req) => {
        const url = new URL(req.url!, "http://localhost");
        const sessionId = url.searchParams.get("session");

        if (!sessionId || !terminalSessions.has(sessionId)) {
            ws.close();
            return;
        }

        const session = terminalSessions.get(sessionId)!;
        session.socket = ws;

        ws.send(JSON.stringify({
            type: "terminal:output",
            data: "Connected to terminal session\n",
        }));

        ws.on("message", (data) => {
            const msg = JSON.parse(data.toString());

            if (msg.type === "terminal:input") {
                const agentManager = getAgentManager();

                const agent = agentManager.getAgent(session.serverId);

                if (!agent) {
                    ws.send(JSON.stringify({
                        type: "terminal:output",
                        data: "Agent offline\n",
                    }));
                    return;
                }

                agent.send(JSON.stringify({
                    type: "terminal:stdin",
                    data: msg.data + "\n",
                }));
            }
        });

        ws.on("close", () => {
            if (terminalSessions.get(sessionId)?.socket === ws) {
                terminalSessions.delete(sessionId);
            }

        });
    });

    return wss;
}
