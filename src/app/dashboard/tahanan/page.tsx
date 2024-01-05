import PageHeading from "@/components/dashboard/page-heading";
import SearchBar from "@/components/tahanan/search";
import TableTahanan, {
    SkeletonTableTahanan,
} from "@/components/tahanan/table-tahanan";
import TahananPagination from "@/components/tahanan/tahanan-pagination";
import TambahTahanan from "@/components/tahanan/tambah-tahanan";
import Link from "next/link";
import { Suspense } from "react";

export default async function Page({
    searchParams,
}: {
    searchParams: { query?: string; page?: number };
}) {
    const query = searchParams?.query ?? "";
    const page = searchParams?.page ?? 1;
    // console.log(`page = ${page}`);

    return (
        <main>
            <PageHeading>Tahanan</PageHeading>
            <div className="flex items-center gap-x-4 mb-6">
                <SearchBar placeholder="Cari tahanan ..." />
                <TambahTahanan />
            </div>
            <div>
                <Suspense
                    key={`${query}+${page}`}
                    fallback={<SkeletonTableTahanan />}
                >
                    <TableTahanan query={query} page={page} />
                </Suspense>
            </div>
        </main>
    );
}
