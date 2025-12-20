import { randomBytes, createHash } from "crypto";


export type ApiKeyResult = {
  plainKey: string;   // show this ONCE to user
  hashedKey: string;  // store this in DB
};



export function generateApiKey(prefix = "sk_live"): ApiKeyResult {
        
    const buffer = randomBytes(32);

    const key = buffer
        .toString("base64")
        .replace(/\+/g, "-")
        .replace(/\//g, "_")
        .replace(/=/g, "");

    const plainKey = `${prefix}_${key}`;

    // Hash before storing (NEVER store raw key)
    const hashedKey = createHash("sha256")
        .update(plainKey)
        .digest("hex");

  return { plainKey, hashedKey };
}
