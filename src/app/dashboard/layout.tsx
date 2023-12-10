import { Sidebar } from "@/components/dashboard/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen flex bg-slate-100">
            <div className="w-64 bg-white border-r">
                <Sidebar />
            </div>
            <div className="grow pb-8">
                <div className="h-16 bg-white flex items-center px-8">
                    <p className="font-bold text-slate-600 text-blue-900 text-2xl">
                        SiRUTAN
                    </p>
                </div>
                <div className="px-8 pt-6">{children}</div>
            </div>
        </div>
    );
}
