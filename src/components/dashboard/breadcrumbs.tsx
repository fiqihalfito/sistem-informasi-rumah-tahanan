import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

// const items = [
//     {
//         title: "Tahanan",
//         url: "/dashboard/tahanan",
//     },
//     {
//         title: "Tambah Tahanan",
//         url: "/dashboard/tahanan/create",
//     },
// ];

interface BreacCrumbProp {
    title: string;
    url: string;
}

export default function Breadcrumbs({ items }: { items: BreacCrumbProp[] }) {
    return (
        <nav className={cn({ "mb-4": items.length > 1 })}>
            <ol className={cn("flex items-center text-sm select-none")}>
                {items.length > 1 &&
                    items.map((item, i) => (
                        <li key={i} className="flex items-center">
                            {i === items.length - 1 ? (
                                item.title
                            ) : (
                                <>
                                    <Link
                                        href={item.url}
                                        className="hover:underline underline-offset-4"
                                    >
                                        {item.title}
                                    </Link>
                                    <span className="mx-1">
                                        <ChevronRight size={18} />
                                    </span>
                                </>
                            )}
                        </li>
                    ))}
            </ol>
        </nav>
    );
}
