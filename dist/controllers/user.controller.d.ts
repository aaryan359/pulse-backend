import "dotenv/config";
import { Response, Request } from "express";
import { Register } from "../types/Register.types";
import { Login } from "../types/Login.types";
export declare const registerUser: (req: Request<{}, {}, Register>, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const loginUser: (req: Request<{}, {}, Login>, res: Response) => Promise<Response<any, Record<string, any>>>;
//# sourceMappingURL=user.controller.d.ts.map