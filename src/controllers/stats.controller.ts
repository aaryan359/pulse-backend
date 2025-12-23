import { Request, Response } from "express";
import { prisma } from "../config/db.config";
import ApiResponse from "../utils/ApiResponse";

/**
 * GET /api/v1/servers
 * Returns all servers for the current logged-in user
 */
export const getUserServers = async (req: Request, res: Response) => {

  const user = req.user;

  if (!user) {
    return ApiResponse.error(res, {
      message: "Unauthorized",
      statusCode: 401,
    });
  }

  const servers = await prisma.server.findMany({
    where: {
      userId: user.id,
    },
    orderBy: {
      created_at: "desc",
    },
    select: {
      id: true,
      uuid: true,
      name: true,
      hostname: true,
      environment: true,
      os: true,
      arch: true,
      agentVersion: true,
      lastSeenAt: true,
      created_at: true,
      updated_at: true,
    },
  });


  console.log(" get server ", servers);

  /**
   * Derive server status
   * Example logic:
   * - online if lastSeenAt < 2 minutes
   * - offline otherwise
   */
  const now = Date.now();
  const ONLINE_THRESHOLD_MS = 2 * 60 * 1000;

  const formattedServers = servers.map((server) => {
    const isOnline =
      server.lastSeenAt &&
      now - new Date(server.lastSeenAt).getTime() < ONLINE_THRESHOLD_MS;

    return {
      id: server.id,
      uuid: server.uuid,
      name: server.name,
      hostname: server.hostname,
      environment: server.environment,
      os: server.os,
      arch: server.arch,
      agentVersion: server.agentVersion,
      lastSeenAt: server.lastSeenAt,
      status: isOnline ? "online" : "offline",
      createdAt: server.created_at,
      updatedAt: server.updated_at,
    };
  });


  return ApiResponse.success(res, {
    data: formattedServers,
    message: "Servers fetched successfully",
  });


};






export const getServerOverview = async (req: Request, res: Response) => {

  const user = req.user;
  const serverId = Number(req.params.serverId);

  if (!user || isNaN(serverId)) {
    return ApiResponse.error(res, {
      message: "Invalid request",
      statusCode: 400,
    });
  }

  const server = await prisma.server.findFirst({
    where: {
      id: serverId,
      userId: user.id,
    },
    select: {
      id: true,
      uuid: true,
      name: true,
      hostname: true,
      environment: true,
      os: true,
      arch: true,
      agentVersion: true,
      lastSeenAt: true,

      snapshots: {
        select: {
          uptimeSeconds: true,
          cpuCores: true,
          cpuPercent: true,
          memoryTotalMB: true,
          memoryUsedMB: true,
          memoryPercent: true,
          diskTotalGB: true,
          diskUsedGB: true,
          diskPercent: true,
          containerCount: true,
          updated_at: true,
        },
      },
    },
  });


  if (!server) {
    return ApiResponse.error(res, {
      message: "Server not found",
      statusCode: 404,
    });
  }

  return ApiResponse.success(res, {
    data: server,
  });

};


export const getServerContainers = async (req: Request, res: Response) => {
  try {
    const user = req.user;
    const serverId = Number(req.params.serverId);

    if (!user || isNaN(serverId)) {
      return ApiResponse.error(res, {
        message: "Invalid request",
        statusCode: 400,
      });
    }

    const containers = await prisma.container.findMany({
      where: {
        serverId,
        server: {
          userId: user.id,
        },
      },
      select: {
        id: true,
        containerId: true,
        name: true,
        image: true,
        createdAt: true,
        state: true,
        status: true,
        cpuPercent: true,
        memoryUsageMB: true,
        memoryLimitMB: true,
        networkRxMB: true,
        networkTxMB: true,
        lastSeenAt: true,
      },
      orderBy: {
        lastSeenAt: "desc",
      },
    });

    return ApiResponse.success(res, {
      data: containers,
    });
  } catch (error) {
    console.error("Containers fetch error:", error);
    return ApiResponse.error(res);
  }
};




export const getServerMetrics = async (req: Request, res: Response) => {

  const user = req.user;
  const serverId = Number(req.params.serverId);
  const interval = (req.query.interval as string) || "1h";

  console.log(" metric contoeler ", serverId, interval);

  if (!user || isNaN(serverId)) {
    return ApiResponse.error(res, {
      message: "Invalid request",
      statusCode: 400,
    });
  }

  const metrics = await prisma.serverMetric.findMany({
    where: {
      serverId,
      server: {
        userId: user.id,
      },
    },
    orderBy: {
      fromTime: "asc",
    },
  });

  return ApiResponse.success(res, {
    data: metrics,
  });

};




export const getDashboardStats = async (req: Request, res: Response) => {

  const user = req.user;

  if (!user) {
    return ApiResponse.error(res, {
      message: "Unauthorized",
      statusCode: 401,
    });
  }

  const now = Date.now();
  const ONLINE_THRESHOLD_MS = 2 * 60 * 1000;

  /* ---------------- Servers ---------------- */
  const servers = await prisma.server.findMany({
      where: { userId: user.id },
      select: {
            id: true,
            lastSeenAt: true,
            snapshots: {
              select: {
                cpuPercent: true,
                memoryPercent: true,
              },
            },
      },
  });

  let onlineServers = 0;
  let offlineServers = 0;

  let cpuSum = 0;
  let memorySum = 0;
  let cpuCount = 0;
  let memoryCount = 0;

  for (const server of servers) {
    const isOnline = server.lastSeenAt && now - new Date(server.lastSeenAt).getTime() < ONLINE_THRESHOLD_MS;

    if (isOnline) {
      onlineServers++;

      const snapshot = server.snapshots[0];
      if (snapshot) {
        cpuSum += snapshot.cpuPercent;
        memorySum += snapshot.memoryPercent;
        cpuCount++;
        memoryCount++;
      }
    } else {
      offlineServers++;
    }
  }

  const avgCpuPercent = cpuCount > 0 ? Math.round(cpuSum / cpuCount) : 0;

  const avgMemoryPercent = memoryCount > 0 ? Math.round(memorySum / memoryCount) : 0;

  /* ---------------- Containers ---------------- */
  const runningContainers = await prisma.container.count({
    where: {
      server: { userId: user.id },
      state: "running",
    },
  });

  /* ---------------- Events ---------------- */
  const criticalEvents = await prisma.event.count({
    where: {
      server: { userId: user.id },
      severity: "critical",
    },
  });

  return ApiResponse.success(res, {
    data: {
      totalServers: servers.length,
      onlineServers,
      offlineServers,
      runningContainers,
      criticalEvents,
      avgCpuPercent,
      avgMemoryPercent,
    },
    message: "Dashboard stats fetched",
  });
};



// controllers/stats.controller.ts
export const getContainerDetails = async (req: Request, res: Response) => {

    const user = req.user;
    const containerId = Number(req.params.containerId);

    if (!user || isNaN(containerId)) {
      return ApiResponse.error(res, {
        message: "Invalid request",
        statusCode: 400,
      });
    }

    const container = await prisma.container.findFirst({
      where: {
        id: containerId,
        server: {
          userId: user.id,
        },
      },
      select: {
        id: true,
        containerId: true,
        name: true,
        image: true,
        state: true,
        status: true,
        cpuPercent: true,
        memoryUsageMB: true,
        memoryLimitMB: true,
        networkRxMB: true,
        networkTxMB: true,
        createdAt: true,
        lastSeenAt: true,
        server: {
          select: {
            hostname: true,
            environment: true,
          },
        },
        containermetrics: {
          orderBy: { timestamp: "desc" },
          take: 20,
          select: {
            cpuPercent: true,
            memoryUsageMB: true,
            networkRxMB: true,
            networkTxMB: true,
            timestamp: true,
          },
        },
      },
    });

    if (!container) {
      return ApiResponse.error(res, {
        message: "Container not found",
        statusCode: 404,
      });
    }

    return ApiResponse.success(res, {
      data: container,
    });
   
};
