"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Cookies from "js-cookie";
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
import { FileUpload, UploadedFile } from "@/components/FileUpload";
import { BlogForm } from "./BlogForm";
import { PlusIcon } from "lucide-react";
import api from "@/lib/axios";
import { useRouter } from "next/navigation";

export function BlogCreate(): JSX.Element {
    const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
    const [formData, setFormData] = useState({
        name: "",
        category: "",
        description1: "",
        description2: "",
        description3: ""
    });

    const router = useRouter();

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
            const token = Cookies.get("auth_token");
            const form = new FormData();

            form.append("name", formData.name);
            form.append("collection_id", formData.category);

            // Add multiple description[]
            [
                formData.description1,
                formData.description2,
                formData.description3
            ]
                .filter((desc) => desc.trim() !== "")
                .forEach((desc) => form.append("description[]", desc));

            // Append image files (real files, not blob URLs)
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

            await api.post(`${process.env.NEXT_PUBLIC_API_URL}/v1/blogs`, form);

            router.refresh();
        } catch (error) {
            console.error("Error creating blog:", error);
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
            <DialogContent className="sm:max-w-[750px] h-[600px] flex flex-col overflow-y-auto hide-scrollbar">
                <DialogHeader>
                    <DialogTitle className=" text-green-500">
                        Create Blog
                    </DialogTitle>
                    <DialogDescription></DialogDescription>
                </DialogHeader>

                <BlogForm
                    handleSelectChange={handleSelectChange}
                    formData={formData}
                    onInputChange={handleInputChange}
                />

                <FileUpload
                    length={3}
                    uploadedFiles={uploadedFiles}
                    onFileChange={handleFileChange}
                    onRemoveFile={handleRemoveFile}
                />
                <DialogFooter>
                    <>
                        <DialogClose asChild>
                            <Button variant="outline">Cancel</Button>
                        </DialogClose>
                        <Button type="button" onClick={handleSubmit}>
                            Create
                        </Button>
                    </>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
