import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models';
export type * from './prismaNamespace';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: import("@prisma/client/runtime/client").DbNullClass;
export declare const JsonNull: import("@prisma/client/runtime/client").JsonNullClass;
export declare const AnyNull: import("@prisma/client/runtime/client").AnyNullClass;
export declare const ModelName: {
    readonly User: "User";
    readonly ApiKey: "ApiKey";
    readonly Server: "Server";
    readonly ServerSnapshot: "ServerSnapshot";
    readonly ServerMetric: "ServerMetric";
    readonly Container: "Container";
    readonly Event: "Event";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly email: "email";
    readonly password: "password";
    readonly profilePicture: "profilePicture";
    readonly subscribed: "subscribed";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const ApiKeyScalarFieldEnum: {
    readonly id: "id";
    readonly key: "key";
    readonly name: "name";
    readonly revoked: "revoked";
    readonly userId: "userId";
    readonly lastUsedAt: "lastUsedAt";
    readonly created_at: "created_at";
};
export type ApiKeyScalarFieldEnum = (typeof ApiKeyScalarFieldEnum)[keyof typeof ApiKeyScalarFieldEnum];
export declare const ServerScalarFieldEnum: {
    readonly id: "id";
    readonly uuid: "uuid";
    readonly name: "name";
    readonly environment: "environment";
    readonly hostname: "hostname";
    readonly os: "os";
    readonly arch: "arch";
    readonly userId: "userId";
    readonly apiKeyId: "apiKeyId";
    readonly lastSeenAt: "lastSeenAt";
    readonly agentVersion: "agentVersion";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type ServerScalarFieldEnum = (typeof ServerScalarFieldEnum)[keyof typeof ServerScalarFieldEnum];
export declare const ServerSnapshotScalarFieldEnum: {
    readonly id: "id";
    readonly serverId: "serverId";
    readonly cpuPercent: "cpuPercent";
    readonly memoryPercent: "memoryPercent";
    readonly diskPercent: "diskPercent";
    readonly containerCount: "containerCount";
    readonly updated_at: "updated_at";
};
export type ServerSnapshotScalarFieldEnum = (typeof ServerSnapshotScalarFieldEnum)[keyof typeof ServerSnapshotScalarFieldEnum];
export declare const ServerMetricScalarFieldEnum: {
    readonly id: "id";
    readonly serverId: "serverId";
    readonly interval: "interval";
    readonly cpuAvg: "cpuAvg";
    readonly memoryAvg: "memoryAvg";
    readonly diskAvg: "diskAvg";
    readonly fromTime: "fromTime";
    readonly toTime: "toTime";
    readonly created_at: "created_at";
};
export type ServerMetricScalarFieldEnum = (typeof ServerMetricScalarFieldEnum)[keyof typeof ServerMetricScalarFieldEnum];
export declare const ContainerScalarFieldEnum: {
    readonly id: "id";
    readonly containerId: "containerId";
    readonly name: "name";
    readonly image: "image";
    readonly serverId: "serverId";
    readonly lastState: "lastState";
    readonly lastStatus: "lastStatus";
    readonly lastSeenAt: "lastSeenAt";
};
export type ContainerScalarFieldEnum = (typeof ContainerScalarFieldEnum)[keyof typeof ContainerScalarFieldEnum];
export declare const EventScalarFieldEnum: {
    readonly id: "id";
    readonly type: "type";
    readonly severity: "severity";
    readonly message: "message";
    readonly serverId: "serverId";
    readonly created_at: "created_at";
};
export type EventScalarFieldEnum = (typeof EventScalarFieldEnum)[keyof typeof EventScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
//# sourceMappingURL=prismaNamespaceBrowser.d.ts.map