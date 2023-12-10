import Link from "next/link";
import { Button } from "../ui/button";
import { EyeIcon } from "lucide-react";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

export default function ViewButton({ id }: { id: number }) {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button asChild size={"icon"} variant={"default"}>
                        <Link href={`/dashboard/tahanan/${id}`}>
                            <EyeIcon size={20} />
                        </Link>
                    </Button>
                </TooltipTrigger>
                <TooltipContent>
                    <p>Lihat selengkapnya...</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
}
