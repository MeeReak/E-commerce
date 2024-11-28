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

  // Handle change when a checkbox is clicked
  const handleCheckboxChange = (method: string) => {
    // If the clicked checkbox is already selected, uncheck it
    setSelectedMethod((prevMethod) => (prevMethod === method ? null : method));
  };

  return (
    <>
      <Card className="w-[424px] h-[580px]">
        <CardHeader>
          <CardTitle className="font-semibold text-[20px] text-[#1A1A1A]">
            Order Summary
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between items-center">
            <div className="flex justify-center items-center gap-2">
              <Image src={imageUrl} alt="item image" width={60} height={60} />
              <p>{name}</p>
              <p>x{qty}</p>
            </div>
            <div className="font-medium text-[14px]">${price.toFixed(2)}</div>
          </div>
        </CardContent>
        <CardContent className="space-y-5">
          {/* Subtotal row */}
          <div className="flex justify-between items-center pb-4 border-b-2">
            <p className="font-normal text-[14px] text-[#4D4D4D]">Subtotal:</p>
            <p className="font-medium text-[14px]">${subtotal.toFixed(2)}</p>
          </div>

          {/* Shipping row */}
          <div className="flex justify-between items-center pb-4 border-b-2">
            <p className="font-normal text-[14px] text-[#4D4D4D]">Shipping:</p>
            <p className="font-medium text-[14px]">{ship}</p>
          </div>

          {/* Total row */}
          <div className="flex justify-between items-center">
            <p className="font-normal text-[14px] text-[#4D4D4D]">Total:</p>
            <p className="font-semibold text-[16px]">${total.toFixed(2)}</p>
          </div>
        </CardContent>
        <CardContent className="space-y-4">
          <h1 className="font-semibold text-[20px] text-[#1A1A1A]">
            Payment Method
          </h1>
          {paymentMethods.map((item) => (
            <div key={item.method} className="flex space-x-5">
              <input
                type="checkbox"
                checked={selectedMethod === item.method}
                onChange={() => handleCheckboxChange(item.method)}
              />
              <p className="font-normal text-[14px] text-[#4D4D4D]">
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
