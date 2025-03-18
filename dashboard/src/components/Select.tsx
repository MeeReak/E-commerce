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

export function SelectDemo({
    item,
    className = "",
    placeHolder,
    selectedValue,
    onSelectChange,
    readOnly = false // New prop to make the component readonly
}: {
    item: string[];
    className?: string;
    placeHolder?: string;
    selectedValue?: string; // Controlled value
    onSelectChange?: (value: string) => void; // Callback to notify parent
    readOnly?: boolean; // Prop to toggle readonly mode
}) {
    return (
        <Select
            value={selectedValue} // Bind to the controlled value
            onValueChange={!readOnly ? onSelectChange : undefined} // Disable interaction if readonly
        >
            <SelectTrigger
                className={`${className} ${
                    readOnly ? "cursor-not-allowed opacity-50" : ""
                }`} // Add visual cue for readonly
                disabled={readOnly} // Disable trigger interaction
            >
                <SelectValue placeholder={placeHolder || "Select an option"} />
            </SelectTrigger>
            {!readOnly && (
                <SelectContent>
                    <SelectGroup>
                        {item.map((option, index) => (
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
}
