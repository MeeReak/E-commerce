// import { TrashIcon } from "lucide-react";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SelectCategory } from "../components/SelectCategory";
interface BlogFormProps {
    formData: {
        name?: string;
        postBy?: string;
        role?: string;
        category?: string;
        description?: string;
    };
    onInputChange: (key: string, value: string | string[]) => void;
    handleSelectChange: (key: string, value: string) => void;
}

export function BlogForm({
    formData,
    onInputChange,
    handleSelectChange
}: BlogFormProps): JSX.Element {
    const releaseOptions = {
        query: "release",
        placeholder: "Select a category",
        items: ["Meat", "Fruit", "Vegetable"]
    };

    return (
        <div className="space-y-4">
            <div className="flex w-full gap-x-5 justify-between">
                <InputField
                    id="name"
                    label="Name"
                    value={formData.name || ""}
                    onChange={(e) =>
                        onInputChange(e.target.name, e.target.value)
                    }
                />
                <InputField
                    id="postBy"
                    label="Post by"
                    value={formData.postBy || ""}
                    onChange={(e) =>
                        onInputChange(e.target.name, e.target.value)
                    }
                />
                <InputField
                    id="role"
                    label="Role"
                    value={formData.role || ""}
                    onChange={(e) =>
                        onInputChange(e.target.name, e.target.value)
                    }
                />
                <div className="w-1/2 space-y-1">
                    <Label htmlFor="category">Category</Label>
                    <SelectCategory
                        items={releaseOptions.items}
                        selectedValue={formData.category || ""}
                        onSelectChange={(value) =>
                            handleSelectChange("category", value)
                        }
                        placeholder={releaseOptions.placeholder}
                    />
                </div>
            </div>
            <div className="flex w-full gap-x-5 justify-between">
                <TextareaField
                    id="description"
                    label="Description"
                    value={formData.description || ""}
                    onChange={(e) =>
                        onInputChange(e.target.name, e.target.value)
                    }
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
    className
}: {
    id: string;
    label: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
}): JSX.Element {
    return (
        <div className={`w-1/2 space-y-1 ${className || ""}`}>
            <Label htmlFor={id}>{label}</Label>
            <Input
                id={id}
                type="text"
                className="text-gray-500"
                name={id}
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
