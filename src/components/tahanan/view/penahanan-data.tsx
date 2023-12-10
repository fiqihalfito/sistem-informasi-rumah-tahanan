import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import DividerX from "@/components/ui/divider-x";
import { fetchPenahananData } from "@/lib/data";
import { convertDateToString, convertTimestampToString } from "@/lib/utils";

export default async function PenahananData({ id }: { id: number }) {
    const data = await fetchPenahananData(id);

    return (
        <Card className="grow">
            <CardHeader>
                {/* <CardTitle>Data Penahanan</CardTitle> */}
                <CardDescription>Data Penahanan</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="text-sm">
                    <div className="grid grid-cols-2 gap-x-4">
                        <div className="space-y-6">
                            <PenahananPoints
                                title="Nomor Surat Penahanan"
                                data={data?.nomorSuratPenahanan ?? "-"}
                            />
                            <PenahananPoints
                                title="Tanggal Masuk"
                                data={
                                    convertDateToString(data?.tanggalMasuk) ??
                                    "-"
                                }
                            />
                            <PenahananPoints
                                title="Jam Masuk"
                                data={data?.jamMasuk ?? "-"}
                            />
                        </div>

                        <div className="space-y-6">
                            <PenahananPoints
                                title="Nomor Surat Keluar"
                                data={data?.nomorSuratKeluar ?? "-"}
                            />
                            <PenahananPoints
                                title="Tanggal Keluar"
                                data={
                                    convertDateToString(data?.tanggalKeluar) ??
                                    "-"
                                }
                            />
                            <PenahananPoints
                                title="Jam Keluar"
                                data={data?.jamKeluar ?? "-"}
                            />
                        </div>
                    </div>
                    <DividerX className="my-8" />
                    <div className="space-y-6">
                        <PenahananPoints
                            title="Keterangan"
                            data={data?.keterangan ?? "-"}
                        />
                        <PenahananPoints
                            title="Pasal"
                            data={data?.pasal ?? "-"}
                        />
                    </div>
                </div>
            </CardContent>
            <CardFooter>
                <p className="text-xs text-slate-400">
                    diinput pada :{" "}
                    {convertTimestampToString(data?.created_at) ?? "-"}
                </p>
            </CardFooter>
        </Card>
    );
}

export function PenahananPoints({
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
