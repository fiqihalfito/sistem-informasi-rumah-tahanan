import { publicProcedure, router } from "./trpc";
import { z } from "zod";
import { db } from "@/db/connect";
import { penahanan, tahanan } from "@/db/schema";

export const appRouter = router({
    getTahanan: publicProcedure.query(async ({ input }) => {
        const tahanans = await db.select().from(tahanan);
        const penahanans = await db.select().from(penahanan);

        return {
            tahanans,
            penahanans,
        };
    }),
    getExample: publicProcedure.query(async ({ input }) => {
        return "hoi";
    }),
});

export type AppRouter = typeof appRouter;
