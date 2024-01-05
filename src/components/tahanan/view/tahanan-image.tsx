import Image from "next/image";

export default async function TahananImage({ id }: { id: number }) {
    // const imageUrl = await fetchTahananImage();

    return (
        <div className="h-80 w-80 rounded-md mb-6 relative overflow-hidden">
            {/* <Image
                src={imageUrl.url}
                alt={`tahanan-image-${id}`}
                // width={320}
                // height={320}
                // priority
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: "contain" }}
                // quality={100}
            /> */}
        </div>
    );
}
