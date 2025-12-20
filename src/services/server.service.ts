import { prisma } from "../config/db.config";

export async function resolveServer({
  serverUUID,
  apiKeyId,
  userId,
}: {
  serverUUID: string;
  apiKeyId: number;
  userId: number;
}) {
  return prisma.server.findFirst({
    where: {
      uuid: serverUUID,
      apiKeyId,
      userId,
    },
  });
}
