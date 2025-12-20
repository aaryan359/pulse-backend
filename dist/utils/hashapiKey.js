"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hashApiKey = hashApiKey;
const crypto_1 = require("crypto");
function hashApiKey(key) {
    return (0, crypto_1.createHash)("sha256").update(key).digest("hex");
}
//# sourceMappingURL=hashapiKey.js.map