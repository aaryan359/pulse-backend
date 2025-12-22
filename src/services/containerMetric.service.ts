import { prisma } from "../config/db.config";
import { get2MinuteBucket } from "../utils/timeBucket";


export async function storeContainerMetrics2m(
  serverId: number,
  now: Date
) {
  const bucket = get2MinuteBucket(now);

  const containers = await prisma.container.findMany({
    where: { serverId },
  });

  for (const c of containers) {
    // Avoid duplicate writes
    const exists = await prisma.containerMetric.findFirst({
      where: {
        containerId: c.id,
        timestamp: bucket,
      },
    });

    if (exists) continue;

    await prisma.containerMetric.create({
      data: {
        containerId: c.id,
        cpuPercent: c.cpuPercent ?? 0,
        memoryUsageMB: c.memoryUsageMB ?? 0,
        networkRxMB: c.networkRxMB,
        networkTxMB: c.networkTxMB,
        timestamp: bucket,
      },
    });
  }
}