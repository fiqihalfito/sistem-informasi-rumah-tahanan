"use client";

import {
    Bar,
    BarChart,
    ResponsiveContainer,
    Tooltip,
    TooltipProps,
    XAxis,
    YAxis,
} from "recharts";
import {
    NameType,
    ValueType,
} from "recharts/types/component/DefaultTooltipContent";

interface KeteranganChartProp {
    data: {
        keterangan: string | null;
        jumlah: number;
    }[];
}

export default function KeteranganChart({ data }: KeteranganChartProp) {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
                <XAxis
                    dataKey="keterangan"
                    stroke="#888888"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                />
                <YAxis
                    stroke="#888888"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                    // tickFormatter={(value) => `$${value}`}
                />
                <Tooltip content={<CustomTooltip />} />
                {/* <Legend /> */}
                <Bar dataKey="jumlah" fill="#facc15" radius={[4, 4, 0, 0]} />
            </BarChart>
        </ResponsiveContainer>
    );
}

const CustomTooltip = ({
    active,
    payload,
    label,
}: TooltipProps<ValueType, NameType>) => {
    if (active && payload && payload.length) {
        return (
            <div className="p-4 bg-white border-2 rounded-md">
                <span className="font-medium">{`${label} : `}</span>
                <span>{`${payload[0].value} orang`}</span>
            </div>
        );
    }

    return null;
};
