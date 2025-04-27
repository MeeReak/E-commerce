"use client";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { DialogDemo } from "./View";
import { EditForm } from "./Edit";
import { AlertDialogDemo } from "./Delete";

export interface IOrder {
    id: number;
    order_id: string;
    total: string; // Updated to string based on the provided data
    status: string;
    payment_method: string | null;
    payment_status: string;
    items: {
        name: string;
        id: number;
        product: Record<string, any>; // Assuming product is an object
        quantity: number;
        price: string;
        subtotal: string;
    }[];
    created_at: string;
    updated_at: string;
    user: {
        billing_address: any;
        id: string;
        name: string | null;
        email: string;
        profile: string | null;
        address: string | null;
        // date_of_birth: string | null;
        gender: string | null;
        phone_number: string | null;
        created_at: string;
        updated_at: string;
    };
}

export function Skeleton({ className }: { className?: string }) {
    return (
        <div
            className={`bg-gray-200 animate-pulse rounded ${className ?? ""}`}
        />
    );
}

export function TableDemo({ token }: { token: string }) {
    const [orders, setOrders] = useState<IOrder[]>([]);
    const [loading, setLoading] = useState(true);
    const searchParams = useSearchParams();
    const q = useMemo(() => {
        return searchParams.get("search")?.toLowerCase() || "";
    }, [searchParams.toString()]);

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

    const filtered = useMemo(() => {
        if (!q) return orders; // no search — return all orders

        return orders.filter((order) =>
            order.user.name?.toLowerCase().includes(q)
        );
    }, [orders, q]);

    const renderSkeletonRows = () =>
        Array.from({ length: 5 }).map((_, index) => (
            <TableRow key={index}>
                <TableCell className="pl-11">
                    <Skeleton className="h-4 w-6" />
                </TableCell>
                <TableCell className="flex items-center gap-x-5">
                    <Skeleton className="h-9 w-9 rounded-md" />
                    <Skeleton className="h-4 w-[100px]" />
                </TableCell>
                <TableCell className="pl-2">
                    <Skeleton className="h-4 w-[60px]" />
                </TableCell>
                <TableCell className="pl-2">
                    <Skeleton className="h-4 w-[60px]" />
                </TableCell>
                <TableCell className="pl-8">
                    <Skeleton className="h-4 w-[40px]" />
                </TableCell>
                <TableCell>
                    <Skeleton className="h-4 w-[80px]" />
                </TableCell>
                <TableCell>
                    <Skeleton className="h-4 w-[100px]" />
                </TableCell>
                <TableCell>
                    <Skeleton className="h-4 w-[80px]" />
                </TableCell>
            </TableRow>
        ));

    return (
        <Table>
            <TableHeader>
                <TableRow className=" text-base ">
                    <TableHead className="pl-10 font-medium">No</TableHead>
                    <TableHead className=" font-medium">Customer</TableHead>
                    <TableHead className=" font-medium">Total</TableHead>
                    <TableHead className=" font-medium">Status</TableHead>
                    <TableHead className=" font-medium">Items</TableHead>
                    <TableHead className=" font-medium">Order Date</TableHead>
                    <TableHead className=" font-medium">Process</TableHead>
                    <TableHead className=" font-medium">Action</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {loading
                    ? renderSkeletonRows()
                    : filtered.map((order, index) => (
                          <TableRow key={order.id}>
                              <TableCell className="pl-11">
                                  {index + 1}
                              </TableCell>
                              <TableCell className="flex items-center gap-x-5">
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
                                  {order.user.name}
                              </TableCell>
                              <TableCell className="pl-1">
                                  {new Intl.NumberFormat("en-US", {
                                      style: "currency",
                                      currency: "USD"
                                  }).format(
                                      Number(
                                          String(order.total).replace(/,/g, "")
                                      )
                                  )}
                              </TableCell>
                              <TableCell className="pl-5">
                                  {order.payment_status || "N/A"}
                              </TableCell>
                              <TableCell className="pl-8">
                                  {order.items.length}
                              </TableCell>
                              <TableCell>
                                  {new Date(
                                      order.created_at
                                  ).toLocaleDateString("en-US", {
                                      day: "2-digit",
                                      month: "short",
                                      year: "numeric"
                                  })}
                              </TableCell>
                              <TableCell>
                                  {order.status.toUpperCase()}
                              </TableCell>
                              <TableCell>
                                  <div className="flex items-center gap-x-2">
                                      <DialogDemo order={order} />
                                      <EditForm order={order} />
                                      <AlertDialogDemo
                                          orderId={order.id}
                                          orderName={order.user.name ?? "N/A"}
                                      />
                                  </div>
                              </TableCell>
                          </TableRow>
                      ))}
            </TableBody>
        </Table>
    );
}
