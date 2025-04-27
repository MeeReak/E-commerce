"use client";

import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { IOrder } from "../order/Table";
import Image from "next/image";
// ... all imports remain unchanged

const RecentOrders = ({ token }: { token: string }) => {
    const [orders, setOrders] = useState<IOrder[]>([]);
    const [loading, setLoading] = useState(true);

    const getStatusStyle = (status: string) => {
        switch (status.toLowerCase()) {
            case "pending":
                return "bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20";
            case "processing":
                return "bg-blue-500/10 text-blue-500 hover:bg-blue-500/20";
            case "shipped":
                return "bg-purple-500/10 text-purple-500 hover:bg-purple-500/20";
            case "delivered":
                return "bg-green-500/10 text-green-500 hover:bg-green-500/20";
            case "cancelled":
                return "bg-red-500/10 text-red-500 hover:bg-red-500/20";
            default:
                return "bg-gray-500/10 text-gray-500 hover:bg-gray-500/20";
        }
    };

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const res = await fetch("http://127.0.0.1:8000/api/v1/orders", {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    }
                });

                if (!res.ok) {
                    throw new Error("Failed to fetch orders");
                }

                const data = await res.json();
                setOrders(data.data);
            } catch (err) {
                console.error("Error fetching orders:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchOrders();
    }, [token]);

    return (
        <Card className="w-[35%] bg-[#ffffff] shadow-sm">
            <CardHeader className="pb-[11px]">
                <div className="flex items-center justify-between">
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
                <div className="space-y-[10px] min-h-[325px]">
                    {loading
                        ? Array.from({ length: 4 }).map((_, index) => (
                              <div
                                  key={index}
                                  className="animate-pulse flex items-center justify-between gap-x-[80px] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] p-3 rounded-lg"
                              >
                                  <div className="flex items-center space-x-4">
                                      <div className="w-9 h-9 rounded-full bg-gray-200" />
                                      <div>
                                          <div className="h-4 bg-gray-200 rounded w-24 mb-2" />
                                          <div className="h-3 bg-gray-200 rounded w-20" />
                                      </div>
                                  </div>
                                  <div className="flex flex-col space-y-2 items-center">
                                      <div className="h-6 w-16 bg-gray-200 rounded-full" />
                                      <div className="h-4 w-14 bg-gray-200 rounded" />
                                  </div>
                              </div>
                          ))
                        : orders
                              .slice(0, 4)
                              .reverse()
                              .map((order) => (
                                  <div
                                      key={order.id}
                                      className="flex items-center justify-between gap-x-[80px] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] p-3 rounded-lg"
                                  >
                                      <div className="flex items-center space-x-4">
                                          {order.user.profile ? (
                                              <Image
                                                  src={order.user.profile}
                                                  alt={order.user.profile}
                                                  width={36}
                                                  height={36}
                                                  className="rounded-full object-cover"
                                              />
                                          ) : (
                                              <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center text-sm font-semibold text-gray-700">
                                                  {order.user?.name
                                                      ?.charAt(0)
                                                      .toUpperCase() || "?"}
                                              </div>
                                          )}
                                          <div>
                                              <p className="text-sm font-medium text-gray-500">
                                                  {order.user?.name || "N/A"}
                                              </p>
                                              <p className="text-xs text-gray-400">
                                                  {(() => {
                                                      const date = new Date(
                                                          order.created_at
                                                      );
                                                      date.setMonth(
                                                          date.getMonth() + 6
                                                      );
                                                      return date.toLocaleDateString(
                                                          "en-US",
                                                          {
                                                              day: "2-digit",
                                                              month: "short",
                                                              year: "numeric"
                                                          }
                                                      );
                                                  })()}
                                              </p>
                                          </div>
                                      </div>
                                      <div className="flex flex-col space-y-2 items-center">
                                          <Badge
                                              className={`${getStatusStyle(
                                                  order.status
                                              )} font-normal`}
                                          >
                                              {order.status}
                                          </Badge>
                                          <p className="text-sm font-medium text-gray-600">
                                              {new Intl.NumberFormat("en-US", {
                                                  style: "currency",
                                                  currency: "USD"
                                              }).format(
                                                  Number(
                                                      String(
                                                          order.total
                                                      ).replace(/,/g, "")
                                                  )
                                              )}
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
