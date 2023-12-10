"use server";
import { penahanan, tahanan } from "@/db/schema";
import { createInsertSchema } from "drizzle-zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { db } from "@/db/connect";
import { eq } from "drizzle-orm";

const tahananSchema = createInsertSchema(tahanan, {
    nama: z.string({ invalid_type_error: "nama harap diisi!" }),
    agama: z.string({ invalid_type_error: "agama harap diisi!" }),
});
const insertTahananSchema = tahananSchema.omit({
    id: true,
    created_at: true,
    image: true,
});

const updateTahananSchema = insertTahananSchema;

type State = {
    errors?: {
        [key in keyof z.infer<typeof insertTahananSchema>]?: string[];
    };
    message?: string | null;
};

export async function createTahanan(prevState: State, formData: FormData) {
    const validation = insertTahananSchema.safeParse({
        nama: formData.get("nama") || null,
        tempatLahir: formData.get("tempat_lahir") || null,
        tanggalLahir: formData.get("tanggal_lahir") || null,
        pekerjaan: formData.get("pekerjaan") || null,
        agama: formData.get("agama") || null,
        alamat: formData.get("alamat") || null,
        jenisKelamin: formData.get("jenis_kelamin") || null,
    });

    if (!validation.success) {
        const errors: State = {
            errors: validation.error.flatten().fieldErrors,
            message: "there is error",
        };
        return errors;
    }

    try {
        // data tahanan dan return idTahanan
        const newTahanan = await db
            .insert(tahanan)
            .values(validation.data)
            .returning({ idTahanan: tahanan.id });

        // data penahanan and use returned idTahanan
        await db.insert(penahanan).values({
            idTahanan: newTahanan[0].idTahanan,
        });
    } catch (error) {
        console.log(error);
    }

    revalidatePath("/dashboard/tahanan");
    redirect("/dashboard/tahanan");
}

export async function updateTahanan(
    id: number,
    prevState: State,
    formData: FormData
) {
    const validation = updateTahananSchema.safeParse({
        nama: formData.get("nama") || null,
        tempatLahir: formData.get("tempat_lahir") || null,
        tanggalLahir: formData.get("tanggal_lahir") || null,
        pekerjaan: formData.get("pekerjaan") || null,
        agama: formData.get("agama") || null,
        alamat: formData.get("alamat") || null,
        jenisKelamin: formData.get("jenis_kelamin") || null,
    });

    if (!validation.success) {
        const errors: State = {
            errors: validation.error.flatten().fieldErrors,
            message: "there is error",
        };
        return errors;
    }

    try {
        await db.update(tahanan).set(validation.data).where(eq(tahanan.id, id));
    } catch (error) {
        console.log(error);
    }

    revalidatePath(`/dashboard/tahanan/${id}`);
    redirect(`/dashboard/tahanan/${id}`);
}

export async function deleteTahanan(id: number) {
    try {
        await Promise.all([
            db.delete(tahanan).where(eq(tahanan.id, id)),
            db.delete(penahanan).where(eq(penahanan.idTahanan, id)),
        ]);

        revalidatePath("/dashboard/tahanan");
        return { message: "delete successful" };
    } catch (error) {
        console.log(error);
        return { message: "delete failed" };
    }
}
