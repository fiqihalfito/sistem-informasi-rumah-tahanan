import { cn } from "@/lib/utils";

export default function DividerX({ className }: { className?: string }) {
    return <div className={cn("w-full border-t-2", className)} />;
}
