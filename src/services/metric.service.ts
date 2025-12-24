import { prisma } from "../config/db.config";
import { get2MinuteBucket } from "../utils/timeBucket";


export async function storeAggregatedMetric(
      serverId: number,
      snapshot: {
            cpuPercent: number;
            memoryPercent: number;
            diskPercent: number;
         },
      now: Date ) 
{


  
  const bucketStart = get2MinuteBucket(now);
  const bucketEnd = new Date(bucketStart.getTime() + 2 * 60 * 1000);

  const exists = await prisma.serverMetric.findFirst({
      where: {
        serverId,
        interval: "2m",
        fromTime: bucketStart,
      },
    });

  if (exists) return;


  
  await prisma.serverMetric.create({
    data: {
      serverId,
      interval: "2m",
      cpuAvg: snapshot.cpuPercent,
      memoryAvg: snapshot.memoryPercent,
      diskAvg: snapshot.diskPercent,
      fromTime: bucketStart,
      toTime: bucketEnd,
    },
  });
}
