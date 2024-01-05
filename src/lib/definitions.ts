import { tahanan } from "@/db/schema";
import { tahananSchema } from "@/server/trpc/routers/tahanan";
import { z } from "zod";

export type formEditTahananProp = Omit<
    typeof tahanan.$inferSelect,
    "image" | "created_at"
>;

export type TahananFormState = {
    errors?: z.inferFlattenedErrors<typeof tahananSchema>["fieldErrors"];
    message?: string | null;
};
