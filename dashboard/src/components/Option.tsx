"use client";

import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { SelectDemo } from "./Select";

export const Option = () => {
    const router = useRouter();
    const searchParams = useSearchParams();

    // Initialize state from query parameters
    const [selectedValues, setSelectedValues] = useState<
        Record<string, string>
    >(() => Object.fromEntries(searchParams.entries()));

    // Update query parameters and sync state
    const handleSelectChange = (query: string, value: string) => {
        const updatedValues = { ...selectedValues, [query]: value };
        setSelectedValues(updatedValues);

        const queryString = new URLSearchParams(updatedValues).toString();
        router.push(`?${queryString}`);
    };

    // Sync state with URL changes
    useEffect(() => {
        setSelectedValues(Object.fromEntries(searchParams.entries()));
    }, [searchParams]);

    const releaseOptions = {
        query: "release",
        placeholder: "Select Release",
        items: ["New", "Old"]
    };

    return (
        <div className="flex">
            <SelectDemo
                key={releaseOptions.query}
                query={releaseOptions.query}
                placeholder={releaseOptions.placeholder}
                items={releaseOptions.items}
                className="text-[#4D4D4D] w-[180px]"
                onSelectChange={handleSelectChange}
                selectedValue={selectedValues[releaseOptions.query]}
            />
        </div>
    );
};
