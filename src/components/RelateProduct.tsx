import React from "react";
import { Product as Items } from "@/utils/mockup";
import { ProductCardY } from "@/app/components/atoms/ProductCardY";

export const RelateProduct = () => {
  return (
    <div>
      <p className="text-[#1A1A1A] mb-8 text-2xl font-semibold leading-[120%]">
        RelateProduct
      </p>
      <div className=" flex gap-5">
        {Items.filter((item) => item.category == "vegetable").slice(0,5).map((x, index) => (
          <div key={index}>
            <ProductCardY
              id={x.id}
              imgURl={x.src}
              price={x.price}
              rating={x.star}
              title={x.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
