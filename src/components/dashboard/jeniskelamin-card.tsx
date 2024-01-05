import { cn, wait } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { serverTrpc } from "@/server/trpc/server-caller";

export default async function JenisKelaminCard() {
    // const data = await fetchJenisKelaminChart();
    const data = await serverTrpc.tahanan.fetchTahananTotalByJenisKelamin();
    await wait(3000);
    return (
        <Card className="border-b-4 border-b-primary ">
            <CardHeader>
                <CardTitle className="text-base text-slate-500">
                    Data Jenis Kelamin
                </CardTitle>
            </CardHeader>
            <CardContent className="">
                {/* <JenisKelaminChart data={data} /> */}
                <ul className={cn("grid divide-x", `grid-cols-2`)}>
                    {data.map((item) => (
                        <li
                            key={item.jenisKelamin}
                            className="flex flex-col items-center text-base text-slate-500"
                        >
                            <span className="">{item.jenisKelamin}</span>
                            <span>{item.jumlah}</span>
                        </li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    );
}

export function SkeletonJenisKelaminCard() {
    return (
        <Card className="border-b-4 border-b-slate-300 animate-pulse ">
            <CardHeader>
                <CardTitle>
                    <div className="h-6 w-40 bg-slate-300" />
                </CardTitle>
            </CardHeader>
            <CardContent className="">
                <ul className={cn("grid divide-x grid-cols-2")}>
                    {Array.from({ length: 2 }, (v, i) => (
                        <li
                            key={i}
                            className="flex flex-col items-center gap-y-2"
                        >
                            <span className="h-4 w-20 bg-slate-300"></span>
                            <span className="h-4 w-6 bg-slate-300"></span>
                        </li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    );
}
