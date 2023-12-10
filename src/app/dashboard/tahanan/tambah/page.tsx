import Breadcrumbs from "@/components/dashboard/breadcrumbs";
import PageHeading from "@/components/dashboard/page-heading";
import CardUnderDevelopment from "@/components/tahanan/card-under-development";
import FormTambah from "@/components/tahanan/tambah/form-tambah";

export default function Page() {
    return (
        <main>
            <Breadcrumbs
                items={[
                    { title: "Tahanan", url: "/dashboard/tahanan" },
                    {
                        title: "Tambah tahanan",
                        url: "/dashboard/tahanan/tambah",
                    },
                ]}
            />
            {/* <PageHeading>Tambah Tahanan</PageHeading> */}

            <div className="grid grid-cols-2 gap-x-12">
                <FormTambah />
                <CardUnderDevelopment />
            </div>
        </main>
    );
}
