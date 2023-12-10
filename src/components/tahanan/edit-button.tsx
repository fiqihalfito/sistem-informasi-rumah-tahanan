import Link from "next/link";
import { Button } from "../ui/button";
import { PencilIcon } from "lucide-react";

export default function EditButton({ id }: { id: number }) {
    return (
        <Button asChild size={"icon"}>
            <Link href={`/dashboard/tahanan/edit/${id}`}>
                <PencilIcon size={20} />
            </Link>
        </Button>
    );
}
