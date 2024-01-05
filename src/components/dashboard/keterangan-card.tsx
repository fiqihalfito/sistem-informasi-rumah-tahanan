import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import KeteranganChart from "./charts/keterangan-chart";
import { cn, wait } from "@/lib/utils";
import { serverTrpc } from "@/server/trpc/server-caller";

export default async function KeteranganCard({
    className,
}: {
    className?: string;
}) {
    // const data = await fetchKeteranganChart();
    const data = await serverTrpc.tahanan.fetchTahananTotalByKeterangan();
    // await wait(3000);
    return (
        <Card className={cn("border-b-4 border-b-primary", className)}>
            <CardHeader>
                <CardTitle className="text-base text-slate-500">
                    Grafik Keterangan
                </CardTitle>
            </CardHeader>
            <CardContent className="pl-2 pb-2 relative h-60">
                <KeteranganChart data={data} />
            </CardContent>
        </Card>
    );
}

export function SkeletonKeteranganCard() {
    return (
        <Card
            className={cn(
                "border-b-4 border-b-slate-300 row-span-2 animate-pulse"
            )}
        >
            <CardHeader>
                <CardTitle>
                    <div className="h-6 w-40 bg-slate-300" />
                </CardTitle>
            </CardHeader>
            <CardContent className=" h-60">
                {/* <KeteranganChart data={data} /> */}
                <div className="flex items-end h-full gap-x-4 ">
                    <div className="bg-slate-300 basis-1/5 h-1/5 rounded-t" />
                    <div className="bg-slate-300 basis-1/5 h-2/5 rounded-t" />
                    <div className="bg-slate-300 basis-1/5 h-3/5 rounded-t" />
                    <div className="bg-slate-300 basis-1/5 h-4/5 rounded-t" />
                    <div className="bg-slate-300 basis-1/5 h-full rounded-t" />
                </div>
            </CardContent>
        </Card>
    );
}
