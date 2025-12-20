// import { Request, Response, NextFunction } from "express";
// import ApiResponse from "../utils/ApiResponse";
// import { redis } from "../config/redis";

// /**
//  * Per-API-key rate limiter
//  * Default: 100 requests / minute / key
//  */
// export const apiKeyRateLimiter = (
//   limit = 100,
//   windowSeconds = 60
// ) => {
//   return async (req: Request, res: Response, next: NextFunction) => {
//     try {
//       const apiKey = req.headers["x-api-key"];

//       if (!apiKey || typeof apiKey !== "string") {
//         return ApiResponse.error(res, {
//           message: "Missing API key",
//           statusCode: 401,
//         });
//       }

//       const key = `rate:apikey:${apiKey}`;

//       const current = await redis.incr(key);

//       if (current === 1) {
//         await redis.expire(key, windowSeconds);
//       }

//       if (current > limit) {
//         return ApiResponse.error(res, {
//           message: "Rate limit exceeded",
//           statusCode: 429,
//         });
//       }

//       next();
//     } catch (error) {
//       console.error("Rate limit error:", error);
//       return ApiResponse.error(res, {
//         message: "Rate limiter failure",
//         statusCode: 500,
//       });
//     }
//   };
// };
