import { Button } from "@/components/ui/button";
import { LayoutDashboardIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <main className="h-screen bg-slate-200 p-4 flex flex-col gap-y-4">
            <header className="bg-white h-20 w-full rounded-md flex items-center px-20 shadow-md">
                <Image
                    src={"/logo-polda.png"}
                    alt="logo"
                    width={40}
                    height={40}
                    className="mr-4"
                />
                <p className="font-bold">Polda Sumatera Selatan</p>
            </header>
            <section className="bg-white grow rounded-md px-20 border-b-primary border-b-4">
                <div className="grid grid-cols-2 gap-x-8 h-full">
                    <div className="bg-blue-500X flex items-center justify-center">
                        <div className="">
                            <h1 className="font-black text-5xl tracking-wide mb-4">
                                {/* SISTEM INFORMASI MANAJEMEN TAHANAN */}
                                SiRUTAN
                            </h1>
                            <p className="text-slate-700 text-justify w-2/3">
                                Selamat datang di Sistem Informasi Rumah
                                Tahanan, solusi inovatif untuk mendigitalisasi
                                dan mengoptimalkan proses manajemen tahanan
                                secara efisien.
                            </p>
                            <Button
                                asChild
                                size={"lg"}
                                className="mt-8 py-8 text-base"
                            >
                                <Link
                                    href={"/dashboard"}
                                    className="font-semibold"
                                >
                                    <LayoutDashboardIcon
                                        className="mr-4"
                                        size={30}
                                    />{" "}
                                    Masuk Dashboard
                                </Link>
                            </Button>
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <Image
                            src={"/logo-dittahti.png"}
                            alt="logo"
                            width={300}
                            height={300}
                        />
                    </div>
                </div>
            </section>
        </main>
    );
}
