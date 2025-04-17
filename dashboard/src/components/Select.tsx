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

interface SelectDemoProps {
    items: string[];
    query?: string;
    className?: string;
    placeholder?: string;
    selectedValue?: string;
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
        <Select value={selectedValue} onValueChange={handleValueChange}>
            <SelectTrigger className={`${className} `}>
                <SelectValue placeholder={placeholder || "Select an option"} />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    {items.map((option, index) => (
                        <SelectItem
                            className="cursor-pointer"
                            key={index}
                            value={option.toLowerCase()}
                        >
                            {option}
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    );
};
