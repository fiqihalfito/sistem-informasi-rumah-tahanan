import Breadcrumbs from "@/components/dashboard/breadcrumbs";
import JenisKelaminChart from "@/components/dashboard/jeniskelamin-chart";
import KeteranganChart from "@/components/dashboard/keterangan-chart";
import OverviewCards from "@/components/dashboard/overview-cards";
import PageHeading from "@/components/dashboard/page-heading";
import { fetchJenisKelaminChart, fetchKeteranganChart } from "@/lib/data";
import { Suspense } from "react";

export const dynamic = "force-dynamic";

export default async function DashboardPage() {
    const [dataKeteranganChart, dataJenisKelaminChart] = await Promise.all([
        fetchKeteranganChart(),
        fetchJenisKelaminChart(),
    ]);

    return (
        <div>
            <Breadcrumbs
                items={[
                    {
                        title: "Dashboard",
                        url: "/",
                    },
                ]}
            />
            <PageHeading>Dashboard</PageHeading>
            <div className="grid grid-cols-4 gap-x-4 mb-8">
                <Suspense fallback={"memuat cards..."}>
                    <OverviewCards />
                </Suspense>
            </div>
            <div className="grid grid-cols-2 gap-x-4">
                <Suspense fallback={"memuat charts..."}>
                    <KeteranganChart data={dataKeteranganChart} />
                </Suspense>
                <Suspense fallback={"memuat charts..."}>
                    <JenisKelaminChart data={dataJenisKelaminChart} />
                </Suspense>
            </div>
        </div>
    );
}
