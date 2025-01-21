import { Label } from "@radix-ui/react-label";
import { CloudUploadIcon, Trash2Icon } from "lucide-react";
import { Input } from "./ui/input";
import Image from "next/image";

export interface UploadedFile {
  url: string;
  name: string;
  size: number;
}

export function FileUpload({
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
