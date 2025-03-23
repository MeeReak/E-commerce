"use client";

import { useEffect, useState } from "react";
import { SearchIcon } from "lucide-react";
import { DialogDemo } from "./product/CreateForm";
import { Input } from "./ui/input";
import { Option } from "./Option";

interface IHeaderProps {
    showAddButton?: boolean;
    enableSearch?: boolean;
    title?: string;
}

export function Header({
    showAddButton = false,
    enableSearch = false,
    title = "Header"
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
            <h1 className=" pl-5 text-lg text-gray-600 ">{title}</h1>
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
                {/* <Option /> */}
                {showAddButton && <DialogDemo />}
            </div>
        </div>
    );
}
