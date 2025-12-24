import { terminalSessions } from "../utils/terminalSessions";

export function forwardTerminalOutput(serverId: number, data: string) {
  for (const session of terminalSessions.values()) {
    if (session.serverId === serverId && session.socket) {
      session.socket.send(
        JSON.stringify({
          type: "terminal:output",
          data,
        })
      );
    }
  }
}