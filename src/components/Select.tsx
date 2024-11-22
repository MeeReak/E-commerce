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
  className = "w-[70px]  text-gray-400",
  placeHolder,
}: {
  item: string[];
  className?: string;
  placeHolder?: string;
}) {
  return (
    <Select>
      <SelectTrigger className={`${className}`}>
        <SelectValue placeholder={placeHolder ? placeHolder : `${item[0]}`} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {item.map((_x, index) => {
            return (
              <SelectItem key={index} value={_x}>
                {_x}
              </SelectItem>
            );
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
