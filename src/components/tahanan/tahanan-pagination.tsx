"use client";

import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";
import { useSearchParams } from "next/navigation";

export default function TahananPagination({ pages }: { pages: number }) {
    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams);
    const activePage = params.get("page") || 1;

    const paramMap = Array.from({ length: pages }, (v, i) => {
        const page = i + 1;

        if (page > 1) {
            params.set("page", page.toString());
        } else {
            params.delete("page");
        }

        return params.toString();
    });
    // console.log(pages, "client log");

    return (
        <div className="bg-white p-2 rounded-md w-fit mx-auto mt-4 border">
            <Pagination>
                <PaginationContent>
                    <PaginationItem key={"previous"}>
                        <PaginationPrevious href="#" />
                    </PaginationItem>

                    {paramMap.map((param, i) => (
                        <PaginationItem key={i}>
                            <PaginationLink
                                href={`/dashboard/tahanan?${param}`}
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
                        <PaginationNext href="#" />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </div>
    );
}
