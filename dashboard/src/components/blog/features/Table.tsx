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

export function BlogTable({ token }: { token: string }) {
    const [blogs, setBlogs] = useState<IBlog[]>([]);
    const [loading, setLoading] = useState(true);
    const searchParams = useSearchParams();
    const q = useMemo(() => {
        return searchParams.get("search")?.toLowerCase() || "";
    }, [searchParams.toString()]);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const res = await fetch("http://127.0.0.1:8000/api/v1/blogs", {
                    headers: {
                        Accept: "application/json",
                        Authorization: `Bearer ${token}`
                    }
                });

                if (!res.ok) throw new Error("Failed to fetch blogs");

                const blogData = await res.json();
                const blogs = blogData.data.slice(0, 10);

                // Fetch user info for each blog
                const blogsWithUsers = await Promise.all(
                    blogs.map(async (blog: IBlog) => {
                        try {
                            const userRes = await fetch(
                                `http://127.0.0.1:8000/api/v1/users/${blog.user_id}`,
                                {
                                    headers: {
                                        Authorization: `Bearer ${token}`
                                    }
                                }
                            );
                            const userData = await userRes.json();
                            return {
                                ...blog,
                                user: userData.data
                            };
                        } catch {
                            return blog; // fallback if user fetch fails
                        }
                    })
                );

                setBlogs(blogsWithUsers);
            } catch (error) {
                console.error("Error fetching blogs:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
    }, [token]);

    const filtered = useMemo(() => {
        if (!q) return blogs; // no search — return all orders

        return blogs.filter((blog) => blog.name?.toLowerCase().includes(q));
    }, [blogs, q]);

    const renderSkeletonRows = () =>
        Array.from({ length: 5 }).map((_, index) => (
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

    return (
        <Table className="bg-white rounded-lg">
            <TableHeader>
                <TableRow>
                    <TableHead className="pl-5">No</TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead>Post by</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Created At</TableHead>
                    <TableHead>Update At</TableHead>
                    <TableHead>Action</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {loading
                    ? renderSkeletonRows()
                    : filtered.map((blog, index) => (
                          <TableRow key={blog.id}>
                              <TableCell className="pl-6">
                                  {index + 1}
                              </TableCell>
                              <TableCell className=" max-w-60 truncate">
                                  {blog.name || "N/A"}
                              </TableCell>
                              <TableCell>
                                  <div className="flex items-center gap-x-2">
                                      {blog.user?.profile ? (
                                          <Image
                                              src={blog.user.profile}
                                              alt={blog.user.name}
                                              width={36}
                                              height={36}
                                              className="rounded-full object-cover"
                                          />
                                      ) : (
                                          <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center text-sm font-semibold text-gray-700">
                                              {blog.user?.name
                                                  ?.charAt(0)
                                                  .toUpperCase() || "?"}
                                          </div>
                                      )}
                                      <span>
                                          {blog.user?.name ||
                                              blog.post_by ||
                                              "N/A"}
                                      </span>
                                  </div>
                              </TableCell>
                              <TableCell>
                                  {blog.collection.name || "N/A"}
                              </TableCell>
                              <TableCell>
                                  {(() => {
                                      //add more 6 months to the date
                                      const date = new Date(blog.created_at);
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
                                  })() || "N/A"}
                              </TableCell>
                              <TableCell>
                                  {(() => {
                                      if (!blog.updated_at) return "N/A";
                                      const date = new Date(blog.updated_at);
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
                                  })() || "N/A"}
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
