import { SelectDemo } from "./Select";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

export function ProductDetails({
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
