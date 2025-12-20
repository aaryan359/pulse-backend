"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateApiKey = generateApiKey;
const crypto_1 = require("crypto");
function generateApiKey(prefix = "sk_live") {
    const buffer = (0, crypto_1.randomBytes)(32);
    const key = buffer
        .toString("base64")
        .replace(/\+/g, "-")
        .replace(/\//g, "_")
        .replace(/=/g, "");
    const plainKey = `${prefix}_${key}`;
    const hashedKey = (0, crypto_1.createHash)("sha256")
        .update(plainKey)
        .digest("hex");
    return { plainKey, hashedKey };
}
//# sourceMappingURL=apiKey.js.map