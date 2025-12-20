import { Router } from "express";
import { verifyApiKey } from "../middleware/apiKey.middleware";
import { asyncHandler } from "../utils/asyncHandler";
import { ingestMetrics, registerAgent } from "../controllers/agent.controller";


const agentRoute: Router = Router();


agentRoute.post("/register", verifyApiKey, asyncHandler(registerAgent));
agentRoute.post("/storeMetric", verifyApiKey,asyncHandler(ingestMetrics));



export default agentRoute;
