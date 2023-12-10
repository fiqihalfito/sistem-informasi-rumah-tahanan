import Link from "next/link";
import { Button } from "../ui/button";
import { UserPlus2Icon, UserPlusIcon } from "lucide-react";

export default function TambahTahanan() {
    return (
        <Button size={"lg"} className="py-7" asChild>
            <Link
                href={"/dashboard/tahanan/tambah"}
                className="flex gap-x-2 text-base font-medium"
            >
                <UserPlusIcon />
                Tambah tahanan
            </Link>
        </Button>
    );
}
