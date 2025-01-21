"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FileUpload, UploadedFile } from "./FileUpload";
import { ProductDetails } from "./ProductForm";

export function DialogDemo(): JSX.Element {
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [formData, setFormData] = useState<Record<string, string>>({
    name: "",
    sku: "",
    price: "",
    quantity: "",
    discount: "",
    brand: "",
    tag: "",
    type: "",
    weight: "",
    color: "",
    note: "",
    description: "",
    goodPoint: "",
  });

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const files = event.target.files;
    if (files) {
      const fileData: UploadedFile[] = Array.from(files).map((file) => ({
        url: URL.createObjectURL(file),
        name: file.name,
        size: file.size,
      }));
      setUploadedFiles((prev) => [...prev, ...fileData]);
    }
  };

  const handleRemoveFile = (index: number): void => {
    const updatedFiles = uploadedFiles.filter((_, i) => i !== index);
    setUploadedFiles(updatedFiles);
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { id, value } = event.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSelectChange = (id: string, value: string): void => {
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (): void => {
    console.log("Form Data:", formData);
    console.log("Uploaded Files:", uploadedFiles);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Add New</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[750px] h-[700px] flex flex-col overflow-y-auto hide-scrollbar">
        <DialogHeader>
          <DialogTitle>New Product</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>

        <ProductDetails
          handleSelectChange={handleSelectChange}
          formData={formData}
          handleChange={handleChange}
        />

        <FileUpload
          uploadedFiles={uploadedFiles}
          onFileChange={handleFileChange}
          onRemoveFile={handleRemoveFile}
        />

        <DialogFooter>
          <Button type="button" onClick={handleSubmit}>
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
