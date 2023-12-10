import { fetchBiodataTahanan, fetchTahananDetail } from "@/lib/data";
import Breadcrumbs from "@/components/dashboard/breadcrumbs";
import FormEdit from "@/components/tahanan/edit/form-edit";
import { formEditTahananProp } from "@/lib/definitions";
import CardUnderDevelopment from "@/components/tahanan/card-under-development";

export default async function Page({ params }: { params: { id: number } }) {
    const { id } = params;
    const data = (await fetchBiodataTahanan(id)) as formEditTahananProp;

    return (
        <main>
            <Breadcrumbs
                items={[
                    { title: "Tahanan", url: "/dashboard/tahanan" },
                    {
                        title: "Edit tahanan",
                        url: "/dashboard/tahanan/edit",
                    },
                ]}
            />
            <div className="grid grid-cols-2 gap-x-12">
                <FormEdit {...data} />
                <CardUnderDevelopment />
            </div>
        </main>
    );
}
