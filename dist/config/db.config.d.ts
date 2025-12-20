import "dotenv/config";
declare const prisma: import("../generated/prisma/internal/class").PrismaClient<never, import("../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined, import("@prisma/client/runtime/client").DefaultArgs>;
export { prisma };
export declare function db(): Promise<void>;
//# sourceMappingURL=db.config.d.ts.map