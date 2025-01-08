export interface IProduct {
  _id?: string;
  name: string;
  description: string;
  price: number;
  stockQuantity: number;
  star: number;
  images: string[]; // Array of strings, assuming URLs or paths to images
  sku: string;
  brand: string;
  goodPoint: string[]; // Array of strings
  discount: number;
  note: string;
  tag: string[]; // Array of strings
  additionalInfo: string[]; // Array of strings
  categoryId: string;
  createAt?: Date; // Optional as it has a default value
  updateAt?: Date; // Optional
}

export interface IUpdateProduct extends Partial<IProduct> {}

export interface ProductQueryParams {
  page?: number;
  perPage?: number;
  search?: string;
  price?: boolean;
  star?: boolean;
  date?: boolean;
}

export interface IPaginatedProducts {
  page: number;
  perPage: number;
  totalRecord: number;
  totalPage: number;
}
