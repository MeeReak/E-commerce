import { XIcon } from "lucide-react";
import React from "react";

export const ActiveFiltered = () => {
  const Filter = ["Vegetable", "Low to High", "5", "New", "10"];
  return (
    <div className=" border-[1px] w-screen ">
      <div className=" flex space-x-3 mx-auto w-[1320px] py-5">
        <p className="text-gray-500 font-poppins text-sm font-normal leading-[21px]">
          Active Filters:
        </p>
        <div className=" space-x-5 flex">
          {Filter.map((x, index) => {
            return (
              <div key={index} className=" flex items-center space-x-1">
                <p className="text-gray-900 flex space-x-4 font-poppins text-sm font-medium leading-[21px]">
                  {x}
                </p>
                <XIcon className=" size-4 text-[#9A9CAA] hover:text-[#1A1A1A]" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
