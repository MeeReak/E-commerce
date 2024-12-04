"use client";

import React, { useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { ProductCardY } from "@/app/components/atoms/ProductCardY";
import { Product as Items } from "@/utils/mockup";

export const ProductFilter = () => {
  const searchParams = useSearchParams();

  // Extract query parameters
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const queryParams = {
    priceOrder: searchParams.get("price")?.toLowerCase(),
    rating: searchParams.get("rating"),
    show: searchParams.get("show"),
    category: searchParams.get("category")?.toLowerCase(),
    dateOrder: searchParams.get("release")?.toLowerCase(),
    search: searchParams.get("q")?.toLowerCase(),
  };

  // Filter and sort products
  const filteredItems = useMemo(() => {
    let filtered = [...Items];

    // Filter by category
    if (queryParams.category && queryParams.category !== "all") {
      filtered = filtered.filter(
        (item) => item.category.toLowerCase() === queryParams.category
      );
    }

    // Filter by rating
    if (queryParams.rating && queryParams.rating !== "all") {
      filtered = filtered.filter(
        (item) => item.star === Number(queryParams.rating)
      );
    }

    // Sort by price
    if (queryParams.priceOrder && queryParams.priceOrder !== "all") {
      filtered.sort((a, b) =>
        queryParams.priceOrder === "high to low"
          ? b.price - a.price
          : a.price - b.price
      );
    }

    // Sort by release date
    if (queryParams.dateOrder) {
      filtered.sort((a, b) =>
        queryParams.dateOrder === "new"
          ? new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime()
          : new Date(a.dateAdded).getTime() - new Date(b.dateAdded).getTime()
      );
    }

    // Limit number of items
    if (queryParams.show && queryParams.show !== "all") {
      filtered = filtered.slice(0, parseInt(queryParams.show, 10));
    }

    // Filter by search query
    if (queryParams.search) {
      filtered = filtered.filter(
        (item) =>
          item.name.toLowerCase().includes(queryParams.search || "") ||
          item.category.toLowerCase().includes(queryParams.search || "")
      );
    }

    return filtered;
  }, [queryParams]);

  // Render products
  return (
    <div className="pb-5">
      {filteredItems.length > 0 ? (
        <div className="grid grid-cols-5 gap-4">
          {filteredItems.map((item, index) => (
            <ProductCardY
              key={index}
              imgUrl={item.src}
              price={item.price}
              rating={item.star}
              title={item.name}
              id={item.id}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-10">
          <p className="text-gray-500   text-lg">
            No products match the selected filters.
          </p>
        </div>
      )}
    </div>
  );
};
