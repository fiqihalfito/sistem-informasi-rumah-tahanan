import PageHeading from "@/components/dashboard/page-heading";
import CardUnderDevelopment from "@/components/tahanan/card-under-development";

export default function Page() {
    return (
        <main>
            <PageHeading>Laporan</PageHeading>
            <CardUnderDevelopment className="py-20" />
        </main>
    );
}
