"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = void 0;
exports.db = db;
require("dotenv/config");
const adapter_pg_1 = require("@prisma/adapter-pg");
const client_1 = require("../generated/prisma/client");
const connectionString = `${process.env.DATABASE_URL}`;
const adapter = new adapter_pg_1.PrismaPg({ connectionString });
const prisma = new client_1.PrismaClient({ adapter });
exports.prisma = prisma;
async function db() {
    try {
        await prisma.$connect();
        console.log("database is working fine");
    }
    catch (err) {
        console.error(" Prisma connection failed", err);
        process.exit(1);
    }
}
//# sourceMappingURL=db.config.js.map