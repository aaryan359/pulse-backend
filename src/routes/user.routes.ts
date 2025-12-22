import { Router } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import { checkAuthentic, loginUser, registerUser } from "../controllers/user.controller";
import { authMiddleware } from "../middleware/auth.middleware";

const userRouter: Router = Router();


userRouter.post("/register", asyncHandler(registerUser));
userRouter.post("/login", asyncHandler(loginUser));

userRouter.get("/check",authMiddleware, asyncHandler(checkAuthentic));




export default userRouter;
