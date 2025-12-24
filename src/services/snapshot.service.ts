import { realtimeWS } from "..";
import { prisma } from "../config/db.config";
import { createEvent } from "../services/event.service";
import { getRealtimeManager } from "../ws/snapshotManager";



export async function updateSnapshot(
  serverId: number,
  system: any,
  containerCount: number,
  timestamp: Date
) {

  const now = new Date();

  await prisma.server.update({
    where: { id: serverId },
    data: {
      lastSeenAt: now,
    },
  });

  const snapshot = await prisma.serverSnapshot.upsert({
    where: { serverId },
    update: {
      uptimeSeconds: system.uptime,
      cpuCores: system.cpu_cores,
      cpuPercent: system.cpu_percent,
      memoryTotalMB: system.memory_total_mb,
      memoryUsedMB: system.memory_used_mb,
      memoryPercent: system.memory_percent,
      diskTotalGB: system.disk_total_gb,
      diskUsedGB: system.disk_used_gb,
      diskPercent: system.disk_percent,
      containerCount,
      updated_at: timestamp,
    },
    create: {
      serverId,
      uptimeSeconds: system.uptime,
      cpuCores: system.cpu_cores,
      cpuPercent: system.cpu_percent,
      memoryTotalMB: system.memory_total_mb,
      memoryUsedMB: system.memory_used_mb,
      memoryPercent: system.memory_percent,
      diskTotalGB: system.disk_total_gb,
      diskUsedGB: system.disk_used_gb,
      diskPercent: system.disk_percent,
      containerCount,
    },
  });



  try {
    getRealtimeManager().broadcastSnapshot(serverId, snapshot);
  } catch (err) {
    console.warn("Realtime WS not ready yet, skipping broadcast");
  }

  // HIGH CPU
  if (system.cpu_percent > 10) {
    await createEvent({
      serverId,
      type: "HIGH_CPU",
      severity: "warning",
      message: `CPU usage is ${system.cpu_percent.toFixed(2)}%`,
    });
  }

  // HIGH MEMORY
  if (system.memory_percent > 50) {
    await createEvent({
      serverId,
      type: "HIGH_MEMORY",
      severity: "warning",
      message: `Memory usaged is ${system.memory_percent.toFixed(2)}%`,
    });
  }

  if (system.disk_used_gb > 50) {
    await createEvent({
      serverId,
      type: "disk_full",
      severity: "warning",
      message: `disk usages is ${system.disk_used_gb.toFixed(2)}%`,
    });
  }


  return snapshot;
}
