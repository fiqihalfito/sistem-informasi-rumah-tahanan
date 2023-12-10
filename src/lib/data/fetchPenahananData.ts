import { db } from "@/db/connect";
import { penahanan } from "@/db/schema";
import { eq } from "drizzle-orm";
import { wait } from "../utils";

export async function fetchPenahananData(id: number) {
    // await wait(3000);
    return await db.query.penahanan.findFirst({
        where: eq(penahanan.idTahanan, id),
    });
}
