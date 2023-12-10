import { utapi } from "@/server/uploadthing";

export async function fetchTahananImage() {
    const imageUrl = await utapi.getFileUrls(
        "1c90e4d9-460e-4f8c-84ed-867813bca721-89888r.jpg"
    );

    return imageUrl[0];
}
