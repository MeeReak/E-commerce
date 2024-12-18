import { AccountSetting } from "@/components/AccountSetting";
import { BillingAddress } from "@/components/BillingAddress";
import { ChangePassword } from "@/components/ChangePassword";
import { NaviDash } from "@/components/NaviDash";
import React from "react";

const page = () => {
  return (
    <>
      <div className="flex gap-x-6 justify-center">
        <NaviDash />
        <div className="w-[1320px] mx-auto space-y-5 pb-20">
          <AccountSetting />
          <BillingAddress />
          <ChangePassword />
        </div>
      </div>
    </>
  );
};

export default page;
