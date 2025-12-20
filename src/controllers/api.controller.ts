import { Request, Response } from "express";
import ApiResponse from "../utils/ApiResponse";
import { prisma } from "../config/db.config";
import { generateApiKey } from "../utils/apiKey";

/**
 * Generate API Key (plain shown once, hashed stored)
 */


export const generateApikey = async (  req: Request,   res: Response ) => {


        const user = req.user;

        if (!user) {
            return ApiResponse.error(res, {
                message: "Unauthorized",
                statusCode: 401,
            });
        }

        const { name } = req.body as { name?: string };

        const { plainKey, hashedKey } = generateApiKey("pk_live");



        await prisma.apiKey.create({

                data: {
                    key: hashedKey,
                    name,
                    userId: user.id,
                },

        });


        return ApiResponse.success(res, {

                message: "API key generated. Store it securely. This will not be shown again.",

                data: {
                    apiKey: plainKey,
                },

                statusCode: 201,
        });
  
};





export const listApiKeys = async (  req: Request,  res: Response ) => {

        const user = req.user;

        if (!user) {
        return ApiResponse.error(res, {
                message: "Unauthorized",
                statusCode: 401,
        });
        }

        const apiKeys = await prisma.apiKey.findMany({
                where: {
                    userId: user.id,
                },
                select: {
                    id: true,
                    name: true,
                    revoked: true,
                    lastUsedAt: true,
                    created_at: true,
                },
                orderBy: {
                    created_at: "desc",
                },
            });


        return ApiResponse.success(res, {
                data: apiKeys,
        });

};



export const revokeApiKey = async ( req: Request,  res: Response ) => {


    const user = req.user;
    const apiKeyId = Number(req.params.id);

    if (!user) {
        return ApiResponse.error(res, {
            message: "Unauthorized",
            statusCode: 401,
        });
    }

    await prisma.apiKey.updateMany({
            where: {
                id: apiKeyId,
                userId: user.id,
            },
            data: {
                revoked: true,
            },
    });

    return ApiResponse.success(res, {
        message: "API key revoked successfully",
    });
  
};
