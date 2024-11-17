import React from "react";
import { CountdownTimer } from "./CountdownTimer";
import { Banner } from "./Banner";

export const Banners = () => {
  return (
    <div className=" flex justify-between">
      <div className="flex ">
        <Banner
          subTitle="best deal"
          className="w-[424px] h-[536px]"
          title="Sale of the Month"
        >
          <CountdownTimer />
        </Banner>
      </div>
      <div className="flex ">
        <Banner
          backgroundImage="/images/banner-meat.png"
          subTitle="85% Fat Free"
          title="Low-Fat Meat"
          className="w-[424px] h-[536px]"
        >
          <div className=" flex items-center mb-6 gap-x-2">
            <p className="text-white text-center text-lg font-normal leading-[1.5]">
              Start at
            </p>
            <p className=" text-[#FF8A00] text-center  text-xl font-semibold leading-[1.5]">
              $79.99
            </p>
          </div>
        </Banner>
      </div>
      <div className="flex ">
        <Banner
          className="w-[424px] h-[536px]"
          subTitleStyle="text-[#1A1A1A]"
          titleStyle="text-[#1A1A1A]"
          backgroundImage="/images/banner-fruit.png"
          subTitle="Summer Sale"
          title="100% Fresh Fruit"
        >
          <div className=" flex items-center gap-x-3 mb-6">
            <p className=" text-[#1A1A1A] text-lg font-normal leading-[1.5]">
              Up to
            </p>
            <p className=" bg-black px-3 py-1 rounded-sm uppercase text-[#FCC900] text-lg font-semibold leading-[1.5]">
              64% off
            </p>
          </div>
        </Banner>
      </div>
    </div>
  );
};
