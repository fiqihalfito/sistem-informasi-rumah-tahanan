import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { fetchBiodataTahanan } from "@/lib/data";
import { convertDateToString } from "@/lib/utils";
import TahananImage from "./tahanan-image";

export default async function Biodata({ id }: { id: number }) {
    const data = await fetchBiodataTahanan(id);

    return (
        <Card className="w-96">
            <CardHeader>
                <CardTitle>{data?.nama}</CardTitle>
            </CardHeader>
            <CardContent>
                {/* <div className="w-80 h-80 rounded-md bg-primary mb-6" /> */}
                {/* <TahananImage id={id} /> */}

                <div className="text-sm space-y-4">
                    <BiodataPoints title="Nama" data={data?.nama ?? "-"} />
                    <BiodataPoints
                        title="Tempat lahir"
                        data={data?.tempatLahir ?? "-"}
                    />
                    <BiodataPoints
                        title="Tanggal lahir"
                        data={convertDateToString(data?.tanggalLahir) ?? "-"}
                    />
                    <BiodataPoints
                        title="Pekerjaan"
                        data={data?.pekerjaan ?? "-"}
                    />
                    <BiodataPoints
                        title="Jenis kelamin"
                        data={data?.jenisKelamin ?? "-"}
                    />
                    <BiodataPoints title="Agama" data={data?.agama ?? "-"} />
                    <BiodataPoints title="Alamat" data={data?.alamat ?? "-"} />
                </div>
            </CardContent>
        </Card>
    );
}

export function BiodataPoints({
    title,
    data,
}: {
    title: string;
    data?: string | null;
}) {
    return (
        <div className="">
            <h5 className="font-semibold leading-6">{title}</h5>
            <p>{data}</p>
        </div>
    );
}
