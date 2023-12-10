import Image from "next/image";
import NavLinks from "./nav-links";
import HomeButton from "./home-button";

export function Sidebar() {
    return (
        <div className="w-full p-4">
            <div className="flex h-40 justify-center items-center text-center border-2 border-primary shadow rounded mb-3 relative">
                {/* <p className="font-bold">Sistem Informasi Manajemen Tahanan</p> */}
                <Image
                    src={"/logo-dittahti.png"}
                    alt="logo"
                    // height={130}
                    // width={130}
                    fill
                    style={{ objectFit: "contain" }}
                    priority
                />
            </div>
            <div className="flex flex-col h-full gap-y-2 mb-4">
                <NavLinks />
            </div>
            <div className="flex justify-center">
                <HomeButton />
            </div>
        </div>
    );
}
