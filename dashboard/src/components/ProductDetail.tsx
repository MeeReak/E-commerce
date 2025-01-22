import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

interface Image {
  src: string;
  id: number;
  alt: string;
}

interface Comment {
  id: string;
  name: string;
  rating: number;
  date: string;
  comment: string;
}

interface AdditionalInfo {
  weight: string;
  color: string;
  type: string;
  category: string;
  stockStatus: string;
  tags: string[];
}

interface Product {
  id: string;
  gty: number;
  name: string;
  src: string;
  images: Image[];
  price: number;
  afterDiscount: number;
  discount: number;
  type: string;
  star: number;
  review: number;
  stockStatus: string;
  sku: string;
  brand: string;
  category: string;
  description: string;
  keyPoints: string[];
  note: string;
  additionalInfo: AdditionalInfo;
  comments: Comment[];
  dateAdded: string;
}

export function ProductDetails({ product }: { product: Product }): JSX.Element {
  return (
    <div className="space-y-4">
      <div className="flex w-full gap-x-5 justify-between">
        <InputField id="name" label="Name" value={product.name} />
        <InputField id="sku" label="SKU" value={product.sku} />
        <InputField
          id="category"
          label="Category"
          value={`${product.category}`}
        />
      </div>

      <div className="flex w-full gap-x-5 justify-between">
        <InputField
          id="price"
          label="Product Price"
          value={`${product.price.toFixed(2).toString()}$`}
        />
        <InputField
          id="quantity"
          label="Quantity"
          value={product.gty.toString()}
        />
        <InputField
          id="discount"
          label="Discount"
          value={`${product.discount.toFixed(2).toString()}%`}
        />
      </div>

      <div className="flex w-full gap-x-5 justify-between">
        <InputField id="brand" label="Brand" value={product.brand} />
        <InputField id="type" label="Type" value={product.type} />
        <InputField id="weight" label="Weight" value="" />
      </div>

      <div className="flex w-full gap-x-5">
        <InputField id="color" className=" w-[220px]" label="Color" value="" />
        <InputField id="note" label="Note" className=" w-[460px]" value="" />
      </div>

      <div className="flex w-full flex-wrap gap-y-2 gap-x-5 justify-between">
        {product.keyPoints.map((point, index) => (
          <InputField
            key={index}
            id={`point-${index}`}
            label={`Point ${index + 1}`}
            value={point}
            className="w-full"
          />
        ))}
      </div>

      <div className="flex w-full flex-col gap-x-5 justify-between">
        <TextareaField
          id="description"
          label="Description"
          value={product.description}
        />
      </div>
    </div>
  );
}

function InputField({
  id,
  label,
  value,
  className,
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
  value,
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
