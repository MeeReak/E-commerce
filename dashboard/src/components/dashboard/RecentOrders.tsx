"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const RecentOrders = () => {
    // Sample data for recent orders
    const orders = [
        {
            id: "#ORD-71283",
            customer: "Alex Thompson",
            product: "Wireless Headphones Pro",
            date: "April 3, 2025",
            amount: "$299.95",
            status: "Completed",
            image: "https://avatars.githubusercontent.com/u/124599?v=4"
        },
        {
            id: "#ORD-71282",
            customer: "Samantha Lee",
            product: 'Ultra HD Smart TV 55"',
            date: "April 3, 2025",
            amount: "$899.99",
            status: "Processing",
            image: "https://avatars.githubusercontent.com/u/124599?v=4"
        },
        {
            id: "#ORD-71281",
            customer: "Michael Johnson",
            product: "Ergonomic Office Chair",
            date: "April 2, 2025",
            amount: "$249.50",
            status: "Completed",
            image: "https://avatars.githubusercontent.com/u/124599?v=4"
        },
        {
            id: "#ORD-71280",
            customer: "Emily Wilson",
            product: "Smartphone XS Max",
            date: "April 2, 2025",
            amount: "$1,099.00",
            status: "Shipped",
            image: "https://avatars.githubusercontent.com/u/124599?v=4"
        }
    ];

    // Function to return appropriate status badge styling
    const getStatusStyle = (status: string) => {
        switch (status) {
            case "Completed":
                return "bg-green-500/10 text-green-500 hover:bg-green-500/20";
            case "Processing":
                return "bg-blue-500/10 text-blue-500 hover:bg-blue-500/20";
            case "Shipped":
                return "bg-purple-500/10 text-purple-500 hover:bg-purple-500/20";
            case "Cancelled":
                return "bg-red-500/10 text-red-500 hover:bg-red-500/20";
            default:
                return "bg-gray-500/10 text-gray-500 hover:bg-gray-500/20";
        }
    };

    return (
        <Card className=" w-[35%] bg-[#ffffff] shadow-sm">
            <CardHeader className="pb-2">
                <div className=" flex items-center justify-between">
                    <CardTitle className="text-gray-400 text-xl">
                        Recent Orders
                    </CardTitle>
                    <Link
                        href={"/order"}
                        className="text-sm text-gray-400 hover:text-black"
                    >
                        See more
                    </Link>
                </div>
            </CardHeader>
            <CardContent>
                <div className="space-y-[10px]">
                    {orders.map((order) => (
                        <div
                            key={order.id}
                            className="flex items-start justify-between gap-x-[80px] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] px-2 py-4 rounded-lg"
                        >
                            <div className="flex items-center space-x-4">
                                <Avatar className="h-10 w-10 rounded-md bg-gray-800">
                                    <img
                                        src={order.image}
                                        alt={order.product}
                                    />
                                </Avatar>
                                <div>
                                    <p className="text-sm font-medium text-gray-500">
                                        {order.customer}
                                    </p>
                                    <div className="flex items-center">
                                        {/* <p className="text-xs text-gray-400">
                                            {order.id}
                                        </p>
                                        <span className="mx-2 text-gray-600">
                                            •
                                        </span> */}
                                        <p className="text-xs text-gray-400">
                                            {order.date}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col items-center">
                                <Badge
                                    className={`${getStatusStyle(order.status)} font-normal`}
                                >
                                    {order.status}
                                </Badge>{" "}
                                <p className="text-sm font-medium text-gray-600">
                                    {order.amount}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
};

export default RecentOrders;
