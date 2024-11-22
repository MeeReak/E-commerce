import React from "react";
import { ActiveFiltered } from "@/components/ActiveFiltered";
import { BannerDiscount } from "@/components/BannerDiscount";
import { Option } from "@/components/Option";
import { ProductFilter } from "@/components/ProductFilter";
import { PaginationDemo } from "@/components/Pagination";

export default function page() {
  return (
    <div className="flex flex-col items-center space-y-5 h-[1000vh]">
      {/* discount banner */}
      <BannerDiscount />
      {/* Filter Option */}
      <Option />

      {/* Filtered */}
      <ActiveFiltered />

      {/* Product */}
      <ProductFilter />

      {/* Pagination */}
      <PaginationDemo pageName="product" param="3"/>
    </div>
  );
}
