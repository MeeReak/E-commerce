import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const CouponCode = () => {
  return (
    <div className="border p-5 flex text-center items-center gap-5 w-full">
      <p className="w-32">Coupon Code</p>
      <div className="flex w-full">
        <Input
          type="text"
          placeholder="Your email address"
          className="rounded-full w-[640px] px-6 py-6"
        />
        <Button variant={"custom"} className="rounded-full px-10 bg-[#333333] -ml-32 z-10">
          Apply Coupon
        </Button>
      </div>
    </div>
  );
};

export default CouponCode;
