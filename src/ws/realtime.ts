// ws/realtime.ts
import { WebSocketServer, WebSocket } from "ws";
import { setRealtimeManager } from "./snapshotManager";

type Client = {
  socket: WebSocket;
  serverId?: number;
};

const clients = new Set<Client>();

export function initRealtimeWSS() {
  const wss = new WebSocketServer({ noServer: true });

  wss.on("connection", (socket) => {
    const client: Client = { socket };
    clients.add(client);

    console.log("Realtime WS client connected");

    socket.on("message", (data) => {
      try {
        const message = JSON.parse(data.toString());

        if (message.type === "SUBSCRIBE_SERVER") {
          client.serverId = Number(message.serverId);
        }
      } catch {
        console.error("Invalid realtime WS message");
      }
    });

    socket.on("close", () => {
      clients.delete(client);
    });
  });

  // 🔑 REGISTER GLOBAL REALTIME MANAGER
  setRealtimeManager({
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
  });

  return { wss };
}
