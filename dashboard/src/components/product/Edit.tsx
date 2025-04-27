"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import { EditIcon } from "lucide-react";
import { FileUpload, UploadedFile } from "../FileUpload";
import { ProductDetails } from "./Detail";
import { IProduct } from "./Table";
import Cookies from "js-cookie";

export function EditForm({ product }: { product: IProduct }): JSX.Element {
    const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>(
        product.images.map((image) => ({
            url: image,
            name: image || "",
            size: 0
        }))
    );
    const [formData, setFormData] = useState({
        name: product.name,
        sku: product.sku,
        category: product.category,
        price: product.price,
        quantity: product.quantity,
        discount: product.discount,
        brand: product.brand,
        type: product.type,
        weight: product.weight,
        color: product.color,
        noted: product.noted,
        description: product.description,
        goodPoints: product.good_points
    });

    const handleFileChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ): void => {
        const files = event.target.files;
        if (files) {
            const fileData: UploadedFile[] = Array.from(files).map((file) => ({
                file, // <- store the actual file
                url: URL.createObjectURL(file),
                name: file.name,
                size: file.size
            }));
            setUploadedFiles((prev) => [...prev, ...fileData]);
        }
    };

    const handleRemoveFile = (index: number): void => {
        const updatedFiles = uploadedFiles.filter((_, i) => i !== index);
        setUploadedFiles(updatedFiles);
    };

    const handleInputChange = (key: string, value: string | string[]): void => {
        setFormData((prev) => ({ ...prev, [key]: value }));
    };

    const handleSelectChange = (key: string, value: string): void => {
        setFormData((prev) => ({ ...prev, [key]: value }));
    };

    const handleSubmit = async (): Promise<void> => {
        const token = Cookies.get("auth_token");
        const form = new FormData();

        form.append("_method", "PUT"); // Laravel expects method spoofing
        form.append("name", formData.name);
        form.append("sku", formData.sku);
        form.append("price", String(formData.price));
        form.append("quantity", String(formData.quantity));
        form.append(
            "discount",
            formData.discount ? String(formData.discount) : "0"
        );
        form.append("type", formData.type);
        form.append("weight", String(formData.weight));
        form.append("color", formData.color);
        form.append("noted", formData.noted);
        form.append("description", formData.description);
        const randomCategoryId = Math.floor(Math.random() * 3) + 1;
        form.append("category_id", String(randomCategoryId));
        formData.goodPoints.forEach((point, index) => {
            form.append(`good_points[${index}]`, point);
        });

        // Handle file uploads (skip existing image URLs)
        uploadedFiles.forEach((fileWrapper) => {
            if (fileWrapper.file) {
                form.append("images[]", fileWrapper.file); // new files
            } else if (fileWrapper.url.startsWith("http")) {
                form.append("existing_images[]", fileWrapper.url); // existing image URLs
            }
        });

        try {
            const res = await fetch(
                `http://127.0.0.1:8000/api/v1/products/${product.id}`,
                {
                    method: "POST", // Laravel will interpret this as PUT via _method
                    headers: {
                        Accept: "application/json",
                        Authorization: `Bearer ${token}` // Replace dynamically
                    },
                    body: form
                }
            );

            if (!res.ok) {
                const errorData = await res.json();
                console.error("Update failed:", errorData);
                return;
            }

            const data = await res.json();
            //redirect to the product page or show a success message

            // Optional: close modal or trigger UI refresh
            window.location.reload();
        } catch (error) {
            console.error("An error occurred during product update:", error);
        }
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <EditIcon className=" stroke-[1.5px] p-1 bg-yellow-100 text-yellow-600 rounded-sm" />
            </DialogTrigger>
            <DialogContent className="sm:max-w-[750px] h-[700px] flex flex-col overflow-y-auto hide-scrollbar">
                <DialogHeader>
                    <DialogTitle className=" text-yellow-500">Edit</DialogTitle>
                    <DialogDescription></DialogDescription>
                </DialogHeader>

                <ProductDetails
                    handleSelectChange={handleSelectChange}
                    formData={formData}
                    onInputChange={handleInputChange}
                />

                <FileUpload
                    length={5}
                    uploadedFiles={uploadedFiles}
                    onFileChange={handleFileChange}
                    onRemoveFile={handleRemoveFile}
                />

                <DialogFooter>
                    <DialogClose asChild>
                        <Button variant="outline">Cancel</Button>
                    </DialogClose>
                    <Button type="button" onClick={handleSubmit}>
                        Update
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
