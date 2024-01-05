import BackNav from "@/components/dashboard/back-nav";
import CardUnderDevelopment from "@/components/tahanan/card-under-development";
import FormTambah from "@/components/tahanan/tambah/form-tambah";

export default function Page() {
    return (
        <main>
            <BackNav href={"/dashboard/tahanan"}>Kembali ke tahanan</BackNav>

            <div className="grid grid-cols-2 gap-x-12">
                <FormTambah />
                <CardUnderDevelopment />
            </div>
        </main>
    );
}
