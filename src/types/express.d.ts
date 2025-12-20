//types/express.d.ts
import { Server, ServerSnapshot, User } from "../generated/prisma/client";

declare global {
  namespace Express {
    interface Request {
      user?: User;
      server?:Server;
      serverSnapshot?:ServerSnapshot
    }
  }
}

export {};
