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
import Link from "next/link";
import React from "react";
const ShoppingCart = () => {
  return (
    <>
      <Table className="border border-[#E6E6E6] ">
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
          {Product.slice(0, 2).map((product) => (
            <TableRow key={product.name}>
              <TableCell className=" space-x-2 flex text-center items-center">
                <Image src={product.src} alt="" width={100} height={100} />
                <p className="text-gray-900 text-base font-normal leading-[1.5]">
                  {product.name}
                </p>
              </TableCell>
              <TableCell className="text-gray-900 text-base font-normal leading-[1.5]">
                ${product.price}
              </TableCell>
              <TableCell>
                <div className="w-fit">
                  <Quantity />
                </div>
              </TableCell>
              <TableCell>{`$${(product.price * 3).toFixed(2)}`}</TableCell>
              <TableCell>
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
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableBody className="w-full">
          <TableRow>
            <TableCell className="flex justify-between w-1/2">
              <Link href={`/shop/1`}>
                <Button
                  variant={"custom"}
                  className="rounded-full bg-[#F2F2F2] text-gray-700 text-sm font-semibold leading-[1.2]"
                >
                  Return to shop
                </Button>
              </Link>
            </TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell>
              <Button
                variant={"custom"}
                className="rounded-full -ml-28 bg-[#F2F2F2] text-gray-700   text-sm font-semibold leading-[1.2]"
              >
                Update Cart
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
};

export default ShoppingCart;
