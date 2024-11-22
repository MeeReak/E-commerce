import React from "react";
import { ProductCardY } from "@/app/components/atoms/ProductCardY";
import { Product as Items } from "@/utils/mockup";

export const ProductFilter = () => {
  return (
    <div className=" flex gap-x-4">
      {Items.filter((item) => item.type == "discount").map((x, index) => (
        <div key={index}>
          <ProductCardY
            imgURl={x.src}
            price={x.price}
            rating={x.star}
            title={x.name}
          />
        </div>
      ))}
    </div>
  );
};
