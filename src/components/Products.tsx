import React from "react";
import { Banner } from "./Banner";
import { Product as Items } from "@/utils/mockup";
import { ProductCardY } from "@/app/components/atoms/ProductCardY";
import ProductCard from "@/app/components/atoms/ProductCardX";

export const Products = () => {
  return (
    <div>
      <p className="text-[#00B207] pt-14 text-center text-[14px] font-medium leading-[14px] tracking-[0.28px] uppercase">
        Products
      </p>
      <p className="text-[#1A1A1A] text-center pt-2 pb-9 text-[36px] font-semibold leading-[43.2px]">
        Our Featured Products
      </p>
      <div className=" flex gap-x-4">
        <div className="flex">
          <Banner
            className=" w-[248px] h-[338px]"
            subTitleStyle="text-[#1A1A1A]"
            titleStyle="text-[#00B207]"
            backgroundImage="https://my-image-storage-bucket-1234.s3.us-east-1.amazonaws.com/banner-fruits.png"
            subTitle="Summer Sale"
            title="75% off"
          />
        </div>
        {Items.slice(0, 4).map((x, index) => (
          <div key={index}>
            <ProductCardY
              id={x.id}
              imgUrl={x.src}
              price={x.price}
              rating={x.star!}
              title={x.name}
            />
          </div>
        ))}
      </div>
      <div className=" flex items-end justify-between">
        <div className=" space-y-4">
          <p className="text-gray-900 mt-6   font-medium text-lg leading-relaxed uppercase">
            Hot Deals
          </p>
          {Items.filter((item) => item.type == "hot deal").map((x, index) => (
            <div key={index}>
              <ProductCard
                id={x.id}
                imageUrl={x.src}
                price={x.price}
                rating={x.star}
                title={x.name}
              />
            </div>
          ))}
        </div>
        <div className=" space-y-4">
          <p className="text-gray-900 mt-6   font-medium text-lg leading-relaxed uppercase">
            Best Seller
          </p>
          {Items.filter((item) => item.type == "best seller").map(
            (x, index) => (
              <div key={index}>
                <ProductCard
                  id={x.id}
                  imageUrl={x.src}
                  price={x.price}
                  rating={x.star}
                  title={x.name}
                />
              </div>
            )
          )}
        </div>
        <div className=" space-y-4">
          <p className="text-gray-900 mt-6   font-medium text-lg leading-relaxed uppercase">
            Top Rated
          </p>
          {Items.filter((item) => item.type == "top rate").map((x, index) => (
            <div key={index}>
              <ProductCard
                id={x.id}
                imageUrl={x.src}
                price={x.price}
                rating={x.star}
                title={x.name}
              />
            </div>
          ))}
        </div>
        <div className="flex">
          <Banner
            className=" w-[300px] h-[370px]"
            subTitleStyle="text-[#1A1A1A]"
            titleStyle="text-center text-gray-900 font-semibold text-3xl leading-tight"
            backgroundImage="https://my-image-storage-bucket-1234.s3.us-east-1.amazonaws.com/hero-vegetable-5.png"
            subTitle="Summer Sale"
            title="Save 37% on
             Every Order"
          />
        </div>
      </div>
    </div>
  );
};
