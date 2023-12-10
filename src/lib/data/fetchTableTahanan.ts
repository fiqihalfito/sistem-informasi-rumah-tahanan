import { db } from "@/db/connect";
import { penahanan, tahanan } from "@/db/schema";
import { asc, desc, eq, ilike } from "drizzle-orm";
import { wait } from "../utils";

export async function fetchTableTahanan(query?: string) {
    // noStore();
    // await wait(3000);

    return await db
        .select({
            id: tahanan.id,
            nama: tahanan.nama,
            penahanan: {
                tanggalMasuk: penahanan.tanggalMasuk,
                nomorSuratPenahanan: penahanan.nomorSuratPenahanan,
                tanggalKeluar: penahanan.tanggalKeluar,
            },
        })
        .from(tahanan)
        .leftJoin(penahanan, eq(tahanan.id, penahanan.idTahanan))
        .orderBy(desc(penahanan.tanggalMasuk))
        .where(ilike(tahanan.nama, `%${query}%`));
}
