import { Quantity } from "@/components/Quatity";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Product } from "@/utils/mockup";
import Image from "next/image";
import React from "react";
const ShoppingCart = () => {
  return (
    <>
      <Table className="border border-[#E6E6E6] rounded-xl">
        <TableHeader>
          <TableRow>
            <TableHead>Product</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>SubTotal</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="border-b">
          {Product.map((product) => (
            <TableRow key={product.name}>
              <TableCell className=" space-x-2 flex text-center items-center">
                <Image
                  src={product.src}
                  alt=""
                  width={100}
                  height={100}
                ></Image>
                <span>{product.name}</span>
              </TableCell>
              <TableCell>${product.price}</TableCell>
              <TableCell>
                <div className="w-[60%]">
                  <Quantity/>
                </div>
              </TableCell>
              <TableCell>Sub total</TableCell>
              <TableCell>
                <Button variant={"custom"} className="text-black p-0">
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
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableBody className="w-full">
          <TableRow>
            <TableCell className="flex justify-between w-1/2">
              <div className="flex">
                <Button
                  variant={"custom"}
                  className="rounded-full bg-[#F2F2F2] text-[#4D4D4D] font-bold"
                >
                  Return to shop
                </Button>
              </div>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
};

export default ShoppingCart;
