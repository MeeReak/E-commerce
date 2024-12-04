import { AccountSetting } from "@/components/AccountSetting";
import { BillingAddress } from "@/components/BillingAddress";
import { ChangePassword } from "@/components/ChangePassword";
import React from "react";

const page = () => {
  return (
    <div className="w-[1320px] mx-auto space-y-5 pb-20">
      <AccountSetting />
      <BillingAddress />
      <ChangePassword />
    </div>
  );
};

export default page;
