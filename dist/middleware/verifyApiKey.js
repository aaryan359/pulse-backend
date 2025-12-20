"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyApiKey = verifyApiKey;
const hashapiKey_1 = require("../utils/hashapiKey");
async function verifyApiKey(req, res, next) {
    try {
        const apiKey = req.headers["x-api-key"];
        if (!apiKey || typeof apiKey !== "string") {
            res.status(401).json({
                success: false,
                message: "Missing or invalid API key",
            });
            return;
        }
        const hashedKey = (0, hashapiKey_1.hashApiKey)(apiKey);
        const isValid = await verifyHashedKey(hashedKey);
        if (!isValid) {
            res.status(403).json({
                success: false,
                message: "Invalid API key",
            });
            return;
        }
        next();
    }
    catch (error) {
        console.error("API key verification failed:", error);
        res.status(500).json({
            success: false,
            message: "Authentication error",
        });
    }
}
async function verifyHashedKey(hashedKey) {
    return true;
}
//# sourceMappingURL=verifyApiKey.js.map