import { Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { deleteTahanan } from "@/actions/tahanan-action";

export default function DeleteButton({ id }: { id: number }) {
    const deleteTahananWithId = deleteTahanan.bind(null, id);
    return (
        <form action={deleteTahananWithId}>
            <Button type="submit" size={"icon"} variant={"destructive"}>
                <Trash2 size={20} />
            </Button>
        </form>
    );
}
