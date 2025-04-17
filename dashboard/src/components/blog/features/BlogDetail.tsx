import { Input } from "../../ui/input";
import { Label } from "../../ui/label";
import { BlogTypes } from "../types/Blog.types";
import { Textarea } from "@/components/ui/textarea";

export function BlogDetails({ product }: { product: BlogTypes }): JSX.Element {
    return (
        <div className="space-y-4">
            <div className="flex w-full  gap-x-5 justify-between">
                <InputField id="name" label="Name" value={product.name} />
                <InputField
                    id="category"
                    label="Category"
                    value={`${product.category}`}
                />
            </div>
            <div className="flex gap-x-5">
                <InputField
                    id="postBy"
                    label="postBy"
                    value={`${product.postBy}`}
                />
                <InputField id="role" label="role" value={`${product.role}`} />
                <InputField
                    id="date"
                    label="date"
                    value={`${product.dateAdded}`}
                />
            </div>
            <div className="flex w-full flex-col gap-x-5 justify-between">
                <TextareaField
                    id="description"
                    label="Description"
                    value={`${product.description}`}
                />
            </div>
        </div>
    );
}

function InputField({
    id,
    label,
    value,
    className
}: {
    id: string;
    label: string;
    value: string;
    className?: string;
}): JSX.Element {
    return (
        <div className={`w-1/2 space-y-1 ${className}`}>
            <Label htmlFor={id}>{label}</Label>
            <Input
                id={id}
                type="text"
                className="text-gray-500"
                placeholder=""
                readOnly
                value={value}
            />
        </div>
    );
}
function TextareaField({
    id,
    label,
    value
}: {
    id: string;
    label: string;
    value: string;
}): JSX.Element {
    return (
        <div className="w-full space-y-1">
            <Label htmlFor={id}>{label}</Label>
            <Textarea
                id={id}
                readOnly
                className="h-[200px] text-gray-500"
                placeholder=""
                value={value}
            />
        </div>
    );
}
