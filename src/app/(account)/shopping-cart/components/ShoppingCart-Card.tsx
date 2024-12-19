"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  // TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Product as data } from "@/utils/mockup";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Quantity } from "@/components/Quatity";
import { Button } from "@/components/ui/button";

interface WishListItem {
  id: string;
  name: string;
  src: string;
  type: string;
  price: number;
  discount: number;
  stockStatus: string;
  qty: number;
}

export function ShoppingCart({
  setTotal,
}: {
  setTotal: (total: number) => void;
}) {
  const [products, setProducts] = useState<WishListItem[]>(
    data.map((product) => ({ ...product, qty: 1 })) // Add default qty to each product
  );

  const handleRemoveItem = (id: string): void => {
    setProducts((prevProducts) =>
      prevProducts.filter((item) => item.id !== id)
    );
  };

  const handleTotal = () => {
    const total = products.reduce((acc, product) => {
      return acc + product.price * product.qty;
    }, 0);
    setTotal(total);
    console.log("hi", total);
  };

  useEffect(() => {
    const total = products.reduce((acc, product) => {
      return acc + product.price * product.qty;
    }, 0);
    setTotal(total);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className=" border border-gray-200 rounded-md">
      <Table>
        <TableCaption className=" border-t ">
          <div className=" flex justify-between items-center p-5">
            <Button
              className=" rounded-full text-gray-700 font-poppins text-sm font-semibold leading-tight bg-gray-100 hover:bg-gray-200"
              variant={"custom"}
            >
              Return to shop
            </Button>
            <Button
              onClick={handleTotal}
              className=" rounded-full text-gray-700 font-poppins text-sm font-semibold leading-tight bg-gray-100 hover:bg-gray-200"
              variant={"custom"}
            >
              Update Cart
            </Button>
          </div>
        </TableCaption>
        <TableHeader>
          <TableRow className="hover:bg-white text-gray-500 font-medium text-xs tracking-wider uppercase leading-none">
            <TableHead className="pl-6">Product</TableHead>
            <TableHead>price</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>SubTotal</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.slice(0, 6).map((invoice) => (
            <TableRow
              key={invoice.id}
              className="text-[#333333] font-poppins text-sm font-normal leading-[1.5]"
            >
              <TableCell className="pl-6 py-3 flex items-center gap-x-5 text-gray-900 font-normal text-base leading-6">
                <Image
                  src={invoice.src}
                  alt={invoice.name}
                  width={100}
                  height={100}
                />
                {invoice.name}
              </TableCell>
              <TableCell className="w-[250px] text-gray-900 font-normal text-base leading-6">
                ${invoice.price.toFixed(2)}
                <span className="pl-1 text-gray-400 font-normal text-base leading-6 line-through">
                  {" "}
                  $
                  {(
                    invoice.price -
                    invoice.price * (invoice.discount / 100)
                  ).toFixed(2)}
                </span>
              </TableCell>
              <TableCell>
                <div className=" flex ">
                  <Quantity
                    id={invoice.id}
                    qty={invoice.qty}
                    setQty={(id, newQty) =>
                      setProducts((prevProducts) =>
                        prevProducts.map((product) =>
                          product.id === id
                            ? { ...product, qty: newQty }
                            : product
                        )
                      )
                    }
                  />
                </div>
              </TableCell>
              <TableCell className=" text-gray-900 font-poppins text-base font-medium leading-6">
                ${(invoice.price * invoice.qty).toFixed(2)}
              </TableCell>
              <TableCell className=" w-[10px]">
                <div className=" flex gap-x-5">
                  <Button
                    onClick={() => handleRemoveItem(invoice.id)}
                    variant={"custom"}
                    className="text-black p-0 pr-5"
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
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
