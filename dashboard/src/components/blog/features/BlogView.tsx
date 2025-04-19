"use client";

import React from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import { EyeIcon } from "lucide-react";
import { BlogDetails } from "./BlogDetail";
import { CarouselDemo } from "@/components/ImageDemo";

export function DialogDisplayBlog(): JSX.Element {
    const Product = {
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
            "Meat can be classified into various types based on its origin, texture, and preparation. The main categories of meat include red meat, white meat, and processed meat. Red meat, such as beef, lamb, and pork, comes from the muscles of mammals and is known for its rich flavor and darker color. White meat includes poultry, like chicken and turkey, which is lighter in color and generally lower in fat compared to red meat. Processed meats, such as bacon, sausages, and ham, are those that have been preserved or altered through smoking, curing, or other methods for enhanced flavor and longevity. These classifications play a significant role in dietary choices and nutritional values."
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <EyeIcon className=" cursor-pointer stroke-[1.5px] p-1 bg-blue-100 text-blue-600 rounded-sm" />
            </DialogTrigger>
            <DialogContent className="sm:max-w-[750px] h-[700px] flex flex-col overflow-y-auto hide-scrollbar">
                <DialogHeader>
                    <DialogTitle className=" text-blue-500">Detail</DialogTitle>
                    <DialogDescription></DialogDescription>
                </DialogHeader>
                <div className=" flex items-center justify-center">
                    <CarouselDemo images={Product.images} />
                </div>
                <BlogDetails product={Product} />
                <DialogFooter>
                    {/* <Button type="button">Save changes</Button> */}
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
