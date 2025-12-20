import * as runtime from "@prisma/client/runtime/client";
import * as $Class from "./internal/class";
import * as Prisma from "./internal/prismaNamespace";
export * as $Enums from './enums';
export * from "./enums";
export declare const PrismaClient: $Class.PrismaClientConstructor;
export type PrismaClient<LogOpts extends Prisma.LogLevel = never, OmitOpts extends Prisma.PrismaClientOptions["omit"] = Prisma.PrismaClientOptions["omit"], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = $Class.PrismaClient<LogOpts, OmitOpts, ExtArgs>;
export { Prisma };
export type User = Prisma.UserModel;
export type ApiKey = Prisma.ApiKeyModel;
export type Server = Prisma.ServerModel;
export type ServerSnapshot = Prisma.ServerSnapshotModel;
export type ServerMetric = Prisma.ServerMetricModel;
export type Container = Prisma.ContainerModel;
export type Event = Prisma.EventModel;
//# sourceMappingURL=client.d.ts.map