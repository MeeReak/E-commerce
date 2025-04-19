"use client";

import {
    Table,
    TableBody,
    // TableCaption,
    TableCell,
    // TableFooter,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table";
import { useSearchParams } from "next/navigation";
import { AlertDialogDemo } from "./Delete";
import { DialogDemo } from "./View";
import { EditForm } from "./Edit";

export const Orders = [
    {
        orderId: "ORD-001",
        name: "John Doe",
        total: 149.99,
        status: "Paid",
        items: 3,
        date: "2025-03-20",
        process: "Processing",
        src: "/images/order-001.jpg"
    },
    {
        orderId: "ORD-002",
        name: "Jane Smith",
        total: 89.5,
        status: "Unpaid",
        items: 2,
        date: "2025-03-19",
        process: "Processing",
        src: "/images/order-002.jpg"
    },
    {
        orderId: "ORD-003",
        name: "Alice Johnson",
        total: 299.0,
        status: "Refund",
        items: 5,
        date: "2025-03-18",
        process: "Processing",
        src: "/images/order-003.jpg"
    },
    {
        orderId: "ORD-004",
        name: "Bob Wilson",
        total: 45.75,
        status: "Paid",
        items: 1,
        date: "2025-03-17",
        process: "On the way",
        src: "/images/order-004.jpg"
    },
    {
        orderId: "ORD-005",
        name: "Emma Davis",
        total: 199.95,
        status: "Paid",
        items: 4,
        date: "2025-03-16",
        process: "On the way",
        src: "/images/order-005.jpg"
    }
];

export function TableDemo() {
    const searchParams = useSearchParams();
    const q = searchParams.get("search");

    const filtered = Orders.filter(
        (item) => item.name.toLowerCase().includes(q?.toLocaleLowerCase() || "")
        // item.category
        // .toLowerCase()
        // .includes(q?.toLocaleLowerCase() || "")
    );

    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className=" pl-6">Order ID</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Total</TableHead>
                    <TableHead>Payment Status</TableHead>
                    <TableHead>Items</TableHead>
                    <TableHead>Order Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Action</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {filtered.map((item, index) => (
                    <TableRow key={item.orderId}>
                        <TableCell className=" pl-6">{item.orderId}</TableCell>
                        <TableCell>{item.name}</TableCell>
                        <TableCell className=" pl-2">
                            {item.total.toFixed(2)}$
                        </TableCell>
                        <TableCell className=" pl-10">{item.status}</TableCell>
                        <TableCell>{item.items}</TableCell>
                        <TableCell>{item.date}</TableCell>
                        <TableCell>{item.process}</TableCell>
                        <TableCell>
                            <div className=" flex items-center gap-x-2">
                                <DialogDemo />
                                <EditForm />
                                <AlertDialogDemo itemName={item.name} />
                            </div>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}
