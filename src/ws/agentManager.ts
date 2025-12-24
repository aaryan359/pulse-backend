// ws/agentManager.ts
import type { WebSocket } from "ws";

type AgentManager = {
  getAgent(serverId: number): WebSocket | undefined;
};

let agentManager: AgentManager | null = null;

export function setAgentManager(manager: AgentManager) {
  agentManager = manager;
}

export function getAgentManager(): AgentManager {
  if (!agentManager) {
    throw new Error("AgentManager not initialized");
  }
  return agentManager;
}
