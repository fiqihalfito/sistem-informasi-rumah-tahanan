import { router } from "../trpc";
import { tahananRouter } from "./tahanan";

export const appRouter = router({
    tahanan: tahananRouter,
});

export type AppRouter = typeof appRouter;
