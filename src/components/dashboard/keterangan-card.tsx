import { fetchKeteranganChart } from "@/lib/data/fetchKeteranganChart";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import KeteranganChart from "./charts/keterangan-chart";
import { cn } from "@/lib/utils";

export default async function KeteranganCard({
    className,
}: {
    className?: string;
}) {
    const data = await fetchKeteranganChart();

    return (
        <Card className={cn("border-b-4 border-b-primary h-fullx", className)}>
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
