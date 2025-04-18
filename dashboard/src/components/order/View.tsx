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
import { OrderDetail } from "./Detail";

export function DialogDemo(): JSX.Element {
    const Product = {
        id: "7f3aeb15-1d45-4e5d-9f8f-a8c5b7a4d02c",
        gty: 16,
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
        price: 10.0,
        afterDiscount: 8.0,
        discount: 20,
        type: "discount",
        star: 5,
        review: 26,
        stockStatus: "In Stock",
        sku: "M987654F",
        brand: "EcoFresh",
        category: "Meat",
        tags: ["Fresh Meats", "Organic"],
        description:
            "Premium-quality beef, known for its rich flavor and tender texture. Perfect for grilling, roasting, or stewing, this beef is carefully sourced to ensure optimal taste and nutritional value. Packed with protein and essential nutrients, beef is an excellent choice for hearty and satisfying meals. Our beef is expertly cut and prepared to suit a variety of cooking styles and recipes.",
        keyPoints: [
            "Rich in flavor and tender in texture.",
            "Excellent source of protein and iron.",
            "Ideal for grilling, roasting, or stewing.",
            "Expertly cut and prepared for versatility."
        ],
        note: "Limited stock available!",
        additionalInfo: {
            weight: "1kg",
            color: "Red",
            type: "Organic Meat",
            category: "Meats",
            stockStatus: "In Stock",
            tags: ["Fresh Meats", "Organic"]
        },
        comments: [
            {
                id: "a1b2c3d4-5e6f-7g8h-9i10-j11k12l13m14",
                name: "John Doe",
                rating: 5,
                date: "1 day ago",
                comment: "The meat is fresh and tender! Perfect for my BBQ."
            },
            {
                id: "n1o2p3q4-r5s6-t7u8-v9w10-x11y12z13a14",
                name: "Jane Smith",
                rating: 4,
                date: "2 days ago",
                comment: "Great quality meat, though a little pricey."
            },
            {
                id: "b2c3d4e5-f6g7-h8i9-j10k11l12m13n14",
                name: "Emily White",
                rating: 5,
                date: "3 days ago",
                comment: "Loved it! Will definitely buy again."
            },
            {
                id: "c3d4e5f6-g7h8-i9j10-k11l12m13n14o15",
                name: "Michael Brown",
                rating: 4,
                date: "2 days ago",
                comment: "Good meat, but one piece was slightly fatty."
            },
            {
                id: "d4e5f6g7-h8i9-j10k11l12m13n14o15p16",
                name: "Sophia Green",
                rating: 5,
                date: "3 days ago",
                comment: "Amazing quality! Perfect for soups and stir-fries."
            },
            {
                id: "e5f6g7h8-i9j10-k11l12m13n14o15p16q17",
                name: "Peter Johnson",
                rating: 5,
                date: "Today",
                comment:
                    "Absolutely delicious! Used it for my roast dinner, and it turned out perfect."
            }
        ],
        dateAdded: "2024-03-13T11:05:00Z"
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <EyeIcon className=" cursor-pointer stroke-[1.5px] p-1 bg-blue-100 text-blue-600 rounded-sm" />
            </DialogTrigger>
            <DialogContent className="sm:max-w-[1120px] h-[700px] flex flex-col overflow-y-auto hide-scrollbar">
                <DialogHeader>
                    <DialogTitle>
                        <div className=" flex items-center gap-x-2">
                            <p className="text-blue-500 text-xl font-medium leading-[30px]">
                                Order Details
                            </p>
                            <span className=" text-gray-400">•</span>
                            <p className="text-gray-700 text-xs font-normal leading-[21px] ">
                                April 24, 2021
                            </p>
                            <span className=" text-gray-400">•</span>
                            <p className="text-gray-700 text-xs font-normal leading-[21px] ">
                                5 Products
                            </p>
                        </div>
                    </DialogTitle>
                    <DialogDescription></DialogDescription>
                </DialogHeader>
                <OrderDetail />
                <DialogFooter>
                    {/* <Button type="button">Save changes</Button> */}
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
