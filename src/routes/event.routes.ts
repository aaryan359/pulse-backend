// routes/event.routes.ts
import { Router } from "express"
import { listEvents } from "../controllers/event.controller"
import { authMiddleware } from "../middleware/auth.middleware"


const eventRoute:Router = Router()

eventRoute.get("/list", authMiddleware, listEvents);


export default eventRoute