import { TrashIcon } from "lucide-react";
import { SelectDemo } from "../Select";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

interface ProductDetailsProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    formData: Record<string, any>;
    onInputChange: (key: string, value: string | string[]) => void;
    handleSelectChange: (key: string, value: string) => void;
}

export function ProductDetails({
    formData,
    onInputChange,
    handleSelectChange
}: ProductDetailsProps): JSX.Element {
    const languages = ["EN", "KM"];

    const handleGoodPointChange = (index: number, value: string): void => {
        const updatedGoodPoints = [...formData.goodPoints];
        updatedGoodPoints[index] = value;
        onInputChange("goodPoints", updatedGoodPoints);
    };

    const addGoodPoint = (): void => {
        onInputChange("goodPoints", [...formData.goodPoints, ""]);
    };

    const removeGoodPoint = (index: number): void => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const updatedGoodPoints = formData.goodPoints.filter(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (_: any, i: number) => i !== index
        );
        onInputChange("goodPoints", updatedGoodPoints);
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
                    id="sku"
                    label="SKU"
                    value={formData.sku}
                    onChange={(e) =>
                        onInputChange(e.target.name, e.target.value)
                    }
                />
                <div className="w-1/2 space-y-1">
                    <Label
                        className=" text-sm text-gray-500"
                        htmlFor="category"
                    >
                        Category
                    </Label>
                    <SelectDemo
                        onSelectChange={(value) =>
                            handleSelectChange("category", value)
                        } // Update formData
                        className="text-[#4D4D4D] w-full"
                        items={["Clothing", "Vegetables", "Electronics"]}
                    />
                </div>
            </div>

            <div className="flex w-full gap-x-5 justify-between">
                <InputField
                    id="price"
                    label="Price"
                    value={formData.price}
                    onChange={(e) =>
                        onInputChange(e.target.name, e.target.value)
                    }
                />
                <InputField
                    id="quantity"
                    label="Quantity"
                    value={formData.quantity}
                    onChange={(e) =>
                        onInputChange(e.target.name, e.target.value)
                    }
                />
                <InputField
                    id="discount"
                    label="Discount"
                    value={formData.discount}
                    onChange={(e) =>
                        onInputChange(e.target.name, e.target.value)
                    }
                />
            </div>

            <div className="flex w-full gap-x-5 justify-between">
                <InputField
                    id="brand"
                    label="Brand"
                    value={formData.brand}
                    onChange={(e) =>
                        onInputChange(e.target.name, e.target.value)
                    }
                />
                <InputField
                    id="type"
                    label="Type"
                    value={formData.type}
                    onChange={(e) =>
                        onInputChange(e.target.name, e.target.value)
                    }
                />
                <InputField
                    id="weight"
                    label="Weight"
                    value={formData.weight}
                    onChange={(e) =>
                        onInputChange(e.target.name, e.target.value)
                    }
                />
            </div>

            <div className="flex w-full gap-x-5 items-center justify-between">
                <div className="w-[260px]">
                    <InputField
                        id="color"
                        className="w-[220px]"
                        label="Color"
                        value={formData.color}
                        onChange={(e) =>
                            onInputChange(e.target.name, e.target.value)
                        }
                    />
                </div>
                <InputField
                    id="note"
                    label="Note"
                    className="w-[290px]"
                    onChange={(e) =>
                        onInputChange(e.target.name, e.target.value)
                    }
                />
                <Button
                    type="button"
                    variant="outline"
                    className="mt-7"
                    onClick={addGoodPoint}
                >
                    Add Good Point
                </Button>
            </div>

            <div className="flex w-full flex-wrap gap-y-2 justify-between">
                {formData.goodPoints.map((point: string, index: number) => (
                    <div
                        key={index}
                        className="flex  justify-between items-center gap-x-5"
                    >
                        <InputField
                            className=" w-[645px]"
                            id={`good-point-${index}`}
                            label={`Good Point`}
                            value={point}
                            onChange={(e) =>
                                handleGoodPointChange(index, e.target.value)
                            }
                        />
                        <TrashIcon
                            onClick={() => removeGoodPoint(index)}
                            className="stroke-[1.5px] size-9 mt-7 p-2 bg-red-100 text-red-600 rounded-sm cursor-pointer"
                        />
                    </div>
                ))}
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
