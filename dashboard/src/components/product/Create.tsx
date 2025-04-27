"use client";

import React, { useState } from "react";
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
import { FileUpload, UploadedFile } from "../FileUpload";
import { ProductDetails } from "./Detail";
import { PlusIcon } from "lucide-react";
import Cookies from "js-cookie";

export function DialogDemo(): JSX.Element {
    const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
    const [formData, setFormData] = useState({
        name: "",
        sku: "",
        category: "",
        price: "",
        quantity: "",
        discount: "",
        brand: "",
        type: "",
        weight: "",
        color: "",
        note: "",
        description: "",
        goodPoints: [] as string[]
    });

    const handleFileChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ): void => {
        const files = event.target.files;
        if (files) {
            const selectedFiles = Array.from(files);

            // If combined total exceeds 4, reject the upload
            if (uploadedFiles.length + selectedFiles.length > 4) {
                alert("You can only upload up to 4 images.");
                return;
            }

            const fileData: UploadedFile[] = selectedFiles.map((file) => ({
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
        try {
            const token = Cookies.get("auth_token"); // get auth token
            const form = new FormData();

            form.append("name", formData.name);
            form.append("sku", formData.sku);
            form.append("price", formData.price);
            form.append("quantity", formData.quantity);
            form.append("discount", formData.discount);
            form.append("type", formData.type);
            form.append("color", formData.color);
            form.append("noted", formData.note);
            form.append("description", formData.description);
            form.append("weight", formData.weight);
            form.append("category_id", formData.category);

            // Add multiple good_points[]
            formData.goodPoints.forEach((point) =>
                form.append("good_points[]", point)
            );

            // Append image files (not blob URLs)
            const fileInputs =
                document.querySelectorAll<HTMLInputElement>(
                    'input[type="file"]'
                );

            fileInputs.forEach((input) => {
                if (input.files) {
                    for (let i = 0; i < input.files.length; i++) {
                        form.append("images[]", input.files[i]);
                    }
                }
            });

            const res = await fetch("http://127.0.0.1:8000/api/v1/products", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    Authorization: `Bearer ${token}`
                    // ⚠️ Don't set Content-Type when using FormData — the browser sets it correctly.
                },
                body: form
            });

            const data = await res.json();

            if (!res.ok) {
                console.error("Create failed", data);
                alert("Product creation failed.");
            }

            window.location.reload();
        } catch (error) {
            console.error("Error creating product:", error);
            alert("An error occurred.");
        }
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className=" text-gray-600" variant="outline">
                    <PlusIcon /> Create
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[750px] h-[700px] flex flex-col overflow-y-auto hide-scrollbar">
                <DialogHeader>
                    <DialogTitle className=" text-green-500">
                        Create
                    </DialogTitle>
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
                        Create
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
