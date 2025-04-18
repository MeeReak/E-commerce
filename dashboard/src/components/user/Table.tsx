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
import { EditForm } from "./Edit";
import Image from "next/image";
import { DialogDemo } from "./View";

export const Users = [
    {
        name: "John Doe",
        email: "john.doe@example.com",
        totalOrders: 5,
        totalSpent: 320.5,
        lastOrder: "2025-04-04"
    },
    {
        name: "Jane Smith",
        email: "jane.smith@example.com",
        totalOrders: 3,
        totalSpent: 185.0,
        lastOrder: "2025-03-28"
    },
    {
        name: "Mike Johnson",
        email: "mike.j@example.com",
        totalOrders: 1,
        totalSpent: 45.99,
        lastOrder: "2025-04-01"
    },
    {
        name: "Sarah Lee",
        email: "sarah.lee@example.com",
        totalOrders: 7,
        totalSpent: 510.75,
        lastOrder: "2025-04-05"
    }
];

export function TableDemo() {
    const searchParams = useSearchParams();
    const q = searchParams.get("search");

    const filtered = Users.filter(
        (item) => item.name.toLowerCase().includes(q?.toLocaleLowerCase() || "")
        // product.category
        // .toLowerCase()
        // .includes(q?.toLocaleLowerCase() || "")
    );

    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className=" pl-5">No</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Total Orders</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Total Spent</TableHead>
                    <TableHead>Last Order</TableHead>
                    <TableHead>Action</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {filtered.map((item, index) => (
                    <TableRow key={index}>
                        <TableCell className=" pl-6">{index + 1}</TableCell>
                        <TableCell className=" flex items-center gap-x-2">
                            <Image
                                src={
                                    "https://avatars.githubusercontent.com/u/124599?v=4"
                                }
                                alt="avatar"
                                width={40}
                                height={40}
                                className="rounded-full"
                            />
                            {item.name}
                        </TableCell>
                        <TableCell>{item.email}</TableCell>
                        <TableCell className=" pl-10">
                            {item.totalOrders}
                        </TableCell>
                        <TableCell>Active</TableCell>
                        <TableCell className=" pl-5">
                            {item.totalSpent.toFixed(2)}$
                        </TableCell>
                        <TableCell className="">{item.lastOrder}</TableCell>
                        <TableCell>
                            <div className=" flex items-center gap-x-2">
                                <DialogDemo />
                                <EditForm />
                                <AlertDialogDemo />
                            </div>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}
