"use client";

import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";
import { usePathname, useSearchParams } from "next/navigation";

export default function TahananPagination({
    totalPages,
}: {
    totalPages: number;
}) {
    const pathName = usePathname();
    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams);
    const activePage = Number(params.get("page")) || 1;

    function createUrl(page: number) {
        if (page > 1) {
            params.set("page", page.toString());
        }

        if (page > totalPages) {
            params.set("page", totalPages.toString());
        }

        if (page <= 1) {
            params.delete("page");
        }
        return `${pathName}?${params.toString()}`;
    }

    return (
        <div className="bg-white p-2 rounded-md w-fit mx-auto mt-4 border">
            <Pagination>
                <PaginationContent>
                    <PaginationItem key={"previous"}>
                        <PaginationPrevious href={createUrl(activePage - 1)} />
                    </PaginationItem>

                    {Array.from({ length: totalPages }, (_, i) => (
                        <PaginationItem key={i}>
                            <PaginationLink
                                href={createUrl(i + 1)}
                                isActive={i + 1 == activePage}
                            >
                                {i + 1}
                            </PaginationLink>
                        </PaginationItem>
                    ))}
                    {/* <PaginationItem>
                        <PaginationLink href="#">1</PaginationLink>
                    </PaginationItem> */}
                    {/* <PaginationItem key={"another"}>
                    <PaginationEllipsis />
                </PaginationItem> */}
                    <PaginationItem key={"next"}>
                        <PaginationNext href={createUrl(activePage + 1)} />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </div>
    );
}
