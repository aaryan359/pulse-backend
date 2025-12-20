import { prisma } from "../config/db.config";


export async function storeAggregatedMetric(serverId: number) {
    
    const snapshot = await prisma.serverSnapshot.findUnique({
        where: { serverId },
    });

    if (!snapshot) return;

  await prisma.serverMetric.create({
    data: {
      serverId,
      interval: "1m",
      cpuAvg: snapshot.cpuPercent,
      memoryAvg: snapshot.memoryPercent,
      diskAvg: snapshot.diskPercent,
      fromTime: new Date(Date.now() - 60_000),
      toTime: new Date(),
    },
  });
}
