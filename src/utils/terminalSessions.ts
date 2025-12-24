import { WebSocket } from "ws";

export type TerminalSession = {
  sessionId: string;
  userId: number;
  serverId: number;
  socket?: WebSocket;
  createdAt: number;
};

export const terminalSessions = new Map<string, TerminalSession>();
