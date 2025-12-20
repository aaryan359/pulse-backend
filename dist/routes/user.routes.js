"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const asyncHandler_1 = require("../utils/asyncHandler");
const user_controller_1 = require("../controllers/user.controller");
const userRouter = (0, express_1.Router)();
userRouter.post("/register", (0, asyncHandler_1.asyncHandler)(user_controller_1.registerUser));
userRouter.post("/login", (0, asyncHandler_1.asyncHandler)(user_controller_1.loginUser));
exports.default = userRouter;
//# sourceMappingURL=user.routes.js.map