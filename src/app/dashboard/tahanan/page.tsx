import PageHeading from "@/components/dashboard/page-heading";
import SearchBar from "@/components/tahanan/search";
import TableTahanan from "@/components/tahanan/table-tahanan";
import TambahTahanan from "@/components/tahanan/tambah-tahanan";
import { Suspense } from "react";

export default async function Page({
    searchParams,
}: {
    searchParams: { query?: string };
}) {
    const query = searchParams?.query ?? "";
    return (
        <main>
            <PageHeading>Tahanan</PageHeading>

            <div className="flex items-center gap-x-4 mb-6">
                <SearchBar placeholder="Cari tahanan ..." />
                <TambahTahanan />
            </div>
            <div>
                <Suspense key={query} fallback={<p>Memuat table...</p>}>
                    <TableTahanan query={query} />
                </Suspense>
            </div>
        </main>
    );
}
