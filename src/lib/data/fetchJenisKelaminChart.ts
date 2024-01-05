import { db } from "@/db/connect";
import { tahanan } from "@/db/schema";
import { sql } from "drizzle-orm";
import { wait } from "../utils";

export async function fetchJenisKelaminChart() {
    // await wait(4000);
    const data = await db
        .select({
            jenisKelamin: tahanan.jenisKelamin,
            jumlah: sql<number>`cast(count(${tahanan.id}) as int)`,
        })
        .from(tahanan)
        .groupBy(tahanan.jenisKelamin);

    return data;
}
