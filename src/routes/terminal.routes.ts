import { Router } from "express";
import { authMiddleware } from "../middleware/auth.middleware";
import { createTerminalSession } from "../controllers/terminal.controller";


const terminalRoutes:Router = Router();


terminalRoutes.post('/session',authMiddleware,createTerminalSession)


export default terminalRoutes;