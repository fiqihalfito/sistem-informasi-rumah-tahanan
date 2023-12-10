import { db } from "@/db/connect";
import { penahanan, tahanan } from "@/db/schema";
import { gte, sql } from "drizzle-orm";
import { wait } from "../utils";
export async function fetchOverviewData() {
    // await wait(3000);
    const totalTahanan = db
        .select({
            count: sql<number>`cast(count(${tahanan.id}) as int)`,
        })
        .from(tahanan);

    const jumlahBebas = db
        .select({
            count: sql<number>`cast(count(${penahanan.id}) as int)`,
        })
        .from(penahanan)
        .where(sql`${penahanan.tanggalKeluar} >= CURRENT_DATE`);

    const jumlahDitahan = db
        .select({
            count: sql<number>`cast(count(${penahanan.id}) as int)`,
        })
        .from(penahanan)
        .where(sql`${penahanan.tanggalKeluar} < CURRENT_DATE`);

    const totalTahananBulanIni = db
        .select({
            count: sql<number>`cast(count(${penahanan.id}) as int)`,
        })
        .from(penahanan)
        .where(
            sql`EXTRACT(MONTH FROM ${penahanan.tanggalMasuk}) = EXTRACT(MONTH FROM CURRENT_DATE)`
        );

    const [resTotalTahanan, resJumlahBebas, resJumlahDitahan, resFullMonth] =
        await Promise.all([
            totalTahanan,
            jumlahBebas,
            jumlahDitahan,
            totalTahananBulanIni,
        ]);

    return {
        jumlahTahanan: resTotalTahanan[0].count,
        jumlahBebas: resJumlahBebas[0].count,
        jumlahDitahan: resJumlahDitahan[0].count,
        jumlahTahananBulanIni: resFullMonth[0].count,
    };
}
