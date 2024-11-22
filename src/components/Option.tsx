import React from "react";
import { SelectDemo } from "./Select";

export const Option = () => {
  const Category = ["Vegetable", "Fruit", "Meat", "Fish", "Egg", "Milk"];
  const Price = ["Low to High", "High to Low"];
  const Rating = ["1", "2", "3", "4", "5"];
  const Release = ["New", "Old"];
  const Show = ["10", "20", "30", "40", "50"];

  return (
    <div className="w-[1320px] flex justify-between ">
      <div className=" flex gap-x-4">
        {/* Category */}
        <SelectDemo
          placeHolder="Select Category"
          item={Category}
          className=" text-[#4D4D4D] w-[180px]"
        />
        {/* Price  */}
        <SelectDemo
          placeHolder="Select Price"
          item={Price}
          className=" text-[#4D4D4D] w-[180px]"
        />
        {/* Rating */}
        <SelectDemo
          placeHolder="Select Rating"
          item={Rating}
          className=" text-[#4D4D4D] w-[180px]"
        />{" "}
      </div>
      <div className=" flex gap-4">
        {/* Release  */}
        <SelectDemo
          placeHolder="Select Release"
          item={Release}
          className=" text-[#4D4D4D] w-[180px]"
        />
        {/* Show */}
        <SelectDemo
          placeHolder={`Select Show`}
          item={Show}
          className=" text-[#4D4D4D] w-[180px]"
        />{" "}
      </div>
    </div>
  );
};
