"use client";

import {
    Cell,
    Legend,
    Pie,
    PieChart,
    ResponsiveContainer,
    Tooltip,
    TooltipProps,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import {
    NameType,
    ValueType,
} from "recharts/types/component/DefaultTooltipContent";

interface JenisKelaminChartProp {
    data: {
        jenisKelamin: string | null;
        jumlah: number;
    }[];
}

const COLORS = ["#FF4081", "#2196F3"];

export default function JenisKelaminChart({ data }: JenisKelaminChartProp) {
    return (
        <Card className="border-b-4 border-b-primary ">
            <CardHeader>
                <CardTitle className="text-base text-slate-500">
                    Grafik Jenis Kelamin
                </CardTitle>
            </CardHeader>
            <CardContent className="">
                <ResponsiveContainer width="100%" height={350} className="">
                    <PieChart>
                        <Pie
                            dataKey="jumlah"
                            startAngle={180}
                            endAngle={0}
                            data={data}
                            cx="50%"
                            cy="75%"
                            outerRadius={190}
                            fill="#8884d8"
                            label
                            nameKey={"jenisKelamin"}
                        >
                            {data.map((entry, index) => (
                                <Cell
                                    key={`cell-${index}`}
                                    fill={COLORS[index]}
                                />
                            ))}
                        </Pie>
                        <Tooltip content={<CustomTooltip />} />
                        <Legend verticalAlign="bottom" />
                    </PieChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    );
}

const CustomTooltip = ({
    active,
    payload,
    label,
}: TooltipProps<ValueType, NameType>) => {
    if (active && payload && payload.length) {
        return (
            <div className="p-4 bg-white border rounded-md">
                <span className="font-medium">{`${payload[0].name} : `}</span>
                <span>{`${payload[0].value} orang`}</span>
            </div>
        );
    }

    return null;
};
