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
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { CloudUploadIcon, Trash2Icon } from "lucide-react";
import { Label } from "./ui/label";
import { SelectDemo } from "./Select";
import { Textarea } from "./ui/textarea";

interface UploadedFile {
  url: string;
  name: string;
  size: number;
}

function FileUpload({
  uploadedFiles,
  onFileChange,
  onRemoveFile,
}: {
  uploadedFiles: UploadedFile[];
  onFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onRemoveFile: (index: number) => void;
}): JSX.Element {
  return (
    <div className="space-y-1">
      <Label htmlFor="file-input">Image of Product</Label>

      <div className="border-2 border-dashed border-gray-300 p-6 rounded-lg text-center bg-gray-50">
        <Input
          type="file"
          multiple
          accept="image/*"
          onChange={onFileChange}
          className="hidden"
          id="file-input"
        />
        <Label
          htmlFor="file-input"
          className="cursor-pointer flex flex-col items-center"
        >
          <CloudUploadIcon className="mb-4" />
          <p className="text-sm font-medium text-gray-600">Upload a File</p>
          <p className="text-xs text-gray-400 mt-1">Drag and drop files here</p>
        </Label>
      </div>

      <div>
        {uploadedFiles.map((file, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-blue-50 border border-[#d9e5ff] rounded-lg p-3 mt-1"
          >
            <div className="flex items-center gap-3">
              <Image
                width={48}
                height={48}
                src={file.url}
                alt={file.name}
                className="w-8 h-8 object-cover rounded"
              />
              <div className="flex justify-between items-center w-[590px]">
                <p className="text-sm font-medium text-gray-800">{file.name}</p>
                <p className="text-sm text-gray-500">
                  {(file.size / 1024).toFixed(1)} KB
                </p>
              </div>
            </div>
            <span
              onClick={() => onRemoveFile(index)}
              className="text-red-600 bg-red-100 rounded p-1 hover:bg-red-200 cursor-pointer"
            >
              <Trash2Icon className="size-5" />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProductDetails({
  formData,
  handleChange,
  handleSelectChange,
}: {
  formData: Record<string, string>;
  handleChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleSelectChange: (id: string, value: string) => void;
}): JSX.Element {
  const languages = ["EN", "KM"];

  return (
    <div className="space-y-4">
      <div className="flex w-full gap-x-5 justify-between">
        <InputField
          id="name"
          label="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <InputField
          id="sku"
          label="SKU"
          value={formData.sku}
          onChange={handleChange}
        />
        <div className="w-1/3 space-y-1">
          <Label htmlFor="category">Category</Label>
          <SelectDemo
            item={languages}
            selectedValue={formData.category} // Bind the current value
            onSelectChange={(value) => handleSelectChange("category", value)} // Update formData
            placeHolder="Select Category"
          />
        </div>
      </div>

      <div className="flex w-full gap-x-5 justify-between">
        <InputField
          id="price"
          label="Product Price"
          value={formData.price}
          onChange={handleChange}
        />
        <InputField
          id="quantity"
          label="Quantity"
          value={formData.quantity}
          onChange={handleChange}
        />
        <InputField
          id="discount"
          label="Discount"
          value={formData.discount}
          onChange={handleChange}
        />
      </div>

      <div className="flex w-full gap-x-5 justify-between">
        <InputField
          id="brand"
          label="Brand"
          value={formData.brand}
          onChange={handleChange}
        />
        <InputField
          id="tag"
          label="Tag"
          value={formData.tag}
          onChange={handleChange}
        />
        <InputField
          id="type"
          label="Type"
          value={formData.type}
          onChange={handleChange}
        />
      </div>

      <div className="flex w-full gap-x-5 justify-between">
        <InputField
          id="weight"
          label="Weight"
          value={formData.weight}
          onChange={handleChange}
        />
        <InputField
          id="color"
          label="Color"
          value={formData.color}
          onChange={handleChange}
        />
        <InputField
          id="note"
          label="Note"
          value={formData.note}
          onChange={handleChange}
        />
      </div>

      <div className="flex w-full gap-x-5 justify-between">
        <TextareaField
          id="description"
          label="Description"
          value={formData.description}
          onChange={handleChange}
        />
        <TextareaField
          id="goodPoint"
          label="Good Point"
          value={formData.goodPoint}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

function InputField({
  id,
  label,
  value,
  onChange,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}): JSX.Element {
  return (
    <div className="w-1/2 space-y-1">
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        type="text"
        placeholder=""
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

function TextareaField({
  id,
  label,
  value,
  onChange,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}): JSX.Element {
  return (
    <div className="w-full space-y-1">
      <Label htmlFor={id}>{label}</Label>
      <Textarea
        id={id}
        className="min-h-[100px]"
        placeholder=""
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

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
