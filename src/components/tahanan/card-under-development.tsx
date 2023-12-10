import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { CogIcon } from "lucide-react";

export default function CardUnderDevelopment({
    className,
}: {
    className?: string;
}) {
    return (
        <Card className={cn("w-full", className)}>
            <CardContent className="flex flex-col items-center justify-center h-full">
                <CogIcon
                    size={200}
                    className=" animate-pulse stroke-slate-400"
                />
                <p className="text-3xl font-bold text-center animate-pulse text-slate-500">
                    Under <br /> Development
                </p>
            </CardContent>
        </Card>
    );
}
