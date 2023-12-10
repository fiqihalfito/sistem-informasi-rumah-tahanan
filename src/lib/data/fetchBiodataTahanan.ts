import { db } from "@/db/connect";
import { tahanan } from "@/db/schema";
import { eq } from "drizzle-orm";
import { wait } from "../utils";

export async function fetchBiodataTahanan(id: number) {
    // await wait(3000);
    return await db.query.tahanan.findFirst({
        where: eq(tahanan.id, id),
    });
}
