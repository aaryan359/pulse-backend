import { Request, Response } from "express"
import ApiResponse from "../utils/ApiResponse"
import { prisma } from "../config/db.config"

export const listEvents = async (req: Request, res: Response) => {
    const user = req.user
    if (!user) {
        return ApiResponse.error(res, {
            message: "Unauthorized",
            statusCode: 401,
        })
    }

    const { severity, limit = 100 } = req.query

    const events = await prisma.event.findMany({
        where: {
            ...(severity ? { severity: String(severity) } : {}),
            server: {
                userId: user.id,
            },
        },
        include: {
            server: {
                select: {
                    name: true,
                },
            },
        },
        orderBy: {
            created_at: "desc",
        },
        take: Number(limit),
    })

    const formatted = events.map((e) => ({
        id: e.id,
        serverId: e.serverId,
        serverName: e.server.name,
        type: e.type,
        severity: e.severity,
        message: e.message,
        createdAt: e.created_at.toISOString(),
    }))

    return ApiResponse.success(res, {
        data: formatted,
    })
}
