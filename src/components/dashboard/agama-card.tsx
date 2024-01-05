import { serverTrpc } from "@/server/trpc/server-caller";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { ProgressBar } from "./progress-bar";
import { cn } from "@/lib/utils";

export default async function AgamaCard() {
    const data = await serverTrpc.tahanan.fetchTahananTotalByAgama();
    return (
        <Card className="border-b-4 border-b-primary ">
            <CardHeader>
                <CardTitle className="text-base text-slate-500">
                    Data Agama
                </CardTitle>
            </CardHeader>
            <CardContent className="">
                <ul className={cn("grid divide-x", `grid-cols-5`)}>
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
