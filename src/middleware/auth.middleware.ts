import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import ApiResponse from "../utils/ApiResponse";
import { prisma } from "../config/db.config";

interface JwtUserPayload extends JwtPayload {
  userId: number;
}

export const authMiddleware = async (  req: Request,  res: Response,  next: NextFunction ) => {

  try {


        const authHeader = req.headers.authorization;


        if (!authHeader) {
            return ApiResponse.error(res, {
                    message: "Authorization header is required",
                    statusCode: 401,
            });
        }


        const [scheme, token] = authHeader.split(" ");

        if (scheme !== "Bearer" || !token) {
            return ApiResponse.error(res, {
                    message: "Invalid authorization format. Use Bearer token",
                    statusCode: 401,
            });
        }



        if (!process.env.JWT_SECRET) {
            return ApiResponse.error(res, {
                    message: "JWT secret not configured",
                    statusCode: 500,
            });
        }

        let decoded: JwtUserPayload;

        try {

            decoded = jwt.verify(
                    token,
                    process.env.JWT_SECRET
            ) as JwtUserPayload;

        } catch (err) {

            return ApiResponse.error(res, {
                    message: "Invalid or expired token",
                    statusCode: 401,
            });
        }

        if (!decoded.userId) {
            return ApiResponse.error(res, {
                    message: "Invalid token payload",
                    statusCode: 401,
            });
        }

        const user = await prisma.user.findUnique({
                where: { id: decoded.userId },
        });

        if (!user) {
                return ApiResponse.error(res, {
                        message: "User not found",
                        statusCode: 401,
                });
        }

        req.user = user;

        return next();

  } catch (error) {

            console.error("Auth middleware error:", error);
            
            return ApiResponse.error(res, {
                message: "Internal Server Error",
                statusCode: 500,
            });
  }
};
