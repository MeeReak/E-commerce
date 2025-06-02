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
import api from "@/lib/axios";

// --- Types ---
export interface IOrder {
    id: number;
    order_id: string;
    total: string;
    status: string;
    payment_method: string | null;
    payment_status: string;
    items: {
        name: string;
        id: number;
        product: Record<string, any>;
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
        gender: string | null;
        phone_number: string | null;
        created_at: string;
        updated_at: string;
    };
}

// --- Skeleton UI ---
const Skeleton = ({ className = "" }: { className?: string }) => (
    <div className={`bg-gray-200 animate-pulse rounded ${className}`} />
);

const SkeletonRows = () =>
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

// --- Table Row ---
const OrderRow = ({ order, index }: { order: IOrder; index: number }) => {
    const formattedTotal = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(Number(order.total.replace(/,/g, "")));

    const formattedDate = new Date(order.created_at).toLocaleDateString(
        "en-US",
        {
            day: "2-digit",
            month: "short",
            year: "numeric"
        }
    );

    return (
        <TableRow key={order.id}>
            <TableCell className="pl-11">{index + 1}</TableCell>
            <TableCell className="flex items-center gap-x-5">
                {order.user.profile ? (
                    <Image
                        src={order.user.profile}
                        alt={order.user.name || "Profile"}
                        width={36}
                        height={36}
                        className="rounded-full object-cover"
                    />
                ) : (
                    <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center text-sm font-semibold text-gray-700">
                        {order.user.name?.charAt(0).toUpperCase() || "?"}
                    </div>
                )}
                {order.user.name}
            </TableCell>
            <TableCell className="pl-1">{formattedTotal}</TableCell>
            <TableCell className="pl-5">
                {order.payment_status || "N/A"}
            </TableCell>
            <TableCell className="pl-8">{order.items.length}</TableCell>
            <TableCell>{formattedDate}</TableCell>
            <TableCell>{order.status.toUpperCase()}</TableCell>
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
    );
};

// --- Main Component ---
export function TableDemo(): JSX.Element {
    const [orders, setOrders] = useState<IOrder[]>([]);
    const [loading, setLoading] = useState(true);
    const searchParams = useSearchParams();

    const searchQuery = useMemo(
        () => searchParams.get("search")?.toLowerCase() || "",
        [searchParams]
    );

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const res = await api.get(
                    `${process.env.NEXT_PUBLIC_API_URL}/v1/orders`
                );
                setOrders(res.data.data);
            } catch (err) {
                console.error("Error fetching orders:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchOrders();
    }, []);

    const filteredOrders = useMemo(() => {
        return searchQuery
            ? orders.filter((order) =>
                  order.user.name?.toLowerCase().includes(searchQuery)
              )
            : orders;
    }, [orders, searchQuery]);

    return (
        <Table>
            <TableHeader>
                <TableRow className="text-base">
                    <TableHead className="pl-10 font-medium">No</TableHead>
                    <TableHead className="font-medium">Customer</TableHead>
                    <TableHead className="font-medium">Total</TableHead>
                    <TableHead className="font-medium">Status</TableHead>
                    <TableHead className="font-medium">Items</TableHead>
                    <TableHead className="font-medium">Order Date</TableHead>
                    <TableHead className="font-medium">Process</TableHead>
                    <TableHead className="font-medium">Action</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {loading ? (
                    <SkeletonRows />
                ) : (
                    filteredOrders.map((order, idx) => (
                        <OrderRow key={order.id} order={order} index={idx} />
                    ))
                )}
            </TableBody>
        </Table>
    );
}
