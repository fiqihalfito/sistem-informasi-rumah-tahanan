ALTER TABLE "tahanan" RENAME COLUMN "jenis_xkelamin" TO "jenis_kelamin";--> statement-breakpoint
ALTER TABLE "tahanan" ALTER COLUMN "jenis_kelamin" SET DATA TYPE varchar(255);