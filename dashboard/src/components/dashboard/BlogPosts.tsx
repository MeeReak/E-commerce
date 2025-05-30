"use client";

import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import api from "@/lib/axios";

interface IPost {
    name: string;
    user: {
        name: string;
        profile: string | null;
    };
    created_at: string;
    views: number;
}

const BlogPosts = () => {
    const [posts, setPosts] = useState<IPost[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const res = await api.get(
                    `${process.env.NEXT_PUBLIC_API_URL}/v1/blogs`
                );
                setPosts(res.data.data);
            } catch (err) {
                console.error("Error fetching blogs:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    const formatDate = (dateStr: string) => {
        const date = new Date(dateStr);
        date.setMonth(date.getMonth() + 6); // Adjust logic if needed
        return date.toLocaleDateString("en-US", {
            day: "2-digit",
            month: "short",
            year: "numeric"
        });
    };

    const UserAvatar = ({
        name,
        profile
    }: {
        name: string;
        profile: string | null;
    }) => {
        return profile ? (
            <Image
                src={profile}
                alt={name}
                width={36}
                height={36}
                className="rounded-full object-cover"
            />
        ) : (
            <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center text-sm font-semibold text-gray-700">
                {name?.charAt(0).toUpperCase() || "?"}
            </div>
        );
    };

    const SkeletonRow = (_: any, index: number) => (
        <div key={index} className="space-y-3 animate-pulse">
            <div className="h-3 bg-gray-200 rounded w-full" />
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                    <div className="w-9 h-9 bg-gray-200 rounded-full" />
                    <div className="h-3 w-20 bg-gray-200 rounded" />
                </div>
                <div className="flex items-center space-x-2">
                    <div className="h-3 w-24 bg-gray-200 rounded" />
                    <div className="h-3 w-12 bg-gray-200 rounded" />
                </div>
            </div>
            <div className="pt-1 border-t" />
        </div>
    );

    return (
        <Card className="w-full bg-white shadow-sm h-full">
            <CardHeader className="pb-1">
                <div className="flex items-center justify-between">
                    <CardTitle className="text-gray-400 text-xl">
                        Latest Blog Posts
                    </CardTitle>
                    <Link
                        href="/blog"
                        className="text-sm text-gray-400 hover:text-black"
                    >
                        See more
                    </Link>
                </div>
            </CardHeader>
            <CardContent>
                <div className="space-y-2 min-h-[320px]">
                    {loading
                        ? Array.from({ length: 4 }).map(SkeletonRow)
                        : posts
                              .slice(0, 4)
                              .reverse()
                              .map((post, index) => (
                                  <div key={index} className="space-y-2">
                                      <h3 className="text-gray-600">
                                          {post.name || "N/A"}
                                      </h3>
                                      <div className="flex items-center justify-between">
                                          <div className="flex items-center space-x-2">
                                              <UserAvatar
                                                  name={post.user?.name}
                                                  profile={post.user?.profile}
                                              />
                                              <span className="text-xs text-gray-400">
                                                  {post.user?.name || "N/A"}
                                              </span>
                                          </div>
                                          <div className="flex items-center text-xs text-gray-400">
                                              <CalendarIcon className="h-3 w-3 mr-1 text-green-500" />
                                              <span className="text-green-500">
                                                  {formatDate(post.created_at)}
                                              </span>
                                              <span className="mx-2">•</span>
                                              <span className="text-red-400">
                                                  {post.views} views
                                              </span>
                                          </div>
                                      </div>
                                      {index < posts.length - 1 && (
                                          <div className="pt-1 border-t" />
                                      )}
                                  </div>
                              ))}
                </div>
            </CardContent>
        </Card>
    );
};

export default BlogPosts;
