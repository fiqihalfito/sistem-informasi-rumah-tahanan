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
import { Badge } from "../ui/badge";
import DeleteButton from "./delete-button";
import EditButton from "./edit-button";
import ViewButton from "./view-button";

export default async function TableTahanan({ query }: { query: string }) {
    const tahanan = await serverTrpc.tahanan.fetchTableTahanan({
        query: query,
    });

    return (
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
                {tahanan.map((item) => (
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
                                <Badge className="bg-green-400">bebas</Badge>
                            ) : (
                                <Badge className="bg-primary">ditahan</Badge>
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
