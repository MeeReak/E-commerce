"use client";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table";
import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { EditForm } from "./Edit";
import Image from "next/image";
import { DialogDemo } from "./View";
import Cookies from "js-cookie"; // Assuming you use cookies for token storage
import { AlertDialogDemo } from "./Delete";

export interface IUser {
    phone_number: string;
    profile: string;
    id: number;
    name: string;
    email: string;
    totalOrders: number;
    totalSpent: number;
    lastOrder: string;
    gender: string;
    address: string;
    billing_address: {
        id: any;
        district: string;
        email: string;
        name: string;
        phone_number: string;
        state: string;
        sangkat: string;
        village: string;
    };
}

export function Skeleton({ className }: { className?: string }) {
    return (
        <div
            className={`bg-gray-200 animate-pulse rounded ${className ?? ""}`}
        />
    );
}

export function TableDemo() {
    const [users, setUsers] = useState<IUser[]>([]);
    const [loading, setLoading] = useState(true);
    const searchParams = useSearchParams();
    const q = searchParams.get("search");

    // Fetch users from Laravel API
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const token = Cookies.get("auth_token");

                const res = await fetch("http://127.0.0.1:8000/api/v1/users", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                if (!res.ok) throw new Error("Failed to fetch users");

                const data = await res.json();
                const usersData = data.data ?? data;

                // Fetch total spent and total orders for each user
                const usersWithAdditionalData = await Promise.all(
                    usersData.map(async (user: any) => {
                        const [spentRes, ordersRes, orderRes] =
                            await Promise.all([
                                fetch(
                                    `http://127.0.0.1:8000/api/v1/spent/${user.id}`,
                                    {
                                        headers: {
                                            Authorization: `Bearer ${token}`
                                        }
                                    }
                                ),
                                fetch(
                                    `http://127.0.0.1:8000/api/v1/total-order/${user.id}`,
                                    {
                                        headers: {
                                            Authorization: `Bearer ${token}`
                                        }
                                    }
                                ),
                                fetch(
                                    `http://127.0.0.1:8000/api/v1/orders/me`,
                                    {
                                        headers: {
                                            Authorization: `Bearer ${token}`
                                        }
                                    }
                                )
                            ]);

                        const spentData = await spentRes.json();
                        const ordersData = await ordersRes.json();
                        const orderData = await orderRes.json();

                        const totalSpent = spentData.success
                            ? spentData.total
                            : 0;
                        const totalOrders = ordersData.success
                            ? ordersData.total
                            : 0;
                        // Format the lastOrder date
                        const lastOrderDate = orderData.data.updated_at
                            ? (() => {
                                  const date = new Date(
                                      orderData.data.updated_at
                                  );
                                  date.setMonth(date.getMonth() + 6);
                                  const day = date.toLocaleString("en-US", {
                                      day: "2-digit"
                                  });
                                  const month = date.toLocaleString("en-US", {
                                      month: "short"
                                  });
                                  const year = date.getFullYear();
                                  return `${day} ${month} ${year}`;
                              })()
                            : "N/A";

                        return {
                            id: user.id,
                            name: user.name || "N/A",
                            email: user.email || "N/A",
                            totalOrders: totalOrders || 0,
                            totalSpent: totalSpent || 0,
                            lastOrder: lastOrderDate,
                            profile: user.profile,
                            billing_address: user.billing_address || {},
                            phone_number: user.phone_number || "",
                            address: user.address || "N/A",
                            gender: user.gender || "N/A"
                        };
                    })
                );

                setUsers(usersWithAdditionalData);
            } catch (err) {
                console.error("Error loading users:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchUsers();
    }, []);

    const filtered = useMemo(() => {
        if (!q) return users; // no search — return all orders

        return users.filter((user) => user.name.toLowerCase().includes(q));
    }, [users, q]);
    const renderSkeletonRows = () =>
        Array.from({ length: 5 }).map((_, index) => (
            <TableRow key={index}>
                <TableCell className=" pl-6">
                    <Skeleton className="h-4 w-6" />
                </TableCell>
                <TableCell className=" flex items-center gap-x-2">
                    <Skeleton className="h-9 w-9 rounded-full" />
                    <Skeleton className="h-4 w-[100px]" />
                </TableCell>
                <TableCell>
                    <Skeleton className="h-4 w-[150px]" />
                </TableCell>
                <TableCell>
                    <Skeleton className="h-4 w-[60px]" />
                </TableCell>
                <TableCell>
                    <Skeleton className="h-4 w-[50px]" />
                </TableCell>
                <TableCell>
                    <Skeleton className="h-4 w-[60px]" />
                </TableCell>
                <TableCell>
                    <Skeleton className="h-4 w-[80px]" />
                </TableCell>
                <TableCell>
                    <Skeleton className="h-4 w-[80px]" />
                </TableCell>
            </TableRow>
        ));

    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className=" pl-5">No</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Total Orders</TableHead>
                    <TableHead>Total Spent</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Last Order</TableHead>
                    <TableHead>Action</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {loading
                    ? renderSkeletonRows()
                    : filtered.map((item, index) => (
                          <TableRow key={item.id}>
                              <TableCell className=" pl-6">
                                  {index + 1}
                              </TableCell>
                              <TableCell className=" flex items-center gap-x-2">
                                  <div className="flex items-center gap-x-2">
                                      {item.profile ? (
                                          <Image
                                              src={item.profile}
                                              alt={item.name}
                                              width={36}
                                              height={36}
                                              className="rounded-full object-cover"
                                          />
                                      ) : (
                                          <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center text-sm font-semibold text-gray-700">
                                              {item.name
                                                  ?.charAt(0)
                                                  .toUpperCase() || "?"}
                                          </div>
                                      )}
                                      <span>{item.name}</span>
                                  </div>
                              </TableCell>
                              <TableCell>{item.email}</TableCell>
                              <TableCell className=" pl-10">
                                  {item.totalOrders}
                              </TableCell>
                              <TableCell className="">
                                  {new Intl.NumberFormat("en-US", {
                                      style: "currency",
                                      currency: "USD"
                                  }).format(item.totalSpent)}
                              </TableCell>
                              <TableCell>Active</TableCell>
                              <TableCell>{item.lastOrder}</TableCell>
                              <TableCell>
                                  <div className=" flex items-center gap-x-2">
                                      <DialogDemo user={item} />
                                      <EditForm user={item} />
                                      <AlertDialogDemo user={item} />
                                  </div>
                              </TableCell>
                          </TableRow>
                      ))}
            </TableBody>
        </Table>
    );
}
