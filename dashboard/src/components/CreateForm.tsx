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
    goodPoints: [] as string[],
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
          onInputChange={handleInputChange}
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
