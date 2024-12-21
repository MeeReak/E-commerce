"use client";

import React from "react";
import CartTotal from "@/app/(account)/shopping-cart/_components/CartTotal";
import { ShoppingCart } from "../app/(account)/shopping-cart/_components/ShoppingCart-Card";
import CouponCode from "@/components/Coupon";

export const Shopping = () => {
  const [total, setTotal] = React.useState(0);
  const [discount, setDiscount] = React.useState("");

  console.log(discount);
  const afterDiscount = discount === "ecoFresh" ? total - total * 0.2 : total;

  return (
    <div className="w-[1070px] mb-10 space-y-5 space-x-6 flex items-start">
      <div className=" mt-10 w-[70%]">
        <ShoppingCart setTotal={setTotal} />
        <CouponCode setDiscount={setDiscount} />
      </div>
      <CartTotal price={afterDiscount} ship="free" />
    </div>
  );
};
