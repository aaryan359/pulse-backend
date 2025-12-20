import { Router } from "express";


import { asyncHandler } from "../utils/asyncHandler";
import { generateApikey, listApiKeys, revokeApiKey } from "../controllers/api.controller";
import { authMiddleware } from "../middleware/auth.middleware";


const apiRoute: Router = Router();


apiRoute.post("/generatekey", authMiddleware, asyncHandler(generateApikey));
apiRoute.get("/getkeys", authMiddleware, asyncHandler(listApiKeys));
apiRoute.delete("/:id", authMiddleware, asyncHandler(revokeApiKey));


export default apiRoute;