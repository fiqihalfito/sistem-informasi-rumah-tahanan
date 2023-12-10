CREATE TABLE IF NOT EXISTS "makan" (
	"id" serial PRIMARY KEY NOT NULL,
	"id_tahanan" integer,
	"dapat_makan_siang_pertama" boolean,
	"dapat_makan_malam_pertama" boolean,
	"dapat_makan_siang_terakhir" boolean,
	"dapat_makan_malam_terakhir" boolean
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "penahanan" (
	"id" serial PRIMARY KEY NOT NULL,
	"id_tahanan" integer NOT NULL,
	"nomor_surat_penahanan" varchar(256),
	"tanggal_masuk" date,
	"jam_masuk" time,
	"nomor_surat_keluar" varchar(256),
	"tanggal_keluar" date,
	"jam_keluar" time,
	"pasal" text,
	"keterangan" varchar,
	CONSTRAINT "penahanan_id_tahanan_unique" UNIQUE("id_tahanan")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "tahanan" (
	"id" serial PRIMARY KEY NOT NULL,
	"nama" varchar(256),
	"tempat_lahir" varchar(256),
	"tanggal_lahir" date,
	"pekerjaan" varchar(256),
	"agama" varchar,
	"alamat" text,
	"jenis_kelamin" varchar,
	"image" varchar(256)
);
