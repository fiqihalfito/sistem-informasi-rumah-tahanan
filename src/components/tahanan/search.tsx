"use client";

import { SearchIcon } from "lucide-react";
import { Input } from "../ui/input";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export default function SearchBar({ placeholder }: { placeholder: string }) {
    const pathName = usePathname();
    const searchParams = useSearchParams();
    const router = useRouter();

    const handleChange = useDebouncedCallback((query: string) => {
        const params = new URLSearchParams(searchParams);
        if (query) {
            params.set("query", query);
        } else {
            params.delete("query");
        }

        router.replace(`${pathName}?${params.toString()}`);
    }, 300);

    return (
        <div className="grow">
            {/* <h6 className="mb-2 font-medium">Cari Tahanan</h6> */}
            <div className="relative">
                <Input
                    className="py-7 px-14 text-base"
                    placeholder={placeholder}
                    onChange={(e) => handleChange(e.target.value)}
                    defaultValue={searchParams.get("query")?.toString()}
                />
                <SearchIcon className="absolute top-1/2 left-4 -translate-y-1/2 text-neutral-400" />
            </div>
        </div>
    );
}
