"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { XIcon } from "lucide-react";
import React, { useMemo } from "react";

export const ActiveFiltered = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Extract non-"all" query values and ensure unique filter values
  const activeFilters = useMemo(() => {
    const filters = Array.from(searchParams.entries())
      .filter(([, value]) => value !== "all") // Exclude filters with value "all"
      .map(([key, value]) => ({ key, value }));

    // Remove duplicate filter values by using a Set
    const uniqueFiltersMap: Record<string, string> = {};

    filters.forEach(({ key, value }) => {
      // If the value hasn't been added already, store it in uniqueFiltersMap
      if (!uniqueFiltersMap[value]) {
        uniqueFiltersMap[value] = key;
      }
    });

    return Object.entries(uniqueFiltersMap).map(([value, key]) => ({
      key,
      value,
    }));
  }, [searchParams]);

  const handleDelete = (filterKey: string) => {
    const updatedParams = new URLSearchParams(searchParams.toString());
    updatedParams.delete(filterKey);
    router.push(`?${updatedParams.toString()}`);
  };

  return (
    <div className="border border-x-0 w-full">
      <div className="flex space-x-3 mx-auto w-[1320px] py-5">
        <p className="text-gray-500   text-sm font-normal leading-[21px]">
          Active Filters:
        </p>
        <div className="flex space-x-5">
          {activeFilters.length > 0 ? (
            activeFilters.map(({ key, value }) => (
              <div key={key} className="flex items-center space-x-1">
                <p className="text-gray-900   text-sm font-medium leading-[21px]">
                  {value.toUpperCase()}
                </p>
                <XIcon
                  onClick={() => handleDelete(key)}
                  className="size-4 text-[#9A9CAA] hover:text-[#1A1A1A] cursor-pointer"
                />
              </div>
            ))
          ) : (
            <p className="text-gray-400   text-sm">No active filters</p>
          )}
        </div>
      </div>
    </div>
  );
};
