import BackNav from "@/components/dashboard/back-nav";
import CardUnderDevelopment from "@/components/tahanan/card-under-development";
import FormEdit from "@/components/tahanan/edit/form-edit";
import { formEditTahananProp } from "@/lib/definitions";
import { serverTrpc } from "@/server/trpc/server-caller";

export default async function Page({ params }: { params: { id: string } }) {
    const { id } = params;

    const data = (await serverTrpc.tahanan.fetchById({
        id: Number(id),
    })) as formEditTahananProp;

    return (
        <main>
            <BackNav href={"/dashboard/tahanan"}>Kembali ke tahanan</BackNav>
            <div className="grid grid-cols-2 gap-x-12">
                <FormEdit {...data} />
                <CardUnderDevelopment />
            </div>
        </main>
    );
}
