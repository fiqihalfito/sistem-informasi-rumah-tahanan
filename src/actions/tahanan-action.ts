"use server";
import { TahananFormState } from "@/lib/definitions";
import { serverTrpc } from "@/server/trpc/server-caller";
import { TRPCError } from "@trpc/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { ZodError } from "zod";

export async function createTahanan(
    prevState: TahananFormState,
    formData: FormData
) {
    try {
        await serverTrpc.tahanan.add({
            nama: formData.get("nama") as string,
            tempatLahir: (formData.get("tempat_lahir") as string) || null,
            tanggalLahir: (formData.get("tanggal_lahir") as string) || null,
            pekerjaan: (formData.get("pekerjaan") as string) || null,
            agama: formData.get("agama") as string,
            alamat: (formData.get("alamat") as string) || null,
            jenisKelamin: formData.get("jenis_kelamin") as string,
        });
    } catch (error) {
        if (error instanceof TRPCError) {
            if (error.cause instanceof ZodError) {
                const errors: TahananFormState = {
                    errors: error.cause.flatten().fieldErrors,
                    message: "there is field error",
                };

                return errors;
            }
        }

        // unknown errors
        if (error instanceof Error) {
            return {
                errors: {},
                message: error.message,
            };
        }
    }

    revalidatePath("/dashboard/tahanan");
    redirect("/dashboard/tahanan");
}

export async function updateTahanan(
    id: number,
    prevState: TahananFormState,
    formData: FormData
) {
    try {
        await serverTrpc.tahanan.update({
            id: id,
            nama: formData.get("nama") as string,
            tempatLahir: (formData.get("tempat_lahir") as string) || null,
            tanggalLahir: (formData.get("tanggal_lahir") as string) || null,
            pekerjaan: (formData.get("pekerjaan") as string) || null,
            agama: formData.get("agama") as string,
            alamat: (formData.get("alamat") as string) || null,
            jenisKelamin: formData.get("jenis_kelamin") as string,
        });
    } catch (error) {
        if (error instanceof TRPCError) {
            if (error.cause instanceof ZodError) {
                const errors: TahananFormState = {
                    errors: error.cause.flatten().fieldErrors,
                    message: "there is field error",
                };

                return errors;
            }
        }

        // unknown errors
        if (error instanceof Error) {
            return {
                errors: {},
                message: "update error",
            };
        }
    }

    revalidatePath(`/dashboard/tahanan/${id}`);
    redirect(`/dashboard/tahanan/${id}`);
}

export async function deleteTahanan(id: number) {
    try {
        await serverTrpc.tahanan.delete({ id: id });

        revalidatePath("/dashboard/tahanan");
        return { message: "delete successful" };
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
            return { message: error.message };
        }
        return { message: "delete failed" };
    }
}
