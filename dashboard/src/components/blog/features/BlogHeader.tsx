"use client";

import { useEffect, useState } from "react";
import { SearchIcon } from "lucide-react";
import { BlogCreate } from "./BlogCreate";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";

interface IHeaderProps {
    showAddButton?: boolean;
    enableSearch?: boolean;
    title?: string;
}

export function BlogHeader({
    showAddButton = false,
    enableSearch = false,
    title = "Header"
}: IHeaderProps) {
    const [searchQuery, setSearchQuery] = useState("");
    const [categoryFilter, setCategoryFilter] = useState(""); // State for category filter

    // Handle input change for search
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value;
        setSearchQuery(query);
    };

    // Handle category selection
    const handleCategoryChange = (value: string) => {
        setCategoryFilter(value === "all" ? "" : value); // Reset to empty string for "all"
    };

    // Update URL with search and category
    useEffect(() => {
        const params = new URLSearchParams();
        if (searchQuery) params.set("search", searchQuery);
        if (categoryFilter) params.set("category", categoryFilter);
        window.history.pushState({}, "", `?${params.toString()}`);
    }, [searchQuery, categoryFilter]);

    return (
        <div className="space-y-5 m-5">
            <div className="flex items-center justify-between gap-x-5 text-black">
                <h1 className="text-2xl font-medium text-green-500">{title}</h1>
                <div className="flex gap-x-5">
                    {enableSearch && (
                        <div className="flex items-center ml-2">
                            <SearchIcon className="size-4 text-gray-400 -mr-6" />
                            <Input
                                className="w-[200px] placeholder:text-gray-400 pl-8"
                                placeholder="Search"
                                value={searchQuery}
                                onChange={handleInputChange}
                            />
                        </div>
                    )}
                    <Select onValueChange={handleCategoryChange}>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Filter" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectItem value="all">All</SelectItem>
                                <SelectItem value="meat">Meat</SelectItem>
                                <SelectItem value="fruits">Fruits</SelectItem>
                                <SelectItem value="vegetable">
                                    Vegetable
                                </SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
                {showAddButton && <BlogCreate />}
            </div>
        </div>
    );
}
