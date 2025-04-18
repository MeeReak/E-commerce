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
import { CarouselDemo } from "../ImageDemo";

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
            <DialogContent className="sm:max-w-[750px] h-[700px] flex flex-col overflow-y-auto hide-scrollbar">
                <DialogHeader>
                    <DialogTitle>{Product.name}</DialogTitle>
                    <DialogDescription></DialogDescription>
                </DialogHeader>
                <div className=" flex items-center justify-center">
                    <CarouselDemo images={Product.images} />
                </div>
                <ProductDetails product={Product} />
                <DialogFooter>
                    {/* <Button type="button">Save changes</Button> */}
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

interface Image {
    src: string;
    id: number;
    alt: string;
}

interface Comment {
    id: string;
    name: string;
    rating: number;
    date: string;
    comment: string;
}

interface AdditionalInfo {
    weight: string;
    color: string;
    type: string;
    category: string;
    stockStatus: string;
    tags: string[];
}

export interface Product {
    id: string;
    gty: number;
    name: string;
    src: string;
    images: Image[];
    price: number;
    afterDiscount: number;
    discount: number;
    type: string;
    star: number;
    review: number;
    stockStatus: string;
    sku: string;
    brand: string;
    category: string;
    description: string;
    keyPoints: string[];
    note: string;
    additionalInfo: AdditionalInfo;
    comments: Comment[];
    dateAdded: string;
}

export function ProductDetails({ product }: { product: Product }): JSX.Element {
    return (
        <div className="space-y-4">
            <div className="flex w-full gap-x-5 justify-between">
                <InputField id="name" label="Name" value={product.name} />
                <InputField id="sku" label="SKU" value={product.sku} />
                <InputField
                    id="category"
                    label="Category"
                    value={`${product.category}`}
                />
            </div>

            <div className="flex w-full gap-x-5 justify-between">
                <InputField
                    id="price"
                    label="Price"
                    value={`${product.price.toFixed(2).toString()}$`}
                />
                <InputField
                    id="quantity"
                    label="Quantity"
                    value={product.gty.toString()}
                />
                <InputField
                    id="discount"
                    label="Discount"
                    value={`${product.discount.toFixed(2).toString()}%`}
                />
            </div>

            <div className="flex w-full gap-x-5 justify-between">
                <InputField id="brand" label="Brand" value={product.brand} />
                <InputField id="type" label="Type" value={product.type} />
                <InputField id="weight" label="Weight" value="" />
            </div>

            <div className="flex w-full gap-x-5">
                <InputField
                    id="color"
                    className=" w-[220px]"
                    label="Color"
                    value=""
                />
                <InputField
                    id="note"
                    label="Note"
                    className=" w-[460px]"
                    value=""
                />
            </div>

            <div className="flex w-full flex-wrap gap-y-2 gap-x-5 justify-between">
                {product.keyPoints.map((point, index) => (
                    <InputField
                        key={index}
                        id={`point-${index}`}
                        label={`Point ${index + 1}`}
                        value={point}
                        className="w-full"
                    />
                ))}
            </div>

            <div className="flex w-full flex-col gap-x-5 justify-between">
                <TextareaField
                    id="description"
                    label="Description"
                    value={product.description}
                />
            </div>
        </div>
    );
}

export function InputField({
    id,
    label,
    value,
    className
}: {
    id: string;
    label: string;
    value: string;
    className?: string;
}): JSX.Element {
    return (
        <div className={`w-1/2 space-y-1 ${className}`}>
            <Label htmlFor={id}>{label}</Label>
            <Input
                id={id}
                type="text"
                className="text-gray-500"
                placeholder=""
                readOnly
                value={value}
            />
        </div>
    );
}

function TextareaField({
    id,
    label,
    value
}: {
    id: string;
    label: string;
    value: string;
}): JSX.Element {
    return (
        <div className="w-full space-y-1">
            <Label htmlFor={id}>{label}</Label>
            <Textarea
                id={id}
                readOnly
                className="h-[200px] text-gray-500"
                placeholder=""
                value={value}
            />
        </div>
    );
}
