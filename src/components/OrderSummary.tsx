import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
type OrderSummaryProps = {
  ship: string;
  price: number;
};
const OrderSummary = ({ ship, price }: OrderSummaryProps) => {
  return (
    <>
      <Card className="w-[424px]">
        <CardHeader>
          <CardTitle>Order Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <p>IMAGE</p>
        </CardContent>
        <CardContent className="space-y-5">
          <div className="flex justify-between items-center pb-4  border-b-2">
            <p>Subtotal:</p>
            <p>${price}</p>
          </div>
          <div className="flex justify-between items-center pb-4  border-b-2">
            <p>Shipping:</p>
            <p>{ship}</p>
          </div>
          <div className="flex justify-between items-center">
            <p>Total:</p>
            <p className="font-semibold text-[16px]">${price}</p>
          </div>
        </CardContent>
        <CardContent className="space-y-4">
          <h1>Payment Method</h1>
          {[
            { method: "Cash on delivery" },
            { method: "Paypal" },
            { method: "Amazon Paypal" },
          ].map((item) => (
            <div key={item.method} className="flex space-x-5">
              {/* <Input type="checkbox">{item.method}</Input> */}
              <input type="checkbox" />
              <p>{item.method}</p>
            </div>
          ))}
        </CardContent>
        <CardFooter>
          <Button className="w-full rounded-full font-semibold">
            Place Order
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default OrderSummary;
