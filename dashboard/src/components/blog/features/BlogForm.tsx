// import { TrashIcon } from "lucide-react";
import { SelectDemo } from "../../Select";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";
import { Textarea } from "@/components/ui/textarea";
interface BlogFormProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    formData: Record<string, any>;
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
        placeholder: "Select Release",
        items: ["All", "New", "Old"]
    };

    return (
        <div className="space-y-4">
            <div className="flex w-full gap-x-5 justify-between">
                <InputField
                    id="name"
                    label="Name"
                    value={formData.name}
                    onChange={(e) =>
                        onInputChange(e.target.name, e.target.value)
                    }
                />
                <InputField
                    id="postBy"
                    label="postBy"
                    value={formData.postBy}
                    onChange={(e) =>
                        onInputChange(e.target.name, e.target.value)
                    }
                />
                <InputField
                    id="role"
                    label="role"
                    value={formData.role}
                    onChange={(e) =>
                        onInputChange(e.target.name, e.target.value)
                    }
                />
                <div className="w-1/2 space-y-1">
                    <Label htmlFor="category">Category</Label>
                    <SelectDemo
                        items={releaseOptions.items}
                        selectedValue={formData.category} // Bind the current value
                        onSelectChange={(value) =>
                            handleSelectChange("category", value)
                        } // Update formData
                        placeholder={releaseOptions.placeholder}
                    />
                </div>
            </div>
            <div className="flex w-full gap-x-5 justify-between">
                <TextareaField
                    id="description"
                    label="Description"
                    value={formData.description}
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
        <div className={`w-1/2 space-y-1 ${className}`}>
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
