"use client";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { DialogDemo } from "./View";
import { EditForm } from "./Edit";
import { AlertDialogDemo } from "./Delete";
import api from "@/lib/axios";

export interface IProduct {
    id: number;
    name: string;
    sku: string;
    price: number;
    weight: number;
    discount: number;
    quantity: number;
    category: { id: string; name: string };
    brand: string;
    description: string;
    noted: string;
    created_at: string;
    images: string[];
    color: string;
    type: string;
    good_points: string[];
    growth: number;
    positive: boolean;
}

export const Skeleton = ({ className = "" }: { className?: string }) => (
    <div className={`bg-gray-200 animate-pulse rounded ${className}`} />
);

const SkeletonRow = () => (
    <TableRow>
        <TableCell className="pl-11">
            <Skeleton className="h-4 w-6" />
        </TableCell>
        <TableCell className="flex items-center gap-x-5">
            <Skeleton className="h-9 w-9 rounded-md" />
            <Skeleton className="h-4 w-[100px]" />
        </TableCell>
        <TableCell className="pl-2">
            <Skeleton className="h-4 w-[60px]" />
        </TableCell>
        <TableCell className="pl-2">
            <Skeleton className="h-4 w-[60px]" />
        </TableCell>
        <TableCell className="pl-8">
            <Skeleton className="h-4 w-[40px]" />
        </TableCell>
        <TableCell>
            <Skeleton className="h-4 w-[80px]" />
        </TableCell>
        <TableCell>
            <Skeleton className="h-4 w-[100px]" />
        </TableCell>
        <TableCell>
            <Skeleton className="h-4 w-[80px]" />
        </TableCell>
    </TableRow>
);

const formatPrice = (price: number) =>
    new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(price);

const getExpiryDate = (createdAt: string) => {
    const date = new Date(createdAt);
    date.setMonth(date.getMonth() + 6);
    return date.toLocaleDateString("en-US", {
        day: "2-digit",
        month: "short",
        year: "numeric"
    });
};

export function TableDemo() {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [loading, setLoading] = useState(true);
    const searchParams = useSearchParams();
    const searchQuery = searchParams.get("search");

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await api.get(
                    `${process.env.NEXT_PUBLIC_API_URL}/v1/products`
                );
                setProducts(res.data.data);
            } catch (err) {
                console.error("Error fetching products:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const filteredProducts = useMemo(() => {
        if (!searchQuery) return products;
        return products.filter((product) =>
            product.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [products, searchQuery]);

    return (
        <Table>
            <TableHeader>
                <TableRow className="text-base">
                    <TableHead className="pl-10 font-medium">No</TableHead>
                    <TableHead className="font-medium">Name</TableHead>
                    <TableHead className="font-medium">Price</TableHead>
                    <TableHead className="font-medium">Discount</TableHead>
                    <TableHead className="font-medium">Quantity</TableHead>
                    <TableHead className="font-medium">Category</TableHead>
                    <TableHead className="font-medium">
                        Date of Expired
                    </TableHead>
                    <TableHead className="font-medium">Action</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {loading
                    ? Array.from({ length: 5 }, (_, i) => (
                          <SkeletonRow key={i} />
                      ))
                    : filteredProducts.map((product, index) => (
                          <TableRow key={product.id}>
                              <TableCell className="pl-11">
                                  {index + 1}
                              </TableCell>
                              <TableCell className="flex items-center gap-x-5">
                                  <Image
                                      src={product.images[0]}
                                      alt={product.name}
                                      width={36}
                                      height={36}
                                      className="rounded-sm"
                                  />
                                  {product.name}
                              </TableCell>
                              <TableCell className="pl-1">
                                  {formatPrice(product.price)}
                              </TableCell>
                              <TableCell className="pl-5">
                                  {product.discount}%
                              </TableCell>
                              <TableCell className="pl-8">
                                  {product.quantity}
                              </TableCell>
                              <TableCell>{product.category.name}</TableCell>
                              <TableCell className="pl-7">
                                  {getExpiryDate(product.created_at)}
                              </TableCell>
                              <TableCell>
                                  <div className="flex items-center gap-x-2">
                                      <DialogDemo product={product} />
                                      <EditForm product={product} />
                                      <AlertDialogDemo product={product} />
                                  </div>
                              </TableCell>
                          </TableRow>
                      ))}
            </TableBody>
        </Table>
    );
}
