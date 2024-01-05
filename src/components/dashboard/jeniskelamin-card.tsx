import { fetchJenisKelaminChart } from "@/lib/data/fetchJenisKelaminChart";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import JenisKelaminChart from "./charts/jeniskelamin-chart";
import { cn } from "@/lib/utils";

export default async function JenisKelaminCard() {
    const data = await fetchJenisKelaminChart();

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
