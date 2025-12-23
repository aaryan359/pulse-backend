import { WebSocketServer, WebSocket } from "ws";
import http from "http";

type Client = {
  socket: WebSocket;
  serverId?: number;
};

const clients = new Set<Client>();

let wsInstance: { broadcastSnapshot: (serverId: number, payload: any) => void; } | null = null;

export const initWebSocket = (server: http.Server) => {
      if (wsInstance) {
        return wsInstance; 
      }

  const wss = new WebSocketServer({ server });

  wss.on("connection", (socket) => {
    const client: Client = { socket };
    clients.add(client);

    console.log(" WS client connected");

    socket.on("message", (data) => {
      try {
        const message = JSON.parse(data.toString());

        if (message.type === "SUBSCRIBE_SERVER") {
          client.serverId = Number(message.serverId);
        }
      } catch {
        console.error("Invalid WS message");
      }
    });

    socket.on("close", () => {
      clients.delete(client);
      console.log("WS client disconnected");
    });
  });

  wsInstance = {
    broadcastSnapshot(serverId: number, payload: any) {
      for (const client of clients) {
        if (
          client.serverId === serverId &&
          client.socket.readyState === WebSocket.OPEN
        ) {
          client.socket.send(
            JSON.stringify({
              type: "SERVER_SNAPSHOT",
              data: payload,
            })
          );
        }
      }
    },
  };

  return wsInstance;
};

export const getWebSocket = () => {
  if (!wsInstance) {
    throw new Error("WebSocket not initialized");
  }
  return wsInstance;
};
