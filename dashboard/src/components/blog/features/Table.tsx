"use client";

import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table";
import { DialogDisplayBlog } from "./View";
import { BlogEdit } from "./Edit";
import { useSearchParams } from "next/navigation";
import { Skeleton } from "@/components/product/Table";
import { AlertDialogDemo } from "./Delete";
import api from "@/lib/axios";

export interface IBlog {
    updated_at: string | number | Date;
    id: number;
    name: string;
    images: string[];
    post_by: string;
    collection: { name: string };
    created_at: string;
    user_id: number;
    user?: {
        name: string;
        profile?: string;
    };
    description: string[];
}

const formatDateWithOffset = (
    dateInput: string | number | Date,
    offsetMonths = 6
): string => {
    if (!dateInput) return "N/A";
    const date = new Date(dateInput);
    date.setMonth(date.getMonth() + offsetMonths);
    return date.toLocaleDateString("en-US", {
        day: "2-digit",
        month: "short",
        year: "numeric"
    });
};

const renderSkeletonRows = (count = 5) =>
    Array.from({ length: count }).map((_, index) => (
        <TableRow key={index}>
            <TableCell className="pl-6">
                <Skeleton className="h-4 w-6" />
            </TableCell>
            <TableCell>
                <Skeleton className="h-4 w-[80px]" />
            </TableCell>
            <TableCell className="flex items-center gap-x-2">
                <Skeleton className="h-9 w-9 rounded-full" />
                <Skeleton className="h-4 w-[60px]" />
            </TableCell>
            <TableCell>
                <Skeleton className="h-4 w-[100px]" />
            </TableCell>
            <TableCell>
                <Skeleton className="h-4 w-[90px]" />
            </TableCell>
            <TableCell>
                <Skeleton className="h-4 w-[60px]" />
            </TableCell>
        </TableRow>
    ));

export function BlogTable() {
    const [blogs, setBlogs] = useState<IBlog[]>([]);
    const [loading, setLoading] = useState(true);
    const searchParams = useSearchParams();
    const searchQuery = useMemo(
        () => searchParams.get("search")?.toLowerCase() || "",
        [searchParams]
    );

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const res = await api.get(
                    `${process.env.NEXT_PUBLIC_API_URL}/v1/blogs`
                );
                const blogData = res.data.data.slice(0, 10);

                const enrichedBlogs = await Promise.all(
                    blogData.map(async (blog: IBlog) => {
                        try {
                            const userRes = await api.get(
                                `${process.env.NEXT_PUBLIC_API_URL}/v1/users/${blog.user_id}`
                            );
                            return { ...blog, user: userRes.data.data };
                        } catch {
                            return blog; // fallback
                        }
                    })
                );

                setBlogs(enrichedBlogs);
            } catch (error) {
                console.error("Error fetching blogs:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    const filteredBlogs = useMemo(() => {
        return searchQuery
            ? blogs.filter((blog) =>
                  blog.name?.toLowerCase().includes(searchQuery)
              )
            : blogs;
    }, [blogs, searchQuery]);

    const renderUserInfo = (user?: IBlog["user"], fallback?: string) => {
        if (user?.profile) {
            return (
                <Image
                    src={user.profile}
                    alt={user.name}
                    width={36}
                    height={36}
                    className="rounded-full object-cover"
                />
            );
        }

        const initial = user?.name?.charAt(0).toUpperCase() || "?";
        return (
            <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center text-sm font-semibold text-gray-700">
                {initial}
            </div>
        );
    };

    return (
        <Table className="bg-white rounded-lg">
            <TableHeader>
                <TableRow>
                    <TableHead className="pl-5">No</TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead>Post by</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Created At</TableHead>
                    <TableHead>Updated At</TableHead>
                    <TableHead>Action</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {loading
                    ? renderSkeletonRows()
                    : filteredBlogs.map((blog, index) => (
                          <TableRow key={blog.id}>
                              <TableCell className="pl-6">
                                  {index + 1}
                              </TableCell>
                              <TableCell className="max-w-60 truncate">
                                  {blog.name || "N/A"}
                              </TableCell>
                              <TableCell>
                                  <div className="flex items-center gap-x-2">
                                      {renderUserInfo(blog.user, blog.post_by)}
                                      <span>
                                          {blog.user?.name ||
                                              blog.post_by ||
                                              "N/A"}
                                      </span>
                                  </div>
                              </TableCell>
                              <TableCell>
                                  {blog.collection?.name || "N/A"}
                              </TableCell>
                              <TableCell>
                                  {formatDateWithOffset(blog.created_at)}
                              </TableCell>
                              <TableCell>
                                  {formatDateWithOffset(blog.updated_at)}
                              </TableCell>
                              <TableCell>
                                  <div className="flex items-center gap-x-2">
                                      <DialogDisplayBlog blog={blog} />
                                      <BlogEdit product={blog} />
                                      <AlertDialogDemo blog={blog} />
                                  </div>
                              </TableCell>
                          </TableRow>
                      ))}
            </TableBody>
        </Table>
    );
}
