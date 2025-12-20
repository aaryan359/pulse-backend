-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "email" TEXT NOT NULL,
    "password" TEXT,
    "profilePicture" TEXT,
    "subscribed" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "api_keys" (
    "id" SERIAL NOT NULL,
    "key" TEXT NOT NULL,
    "name" TEXT,
    "revoked" BOOLEAN NOT NULL DEFAULT false,
    "userId" INTEGER NOT NULL,
    "lastUsedAt" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "api_keys_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "servers" (
    "id" SERIAL NOT NULL,
    "uuid" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "environment" TEXT NOT NULL,
    "hostname" TEXT NOT NULL,
    "os" TEXT,
    "arch" TEXT,
    "userId" INTEGER NOT NULL,
    "apiKeyId" INTEGER NOT NULL,
    "lastSeenAt" TIMESTAMP(3),
    "agentVersion" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "servers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "server_snapshots" (
    "id" SERIAL NOT NULL,
    "serverId" INTEGER NOT NULL,
    "cpuPercent" DOUBLE PRECISION NOT NULL,
    "memoryPercent" DOUBLE PRECISION NOT NULL,
    "diskPercent" DOUBLE PRECISION NOT NULL,
    "containerCount" INTEGER NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "server_snapshots_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "server_metrics" (
    "id" SERIAL NOT NULL,
    "serverId" INTEGER NOT NULL,
    "interval" TEXT NOT NULL,
    "cpuAvg" DOUBLE PRECISION NOT NULL,
    "memoryAvg" DOUBLE PRECISION NOT NULL,
    "diskAvg" DOUBLE PRECISION NOT NULL,
    "fromTime" TIMESTAMP(3) NOT NULL,
    "toTime" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "server_metrics_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "containers" (
    "id" SERIAL NOT NULL,
    "containerId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "serverId" INTEGER NOT NULL,
    "lastState" TEXT NOT NULL,
    "lastStatus" TEXT NOT NULL,
    "lastSeenAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "containers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "events" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,
    "severity" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "serverId" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "events_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "api_keys_key_key" ON "api_keys"("key");

-- CreateIndex
CREATE UNIQUE INDEX "servers_uuid_key" ON "servers"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "server_snapshots_serverId_key" ON "server_snapshots"("serverId");

-- CreateIndex
CREATE INDEX "server_metrics_serverId_interval_fromTime_idx" ON "server_metrics"("serverId", "interval", "fromTime");

-- CreateIndex
CREATE UNIQUE INDEX "containers_serverId_containerId_key" ON "containers"("serverId", "containerId");

-- CreateIndex
CREATE INDEX "events_serverId_created_at_idx" ON "events"("serverId", "created_at");

-- AddForeignKey
ALTER TABLE "api_keys" ADD CONSTRAINT "api_keys_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "servers" ADD CONSTRAINT "servers_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "servers" ADD CONSTRAINT "servers_apiKeyId_fkey" FOREIGN KEY ("apiKeyId") REFERENCES "api_keys"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "server_snapshots" ADD CONSTRAINT "server_snapshots_serverId_fkey" FOREIGN KEY ("serverId") REFERENCES "servers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "server_metrics" ADD CONSTRAINT "server_metrics_serverId_fkey" FOREIGN KEY ("serverId") REFERENCES "servers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "containers" ADD CONSTRAINT "containers_serverId_fkey" FOREIGN KEY ("serverId") REFERENCES "servers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "events" ADD CONSTRAINT "events_serverId_fkey" FOREIGN KEY ("serverId") REFERENCES "servers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
