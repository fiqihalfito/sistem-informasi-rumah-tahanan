import { serverTrpc } from "@/server/trpc/server-caller";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { ProgressBar } from "./progress-bar";
import { cn, wait } from "@/lib/utils";

export default async function AgamaCard() {
    const data = await serverTrpc.tahanan.fetchTahananTotalByAgama();
    // await wait(5000);

    return (
        <Card className="border-b-4 border-b-primary ">
            <CardHeader>
                <CardTitle className="text-base text-slate-500">
                    Data Agama
                </CardTitle>
            </CardHeader>
            <CardContent className="">
                <ul className={cn("grid divide-x grid-cols-5")}>
                    {data.map((item) => (
                        <li
                            key={item.agama}
                            className="flex flex-col items-center text-base text-slate-500"
                        >
                            <span className="">{item.agama}</span>
                            <span>{item.value}</span>
                        </li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    );
}

export function SkeletonAgamaCard() {
    return (
        <Card className="border-b-4 border-b-slate-300 animate-pulse ">
            <CardHeader>
                <CardTitle>
                    <div className="h-6 w-40 bg-slate-300" />
                </CardTitle>
            </CardHeader>
            <CardContent className="">
                <ul className={cn("grid divide-x", `grid-cols-5`)}>
                    {Array.from({ length: 5 }, (v, i) => (
                        <li
                            key={i}
                            className="flex flex-col items-center gap-y-2"
                        >
                            <span className="h-4 w-14 bg-slate-300"></span>
                            <span className="h-4 w-6 bg-slate-300"></span>
                        </li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    );
}
