import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const CouponCode = ({
  setDiscount,
}: {
  setDiscount: (dis: string) => void;
}) => {
  return (
    <div className=" flex justify-between items-center p-5 border rounded-md">
      <p className="text-gray-900 font-poppins text-xl font-medium leading-7.5">
        Coupon Code
      </p>
      <div className=" flex">
        <Input
          type="text"
          placeholder="Enter code"
          className="rounded-full w-[640px] px-6 py-6 placeholder:text-gray-400  placeholder:text-base placeholder:font-normal placeholder:leading-6"
        />
        <Button
        onClick={() => setDiscount("ecoFresh")}
          variant={"custom"}
          className="rounded-full px-10 bg-[#333333] -ml-32 z-10 text-white   text-base font-semibold leading-[1.25]"
        >
          Apply Coupon
        </Button>
      </div>
    </div>
  );
};

export default CouponCode;
