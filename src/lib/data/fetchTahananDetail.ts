import { db } from "@/db/connect";
import { tahanan } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function fetchTahananDetail(id: number) {
    return await db.query.tahanan.findFirst({
        with: {
            penahanan: true,
        },
        where: eq(tahanan.id, id),
    });
}
