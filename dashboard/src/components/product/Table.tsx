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

export interface IProduct {
    id: number;
    name: string;
    sku: string;
    price: number;
    weight: number;
    discount: number;
    quantity: number;
    category: {
        id: string;
        name: string;
    };
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
export function Skeleton({ className }: { className?: string }) {
    return (
        <div
            className={`bg-gray-200 animate-pulse rounded ${className ?? ""}`}
        />
    );
}

export function TableDemo({ token }: { token: string }) {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [loading, setLoading] = useState(true);
    const searchParams = useSearchParams();
    const q = searchParams.get("search");

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await fetch(
                    "http://127.0.0.1:8000/api/v1/products",
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                            "Content-Type": "application/json"
                        }
                    }
                );

                if (!res.ok) {
                    throw new Error("Failed to fetch products");
                }

                const data = await res.json();
                setProducts(data.data);
            } catch (err) {
                console.error("Error fetching products:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [token]);

    const filtered = useMemo(() => {
        if (!q) return products; // no search — return all orders

        return products.filter((products) =>
            products.name.toLowerCase().includes(q)
        );
    }, [products, q]);

    const renderSkeletonRows = () =>
        Array.from({ length: 5 }).map((_, index) => (
            <TableRow key={index}>
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
        ));

    return (
        <Table>
            <TableHeader>
                <TableRow className=" text-base ">
                    <TableHead className="pl-10 font-medium">No</TableHead>
                    <TableHead className=" font-medium">Name</TableHead>
                    <TableHead className=" font-medium">Price</TableHead>
                    <TableHead className=" font-medium">Discount</TableHead>
                    <TableHead className=" font-medium">Quantity</TableHead>
                    <TableHead className=" font-medium">Category</TableHead>
                    <TableHead className=" font-medium">
                        Date of Expired
                    </TableHead>
                    <TableHead className=" font-medium">Action</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {loading
                    ? renderSkeletonRows()
                    : filtered.map((product, index) => (
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
                                  {new Intl.NumberFormat("en-US", {
                                      style: "currency",
                                      currency: "USD"
                                  }).format(product.price)}
                              </TableCell>
                              <TableCell className="pl-5">
                                  {product.discount}%
                              </TableCell>
                              <TableCell className="pl-8">
                                  {product.quantity}
                              </TableCell>
                              <TableCell>{product.category.name}</TableCell>
                              <TableCell className="pl-7">
                                  {(() => {
                                      //add more 6 months to the date
                                      const date = new Date(product.created_at);
                                      date.setMonth(date.getMonth() + 6);
                                      const day = date.toLocaleString("en-US", {
                                          day: "2-digit"
                                      });
                                      const month = date.toLocaleString(
                                          "en-US",
                                          { month: "short" }
                                      );
                                      const year = date.getFullYear();
                                      return `${day} ${month} ${year}`;
                                  })()}
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
