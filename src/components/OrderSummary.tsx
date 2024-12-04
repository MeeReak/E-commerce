"use client";
import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import Image from "next/image";

type OrderSummaryProps = {
  ship: string; // Shipping cost as string, e.g., "$5.00"
  price: number; // Price per item
  imageUrl: string; // Image URL
  name: string; // Item name
  qty: number; // Quantity of items
};

const OrderSummary = ({
  ship,
  price,
  imageUrl,
  name,
  qty,
}: OrderSummaryProps) => {
  // State to store the currently selected payment method
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);

  // States for subtotal and total
  const [subtotal, setSubtotal] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);

  // List of payment methods
  const paymentMethods = [
    { method: "Cash on delivery" },
    { method: "Paypal" },
    { method: "Amazon Paypal" },
  ];

  // Function to parse shipping cost from string (assuming it's formatted like "$5.00")
  const parseShippingCost = (shipping: string): number => {
    return parseFloat(shipping.replace("$", "").trim()) || 0;
  };

  // Calculate the subtotal and total whenever price, qty, or shipping changes
  useEffect(() => {
    const newSubtotal = price * qty;
    const shippingCost = parseShippingCost(ship);
    const newTotal = newSubtotal + shippingCost;

    setSubtotal(newSubtotal);
    setTotal(newTotal);
  }, [price, qty, ship]); // Re-run when these values change

  const handleRadioChange = (method: string) => {
    setSelectedMethod(method); // Directly set the selected method
  };

  return (
    <>
      <Card className="w-[424px] h-[580px]">
        <CardHeader>
          <CardTitle className="text-gray-900 text-xl font-medium leading-relaxed">
            Order Summary
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between items-center">
            <div className="flex justify-center items-center gap-2">
              <Image src={imageUrl} alt="item image" width={60} height={60} />
              <p className="text-gray-900 text-base font-normal leading-relaxed">
                {name}
              </p>
              <p className="text-gray-900 text-base font-normal leading-relaxed">
                x{qty}
              </p>
            </div>
            <div className="text-gray-900 text-base font-medium leading-relaxed">
              ${price.toFixed(2)}
            </div>
          </div>
        </CardContent>
        <CardContent className="space-y-5">
          {/* Subtotal row */}
          <div className="flex justify-between items-center pb-4 border-b-2">
            <p className="text-gray-700 text-base font-normal leading-relaxed">
              Subtotal:
            </p>
            <p className="text-gray-900 text-base font-medium leading-relaxed">
              ${subtotal.toFixed(2)}
            </p>
          </div>

          {/* Shipping row */}
          <div className="flex justify-between items-center pb-4 border-b-2">
            <p className="text-gray-700 text-base font-normal leading-relaxed">
              Shipping:
            </p>
            <p className="text-gray-900 text-base font-medium leading-relaxed">
              {ship}
            </p>
          </div>

          {/* Total row */}
          <div className="flex justify-between items-center">
            <p className="text-gray-700 text-base font-normal leading-relaxed">
              Total:
            </p>
            <p className="text-gray-900 text-lg font-semibold leading-[120%]">
              ${total.toFixed(2)}
            </p>
          </div>
        </CardContent>
        <CardContent className="space-y-4">
          <h1 className="text-gray-900 text-xl font-medium leading-relaxed">
            Payment Method
          </h1>
          {paymentMethods.map((item) => (
            <div key={item.method} className="flex items-center space-x-3">
              <input
                className="h-5 w-5 cursor-pointer"
                type="radio"
                name="payment-method" 
                value={item.method} 
                checked={selectedMethod === item.method} 
                onChange={() => handleRadioChange(item.method)} 
              />
              <p className="text-gray-700 text-sm font-normal leading-relaxed">
                {item.method}
              </p>
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
