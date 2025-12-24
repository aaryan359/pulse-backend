// ws/realtime snapshotManager.ts
import type { WebSocketServer } from "ws";

type RealtimeManager = {
  broadcastSnapshot(serverId: number, payload: any): void;
};

let realtimeManager: RealtimeManager | null = null;

export function setRealtimeManager(manager: RealtimeManager) {
  realtimeManager = manager;
}

export function getRealtimeManager(): RealtimeManager {
  if (!realtimeManager) {
    throw new Error("RealtimeManager not initialized");
  }
  return realtimeManager;
}