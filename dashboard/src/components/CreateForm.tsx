"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  // DialogFooter,
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

export function DialogDemo(): JSX.Element {
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const languages = ["EN", "KM"];

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
        <div className="space-y-4">
          <div className=" flex w-full gap-x-5 justify-between">
            <div className="w-1/2 space-y-1">
              <Label htmlFor="name">Name</Label>
              <Input id="name" type="text" placeholder="" />
            </div>
            <div className="w-1/3 space-y-1">
              <Label htmlFor="sku">SKU</Label>
              <Input id="sku" type="text" placeholder="" />
            </div>
            <div className="w-1/3 space-y-1">
              <Label htmlFor="category">Category</Label>
              <SelectDemo item={languages} />
            </div>
          </div>

          <div className=" flex w-full gap-x-5 justify-between">
            <div className="w-1/2 space-y-1">
              <Label htmlFor="price">Product Price</Label>
              <Input id="price" type="text" placeholder="" />
            </div>
            <div className="w-1/2 space-y-1">
              <Label htmlFor="quantity">Quantity</Label>
              <Input id="quantity" type="text" placeholder="" />
            </div>
            <div className="w-1/2 space-y-1">
              <Label htmlFor="discount">Discount</Label>
              <Input id="discount" type="text" placeholder="" />
            </div>
          </div>

          <div className=" flex w-full gap-x-5 justify-between">
            <div className="w-1/2 space-y-1">
              <Label htmlFor="brand">Brand</Label>
              <Input id="brand" type="text" placeholder="" />
            </div>
            <div className="w-1/2 space-y-1">
              <Label htmlFor="tag">Tag</Label>
              <Input id="tag" type="text" placeholder="" />
            </div>
            <div className="w-1/2 space-y-1">
              <Label htmlFor="type">Type</Label>
              <Input id="type" type="text" placeholder="" />
            </div>
          </div>

          <div className=" space-y-1">
            <Label htmlFor="name">Image of Product</Label>

            {/* File Upload Drop Zone */}
            <div className="border-2 border-dashed border-gray-300 p-6 rounded-lg text-center bg-gray-50 ">
              <Input
                type="file"
                multiple
                onChange={handleFileChange}
                className="hidden"
                id="file-input"
              />
              <Label
                htmlFor="file-input"
                className="cursor-pointer flex flex-col items-center"
              >
                <CloudUploadIcon className=" mb-4" />
                <p className="text-sm font-medium text-gray-600">
                  Upload a File
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  Drag and drop files here
                </p>
              </Label>
            </div>

            {/* Uploaded File Preview */}
            <div>
              {uploadedFiles.map((file, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between bg-blue-50 border border-blue-200 rounded-lg p-3 mt-1"
                >
                  <div className="flex items-center gap-3">
                    <Image
                      width={48}
                      height={48}
                      src={file.url}
                      alt={file.name}
                      className="w-8 h-8 object-cover rounded"
                    />
                    <div className=" flex justify-between items-center w-[590px]">
                      <p className="text-sm font-medium text-gray-800">
                        {file.name}
                      </p>
                      <p className="text-sm text-gray-500">
                        {(file.size / 1024).toFixed(1)} KB
                      </p>
                    </div>
                  </div>
                  <span
                    onClick={() => handleRemoveFile(index)}
                    className="text-red-600 bg-red-100 rounded p-1 hover:bg-red-200"
                  >
                    <Trash2Icon className=" size-5" />
                  </span>
                </div>
              ))}
            </div>

            <div className=" flex w-full gap-x-5 justify-between">
              <div className="w-1/2 space-y-1">
                <Label htmlFor="weight">Weight</Label>
                <Input id="weight" type="text" placeholder="" />
              </div>
              <div className="w-1/2 space-y-1">
                <Label htmlFor="color">Color</Label>
                <Input id="color" type="text" placeholder="" />
              </div>
              <div className="w-1/2 space-y-1">
                <Label htmlFor="note">Note</Label>
                <Input id="note" type="text" placeholder="" />
              </div>
            </div>

            <div className=" flex w-full gap-x-5 justify-between">
              <div className=" w-full">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  className=" min-h-[100px]"
                  placeholder=""
                />
              </div>
              <div className=" w-full">
                <Label htmlFor="goodPoint">Good Point</Label>
                <Textarea
                  id="goodPoint"
                  className=" min-h-[100px]"
                  placeholder=""
                />
              </div>
            </div>
          </div>
        </div>
        {/* <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter> */}
      </DialogContent>
    </Dialog>
  );
}
