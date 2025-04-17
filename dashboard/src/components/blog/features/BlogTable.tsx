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
        category: "ksskkskkssk",
        postBy: "skjsjsjs",
        role: "Admin",
        dateAdded: "2024-03-13T11:05:00Z",
        description: "sskskks"
    },
    {
        id: "7f3aeb15-1d45-4e5d-9f8f-a8c5b7a4d02g",
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
        category: "ksskkskkssk",
        postBy: "skjsjsjs",
        role: "Admin",
        dateAdded: "2024-03-13T11:05:00Z",
        description: "sskskks"
    },
    {
        id: "7f3aeb15-1d45-4e5d-9f8f-a8c5b7a4d02k",
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
        category: "ksskkskkssk",
        postBy: "skjsjsjs",
        role: "Admin",
        dateAdded: "2024-03-13T11:05:00Z",
        description: "sskskks"
    }
];

export function BlogTable() {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className=" pl-5">No</TableHead>
                    <TableHead>Image</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Postby</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Action</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {blogData.map((product, index) => (
                    <TableRow key={product.id}>
                        <TableCell className=" pl-6">{index + 1}</TableCell>
                        <TableCell>
                            <Image
                                src={product.src}
                                alt={product.name}
                                width={36}
                                height={36}
                            />
                        </TableCell>
                        <TableCell>{product.name}</TableCell>
                        <TableCell>{product.postBy}</TableCell>
                        <TableCell>{product.role}</TableCell>
                        <TableCell>{product.category}</TableCell>
                        <TableCell>{product.dateAdded}</TableCell>
                        <TableCell>
                            <div className=" flex items-center gap-x-2">
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
