import { db } from "@/db/connect";
import { penahanan } from "@/db/schema";
import { sql } from "drizzle-orm";
import { wait } from "../utils";

export async function fetchKeteranganChart() {
    // await wait(3000);
    const data = await db
        .select({
            keterangan: penahanan.keterangan,
            jumlah: sql<number>`cast(count(${penahanan.id}) as int)`,
        })
        .from(penahanan)
        .groupBy(penahanan.keterangan);

    return data;
}
