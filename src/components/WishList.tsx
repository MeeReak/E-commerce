"use client";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "./ui/button";
import { WishListProduct } from "@/utils/mockup";
import Social from "./Social";

interface WishListItem {
  id: number;
  name: string;
  src: string;
  type: string;
  price: number;
  qty: number;
}

const WishList = () => {
  const [products, setProduct] = useState<WishListItem[]>(WishListProduct);

  const handleRemoveItem = (id: number): void => {
    setProduct((prevProducts) => prevProducts.filter((item) => item.id !== id));
  };

  return (
    <>
      <Card>
        <CardHeader className="p-0 flex">
          <CardTitle>
            <div className="grid grid-cols-3 items-center font-normal text-[14px] text-[#808080] uppercase p-5 pb-4 border-b-2">
              <span className="pl-5 text-gray-500 text-sm font-medium leading-none tracking-[0.42px] uppercase">
                Product
              </span>
              <span className="text-gray-500 text-sm font-medium leading-none tracking-[0.42px] uppercase">
                Price
              </span>
              <span className="text-gray-500 text-sm font-medium leading-none tracking-[0.42px] uppercase">
                Stock Status
              </span>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          {products.map((product) => (
            <div
              key={product.id}
              className="grid grid-cols-6 items-center p-4 pb-4 border-b-2"
            >
              <div className="flex col-span-2 text-center items-center w-[250px]">
                <Image
                  src={product.src}
                  alt={product.name}
                  width={100}
                  height={100}
                />
                <p className="ml-4 text-gray-900 text-base font-normal leading-[150%]">
                  {product.name}
                </p>
              </div>
              <div className="col-span-2">${product.price}</div>
              <div>
                {product.qty > 0 ? (
                  <span className="text-[#2C742F] bg-[#20B52633] px-2 py-1 rounded text-sm font-normal leading-[150%]">
                    In Stock
                  </span>
                ) : (
                  <span className="text-[#EA4B48] bg-[#EA4B4833] px-2 py-1 rounded">
                    Out of Stock
                  </span>
                )}
              </div>
              <div className="flex items-center space-x-5">
                <Button className="rounded-full">Add to Cart</Button>
                <Button
                  onClick={() => handleRemoveItem(product.id)}
                  variant={"custom"}
                  className="text-black p-0"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </Button>
              </div>
            </div>
          ))}
        </CardContent>
        <CardFooter className="p-0 pl-5">
          <div className="p-6 flex items-center">
            <p className="pr-5">Share:</p>
            <Social />
          </div>
        </CardFooter>
      </Card>
    </>
  );
};

export default WishList;
