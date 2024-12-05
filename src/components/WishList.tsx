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
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                  >
                    <path
                      d="M12 23.5C18.0748 23.5 23 18.5748 23 12.5C23 6.42525 18.0748 1.5 12 1.5C5.92525 1.5 1 6.42525 1 12.5C1 18.5748 5.92525 23.5 12 23.5Z"
                      stroke="#CCCCCC"
                      strokeMiterlimit="10"
                    />
                    <path
                      d="M16 8.5L8 16.5"
                      stroke="#666666"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16 16.5L8 8.5"
                      stroke="#666666"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
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
