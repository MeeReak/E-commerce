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
import { EditIcon } from "lucide-react";
import { FileUpload, UploadedFile } from "../../FileUpload";
import { BlogTypes } from "../types/Blog.types";
import { BlogForm } from "./BlogForm";
export function BlogEdit({ product }: { product: BlogTypes }): JSX.Element {
    const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>(
        product.images.map((image) => ({
            url: image.src,
            name: image.alt,
            size: image.id
        }))
    );

    const [formData, setFormData] = useState({
        name: product.name,
        category: product.category,
        postBy: product.postBy,
        role: product.role,
        description: product.description
    });

    const handleFileChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ): void => {
        const files = event.target.files;
        if (files) {
            const fileData: UploadedFile[] = Array.from(files).map((file) => ({
                url: URL.createObjectURL(file),
                name: file.name,
                size: file.size
            }));
            setUploadedFiles((prev) => [...(prev ?? []), ...fileData]);
        }
    };

    const handleRemoveFile = (index: number): void => {
        const updatedFiles = (uploadedFiles ?? []).filter(
            (_, i) => i !== index
        );
        setUploadedFiles(updatedFiles);
    };

    const handleInputChange = (key: string, value: string | string[]): void => {
        setFormData((prev) => ({ ...prev, [key]: value }));
    };

    const handleSelectChange = (key: string, value: string): void => {
        setFormData((prev) => ({ ...prev, [key]: value }));
    };

    const handleSubmit = (): void => {
        console.log("Form Data:", formData);
        console.log("Uploaded Files:", uploadedFiles);
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <EditIcon className=" stroke-[1.5px] p-1 bg-yellow-100 text-yellow-600 rounded-sm cursor-pointer" />
            </DialogTrigger>
            <DialogContent className="sm:max-w-[750px] h-[600px] flex flex-col overflow-y-auto hide-scrollbar">
                <DialogHeader>
                    <DialogTitle className=" text-yellow-500">
                        Edit Blog
                    </DialogTitle>
                    <DialogDescription></DialogDescription>
                </DialogHeader>

                <BlogForm
                    handleSelectChange={handleSelectChange}
                    formData={formData}
                    onInputChange={handleInputChange}
                />

                <FileUpload
                    uploadedFiles={uploadedFiles ?? []}
                    onFileChange={handleFileChange}
                    onRemoveFile={handleRemoveFile}
                />

                <DialogFooter>
                    <>
                        <DialogClose asChild>
                            <Button variant="outline">Cancel</Button>
                        </DialogClose>
                        <Button type="button" onClick={handleSubmit}>
                            Update
                        </Button>
                    </>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
