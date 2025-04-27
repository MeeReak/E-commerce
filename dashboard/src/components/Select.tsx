"use client";

import * as React from "react";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";

interface Category {
    id: string;
    name: string;
}

interface SelectDemoProps {
    items: Category[];
    query?: string;
    className?: string;
    placeholder?: string;
    selectedValue?: { id: string };
    onSelectChange: (query: string, value: string) => void;
}

export const SelectDemo: React.FC<SelectDemoProps> = ({
    items,
    query = "",
    className = "",
    placeholder,
    selectedValue,
    onSelectChange
}) => {
    const handleValueChange = (value: string) => {
        onSelectChange(value, query);
    };
    return (
        <Select value={selectedValue?.id} onValueChange={handleValueChange}>
            <SelectTrigger className={`${className} `}>
                <SelectValue placeholder={placeholder || "Select an option"} />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    {items.map((option) => (
                        <SelectItem
                            className="cursor-pointer"
                            key={option.id}
                            value={option.id}
                        >
                            {option.name}
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    );
};
