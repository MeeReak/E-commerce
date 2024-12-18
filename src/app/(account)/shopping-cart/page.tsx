import React from "react";
import ShoppingCart from "./components/ShoppingCart-Card";
import CartTotal from "./components/CartTotal";
import CouponCode from "@/components/Coupon";
import { NaviDash } from "@/components/NaviDash";
export default function page() {
  return (
    <div className=" flex">
      <NaviDash />
      <div className="w-[1320px] pb-20 mx-auto space-y-5 mt-10" >
        {/* <header className="text-center mt-5 text-2xl font-bold">
          Shopping Cart
        </header> */}
        <div className="flex justify-between gap-5">
          <div className="space-y-5 w-full">
            <ShoppingCart />
            <CouponCode />
          </div>
          <CartTotal price={10} ship="free" />
        </div>
      </div>
    </div>
  );
}
