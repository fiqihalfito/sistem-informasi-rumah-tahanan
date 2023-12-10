"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { buttonVariants } from "../ui/button";

const routes = [
    {
        title: "Dashboard",
        href: "/dashboard",
    },
    {
        title: "Tahanan",
        href: "/dashboard/tahanan",
    },
    {
        title: "Laporan",
        href: "/dashboard/laporan",
    },
];

export default function NavLinks() {
    const pathName = usePathname(); // return '/dashboard/tahanan'

    return (
        <>
            {routes.map((route) => (
                <Link
                    key={route.title}
                    href={route.href}
                    className={buttonVariants({
                        variant: isCurrentUrlActive(pathName, route.href)
                            ? "default"
                            : "outline",
                        size: "lg",
                    })}
                >
                    {route.title}
                </Link>
            ))}
        </>
    );
}

function isCurrentUrlActive(pathName: string, href: string) {
    const currentPath = pathName
        .split("/")
        .filter(Boolean)
        .slice(0, 2)
        .join("/");
    const routeHref = href.split("/").filter(Boolean).join("/");

    return currentPath === routeHref;
}
