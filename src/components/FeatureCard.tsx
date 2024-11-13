import Image from "next/image";
import React from "react";
import { mainFeature as MainFeature } from "@/utils/mockup";

interface FeatureCardProps {
  image: string;
  title: string;
  detail: string;
}

export const Featured = () => {
  console.log(MainFeature);

  return (
    <div className=" flex gap-x-8 p-10 shadow-md">
      {MainFeature.map((item: FeatureCardProps, index) => (
        <div key={index} className=" flex gap-x-4">
          <Image src={item.image} width={40} height={40} alt="car" />
          <div className="space-y-2">
            <p className="text-gray-900 text-[16px] font-semibold leading-[120%]">
              {item.title}
            </p>
            <p className="text-gray-400 text-[14px] font-normal leading-[150%]">
              {item.detail}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
