"use client";

import { CheckIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "../ui/table";
import { Tracker } from "../Tracker";
import { IOrder } from "./Table";
import Cookies from "js-cookie";

interface IUser {
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

export const OrderDetail = ({ order }: { order: IOrder }) => {
    const [user, setUser] = useState<IUser>();
    const [loading, setLoading] = useState(true);
    const token = Cookies.get("auth_token");

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const res = await fetch(
                    `http://127.0.0.1:8000/api/v1/users/${order.user.id}`,
                    {
                        headers: {
                            Accept: "application/json",
                            Authorization: `Bearer ${token}`
                        }
                    }
                );

                if (!res.ok) throw new Error("Failed to fetch users");

                const userData = await res.json();
                setUser(userData.data);
            } catch (error) {
                console.error("Error fetching users:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
    }, [token]);

    // const discount = order.items.length >= 5 ? 10 : order.items.length / 2;
    const discount = 0;
    const totalBeforeDiscount = parseFloat(order.total.replace(/,/g, ""));
    const discountAmount = (totalBeforeDiscount * discount) / 100;
    const finalTotal = totalBeforeDiscount - discountAmount;

    const steps = [
        { label: "Order Received", status: "pending" },
        { label: "Processing", status: "processing" },
        { label: "Shipped", status: "shipped" },
        { label: "Delivered", status: "delivered" }
    ];

    const currentStatus = order.status?.toLowerCase() ?? "";
    const statusOrder = [
        "pending",
        "processing",
        "shipped",
        "delivered",
        "cancelled"
    ];
    const currentIndex = statusOrder.indexOf(currentStatus);

    return (
        <div className=" w-[1070px] border rounded-md border-gray-200 ">
            {/* address */}
            <div className=" flex py-7 w-full gap-x-5 justify-center">
                <div className="flex">
                    <div>
                        <p className="text-white bg-blue-500 text-[14px] font-medium leading-[14px] tracking-[0.42px] uppercase py-[18px] pl-6 border border-gray-200 rounded-tl-md border-r-0">
                            Billing Address
                        </p>
                        <div className=" border border-t-[0px] border-gray-200 rounded-bl-md pl-6 pr-6 border-r-0">
                            <div>
                                <p className="text-gray-900 text-[16px] font-normal leading-[24px] font-poppins pt-4">
                                    {user?.name || "N/A"}
                                </p>
                                <p className="text-gray-400 text-[14px] font-normal leading-[21px] font-poppins pt-2 max-w-[282px]">
                                    {user?.billing_address.village +
                                        ", " +
                                        user?.billing_address.sangkat +
                                        ", " +
                                        user?.billing_address.district +
                                        ", " +
                                        user?.billing_address.state ||
                                        "4140 Parker Rd. Allentown, New Mexico 31134"}
                                </p>
                            </div>
                            <div className="mt-9 mb-3">
                                <p className="text-gray-400 text-[12px] font-medium leading-[12px] tracking-[0.36px] font-poppins pb-1">
                                    Email
                                </p>
                                <p className="text-gray-900 text-[14px] font-normal leading-[21px] font-poppins">
                                    {user?.email || "N/A"}
                                </p>
                            </div>
                            <div className="mb-5">
                                <p className="text-gray-400 text-[12px] font-medium leading-[12px] tracking-[0.36px] font-poppins pb-1">
                                    Phone
                                </p>
                                <p className="text-gray-900 text-[14px] font-normal leading-[21px] font-poppins">
                                    {user?.phone_number || "(671) 555-0110"}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className="text-white bg-blue-500 text-[14px] font-medium leading-[14px] tracking-[0.42px] uppercase py-[18px] pl-6 border border-gray-200 rounded-tr-md">
                            Shipping Address
                        </p>
                        <div className=" border border-t-[0px]  border-gray-200 rounded-br-md pl-6 pr-6">
                            <div>
                                <p className="text-gray-900 text-[16px] font-normal leading-[24px] font-poppins pt-4">
                                    {user?.name || "Dainne Ressell"}
                                </p>
                                <p className="text-gray-400 text-[14px] font-normal leading-[21px] font-poppins pt-2 max-w-[282px]">
                                    {user?.address}
                                </p>
                            </div>
                            <div className="mt-9 mb-3">
                                <p className="text-gray-400 text-[12px] font-medium leading-[12px] tracking-[0.36px] font-poppins pb-1">
                                    Email
                                </p>
                                <p className="text-gray-900 text-[14px] font-normal leading-[21px] font-poppins">
                                    {user?.email}
                                </p>
                            </div>
                            <div className="mb-5">
                                <p className="text-gray-400 text-[12px] font-medium leading-[12px] tracking-[0.36px] font-poppins pb-1">
                                    Phone
                                </p>
                                <p className="text-gray-900 text-[14px] font-normal leading-[21px] font-poppins">
                                    {user?.phone_number}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="border border-gray-200 rounded-md rounded-b-none">
                        <div className="p-6 flex ">
                            <div className="pr-10 space-y-[6px] border-r">
                                <p className="text-gray-400 text-[12px] font-medium leading-[12px] tracking-[0.36px] uppercase font-poppins">
                                    Order ID:
                                </p>
                                <p className="text-gray-900 text-[14px] font-normal leading-[21px] font-poppins">
                                    {order.id}
                                </p>
                            </div>
                            <div className="pl-5 pr-6 space-y-[6px]">
                                <p className="text-gray-400 text-[12px] font-medium leading-[12px] tracking-[0.36px] uppercase font-poppins">
                                    Payment Method:
                                </p>
                                <p className="text-gray-900 text-[14px] font-normal leading-[21px] font-poppins">
                                    {order.payment_method || "N/A"}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="pb-[11px] p-5 border border-t-0 border-gray-200 rounded-md rounded-t-none">
                        <div className=" flex justify-between pb-3 border-b border-gray-200">
                            <p className="text-gray-600 text-[14px] font-normal leading-[21px] font-poppins">
                                Subtotal:
                            </p>
                            <p className="text-gray-900 text-[14px] font-medium leading-[21px] font-poppins">
                                {new Intl.NumberFormat("en-US", {
                                    style: "currency",
                                    currency: "USD"
                                }).format(
                                    Number(
                                        String(order.total).replace(/,/g, "")
                                    )
                                )}
                            </p>
                        </div>
                        <div className=" flex justify-between py-3 border-b border-gray-200">
                            <p className="text-gray-600 text-[14px] font-normal leading-[21px] font-poppins">
                                Discount
                            </p>
                            <p className="text-gray-900 text-[14px] font-medium leading-[21px] font-poppins">
                                {discount.toFixed(2)}%
                            </p>
                        </div>
                        <div className=" flex justify-between py-3 border-b border-gray-200">
                            <p className="text-gray-600 text-[14px] font-normal leading-[21px] font-poppins">
                                Shipping
                            </p>
                            <p className="text-gray-900 text-[14px] font-medium leading-[21px] font-poppins">
                                Free
                            </p>
                        </div>
                        <div className=" flex justify-between pt-3">
                            <p className="text-gray-900 text-[18px] font-normal leading-[27px] font-poppins">
                                Total
                            </p>
                            <p className="text-[#2C742F] text-[18px] font-semibold leading-[27px] font-poppins">
                                {new Intl.NumberFormat("en-US", {
                                    style: "currency",
                                    currency: "USD"
                                }).format(finalTotal)}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex w-full gap-x-8 justify-center relative pt-5">
                <Tracker status={currentStatus} />
                <div className="absolute flex justify-between w-[97%] top-1">
                    {steps.map((step, index) => {
                        const isActive =
                            currentIndex >= statusOrder.indexOf(step.status);
                        const isCurrent =
                            currentIndex === statusOrder.indexOf(step.status);

                        return (
                            <div
                                key={step.status}
                                className="flex flex-col justify-center items-center"
                            >
                                <div
                                    className={`mb-2 size-10 rounded-full flex items-center justify-center ${
                                        isActive
                                            ? "bg-green-600 text-white"
                                            : "bg-white border-2 border-dashed border-[#00b207] text-[#00b207]"
                                    }`}
                                >
                                    {isActive ? (
                                        <CheckIcon className="text-white" />
                                    ) : (
                                        index + 1
                                    )}
                                </div>
                                <p
                                    className={`text-center font-poppins text-sm font-normal leading-[1.5] ${
                                        isActive
                                            ? "text-green-500"
                                            : "text-gray-800"
                                    }`}
                                >
                                    {step.label}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>

            <Table className=" mt-20">
                <TableHeader>
                    <TableRow className="hover:bg-gray-100 bg-gray-100 text-gray-600 font-medium tracking-wider leading-none">
                        <TableHead className="pl-10">Id</TableHead>
                        <TableHead>Product</TableHead>
                        <TableHead>Price</TableHead>
                        <TableHead>Discount</TableHead>
                        <TableHead>Quantity</TableHead>
                        <TableHead>SubTotal</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {order.items.map((item) => (
                        <TableRow
                            key={item.id}
                            // className="text-[#333333] font-poppins text-sm font-normal leading-[1.5]"
                        >
                            <TableCell className=" pl-11">{item.id}</TableCell>
                            <TableCell>{item.product.name}</TableCell>
                            <TableCell>${item.price}</TableCell>
                            <TableCell>{item.product.discount}%</TableCell>
                            <TableCell>{item.quantity}</TableCell>
                            <TableCell>
                                {new Intl.NumberFormat("en-US", {
                                    style: "currency",
                                    currency: "USD"
                                }).format(
                                    Number(
                                        String(item.subtotal).replace(/,/g, "")
                                    )
                                )}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};
