import { db } from "@/db/connect";
import { penahanan, tahanan } from "@/db/schema";
import { isStringNotEmpty, wait } from "@/lib/utils";
import { count, desc, eq, ilike, sql } from "drizzle-orm";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";
import { publicProcedure, router } from "../trpc";
import { PgSelect } from "drizzle-orm/pg-core";

export const tahananSchema = createInsertSchema(tahanan, {
    nama: z
        .string()
        .trim()
        .refine(isStringNotEmpty, { message: "nama harap diisi!" }),
    agama: z
        .string()
        .refine(isStringNotEmpty, { message: "agama harap diisi!" }),
});

export const tahananRouter = router({
    fetchTableTahanan: publicProcedure
        .input(
            z.object({
                query: z.string(),
                limit: z.number(),
                page: z.coerce.number(),
            })
        )
        .query(async (opt) => {
            // await wait(3000);

            const { query, limit, page } = opt.input;

            let newPage;
            if (page == 1 || page == 0) {
                newPage = 0;
            } else {
                newPage = page - 1;
            }

            const data = await db
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
                .where(ilike(tahanan.nama, `%${query}%`))
                .limit(limit)
                .offset(newPage * limit);

            const rows = await db
                .select({
                    count: count(),
                })
                .from(tahanan)
                .where(ilike(tahanan.nama, `%${query}%`));

            const totalPages = Math.ceil(rows[0].count / limit);

            return { data, totalPages };
        }),
    fetchOverviewTahanan: publicProcedure.query(async () => {
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

        const [
            resTotalTahanan,
            resJumlahBebas,
            resJumlahDitahan,
            resFullMonth,
        ] = await Promise.all([
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
    }),
    fetchById: publicProcedure
        .input(z.object({ id: z.number() }))
        .query(async (opt) => {
            const id = opt.input.id;

            return await db.query.tahanan.findFirst({
                where: eq(tahanan.id, id),
            });
        }),
    fetchBiodataTahanan: publicProcedure
        .input(z.object({ id: z.number() }))
        .query(async (opt) => {
            const id = opt.input.id;

            return await db.query.tahanan.findFirst({
                where: eq(tahanan.id, id),
            });
        }),
    fetchPenahananData: publicProcedure
        .input(z.object({ id: z.number() }))
        .query(async (opt) => {
            const id = opt.input.id;

            return await db.query.penahanan.findFirst({
                where: eq(penahanan.idTahanan, id),
            });
        }),
    fetchTahananTotalByAgama: publicProcedure.query(async (opt) => {
        const data = await db
            .select({ agama: tahanan.agama, value: count() })
            .from(tahanan)
            .groupBy(tahanan.agama);
        return data;
    }),
    fetchTahananTotalByKeterangan: publicProcedure.query(async (opt) => {
        const data = await db
            .select({
                keterangan: penahanan.keterangan,
                jumlah: sql<number>`cast(count(${penahanan.id}) as int)`,
            })
            .from(penahanan)
            .groupBy(penahanan.keterangan);

        return data;
    }),
    fetchTahananTotalByJenisKelamin: publicProcedure.query(async (opt) => {
        const data = await db
            .select({
                jenisKelamin: tahanan.jenisKelamin,
                jumlah: sql<number>`cast(count(${tahanan.id}) as int)`,
            })
            .from(tahanan)
            .groupBy(tahanan.jenisKelamin);

        return data;
    }),
    add: publicProcedure.input(tahananSchema).mutation(async (opts) => {
        const data = opts.input;
        try {
            // data tahanan dan return idTahanan
            const newTahanan = await db
                .insert(tahanan)
                .values(data)
                .returning();

            // data penahanan and use returned idTahanan
            await db.insert(penahanan).values({
                idTahanan: newTahanan[0].id,
            });
        } catch (error) {
            throw new Error("there is error when inserting data to db");
        }
    }),
    update: publicProcedure.input(tahananSchema).mutation(async (opts) => {
        const data = opts.input;

        try {
            await db.update(tahanan).set(data).where(eq(tahanan.id, data.id!));
        } catch (error) {
            throw new Error("there is error when updating data to db");
        }
    }),
    delete: publicProcedure
        .input(z.object({ id: z.number() }))
        .mutation(async (opt) => {
            const id = opt.input.id;

            try {
                await Promise.all([
                    db.delete(tahanan).where(eq(tahanan.id, id)),
                    db.delete(penahanan).where(eq(penahanan.idTahanan, id)),
                ]);
            } catch (error) {
                if (error instanceof Error) {
                    throw new Error(error.message);
                }
            }
        }),
});

async function withPagination<T extends PgSelect>(
    qb: T,
    page: number,
    limit: number = 2
) {
    return await qb.limit(limit).offset(page * limit);
}
