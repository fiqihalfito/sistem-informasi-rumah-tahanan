import { PowerIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
export default function HomeButton() {
    return (
        <Button asChild variant={"destructive"} size={"sm"}>
            <Link href={"/"}>
                <PowerIcon className="mr-3" size={18} /> Keluar
            </Link>
        </Button>
    );
}
