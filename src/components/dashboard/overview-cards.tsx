import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { fetchOverviewData } from "@/lib/data";
import {
    CalendarCheck2Icon,
    LucideIcon,
    UserRoundCheckIcon,
    UserX2Icon,
    UsersIcon,
} from "lucide-react";

export default async function OverviewCards() {
    const data = await fetchOverviewData();

    return (
        <>
            <CardItem
                title="Total Tahanan"
                Icon={UsersIcon}
                data={data.jumlahTahanan}
            />
            <CardItem
                title="Jumlah Bebas"
                Icon={UserRoundCheckIcon}
                data={data.jumlahBebas}
            />
            <CardItem
                title="Jumlah Ditahan"
                Icon={UserX2Icon}
                data={data.jumlahDitahan}
            />
            <CardItem
                title="Tahanan Masuk Bulan Ini"
                Icon={CalendarCheck2Icon}
                data={data.jumlahTahananBulanIni}
            />
        </>
    );
}

function CardItem({
    title,
    Icon,
    data,
}: {
    title: string;
    Icon: LucideIcon;
    data: string | number;
}) {
    return (
        <Card className="border-b-4 border-b-primary ">
            <CardHeader>
                <CardTitle className="text-base text-slate-500">
                    {title}
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex items-center">
                    <Icon size={50} className="stroke-slate-500" />
                    <p className="text-5xl font-bold grow text-center text-slate-700 ">
                        {data}
                    </p>
                </div>
            </CardContent>
        </Card>
    );
}
