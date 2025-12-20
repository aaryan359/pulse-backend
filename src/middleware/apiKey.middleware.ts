import { Request, Response, NextFunction } from "express";
import ApiResponse from "../utils/ApiResponse";
import { prisma } from "../config/db.config";
import { hashApiKey } from "../utils/hashapiKey";

/**
 * API Key authentication middleware
 * Header: x-api-key
 */

export const verifyApiKey = async (   req: Request,   res: Response,   next: NextFunction ) => {

  try {

    const apiKey = req.headers["x-api-key"];


      if (!apiKey || typeof apiKey !== "string") {
          return ApiResponse.error(res, {
              message: "Missing API key",
              statusCode: 401,
          });
      }

    const hashedKey = hashApiKey(apiKey);



    const keyRecord = await prisma.apiKey.findUnique({
                where: {
                  key: hashedKey,
                },
                include: {
                  user: true,
                },
    });



    if (!keyRecord || keyRecord.revoked) {

          return ApiResponse.error(res, {
              message: "Invalid or revoked API key",
              statusCode: 403,
          });
    }

    // Update last used timestamp (non-blocking)
        prisma.apiKey.update({
            where: 
              { 
                id: keyRecord.id
              },

            data:
               {
                lastUsedAt: new Date()
               },
        }).catch(console.error);

        // Attach user + apiKey to request
        req.user = keyRecord.user;

       (req as any).apiKey = keyRecord;

    return next();

  } catch (error) {

        console.error("API key auth error:", error);

        return ApiResponse.error(res, {
            message: "API key authentication failed",
            statusCode: 500,
        });
  }
};
