"use client";

import { Label } from "../../ui/label";
import { useState, useEffect } from "react";
import { SelectDemo } from "@/components/Select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import api from "@/lib/axios";

interface BlogFormProps {
    formData: Record<string, any>;
    onInputChange: (key: string, value: string | string[]) => void;
    handleSelectChange: (key: string, value: string) => void;
}

interface Category {
    id: string;
    name: string;
}

export function BlogForm({
    formData,
    onInputChange,
    handleSelectChange
}: BlogFormProps): JSX.Element {
    const [categories, setCategories] = useState<Category[]>([]);
    useEffect(() => {
        const fetchCategories = async () => {
            const res = await api.get(
                `${process.env.NEXT_PUBLIC_API_URL}/v1/collections`
            );
            const data = res.data.data;
            setCategories(data);
        };
        fetchCategories();
    }, []);

    return (
        <div className="space-y-4">
            <InputField
                id="name"
                label="Title"
                value={formData.name || "N/A"}
                onChange={(e) =>
                    onInputChange(e.target.name, e.target.value || "N/A")
                }
                className=" w-full"
            />
            <div className="w-1/2 space-y-1">
                <Label className=" text-sm text-gray-500" htmlFor="category">
                    Collection
                </Label>
                <SelectDemo
                    key={formData.category}
                    items={categories}
                    selectedValue={formData.category}
                    onSelectChange={(value) =>
                        handleSelectChange("category", value)
                    } // Update formData
                    placeholder={formData.category}
                    className="text-[#4D4D4D] w-full"
                />
            </div>
            <TextareaField
                id="description1"
                label="Description 1"
                value={formData.description1 || "N/A"}
                onChange={(e) => onInputChange(e.target.name, e.target.value)}
            />
            <TextareaField
                id="description2"
                label="Description 2"
                value={formData.description2 || "N/A"}
                onChange={(e) => onInputChange(e.target.name, e.target.value)}
            />
            <TextareaField
                id="description3"
                label="Description 3"
                value={formData.description3 || "N/A"}
                onChange={(e) => onInputChange(e.target.name, e.target.value)}
            />
        </div>
    );
}

export function InputField({
    id,
    label,
    value,
    onChange,
    className
}: {
    id: string;
    label: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
}): JSX.Element {
    return (
        <div className={`w-1/2 space-y-1 ${className}`}>
            <Label className=" text-sm text-gray-500" htmlFor={id}>
                {label}
            </Label>
            <Input
                id={id}
                type="text"
                className="text-gray-800"
                name={id}
                value={value}
                onChange={onChange}
            />
        </div>
    );
}

export function TextareaField({
    id,
    label,
    value,
    onChange
}: {
    id: string;
    label: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}): JSX.Element {
    return (
        <div className="w-full space-y-1">
            <Label htmlFor={id}>{label}</Label>
            <Textarea
                id={id}
                name={id}
                className="min-h-[150px] text-gray-500"
                value={value}
                onChange={onChange}
            />
        </div>
    );
}
