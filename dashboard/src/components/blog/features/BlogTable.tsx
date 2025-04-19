"use client";

import React from "react";
import Image from "next/image";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table";
import { DialogDisplayBlog } from "./BlogView";
import { BlogConfirmDialog } from "./BlogConfirm";
import { BlogEdit } from "./BlogEdit";
import { BlogTypes } from "../types/Blog.types";
import { useSearchParams } from "next/navigation";

const blogData: BlogTypes[] = [
    {
        id: "7f3aeb15-1d45-4e5d-9f8f-a8c5b7a4d02c",
        name: "Beef",
        src: "https://my-image-storage-bucket-1234.s3.us-east-1.amazonaws.com/Beef/beef-1.jpg",
        images: [
            {
                src: "https://my-image-storage-bucket-1234.s3.us-east-1.amazonaws.com/Beef/beef-1.jpg",
                id: 1,
                alt: "Image 1"
            },
            {
                src: "https://my-image-storage-bucket-1234.s3.us-east-1.amazonaws.com/Beef/beef-2.jpg",
                id: 2,
                alt: "Image 2"
            },
            {
                src: "https://my-image-storage-bucket-1234.s3.us-east-1.amazonaws.com/Beef/beef-4.jpg",
                id: 3,
                alt: "Image 3"
            },
            {
                src: "https://my-image-storage-bucket-1234.s3.us-east-1.amazonaws.com/Beef/beef-3.jpg",
                id: 4,
                alt: "Image 4"
            }
        ],
        category: "Meat",
        postBy: "oengzhileang",
        role: "Admin",
        dateAdded: "18-04-2025",
        description:
            "Meat can be classified into various types based on its origin, texture, and preparation..."
    },
    {
        id: "7f3aeb15-1d45-4e5d-9f8f-a8c5b7a4d0si",
        name: "Apple",
        src: "https://my-image-storage-bucket-1234.s3.us-east-1.amazonaws.com/Beef/beef-1.jpg",
        images: [
            {
                src: "https://my-image-storage-bucket-1234.s3.us-east-1.amazonaws.com/Beef/beef-1.jpg",
                id: 1,
                alt: "Image 1"
            },
            {
                src: "https://my-image-storage-bucket-1234.s3.us-east-1.amazonaws.com/Beef/beef-2.jpg",
                id: 2,
                alt: "Image 2"
            },
            {
                src: "https://my-image-storage-bucket-1234.s3.us-east-1.amazonaws.com/Beef/beef-4.jpg",
                id: 3,
                alt: "Image 3"
            },
            {
                src: "https://my-image-storage-bucket-1234.s3.us-east-1.amazonaws.com/Beef/beef-3.jpg",
                id: 4,
                alt: "Image 4"
            }
        ],
        category: "Fruits",
        postBy: "oengzhileang",
        role: "Admin",
        dateAdded: "18-04-2025",
        description:
            "Meat can be classified into various types based on its origin, texture, and preparation..."
    }
];

export function BlogTable() {
    const searchParams = useSearchParams();
    const q = searchParams.get("search") || "";
    const category = searchParams.get("category") || "";

    const filtered = blogData.filter((product) => {
        const matchesSearch = product.name
            .toLowerCase()
            .includes(q.toLowerCase());
        const matchesCategory = category
            ? product.category.toLowerCase() === category.toLowerCase()
            : true;
        return matchesSearch && matchesCategory;
    });

    return (
        <Table className="bg-white rounded-lg">
            <TableHeader>
                <TableRow>
                    <TableHead className="pl-5">No</TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead>Post by</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Action</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {filtered.map((product, index) => (
                    <TableRow key={product.id}>
                        <TableCell className="pl-6">{index + 1}</TableCell>
                        <TableCell className="flex items-center gap-x-2">
                            <Image
                                src={product.src}
                                alt={product.name}
                                width={36}
                                height={36}
                            />
                            {product.name}
                        </TableCell>
                        <TableCell>{product.postBy}</TableCell>
                        <TableCell>{product.role}</TableCell>
                        <TableCell>{product.category}</TableCell>
                        <TableCell>{product.dateAdded}</TableCell>
                        <TableCell>
                            <div className="flex items-center gap-x-2">
                                <DialogDisplayBlog />
                                <BlogEdit product={product} />
                                <BlogConfirmDialog itemName={product.name} />
                            </div>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}
