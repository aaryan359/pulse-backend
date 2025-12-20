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
exports.getPrismaClientClass = getPrismaClientClass;
const runtime = __importStar(require("@prisma/client/runtime/client"));
const config = {
    "previewFeatures": [],
    "clientVersion": "7.2.0",
    "engineVersion": "0c8ef2ce45c83248ab3df073180d5eda9e8be7a3",
    "activeProvider": "postgresql",
    "inlineSchema": "generator client {\n  provider = \"prisma-client\"\n  output   = \"../generated/prisma\"\n}\n\ndatasource db {\n  provider = \"postgresql\"\n}\n\nmodel User {\n  id             Int     @id @default(autoincrement())\n  name           String?\n  email          String  @unique\n  password       String?\n  profilePicture String?\n  subscribed     Boolean @default(false)\n\n  servers Server[]\n  apiKeys ApiKey[]\n\n  created_at DateTime @default(now())\n  updated_at DateTime @updatedAt\n\n  @@map(\"users\")\n}\n\nmodel ApiKey {\n  id      Int     @id @default(autoincrement())\n  key     String  @unique\n  name    String?\n  revoked Boolean @default(false)\n\n  user   User @relation(fields: [userId], references: [id])\n  userId Int\n\n  servers Server[]\n\n  lastUsedAt DateTime?\n  created_at DateTime  @default(now())\n\n  @@map(\"api_keys\")\n}\n\nmodel Server {\n  id          Int     @id @default(autoincrement())\n  uuid        String  @unique\n  name        String\n  environment String // production, staging, dev\n  hostname    String\n  os          String?\n  arch        String?\n\n  user   User @relation(fields: [userId], references: [id])\n  userId Int\n\n  apiKey   ApiKey @relation(fields: [apiKeyId], references: [id])\n  apiKeyId Int\n\n  lastSeenAt   DateTime?\n  agentVersion String?\n\n  snapshots  ServerSnapshot[]\n  metrics    ServerMetric[]\n  containers Container[]\n  events     Event[]\n\n  created_at DateTime @default(now())\n  updated_at DateTime @updatedAt\n\n  @@map(\"servers\")\n}\n\nmodel ServerSnapshot {\n  id Int @id @default(autoincrement())\n\n  server   Server @relation(fields: [serverId], references: [id])\n  serverId Int    @unique\n\n  cpuPercent     Float\n  memoryPercent  Float\n  diskPercent    Float\n  containerCount Int\n\n  updated_at DateTime @updatedAt\n\n  @@map(\"server_snapshots\")\n}\n\nmodel ServerMetric {\n  id Int @id @default(autoincrement())\n\n  server   Server @relation(fields: [serverId], references: [id])\n  serverId Int\n\n  interval  String // \"1m\", \"5m\", \"1h\"\n  cpuAvg    Float\n  memoryAvg Float\n  diskAvg   Float\n\n  fromTime DateTime\n  toTime   DateTime\n\n  created_at DateTime @default(now())\n\n  @@index([serverId, interval, fromTime])\n  @@map(\"server_metrics\")\n}\n\nmodel Container {\n  id          Int    @id @default(autoincrement())\n  containerId String\n  name        String\n  image       String\n\n  server   Server @relation(fields: [serverId], references: [id])\n  serverId Int\n\n  lastState  String\n  lastStatus String\n  lastSeenAt DateTime\n\n  @@unique([serverId, containerId])\n  @@map(\"containers\")\n}\n\nmodel Event {\n  id       Int    @id @default(autoincrement())\n  type     String // CRASH, RESTART, HIGH_CPU\n  severity String // info, warning, critical\n  message  String\n\n  server   Server @relation(fields: [serverId], references: [id])\n  serverId Int\n\n  created_at DateTime @default(now())\n\n  @@index([serverId, created_at])\n  @@map(\"events\")\n}\n",
    "runtimeDataModel": {
        "models": {},
        "enums": {},
        "types": {}
    }
};
config.runtimeDataModel = JSON.parse("{\"models\":{\"User\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"email\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"password\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"profilePicture\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"subscribed\",\"kind\":\"scalar\",\"type\":\"Boolean\"},{\"name\":\"servers\",\"kind\":\"object\",\"type\":\"Server\",\"relationName\":\"ServerToUser\"},{\"name\":\"apiKeys\",\"kind\":\"object\",\"type\":\"ApiKey\",\"relationName\":\"ApiKeyToUser\"},{\"name\":\"created_at\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":\"users\"},\"ApiKey\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"key\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"revoked\",\"kind\":\"scalar\",\"type\":\"Boolean\"},{\"name\":\"user\",\"kind\":\"object\",\"type\":\"User\",\"relationName\":\"ApiKeyToUser\"},{\"name\":\"userId\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"servers\",\"kind\":\"object\",\"type\":\"Server\",\"relationName\":\"ApiKeyToServer\"},{\"name\":\"lastUsedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"created_at\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":\"api_keys\"},\"Server\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"uuid\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"environment\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"hostname\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"os\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"arch\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"user\",\"kind\":\"object\",\"type\":\"User\",\"relationName\":\"ServerToUser\"},{\"name\":\"userId\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"apiKey\",\"kind\":\"object\",\"type\":\"ApiKey\",\"relationName\":\"ApiKeyToServer\"},{\"name\":\"apiKeyId\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"lastSeenAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"agentVersion\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"snapshots\",\"kind\":\"object\",\"type\":\"ServerSnapshot\",\"relationName\":\"ServerToServerSnapshot\"},{\"name\":\"metrics\",\"kind\":\"object\",\"type\":\"ServerMetric\",\"relationName\":\"ServerToServerMetric\"},{\"name\":\"containers\",\"kind\":\"object\",\"type\":\"Container\",\"relationName\":\"ContainerToServer\"},{\"name\":\"events\",\"kind\":\"object\",\"type\":\"Event\",\"relationName\":\"EventToServer\"},{\"name\":\"created_at\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":\"servers\"},\"ServerSnapshot\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"server\",\"kind\":\"object\",\"type\":\"Server\",\"relationName\":\"ServerToServerSnapshot\"},{\"name\":\"serverId\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"cpuPercent\",\"kind\":\"scalar\",\"type\":\"Float\"},{\"name\":\"memoryPercent\",\"kind\":\"scalar\",\"type\":\"Float\"},{\"name\":\"diskPercent\",\"kind\":\"scalar\",\"type\":\"Float\"},{\"name\":\"containerCount\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":\"server_snapshots\"},\"ServerMetric\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"server\",\"kind\":\"object\",\"type\":\"Server\",\"relationName\":\"ServerToServerMetric\"},{\"name\":\"serverId\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"interval\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"cpuAvg\",\"kind\":\"scalar\",\"type\":\"Float\"},{\"name\":\"memoryAvg\",\"kind\":\"scalar\",\"type\":\"Float\"},{\"name\":\"diskAvg\",\"kind\":\"scalar\",\"type\":\"Float\"},{\"name\":\"fromTime\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"toTime\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"created_at\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":\"server_metrics\"},\"Container\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"containerId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"image\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"server\",\"kind\":\"object\",\"type\":\"Server\",\"relationName\":\"ContainerToServer\"},{\"name\":\"serverId\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"lastState\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"lastStatus\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"lastSeenAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":\"containers\"},\"Event\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"type\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"severity\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"message\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"server\",\"kind\":\"object\",\"type\":\"Server\",\"relationName\":\"EventToServer\"},{\"name\":\"serverId\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"created_at\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":\"events\"}},\"enums\":{},\"types\":{}}");
async function decodeBase64AsWasm(wasmBase64) {
    const { Buffer } = await Promise.resolve().then(() => __importStar(require('node:buffer')));
    const wasmArray = Buffer.from(wasmBase64, 'base64');
    return new WebAssembly.Module(wasmArray);
}
config.compilerWasm = {
    getRuntime: async () => await Promise.resolve().then(() => __importStar(require("@prisma/client/runtime/query_compiler_bg.postgresql.js"))),
    getQueryCompilerWasmModule: async () => {
        const { wasm } = await Promise.resolve().then(() => __importStar(require("@prisma/client/runtime/query_compiler_bg.postgresql.wasm-base64.js")));
        return await decodeBase64AsWasm(wasm);
    }
};
function getPrismaClientClass() {
    return runtime.getPrismaClient(config);
}
//# sourceMappingURL=class.js.map