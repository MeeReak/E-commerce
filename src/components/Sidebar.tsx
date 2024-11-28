import React from "react";
import { Input } from "./ui/input";
import { SearchIcon } from "lucide-react";
import Link from "next/link";

export const Sidebar = () => {
  const Category = [
    { name: "Fresh Fruit", number: 134 },
    { name: "Fresh Vegetables", number: 150 },
    { name: "Cooking", number: 54 },
    { name: "Beverages", number: 43 },
    { name: "Snacks", number: 47 },
    { name: "Beauty & Health", number: 38 },
    { name: "Bread & Bakery", number: 15 },
  ];

  const Tag = [
    "Healthy",
    "Vegetarain",
    "Bread",
    "Vitamins",
    "Snack",
    "Tiffin",
    "Meat",
    "Launch",
  ];

  // const Images = [
  //   "images/blog-vegetable.jpg",
  //   "images/blog-brocoli.png",
  //   "images/salad.avif",
  //   "images/chilli.jpg",
  //   "images/blog-carrot.jpg",
  //   "images/blog-pea.webp",
  //   "images/blog-orange.png",
  // ];

  return (
    <div className=" w-[30%]">
      <div className="pb-7 border-b border-gray-200">
        <Input
          className="w-[424px] py-5 rounded-md "
          type="text"
          placeholder="Search..."
          leftIcon={<SearchIcon className=" text-gray-900 stroke-[1.5px]" />}
        />
      </div>
      <div className=" pb-7 border-b border-gray-200">
        <p className="text-gray-900 pt-5 text-lg font-medium leading-7">
          Top Categories
        </p>
        <div>
          {Category.map((item, index) => (
            <Link
              href={`/blog-list?category=${item.name}`}
              key={index}
              className="flex justify-between items-center py-1"
            >
              <p className="text-gray-800 hover:text-gray-950 text-sm font-normal leading-6">
                {item.name}
              </p>
              <p className="text-gray-500 text-sm font-normal leading-6">
                ({item.number})
              </p>
            </Link>
          ))}
        </div>
      </div>
      <div>
        <p className="text-gray-900 pt-5 text-lg font-medium leading-7 ">
          Popular Tag
        </p>
        <div className="pt-4 flex flex-wrap">
          {Tag.map((item, index) => (
            <Link
              className=" bg-[#F2F2F2] m-1 ml-0 text-gray-900 px-4 py-1 rounded-full text-sm font-normal leading-6 hover:bg-gray-200"
              key={index}
              href={`/blog-list?tag=${item}`}
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
      <div></div>
    </div>
  );
};
