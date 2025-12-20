"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const db_config_1 = require("./config/db.config");
async function bootstrap() {
    console.log("Hello World!");
    console.log("NODE_ENV:", process.env.NODE_ENV);
    await (0, db_config_1.db)();
    console.log("App is ready");
}
bootstrap();
//# sourceMappingURL=app.js.map