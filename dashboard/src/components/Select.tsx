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
}: {
  item: string[];
  className?: string;
  placeHolder?: string;
  query?: string;
  onSelectChange?: (query: string, value: string) => void;
}) {
  return (
    <Select>
      <SelectTrigger className={`${className}`}>
        <SelectValue placeholder={placeHolder || item[0]} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {item.map((option, index) => (
            <SelectItem
              className=" cursor-pointer"
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
