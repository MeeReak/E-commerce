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
import { AlertDialogDemo } from "./Confirm";
import { DialogDemo } from "./DisplayForm";

export const Orders = [
    {
        id: 1,
        orderId: "ORD-001",
        name: "John Doe",
        total: 149.99,
        status: "Pending",
        items: 3,
        date: "2025-03-20",
        src: "/images/order-001.jpg" // Placeholder image path
    },
    {
        id: 2,
        orderId: "ORD-002",
        name: "Jane Smith",
        total: 89.5,
        status: "Shipped",
        items: 2,
        date: "2025-03-19",
        src: "/images/order-002.jpg"
    },
    {
        id: 3,
        orderId: "ORD-003",
        name: "Alice Johnson",
        total: 299.0,
        status: "Delivered",
        items: 5,
        date: "2025-03-18",
        src: "/images/order-003.jpg"
    },
    {
        id: 4,
        orderId: "ORD-004",
        name: "Bob Wilson",
        total: 45.75,
        status: "Cancelled",
        items: 1,
        date: "2025-03-17",
        src: "/images/order-004.jpg"
    },
    {
        id: 5,
        orderId: "ORD-005",
        name: "Emma Davis",
        total: 199.95,
        status: "Processing",
        items: 4,
        date: "2025-03-16",
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
                    <TableHead className=" pl-5">No</TableHead>
                    <TableHead>Order ID</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Total</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Items</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Action</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {filtered.map((item, index) => (
                    <TableRow key={item.id}>
                        <TableCell className=" pl-6">{index + 1}</TableCell>
                        <TableCell>{item.id}</TableCell>

                        <TableCell>{item.name}</TableCell>
                        <TableCell className=" pl-2">
                            {item.total.toFixed(2)}$
                        </TableCell>
                        <TableCell>{item.status}</TableCell>
                        <TableCell>{item.items}</TableCell>
                        <TableCell>{item.date}</TableCell>
                        <TableCell>
                            <div className=" flex items-center gap-x-2">
                                <DialogDemo />
                                <AlertDialogDemo itemName={item.name} />
                            </div>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}
