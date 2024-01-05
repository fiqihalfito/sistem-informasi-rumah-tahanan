import { Trash2 } from "lucide-react";
import { Button, buttonVariants } from "../ui/button";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import Link from "next/link";
import { deleteTahanan } from "@/actions/tahanan-action";
import { cn } from "@/lib/utils";

export default function DeleteButton({ id }: { id: number }) {
    const deleteTahananWithId = deleteTahanan.bind(null, id);
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button type="button" size={"icon"} variant={"destructive"}>
                    <Trash2 size={20} />
                </Button>
            </AlertDialogTrigger>

            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Apakah anda yakin?</AlertDialogTitle>
                    <AlertDialogDescription>
                        Tindakan ini akan menghapus tahanan secara permanen
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel type="button">Batal</AlertDialogCancel>
                    <form action={deleteTahananWithId}>
                        <AlertDialogAction
                            type="submit"
                            className={buttonVariants({
                                variant: "destructive",
                            })}
                        >
                            Hapus
                        </AlertDialogAction>
                    </form>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
