"use client";

import React from "react";
import CartTotal from "@/app/(account)/shopping-cart/components/CartTotal";
import { ShoppingCart } from "../app/(account)/shopping-cart/components/ShoppingCart-Card";
import CouponCode from "@/components/Coupon";

export const Shopping = () => {
  const [total, setTotal] = React.useState(0);
  const [discount, setDiscount] = React.useState("");

  const afterDiscount = discount === "ecoFresh" ? total - total*0.2 : total;

  return (
    <div className="w-[1070px] my-10 space-y-5">
      <ShoppingCart setTotal={setTotal} />
      <CouponCode setDiscount={setDiscount} />
      <CartTotal price={afterDiscount} ship="free" />
    </div>
  );
};
