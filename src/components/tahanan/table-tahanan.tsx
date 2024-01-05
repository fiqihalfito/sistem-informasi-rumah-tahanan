import { Card, CardContent } from "@/components/ui/card";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

import { convertDateToString } from "@/lib/utils";
import { serverTrpc } from "@/server/trpc/server-caller";
import { OrbitIcon, SearchXIcon } from "lucide-react";
import { Badge } from "../ui/badge";
import DeleteButton from "./delete-button";
import EditButton from "./edit-button";
import TahananPagination from "./tahanan-pagination";
import ViewButton from "./view-button";
// import TahananPagination from "./tahanan-pagination";
// import dynamic from "next/dynamic";

// const TahananPagination = dynamic(() => import("./tahanan-pagination"), {
//     ssr: false,
// });

interface TableTahananProp {
    query: string;
    page: number;
}

export default async function TableTahanan({ query, page }: TableTahananProp) {
    const tahanan = await serverTrpc.tahanan.fetchTableTahanan({
        query: query,
        limit: 3,
        page: Number(page),
    });

    // await wait(3000);

    return (
        <>
            <Table className="bg-white border">
                {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
                <TableHeader>
                    <TableRow>
                        <TableHead>Nama</TableHead>
                        <TableHead>Nomor Surat Penahanan</TableHead>
                        <TableHead>Tanggal Masuk</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead></TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {tahanan.data.map((item) => (
                        <TableRow key={item.id}>
                            <TableCell>{item.nama}</TableCell>
                            <TableCell>
                                {item.penahanan?.nomorSuratPenahanan ?? "-"}
                            </TableCell>
                            <TableCell>
                                {convertDateToString(
                                    item.penahanan?.tanggalMasuk
                                ) ?? "-"}
                            </TableCell>
                            <TableCell>
                                {isRelease(item.penahanan?.tanggalKeluar) ? (
                                    <Badge className="bg-green-400">
                                        bebas
                                    </Badge>
                                ) : (
                                    <Badge className="bg-primary">
                                        ditahan
                                    </Badge>
                                )}
                            </TableCell>
                            <TableCell>
                                <div className="flex items-center gap-x-1 justify-end">
                                    <ViewButton id={item.id} />
                                    <DeleteButton id={item.id} />
                                    <EditButton id={item.id} />
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            {tahanan.totalPages !== 0 ? (
                <TahananPagination pages={tahanan.totalPages} />
            ) : (
                <div className="shadow h-80 flex flex-col gap-y-4 items-center justify-center bg-white rounded-md mt-2 border">
                    <SearchXIcon size={100} className="stroke-slate-500" />
                    <p className="font-semibold text-slate-500">
                        Tidak ditemukan!
                    </p>
                </div>
            )}
        </>
    );
}

function isRelease(releaseDate?: Date | string | null): boolean {
    if (!releaseDate) {
        return false;
    }

    if (typeof releaseDate === "string") {
        releaseDate = new Date(releaseDate);
    }

    // jika hari ini masih dibawah tanggal bebas
    if (new Date().getTime() < releaseDate.getTime()) {
        return false;
    }

    return true;
}

export function SkeletonTableTahanan() {
    return (
        <Card className="animate-pulse">
            {/* <CardHeader>
                <CardTitle>Sedang mencari</CardTitle>
                <CardDescription>Card Description</CardDescription>
            </CardHeader> */}
            <CardContent className=" p-0 ">
                <div className="flex flex-col gap-y-4 items-center justify-center h-96">
                    <OrbitIcon className="animate-spin size-20 stroke-slate-600" />
                    <p className="text-lg font-semibold text-slate-600">
                        sedang memuat ...
                    </p>
                </div>
            </CardContent>
        </Card>
    );
}
