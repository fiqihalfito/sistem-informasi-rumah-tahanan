import { initTRPC } from "@trpc/server";
import { ZodError } from "zod";

const t = initTRPC.create({});
export const middleware = t.middleware;
export const router = t.router;
export const publicProcedure = t.procedure;
