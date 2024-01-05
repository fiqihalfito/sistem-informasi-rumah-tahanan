import AgamaCard, {
    SkeletonAgamaCard,
} from "@/components/dashboard/agama-card";
import JenisKelaminCard, {
    SkeletonJenisKelaminCard,
} from "@/components/dashboard/jeniskelamin-card";
import KeteranganCard, {
    SkeletonKeteranganCard,
} from "@/components/dashboard/keterangan-card";
import OverviewCards from "@/components/dashboard/overview-cards";
import PageHeading from "@/components/dashboard/page-heading";
import OverviewSkeleton from "@/components/skeletons/overview-skeleton";
import { Suspense } from "react";

export const dynamic = "force-dynamic";

export default async function DashboardPage() {
    return (
        <div>
            <PageHeading>Dashboard</PageHeading>
            <div className="grid grid-cols-4 gap-x-4 mb-8">
                <Suspense fallback={<OverviewSkeleton />}>
                    <OverviewCards />
                </Suspense>
            </div>
            <div className="grid grid-cols-2 grid-rows-2 gap-x-4 gap-y-4">
                <Suspense fallback={<SkeletonKeteranganCard />}>
                    <KeteranganCard className="row-span-2" />
                </Suspense>
                <Suspense fallback={<SkeletonAgamaCard />}>
                    {/* <JenisKelaminCard /> */}
                    <AgamaCard />
                </Suspense>
                <Suspense fallback={<SkeletonJenisKelaminCard />}>
                    <JenisKelaminCard />
                </Suspense>
            </div>
        </div>
    );
}
