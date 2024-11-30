import React from "react";
import { Input } from "./ui/input";
import { CalendarIcon, SearchIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

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

  const ImagesBlog = [
    "/images/blog-vegetable.avif",
    "/images/blog-brocoli.png",
    "/images/blog-salad.avif",
    "/images/blog-chilli.jpg",
    "/images/blog-carrot.jpg",
    "/images/blog-pea.webp",
    "/images/blog-orange.png",
    "/images/blog-cucumber.jpg",
  ];

  // const Recent = [
  //   "/images/blog-mango.png",
  //   "/images/blog-orange.png",
  //   "/images/blog-black-berry.png",
  // ];

  return (
    <div className=" w-[33%]">
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
      <div className=" pb-7 border-b border-gray-200">
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
      <div className=" flex gap-2 pt-7 flex-wrap pb-7 border-b border-gray-200 ">
        {ImagesBlog.map((item, index) => (
          <Image
            key={index}
            className=" object-cover w-[100px] h-[100px] rounded-sm"
            src={item}
            alt={`Blog image ${index}`}
            width={100}
            height={100}
          />
        ))}
      </div>
      <div className=" pb-7 border-b pt-7 border-gray-200 ">
        <p className="pb-4">Recently Added</p>
        <div className="flex items-center gap-x-3">
          <Image
            alt="blog"
            className=" w-[100px] h-[70px] rounded-sm"
            src={"/images/blog-mango.png"}
            width={100}
            height={100}
          />
          <div>
            <p className=" text-gray-900 text-base font-medium leading-6">
              Curabitur porttitor orci eget nequ accumsan.
            </p>
            <div className=" flex gap-x-2">
              <CalendarIcon className=" size-5 text-[#00B307]" />
              <p className="text-gray-600 text-sm font-normal leading-6">
                Apr 25, 2021
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
