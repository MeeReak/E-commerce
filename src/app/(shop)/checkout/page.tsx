import { BillingInformation } from "@/components/BillingInformation";
import OrderSummary from "@/components/OrderSummary";
import React from "react";

export default function page() {
  return (
    <div className="w-[1320px] h-[1000vh] mx-auto space-y-5">
      <header className="mt-5 text-2xl font-bold">Billing Information</header>
      <div className="flex justify-between gap-5">
        <BillingInformation />
        <OrderSummary
          imageUrl="/images/Apple.png"
          name="ss"
          price={10}
          qty={10}
          ship="free"
        />
      </div>
    </div>
  );
}
