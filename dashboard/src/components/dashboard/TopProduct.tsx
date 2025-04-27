"use client";

import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUp, ArrowDown } from "lucide-react";
import Link from "next/link";
import { IProduct } from "../product/Table";
import Image from "next/image";

const TopProducts = ({ token }: { token: string }) => {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await fetch(
                    "http://127.0.0.1:8000/api/v1/products",
                    {
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`
                        }
                    }
                );

                if (!res.ok) {
                    throw new Error("Failed to fetch products");
                }

                const data = await res.json();
                setProducts(data.data);
            } catch (err) {
                console.error("Error fetching products:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [token]);

    return (
        <Card className="w-full bg-[#ffffff] shadow-sm h-full">
            <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                    <CardTitle className="text-gray-400 text-xl">
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
                <div className="space-y-6 mt-2 min-h-[320px]">
                    {loading
                        ? Array.from({ length: 5 }).map((_, index) => (
                              <div
                                  key={index}
                                  className="animate-pulse flex items-center justify-between"
                              >
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
                          ))
                        : products.map((product, index) => (
                              <div
                                  key={index}
                                  className="flex items-center justify-between"
                              >
                                  <div className="flex items-center space-x-4">
                                      <Image
                                          src={product.images[0]}
                                          alt={product.images[0]}
                                          width={48}
                                          height={48}
                                          className="rounded-md object-cover"
                                      />
                                      <div>
                                          <p className="font-medium text-gray-600">
                                              {product.name || "N/A"}
                                          </p>
                                          <p className="text-sm text-gray-400">
                                              {100 - product.quantity} sales
                                          </p>
                                      </div>
                                  </div>
                                  <div
                                      className={`flex items-center ${
                                          product.positive
                                              ? "text-green-500"
                                              : "text-red-500"
                                      }`}
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
