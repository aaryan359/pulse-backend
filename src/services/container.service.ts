import { prisma } from "../config/db.config";
import { createEvent } from "./event.service";

export async function upsertContainers(
        serverId: number,
        containers: any[],
        now: Date
  ) {
    if (!containers?.length) return;

    for (const c of containers) {
      const existing = await prisma.container.findUnique({
        where: {
            serverId_containerId: {
                serverId,
                containerId: c.id,
           },
          },
      });

    // 🔔 Detect crash
    if (
      existing &&
      existing.state === "running" &&
      c.state === "exited"
    ) {
      await createEvent({
        serverId,
        type: "CONTAINER_CRASH",
        severity: "critical",
        message: `Container ${c.name} (${c.image}) crashed`,
      });
    }

    await prisma.container.upsert({
      where: {
        serverId_containerId: {
          serverId,
          containerId: c.id,
        },
      },
      update: {
        name: c.name,
        image: c.image,
        state: c.state,
        status: c.status,
        cpuPercent: c.cpu_percent,
        memoryUsageMB: c.memory_usage_mb,
        memoryLimitMB: c.memory_limit_mb,
        networkRxMB: c.network_rx_mb,
        networkTxMB: c.network_tx_mb,
        lastSeenAt: now,
      },
      create: {
        serverId,
        containerId: c.id,
        name: c.name,
        image: c.image,
        state: c.state,
        status: c.status,
        cpuPercent: c.cpu_percent,
        memoryUsageMB: c.memory_usage_mb,
        memoryLimitMB: c.memory_limit_mb,
        networkRxMB: c.network_rx_mb,
        networkTxMB: c.network_tx_mb,
        createdAt: new Date(c.created_at),
        lastSeenAt: now,
      },
    });
  }
}
