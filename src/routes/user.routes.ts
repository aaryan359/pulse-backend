import { Router } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import { loginUser, registerUser } from "../controllers/user.controller";

const userRouter: Router = Router();


userRouter.post("/register", asyncHandler(registerUser));
userRouter.post("/login", asyncHandler(loginUser));




export default userRouter;
