import { prisma } from "../config/db.config";

/**
 * Create an event safely
 */
export async function createEvent(params: {
  serverId: number;
  type: string;
  severity: "info" | "warning" | "critical";
  message: string;
}) {
  const { serverId, type, severity, message } = params;

  await prisma.event.create({
    data: {
      serverId,
      type,
      severity,
      message,
    },
  });
}
