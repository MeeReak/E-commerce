import React from "react";
import ShoppingCart from "./components/ShoppingCart-Card";
import CartTotal from "./components/CartTotal";
import CouponCode from "@/components/Coupon";
export default function page() {
  return (
    <>
      <div className="w-[1320px] h-[1000vh] mx-auto space-y-5">
        <header className="text-center mt-5 text-2xl font-bold">
          Shopping Cart
        </header>
        <div className="flex justify-between gap-5">
          {/* <span className="space-y-5">
            <ShoppingCart />
            <CouponCode />
          </span> */}
          <div className="space-y-5 w-full">
            <ShoppingCart />
            <CouponCode />
          </div>
          <CartTotal price={10} ship="free" />
        </div>
      </div>
    </>
  );
}
