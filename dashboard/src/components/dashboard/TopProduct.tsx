"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUp, ArrowDown } from "lucide-react";
import Link from "next/link";

const TopProducts = () => {
    // Sample data for top products
    const products = [
        {
            name: "Wireless Earbuds Pro",
            sales: 1342,
            growth: 12.5,
            positive: true,
            image: "https://my-image-storage-bucket-1234.s3.us-east-1.amazonaws.com/Broccoli/broccoli-2.jpg"
        },
        {
            name: "Ultra HD Smart TV",
            sales: 1122,
            growth: 8.3,
            positive: true,
            image: "https://my-image-storage-bucket-1234.s3.us-east-1.amazonaws.com/Beef/beef-1.jpg"
        },
        {
            name: "Premium Coffee Maker",
            sales: 879,
            growth: -2.4,
            positive: false,
            image: "https://my-image-storage-bucket-1234.s3.us-east-1.amazonaws.com/Pork/pork-3.jpg"
        },
        {
            name: "Ergonomic Office Chair",
            sales: 743,
            growth: 5.7,
            positive: true,
            image: "https://my-image-storage-bucket-1234.s3.us-east-1.amazonaws.com/Apple/white-apple-1.jpg"
        },
        {
            name: "Smart Home Security System",
            sales: 651,
            growth: 3.2,
            positive: true,
            image: "https://my-image-storage-bucket-1234.s3.us-east-1.amazonaws.com/Strawberry/white-strawberry-4.jpg"
        }
    ];

    return (
        <Card className="w-full bg-[#ffffff] shadow-sm h-full">
            <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                    <CardTitle className="text-gray-600 text-xl">
                        Top Products
                    </CardTitle>
                    <Link
                        href={"/product"}
                        className="text-sm text-gray-400 hover:text-black"
                    >
                        See more
                    </Link>
                </div>
            </CardHeader>
            <CardContent>
                <div className="space-y-6 mt-2">
                    {products.map((product, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-between "
                        >
                            <div className="flex items-center space-x-4">
                                <div className="h-12 w-12 rounded-md bg-gray-800 overflow-hidden">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                                <div>
                                    <p className="font-medium text-gray-600">
                                        {product.name}
                                    </p>
                                    <p className="text-sm text-gray-400">
                                        {product.sales.toLocaleString()} sales
                                    </p>
                                </div>
                            </div>
                            <div
                                className={`flex items-center ${product.positive ? "text-green-500" : "text-red-500"}`}
                            >
                                {product.positive ? (
                                    <ArrowUp className="h-4 w-4 mr-1" />
                                ) : (
                                    <ArrowDown className="h-4 w-4 mr-1" />
                                )}
                                <span className="text-sm font-medium">
                                    {Math.abs(product.growth)}%
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
};

export default TopProducts;
