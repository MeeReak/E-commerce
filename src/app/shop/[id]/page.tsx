import React from "react";
import { ActiveFiltered } from "@/components/ActiveFiltered";
import { BannerDiscount } from "@/components/BannerDiscount";
import { Option } from "@/components/Option";
import { ProductFilter } from "@/components/ProductFilter";
import { PaginationDemo } from "@/components/Pagination";

export default async function page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  return (
    <div className="flex flex-col items-center space-y-5 pb-5">
      {/* discount banner */}
      <BannerDiscount />
      {/* Filter Option */}
      <Option />

      {/* Filtered */}
      <ActiveFiltered />

      {/* Product */}
      <ProductFilter />

      {/* Pagination */}
      <PaginationDemo pageName="shop" param={id} />
    </div>  
  );
}
