// ws/index.ts
import http from "http";
import { initRealtimeWSS } from "./realtime";
import { initTerminalWSS } from "./terminal";
import { initAgentWSS } from "./agent";

export function initWS(server: http.Server) {
   const realtime = initRealtimeWSS();
  const terminalWSS = initTerminalWSS();
  const agentWSS = initAgentWSS(); 

  server.on("upgrade", (req, socket, head) => {
    const url = req.url || "";

    if (url.startsWith("/ws/realtime")) {
      realtime.wss.handleUpgrade(req, socket, head, (ws) => {
        realtime.wss.emit("connection", ws, req);
      });
      return;
    }

    if (url.startsWith("/ws/terminal")) {
      terminalWSS.handleUpgrade(req, socket, head, (ws) => {
        terminalWSS.emit("connection", ws, req);
      });
      return;
    }

    if (url.startsWith("/ws/agent")) {
        
      agentWSS.handleUpgrade(req, socket, head, (ws) => {
        agentWSS.emit("connection", ws, req);
      });
      return;
    }

    socket.destroy();
  });
}
