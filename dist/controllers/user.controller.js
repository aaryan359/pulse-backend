"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = exports.registerUser = void 0;
require("dotenv/config");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const db_config_1 = require("../config/db.config");
const ApiResponse_1 = __importDefault(require("../utils/ApiResponse"));
const registerUser = async (req, res) => {
    const { email, name, password } = req.body;
    if (!email) {
        return ApiResponse_1.default.error(res, {
            message: "Email is required",
            statusCode: 400,
        });
    }
    if (!password) {
        return ApiResponse_1.default.error(res, {
            message: "Password is required",
            statusCode: 400,
        });
    }
    if (!name) {
        return ApiResponse_1.default.error(res, {
            message: "name is required",
            statusCode: 400,
        });
    }
    const existingUser = await db_config_1.prisma.user.findUnique({
        where: { email },
    });
    if (existingUser) {
        return ApiResponse_1.default.error(res, {
            message: "User already exists",
            statusCode: 400,
        });
    }
    let hashedPassword = null;
    if (password) {
        hashedPassword = await bcrypt_1.default.hash(password, 10);
    }
    const user = await db_config_1.prisma.user.create({
        data: {
            email,
            name,
            password: hashedPassword,
        },
    });
    let token = null;
    token = jsonwebtoken_1.default.sign({ userId: user.id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRY,
    });
    return ApiResponse_1.default.success(res, {
        message: "User registered successfully",
        data: { user, token },
        statusCode: 201,
    });
};
exports.registerUser = registerUser;
const loginUser = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return ApiResponse_1.default.error(res, {
            message: "Email and password are required",
            statusCode: 400,
        });
    }
    const user = await db_config_1.prisma.user.findUnique({
        where: { email },
    });
    if (!user || !user.password) {
        return ApiResponse_1.default.error(res, {
            message: "Invalid email or password",
            statusCode: 401,
        });
    }
    const isPasswordValid = await bcrypt_1.default.compare(password, user.password);
    if (!isPasswordValid) {
        return ApiResponse_1.default.error(res, {
            message: "Invalid email or password",
            statusCode: 401,
        });
    }
    const token = jsonwebtoken_1.default.sign({ userId: user.id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRY,
    });
    return ApiResponse_1.default.success(res, {
        message: "Login successful",
        data: {
            user,
            token,
        },
        statusCode: 200,
    });
};
exports.loginUser = loginUser;
//# sourceMappingURL=user.controller.js.map