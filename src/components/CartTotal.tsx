import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "./ui/button";
type CartTotalProps = {
  ship: string;
  price: number;
};
const CartTotal = ({ price, ship }: CartTotalProps) => {
  return (
    <>
      <Card className="w-[424px]">
        <CardHeader>
          <CardTitle className="font-semibold text-[20px]">Cart Total</CardTitle>
        </CardHeader>
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
            <p  className="font-semibold text-[16px]">${price}</p>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full rounded-full font-semibold">
            Proceed to checkout
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default CartTotal;
