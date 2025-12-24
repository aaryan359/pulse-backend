// terminal.controller.ts
import crypto from "crypto";
import ApiResponse from "../utils/ApiResponse";
import { prisma } from "../config/db.config";
import { terminalSessions } from "../utils/terminalSessions";
import { Request, Response } from "express";

export const createTerminalSession = async (req: Request, res: Response) => {

    const user = req.user!;
     console.log(" created terminal uuid",req.body ," and server id" , req.body.serverId);
    const { serverId } = req.body;

    const server = await prisma.server.findFirst({
        where: {
            id: Number(serverId),
            userId: user.id,
        },
    });

    if (!server) {
        return ApiResponse.error(res, {
            message: "Server not found",
            statusCode: 404,
        });
    }

    const sessionId = crypto.randomUUID();

    terminalSessions.set(sessionId, {
        sessionId,
        userId: user.id,
        serverId: server.id,
        createdAt: Date.now(),
    });
    
     console.log(" created terminal uuid",terminalSessions);
    return ApiResponse.success(res, {
        data: {
            session_id: sessionId,
            ws_url: `/ws/terminal?session=${sessionId}`,
        },
    });
};
