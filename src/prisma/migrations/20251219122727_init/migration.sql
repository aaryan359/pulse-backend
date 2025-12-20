/*
  Warnings:

  - You are about to drop the column `lastState` on the `containers` table. All the data in the column will be lost.
  - You are about to drop the column `lastStatus` on the `containers` table. All the data in the column will be lost.
  - Added the required column `createdAt` to the `containers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `state` to the `containers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `containers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cpuCores` to the `server_snapshots` table without a default value. This is not possible if the table is not empty.
  - Added the required column `diskTotalGB` to the `server_snapshots` table without a default value. This is not possible if the table is not empty.
  - Added the required column `diskUsedGB` to the `server_snapshots` table without a default value. This is not possible if the table is not empty.
  - Added the required column `memoryTotalMB` to the `server_snapshots` table without a default value. This is not possible if the table is not empty.
  - Added the required column `memoryUsedMB` to the `server_snapshots` table without a default value. This is not possible if the table is not empty.
  - Added the required column `uptimeSeconds` to the `server_snapshots` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "containers" DROP COLUMN "lastState",
DROP COLUMN "lastStatus",
ADD COLUMN     "cpuPercent" DOUBLE PRECISION,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "memoryLimitMB" INTEGER,
ADD COLUMN     "memoryUsageMB" INTEGER,
ADD COLUMN     "networkRxMB" DOUBLE PRECISION,
ADD COLUMN     "networkTxMB" DOUBLE PRECISION,
ADD COLUMN     "state" TEXT NOT NULL,
ADD COLUMN     "status" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "server_snapshots" ADD COLUMN     "cpuCores" INTEGER NOT NULL,
ADD COLUMN     "diskTotalGB" INTEGER NOT NULL,
ADD COLUMN     "diskUsedGB" INTEGER NOT NULL,
ADD COLUMN     "memoryTotalMB" INTEGER NOT NULL,
ADD COLUMN     "memoryUsedMB" INTEGER NOT NULL,
ADD COLUMN     "uptimeSeconds" INTEGER NOT NULL;
