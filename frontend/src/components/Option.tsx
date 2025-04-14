"use client";

import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { SelectDemo } from "./Select";
import { optionsConfig as options } from "@/utils/mockup";

export const Option = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Initialize state from query parameters
  const [selectedValues, setSelectedValues] = useState<Record<string, string>>(
    () => Object.fromEntries(searchParams.entries())
  );

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

  // Render Select components
  const renderSelects = (optionsSlice: typeof options) => 
    optionsSlice.map(({ query, placeholder, items }) => (
      <SelectDemo
        key={query}
        query={query}
        placeHolder={placeholder}
        item={items}
        className="text-[#4D4D4D] w-[180px]"
        onSelectChange={handleSelectChange}
      />
    ));

  return (
    <div className="w-[1320px] flex justify-between">
      <div className="flex gap-x-4">{renderSelects(options.slice(0, 3))}</div>
      <div className="flex gap-4">{renderSelects(options.slice(3))}</div>
    </div>
  );
};
