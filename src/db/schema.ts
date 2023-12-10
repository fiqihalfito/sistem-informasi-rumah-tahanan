import {
    boolean,
    date,
    integer,
    pgEnum,
    pgTable,
    serial,
    text,
    time,
    timestamp,
    varchar,
} from "drizzle-orm/pg-core";

import { relations, sql } from "drizzle-orm";
import { EnumJenisKelamin } from "@/lib/constants/jenis-kelamin";
import { EnumKeterangan } from "@/lib/constants/keterangan";
import { EnumAgama } from "@/lib/constants/agama";

// export const jenisKelaminEnum = pgEnum("jenis_kelamin", EnumJenisKelamin);

export const tahanan = pgTable("tahanan", {
    id: serial("id").primaryKey().notNull(),
    nama: varchar("nama", { length: 256 }).notNull(),
    tempatLahir: varchar("tempat_lahir", { length: 256 }),
    tanggalLahir: date("tanggal_lahir", { mode: "string" }),
    pekerjaan: varchar("pekerjaan", { length: 256 }),
    agama: varchar("agama", { enum: EnumAgama }).notNull(),
    alamat: text("alamat"),
    // jenisKelamin: jenisKelaminEnum("jenis_kelamin"),
    jenisKelamin: varchar("jenis_kelamin", {
        enum: EnumJenisKelamin,
        length: 254,
    }).notNull(),
    image: varchar("image", { length: 256 }),
    created_at: timestamp("created_at", { mode: "string" }).default(
        sql`CURRENT_TIMESTAMP`
    ),
});

// export const keteranganEnum = pgEnum("keterangan", EnumKeterangan);

export const penahanan = pgTable("penahanan", {
    id: serial("id").primaryKey(),
    idTahanan: integer("id_tahanan").notNull().unique(),
    nomorSuratPenahanan: varchar("nomor_surat_penahanan", { length: 256 }),
    tanggalMasuk: date("tanggal_masuk", { mode: "string" }),
    jamMasuk: time("jam_masuk"),
    nomorSuratKeluar: varchar("nomor_surat_keluar", { length: 256 }),
    tanggalKeluar: date("tanggal_keluar", { mode: "string" }),
    jamKeluar: time("jam_keluar"),
    pasal: text("pasal"),
    // keterangan: keteranganEnum("keterangan"),
    keterangan: varchar("keterangan", { enum: EnumKeterangan }),
    created_at: timestamp("created_at", { mode: "string" }).default(
        sql`CURRENT_TIMESTAMP`
    ),
});

export const makan = pgTable("makan", {
    id: serial("id").primaryKey(),
    idTahanan: integer("id_tahanan"),
    dapatMakanSiangPertama: boolean("dapat_makan_siang_pertama"),
    dapatMakanMalamPertama: boolean("dapat_makan_malam_pertama"),
    dapatMakanSiangTerakhir: boolean("dapat_makan_siang_terakhir"),
    dapatMakanMalamTerakhir: boolean("dapat_makan_malam_terakhir"),
});

export const penahananRelations = relations(penahanan, ({ one }) => ({
    tahanan: one(tahanan, {
        fields: [penahanan.idTahanan],
        references: [tahanan.id],
    }),
}));

export const tahananRelations = relations(tahanan, ({ one }) => ({
    penahanan: one(penahanan, {
        fields: [tahanan.id],
        references: [penahanan.idTahanan],
    }),
}));
