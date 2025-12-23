import { Router } from "express";
import { authMiddleware } from "../middleware/auth.middleware";
import { getContainerDetails, getDashboardStats, getServerContainers, getServerMetrics, getServerOverview, getUserServers } from "../controllers/stats.controller";


const statsRoute:Router = Router();

statsRoute.get("/servers", authMiddleware, getUserServers);
statsRoute.get("/servers/:serverId/overview", authMiddleware, getServerOverview);
statsRoute.get("/servers/:serverId/containers", authMiddleware, getServerContainers);
statsRoute.get("/servers/:serverId/metrics", authMiddleware, getServerMetrics);
statsRoute.get("/overview", authMiddleware, getDashboardStats);
statsRoute.get("/containers/:containerId",  authMiddleware, getContainerDetails);

export default statsRoute;