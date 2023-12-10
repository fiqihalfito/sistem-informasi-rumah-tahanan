import { tahanan } from "@/db/schema";

export type formEditTahananProp = Omit<
    typeof tahanan.$inferSelect,
    "image" | "created_at"
>;
