import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SelectDemo({ item }: { item: string[] }) {
  return (
    <Select>
      <SelectTrigger className="w-[70px] border-none text-gray-400">
        <SelectValue placeholder={`${item[0]}`} />
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
