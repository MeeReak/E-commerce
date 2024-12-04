"use client";

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
  ship: string; // Shipping cost, e.g., "$10.00"
  price: number; // Subtotal, e.g., 50.00
};

const CartTotal = ({ price, ship }: CartTotalProps) => {
  // Parse shipping cost by removing any non-numeric characters
  const shippingCost = parseFloat(ship.replace(/[^0-9.]/g, "")) || 0;
  const total = price + shippingCost;

  const formatCurrency = (amount: number) => `$${amount.toFixed(2)}`;

  return (
    <div className="w-[50%]">
      <Card>
        <CardHeader>
          <CardTitle className="text-gray-900 text-xl font-medium leading-[1.5]">
            Cart Total
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-5">
          <CartDetail label="Subtotal" amount={price} />
          <CartDetail
            label="Shipping"
            amount={shippingCost}
            displayAmount={ship}
          />
          <div className="flex justify-between items-center">
            <p className="text-gray-700 text-base font-normal leading-[1.5]">
              Total:
            </p>
            <p className="text-gray-900 text-base font-semibold leading-[1.2]">
              {formatCurrency(total)}
            </p>
          </div>
        </CardContent>

        <CardFooter>
          <Button
            onClick={() => (window.location.href = "/checkout")}
            className="w-full rounded-full py-4 text-white text-base font-semibold leading-[1.2]"
          >
            Proceed to checkout
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

type CartDetailProps = {
  label: string;
  amount: number;
  displayAmount?: string;
};

const CartDetail = ({ label, amount, displayAmount }: CartDetailProps) => {
  return (
    <div className="flex justify-between items-center pb-4 border-b-2">
      <p className="text-gray-700 text-base font-normal leading-[1.5]">
        {label}:
      </p>
      <p className="text-gray-900 text-base font-medium leading-[1.5]">
        {displayAmount ? displayAmount : `$${amount.toFixed(2)}`}
      </p>
    </div>
  );
};

export default CartTotal;
