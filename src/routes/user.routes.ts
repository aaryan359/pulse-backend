import { Router } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import { checkAuthentic, getCurrentUser, loginUser, registerUser } from "../controllers/user.controller";
import { authMiddleware } from "../middleware/auth.middleware";

const userRouter: Router = Router();


userRouter.post("/register", asyncHandler(registerUser));
userRouter.post("/login", asyncHandler(loginUser));

userRouter.get("/check",authMiddleware, asyncHandler(checkAuthentic));

userRouter.get("/me", authMiddleware,getCurrentUser);




export default userRouter;
