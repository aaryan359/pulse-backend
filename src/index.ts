import "dotenv/config";
import express, {
  Application,
  Request,
  Response,
  NextFunction,
} from "express";
import helmet from "helmet";
import cors from "cors";
import rateLimit from "express-rate-limit";
import http from "http";

import ApiResponse from "./utils/ApiResponse";
import userRouter from "./routes/user.routes";
import apiRoute from "./routes/apikey.routes";
import agentRoute from "./routes/agent.routes";
import statsRoute from "./routes/stats.route";


import eventRoute from "./routes/event.routes";

import terminalRoutes from "./routes/terminal.routes";
import { initWS } from "./ws";

const app: Application = express();



/* -------------------- Middleware -------------------- */
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));
app.use(helmet());



app.use(
  cors({
    origin: process.env.ALLOWED_ORIGINS
      ? process.env.ALLOWED_ORIGINS.split(",")
      : "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);



app.use(
  "/api/v1/auth",
  rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 20,
  })
);


app.use(
  "/api/v1/stats",
  rateLimit({
    windowMs: 60 * 1000,
    max: 10000,
  })
);

/* ---------- AGENT ---------- */
app.use(
  "/api/v1/agent",
  rateLimit({
    windowMs: 60 * 1000,
    max: 5000,
    keyGenerator: (req) => req.headers["x-api-key"] as string,
  })
);


/* -------------------- Health -------------------- */
app.get("/health", (_req: Request, res: Response) => {
  res.status(200).json({
    status: "healthy",
    timestamp: new Date().toISOString(),
  });
});


/* -------------------- Routes -------------------- */
app.use("/api/v1/users", userRouter);
app.use("/api/v1/apikey", apiRoute);
app.use("/api/v1/agent", agentRoute);
app.use("/api/v1/stats", statsRoute);
app.use("/api/v1/events", eventRoute);
app.use("/api/v1/terminal", terminalRoutes);

/* -------------------- 404 -------------------- */
app.use((_req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: "Endpoint not found",
  });
});

/* -------------------- Error Handler -------------------- */
app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  console.error(err);
  return ApiResponse.error(res, {
    message: err.message || "Internal Server Error",
    statusCode: err.statusCode || 500,
  });
});

/* -------------------- Server + WS -------------------- */
const PORT = Number(process.env.PORT) || 3000;

const httpServer = http.createServer(app);

//INIT WEBSOCKET HERE
export const realtimeWS = initWS(httpServer);


httpServer.listen(PORT, () => {
  console.log(` HTTP + WS server running on port ${PORT}`);
});
