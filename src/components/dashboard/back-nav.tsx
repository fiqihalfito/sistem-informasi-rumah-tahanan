import { ChevronLeftIcon } from "lucide-react";
import Link, { LinkProps } from "next/link";
import React from "react";

interface BackNavProp extends LinkProps {
    children: React.ReactNode;
}

export default function BackNav({ children, href, ...props }: BackNavProp) {
    return (
        <Link
            href={href}
            className="flex items-center gap-x-1 text-sm text-slate-600 hover:text-black hover:underline underline-offset-4 w-fit mb-4"
        >
            <ChevronLeftIcon size={18} />
            {children}
        </Link>
    );
}
