"use client";

import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SelectDemo({
  item,
  className = "",
  placeHolder,
  selectedValue,
  onSelectChange,
}: {
  item: string[];
  className?: string;
  placeHolder?: string;
  selectedValue?: string; // Controlled value
  onSelectChange?: (value: string) => void; // Callback to notify parent
}) {
  return (
    <Select
      value={selectedValue} // Bind to the controlled value
      onValueChange={onSelectChange} // Notify parent when value changes
    >
      <SelectTrigger className={`${className}`}>
        <SelectValue placeholder={placeHolder || "Select an option"} />
      </SelectTrigger>
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
    </Select>
  );
}
