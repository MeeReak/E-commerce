"use client";

import { useEffect, useState } from "react";
import { SearchIcon } from "lucide-react";
import { DialogDemo } from "./product/Create";
import { Input } from "./ui/input";
import { BlogCreate } from "./blog/features/BlogCreate";

interface IHeaderProps {
    showAddButton?: boolean;
    enableSearch?: boolean;
    title?: string;
    blog?: boolean;
}

export function Header({
    showAddButton = false,
    enableSearch = false,
    title = "Header",
    blog
}: IHeaderProps) {
    const [searchQuery, setSearchQuery] = useState("");

    // Handle input change
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value;
        setSearchQuery(query);

        // Update the URL with the search query
    };

    useEffect(() => {
        window.history.pushState({}, "", `?search=${searchQuery}`);
    }, [searchQuery]);

    return (
        <div className="flex items-center justify-between">
            <h1 className=" pl-5 text-2xl font-medium text-green-500 ">
                {title}
            </h1>
            <div className="flex mx-5 h-20 items-center justify-end gap-x-5 text-black">
                {enableSearch && (
                    <div className="flex items-center">
                        <SearchIcon className=" size-4 text-gray-400 -mr-6" />
                        <Input
                            className="w-[200px] placeholder:text-gray-400 pl-8"
                            placeholder="Search"
                            value={searchQuery}
                            onChange={handleInputChange} // Update searchQuery on input change
                        />
                    </div>
                )}
                {showAddButton && (
                    <div>{blog ? <BlogCreate /> : <DialogDemo />}</div>
                )}
            </div>
        </div>
    );
}
