import { AccountSetting } from "@/components/AccountSetting";
import { BillingAddress } from "@/components/BillingAddress";
import { ChangePassword } from "@/components/ChangePassword";
import React from "react";

const page = () => {
  return (
    <div className="w-[1070px] space-y-6 pb-10">
      <AccountSetting />
      <BillingAddress />
      <ChangePassword />
    </div>
  );
};

export default page;
