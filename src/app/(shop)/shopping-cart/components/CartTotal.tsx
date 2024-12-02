'use client'

import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "../../../../components/ui/button";

type CartTotalProps = {
  ship: string; // Assuming ship is a string like "$10.00"
  price: number; // Subtotal as a number
};

const CartTotal = ({ price, ship }: CartTotalProps) => {
  // Parse ship to a number by removing the dollar sign and converting it to a float
  const shippingCost = parseFloat(ship.replace(/[^0-9.]/g, "")) || 0;
  const total = price + shippingCost;

  return (
    <div className="w-[50%]">
      <Card>
        <CardHeader>
          <CardTitle className="font-semibold text-[20px]">
            Cart Total
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-5">
          <div className="flex justify-between items-center pb-4 border-b-2">
            <p>Subtotal:</p>
            <p>${price.toFixed(2)}</p>
          </div>
          <div className="flex justify-between items-center pb-4 border-b-2">
            <p>Shipping:</p>
            <p>{ship}</p>
          </div>
          <div className="flex justify-between items-center">
            <p>Total:</p>
            <p className="font-semibold text-[16px]">${total.toFixed(2)}</p>
          </div>
        </CardContent>
        <CardFooter>
          <Button
            onClick={() => {
              window.location.href = "/checkout";
            }}
            className="w-full rounded-full font-semibold"
          >
            Proceed to checkout
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CartTotal;
