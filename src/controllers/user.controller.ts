import "dotenv/config";
import { Response, Request } from "express";
import bcrypt from "bcrypt";
import jwt, { JwtPayload, SignOptions } from 'jsonwebtoken';
import { prisma } from "../config/db.config";
import ApiResponse from "../utils/ApiResponse";
import { Register } from "../types/Register.types";
import { Login } from "../types/Login.types";





export const registerUser = async (req: Request<{}, {}, Register>, res: Response) => {

    const { email, name, password } = req.body;

    if (!email) {
        return ApiResponse.error(res, {
            message: "Email is required",
            statusCode: 400,
        });
    }

    if (!password) {
        return ApiResponse.error(res, {
            message: "Password is required",
            statusCode: 400,
        });
    }

    if (!name) {
        return ApiResponse.error(res, {
            message: "name is required",
            statusCode: 400,
        });
    }




    const existingUser = await prisma.user.findUnique({
        where: { email },
    });




    if (existingUser) {

        // TODO: if user is already register then why we are saying to loggin again directly login 
        // but first chech the password that password is matching or not. if yes then genrate new jwt and then login directly 
        return ApiResponse.error(res, {
            message: "User already exists",
            statusCode: 400,
        });


    }


    let hashedPassword: string | null = null;


    if (password) {
        hashedPassword = await bcrypt.hash(password, 10);
    }


    const user = await prisma.user.create({
        data: {
            email,
            name,
            password: hashedPassword,
        },
    });




    let token: string | null = null;



    token = jwt.sign(
        { userId: user.id },

        process.env.JWT_SECRET!,

        {
            expiresIn: process.env.JWT_EXPIRY as string,
        } as jwt.SignOptions
    );




    return ApiResponse.success(res, {
        message: "User registered successfully",
        data: { user, token },
        statusCode: 201,
    });
};





export const loginUser = async (req: Request<{}, {}, Login>, res: Response) => {

    const { email, password } = req.body;

    console.log(" login api ")

    // TODO: implement data validation  vai zod or other 
    if (!email || !password) {

        return ApiResponse.error(res, {
            message: "Email and password are required",
            statusCode: 400,
        });
    }


    const user = await prisma.user.findUnique({
        where: { email },
    });


    if (!user || !user.password) {

        return ApiResponse.error(res, {
            message: "Invalid email or password",
            statusCode: 401,
        });
    }

    // Compare password
    const isPasswordValid = await bcrypt.compare(password, user.password);


    if (!isPasswordValid) {
        return ApiResponse.error(res, {
            message: "Invalid email or password",
            statusCode: 401,
        });
    }

    const token = jwt.sign(
        { userId: user.id },

        process.env.JWT_SECRET!,

        {
            expiresIn: process.env.JWT_EXPIRY as string,
        } as jwt.SignOptions
    );


    return ApiResponse.success(res, {

        message: "Login successful",
        data: {
            user,
            token,
        },

        statusCode: 200,
    });
};


export const checkAuthentic = async (req: Request, res: Response) => {

    console.log(" authenticate api")

    return ApiResponse.success(res, {

        message: "verified successfully",
        statusCode: 200,
    });

} 