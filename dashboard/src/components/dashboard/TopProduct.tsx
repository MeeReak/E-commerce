"use client";

import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUp, ArrowDown } from "lucide-react";
import Link from "next/link";
import { IProduct } from "../product/Table";
import Image from "next/image";
import api from "@/lib/axios";

const TopProducts = () => {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await api.get(
                    `${process.env.NEXT_PUBLIC_API_URL}/v1/products`
                );
                setProducts(res.data.data);
            } catch (err) {
                console.error("Error fetching products:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const SkeletonRow = () => (
        <div className="animate-pulse flex items-center justify-between">
            <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-200 rounded-md" />
                <div>
                    <div className="h-4 bg-gray-200 rounded w-32 mb-2" />
                    <div className="h-3 bg-gray-200 rounded w-20" />
                </div>
            </div>
            <div className="flex items-center space-x-2">
                <div className="h-4 w-4 bg-gray-200 rounded-full" />
                <div className="h-4 bg-gray-200 rounded w-10" />
            </div>
        </div>
    );

    const renderProductRow = (product: IProduct, index: number) => {
        const isPositive = product.positive;
        const growthIcon = isPositive ? (
            <ArrowUp className="h-4 w-4 mr-1" />
        ) : (
            <ArrowDown className="h-4 w-4 mr-1" />
        );
        const growthColor = isPositive ? "text-green-500" : "text-red-500";
        const productImage = product.images?.[0];

        return (
            <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                    {productImage ? (
                        <Image
                            src={productImage}
                            alt={product.name || "Product Image"}
                            width={48}
                            height={48}
                            className="rounded-md object-cover"
                        />
                    ) : (
                        <div className="w-12 h-12 bg-gray-200 rounded-md" />
                    )}
                    <div>
                        <p className="font-medium text-gray-600">
                            {product.name || "N/A"}
                        </p>
                        <p className="text-sm text-gray-400">
                            {100 - product.quantity} sales
                        </p>
                    </div>
                </div>
                <div className={`flex items-center ${growthColor}`}>
                    {growthIcon}
                    <span className="text-sm font-medium">
                        {Math.abs(product.growth)}%
                    </span>
                </div>
            </div>
        );
    };

    return (
        <Card className="w-full bg-white shadow-sm h-full">
            <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                    <CardTitle className="text-gray-400 text-xl">
                        Top Products
                    </CardTitle>
                    <Link
                        href="/product"
                        className="text-sm text-gray-400 hover:text-black"
                    >
                        See more
                    </Link>
                </div>
            </CardHeader>
            <CardContent>
                <div className="space-y-6 mt-2 min-h-[320px]">
                    {loading
                        ? Array.from({ length: 5 }).map((_, idx) => (
                              <SkeletonRow key={idx} />
                          ))
                        : products.map(renderProductRow)}
                </div>
            </CardContent>
        </Card>
    );
};

export default TopProducts;
