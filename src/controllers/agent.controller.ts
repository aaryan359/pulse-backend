import { Request, Response } from "express";
import ApiResponse from "../utils/ApiResponse";
import { prisma } from "../config/db.config";
import { resolveServer } from "../services/server.service";
import { updateSnapshot } from "../services/snapshot.service";
import { upsertContainers } from "../services/container.service";
import { storeContainerMetrics2m } from "../services/containerMetric.service";
import { storeAggregatedMetric } from "../services/metric.service";





export const registerAgent = async (req: Request, res: Response) => {
        const apiKey = (req as any).apiKey;
        const user = req.user!;

        const { hostname, os, arch, environment } = req.body;

        if (!hostname || !environment) {
                return ApiResponse.error(res, {
                        message: "hostname and environment are required",
                        statusCode: 400,
                });
        }


        // Try to find existing server for this machine + apiKey
        const existingServer = await prisma.server.findFirst({
                where: {
                        hostname,
                        environment,
                        userId: user.id,
                        apiKeyId: apiKey.id,
                },
        });


        //f exists → return same UUID (IDEMPOTENT)
        if (existingServer) {
                return ApiResponse.success(res, {
                        data: { server_uuid: existingServer.uuid },
                        message: "Agent already registered",
                });
        }


        //Otherwise create new server
        const server = await prisma.server.create({
                data: {
                        uuid: crypto.randomUUID(),
                        name: hostname,
                        hostname,
                        os,
                        arch,
                        environment,
                        userId: user.id,
                        apiKeyId: apiKey.id,
                },
        });

        return ApiResponse.success(res, {
                data: {
                        server_uuid: server.uuid
                },
                message: "Agent registered successfully",
        });
};







export const ingestMetrics = async (req: Request, res: Response) => {

        const apiKey = (req as any).apiKey;
        const user = req.user!;


        const { server_id, timestamp, system, containers, container_count } = req.body;


        if (!server_id || !system) {
                return ApiResponse.error(res, {
                        message: "Invalid payload",
                        statusCode: 400,
                });
        }

        const server = await resolveServer({
                serverUUID: server_id,
                apiKeyId: apiKey.id,
                userId: user.id,
        });


        console.log(" server from database", server);


        if (!server) {
                return ApiResponse.error(res, {
                        message: "server_not_registered",
                        statusCode: 409,
                });
        }

        const now = new Date(timestamp ?? Date.now());


        // update the data every second 
        await updateSnapshot(server.id, system, container_count, now);

        await upsertContainers(server.id, containers, now);


        // SLOW PATH (2-minute metrics) string data every 2 minutes
        await storeAggregatedMetric(server.id, {
                cpuPercent: system.cpu_percent,
                memoryPercent: system.memory_percent,
                diskPercent: system.disk_percent,
        }, now);

        await storeContainerMetrics2m(server.id, now);

        return ApiResponse.success(res, {
                message: "Metrics ingested",
        });
};






export const getServerEvents = async (req: Request, res: Response) => {

        const user = req.user!;
        const { serverId } = req.params;


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

        const events = await prisma.event.findMany({
                where: {
                        serverId: server.id
                },
                orderBy: {
                        created_at: "desc"
                },
                take: 100,
        });

        return ApiResponse.success(res, {
                data: events,
        });
};
