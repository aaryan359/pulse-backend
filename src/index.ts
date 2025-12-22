
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
import ApiResponse from "./utils/ApiResponse";
import userRouter from "./routes/user.routes";
import apiRoute from "./routes/apikey.routes";
import agentRoute from "./routes/agent.routes";


const app: Application = express();

    console.log(" START api ")
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
)

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, 
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
});

app.use(limiter);





app.get("/health", (_req: Request, res: Response) => {
    res.status(200).json({
          status: "healthy",
          timestamp: new Date().toISOString(),
    });
})


    console.log(" TILL HERE  ")

app.use("/api/v1/users", userRouter);
app.use("/api/v1/apikey", apiRoute);
app.use("/api/v1/agent",agentRoute)




app.use((_req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: "Endpoint not found",
  });
});





app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    console.error(err);
      return ApiResponse.error(res, {
        message: err.message || "Internal Server Error",
        statusCode: err.statusCode || 500,
      });
});





const PORT = Number(process.env.PORT) || 3000;

app.listen(PORT, () => {
  console.log(` Server running on port ${PORT}`);
});