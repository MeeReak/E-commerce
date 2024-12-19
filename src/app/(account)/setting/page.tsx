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
        <div className="w-[1070px] space-y-6 pb-10">
          <AccountSetting />
          <BillingAddress />
          <ChangePassword />
        </div>
      </div>
    </>
  );
};

export default page;
