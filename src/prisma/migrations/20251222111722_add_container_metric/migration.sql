-- CreateTable
CREATE TABLE "container_metrics" (
    "id" SERIAL NOT NULL,
    "containerId" INTEGER NOT NULL,
    "cpuPercent" DOUBLE PRECISION NOT NULL,
    "memoryUsageMB" INTEGER NOT NULL,
    "networkRxMB" DOUBLE PRECISION,
    "networkTxMB" DOUBLE PRECISION,
    "timestamp" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "container_metrics_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "container_metrics_containerId_timestamp_idx" ON "container_metrics"("containerId", "timestamp");

-- AddForeignKey
ALTER TABLE "container_metrics" ADD CONSTRAINT "container_metrics_containerId_fkey" FOREIGN KEY ("containerId") REFERENCES "containers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
