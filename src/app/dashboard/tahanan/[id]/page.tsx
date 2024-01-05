import BackNav from "@/components/dashboard/back-nav";
import BiodataSkeleton from "@/components/skeletons/biodata-skeleton";
import PenahananDataSkeleton from "@/components/skeletons/penahananData-skeleton";
import Biodata from "@/components/tahanan/view/bio-data";
import PenahananData from "@/components/tahanan/view/penahanan-data";
import { Suspense } from "react";

export default async function Page({ params }: { params: { id: number } }) {
    const { id } = params;

    return (
        <div>
            <BackNav href={"/dashboard/tahanan"}>Kembali ke tahanan</BackNav>

            {/* cards */}
            <div className="flex gap-x-4 items-start">
                <Suspense fallback={<BiodataSkeleton />}>
                    <Biodata id={id} />
                </Suspense>
                <Suspense fallback={<PenahananDataSkeleton />}>
                    <PenahananData id={id} />
                </Suspense>
            </div>
        </div>
    );
}
