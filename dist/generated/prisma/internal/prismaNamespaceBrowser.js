"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.NullsOrder = exports.QueryMode = exports.SortOrder = exports.EventScalarFieldEnum = exports.ContainerScalarFieldEnum = exports.ServerMetricScalarFieldEnum = exports.ServerSnapshotScalarFieldEnum = exports.ServerScalarFieldEnum = exports.ApiKeyScalarFieldEnum = exports.UserScalarFieldEnum = exports.TransactionIsolationLevel = exports.ModelName = exports.AnyNull = exports.JsonNull = exports.DbNull = exports.NullTypes = exports.Decimal = void 0;
const runtime = __importStar(require("@prisma/client/runtime/index-browser"));
exports.Decimal = runtime.Decimal;
exports.NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
exports.DbNull = runtime.DbNull;
exports.JsonNull = runtime.JsonNull;
exports.AnyNull = runtime.AnyNull;
exports.ModelName = {
    User: 'User',
    ApiKey: 'ApiKey',
    Server: 'Server',
    ServerSnapshot: 'ServerSnapshot',
    ServerMetric: 'ServerMetric',
    Container: 'Container',
    Event: 'Event'
};
exports.TransactionIsolationLevel = {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
};
exports.UserScalarFieldEnum = {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    profilePicture: 'profilePicture',
    subscribed: 'subscribed',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.ApiKeyScalarFieldEnum = {
    id: 'id',
    key: 'key',
    name: 'name',
    revoked: 'revoked',
    userId: 'userId',
    lastUsedAt: 'lastUsedAt',
    created_at: 'created_at'
};
exports.ServerScalarFieldEnum = {
    id: 'id',
    uuid: 'uuid',
    name: 'name',
    environment: 'environment',
    hostname: 'hostname',
    os: 'os',
    arch: 'arch',
    userId: 'userId',
    apiKeyId: 'apiKeyId',
    lastSeenAt: 'lastSeenAt',
    agentVersion: 'agentVersion',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.ServerSnapshotScalarFieldEnum = {
    id: 'id',
    serverId: 'serverId',
    cpuPercent: 'cpuPercent',
    memoryPercent: 'memoryPercent',
    diskPercent: 'diskPercent',
    containerCount: 'containerCount',
    updated_at: 'updated_at'
};
exports.ServerMetricScalarFieldEnum = {
    id: 'id',
    serverId: 'serverId',
    interval: 'interval',
    cpuAvg: 'cpuAvg',
    memoryAvg: 'memoryAvg',
    diskAvg: 'diskAvg',
    fromTime: 'fromTime',
    toTime: 'toTime',
    created_at: 'created_at'
};
exports.ContainerScalarFieldEnum = {
    id: 'id',
    containerId: 'containerId',
    name: 'name',
    image: 'image',
    serverId: 'serverId',
    lastState: 'lastState',
    lastStatus: 'lastStatus',
    lastSeenAt: 'lastSeenAt'
};
exports.EventScalarFieldEnum = {
    id: 'id',
    type: 'type',
    severity: 'severity',
    message: 'message',
    serverId: 'serverId',
    created_at: 'created_at'
};
exports.SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
exports.QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
exports.NullsOrder = {
    first: 'first',
    last: 'last'
};
//# sourceMappingURL=prismaNamespaceBrowser.js.map