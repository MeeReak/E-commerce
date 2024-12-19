import { BillingInformation } from "@/components/BillingInformation";
import OrderSummary from "@/components/OrderSummary";
import React from "react";

export default function page() {
  return (
    <div className="w-[1320px] pb-20 mx-auto space-y-5">
      <header className="mt-5 text-2xl font-bold">Billing Information</header>
      <div className="flex justify-between gap-5">
        <BillingInformation />
        <OrderSummary
          imageUrl="https://my-image-storage-bucket-1234.s3.us-east-1.amazonaws.com/Apple/white-apple-1.jpg"
          name="Apple"
          price={10}
          qty={10}
          ship="free"
        />
      </div>
    </div>
  );
}
