import { Input } from "../../ui/input";
import { Label } from "../../ui/label";
import { Textarea } from "@/components/ui/textarea";
import { IBlog } from "./Table";

export function BlogDetails({ product }: { product: IBlog }): JSX.Element {
    return (
        <div className="space-y-4">
            <InputField
                id="name"
                label="Title"
                value={product.name || "N/A"}
                className=" w-full"
            />

            <div className="flex gap-x-5">
                <InputField
                    id="postBy"
                    label="Post by"
                    value={`${product.user?.name || "N/A"}`}
                />
                <InputField
                    id="category"
                    label="Category"
                    value={`${product.collection.name || "N/A"}`}
                />
                <InputField
                    id="date"
                    label="Date"
                    value={
                        (() => {
                            const date = new Date(product.created_at);
                            date.setMonth(date.getMonth() + 6);
                            const day = date.toLocaleString("en-US", {
                                day: "2-digit"
                            });
                            const month = date.toLocaleString("en-US", {
                                month: "short"
                            });
                            const year = date.getFullYear();
                            return `${day} ${month} ${year}`;
                        })() || "N/A"
                    }
                />
            </div>
            <div className="flex w-full flex-col gap-x-5 justify-between">
                {product.description.map((item, index) => (
                    <TextareaField
                        key={index}
                        id={`description-${index}`}
                        label={`Description ${index + 1}`}
                        value={item}
                    />
                ))}
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
