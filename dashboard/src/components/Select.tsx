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
    onSelectChange?: (query: string, value: string) => void;
    readOnly?: boolean;
}

export const SelectDemo: React.FC<SelectDemoProps> = ({
    items,
    query = "",
    className = "",
    placeholder,
    selectedValue,
    onSelectChange,
    readOnly = false
}) => {
    const handleValueChange = (value: string) => {
        if (!readOnly && onSelectChange) {
            onSelectChange(query, value);
        }
    };

    return (
        <Select
            value={selectedValue}
            onValueChange={!readOnly ? handleValueChange : undefined}
        >
            <SelectTrigger
                className={`${className} ${readOnly ? "cursor-not-allowed" : ""}`}
                disabled={readOnly}
            >
                <SelectValue placeholder={placeholder || "Select an option"} />
            </SelectTrigger>
            {!readOnly && (
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
            )}
        </Select>
    );
};
