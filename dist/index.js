"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const ApiResponse_1 = __importDefault(require("./utils/ApiResponse"));
const user_routes_1 = __importDefault(require("./routes/user.routes"));
const db_config_1 = require("./config/db.config");
const app = (0, express_1.default)();
app.use(express_1.default.json({ limit: "10kb" }));
app.use(express_1.default.urlencoded({ extended: true, limit: "10kb" }));
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)({
    origin: process.env.ALLOWED_ORIGINS
        ? process.env.ALLOWED_ORIGINS.split(",")
        : "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}));
const limiter = (0, express_rate_limit_1.default)({
    windowMs: 15 * 60 * 1000,
    max: 100,
    standardHeaders: true,
    legacyHeaders: false,
});
app.use(limiter);
app.get("/health", (_req, res) => {
    res.status(200).json({
        status: "healthy",
        timestamp: new Date().toISOString(),
    });
});
(0, db_config_1.db)();
app.use("/api/v1/users", user_routes_1.default);
app.use((_req, res) => {
    res.status(404).json({
        success: false,
        message: "Endpoint not found",
    });
});
app.use((err, _req, res, _next) => {
    console.error(err);
    return ApiResponse_1.default.error(res, {
        message: err.message || "Internal Server Error",
        statusCode: err.statusCode || 500,
    });
});
const PORT = Number(process.env.PORT) || 3000;
app.listen(PORT, () => {
    console.log(` Server running on port ${PORT}`);
});
//# sourceMappingURL=index.js.map