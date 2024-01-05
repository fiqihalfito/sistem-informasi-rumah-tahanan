"use client";

import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

export function ProgressBar({ value }: { value: number }) {
    const [progress, setProgress] = useState(13);

    useEffect(() => {
        const timer = setTimeout(() => setProgress(value), 500);
        return () => clearTimeout(timer);
    }, [value]);

    return <Progress value={progress} className="w-[60%]" />;
}
