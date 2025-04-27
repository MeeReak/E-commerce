"use client";

import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
interface IPost {
    name: string;
    user: {
        name: string;
        profile: string | null;
    };
    created_at: string;
    views: number;
}

const BlogPosts = ({ token }: { token: string }) => {
    const [posts, setPosts] = useState<IPost[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const res = await fetch("http://127.0.0.1:8000/api/v1/blogs", {
                    headers: {
                        Accept: "application/json",
                        Authorization: `Bearer ${token}`
                    }
                });

                if (!res.ok) {
                    throw new Error("Failed to fetch blogs");
                }

                const data = await res.json();
                setPosts(data.data);
            } catch (err) {
                console.error("Error fetching blogs:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
    }, [token]);

    console.log("posts", posts);

    return (
        <Card className="w-full bg-[#ffffff] shadow-sm h-full">
            <CardHeader className="pb-1">
                <div className="flex items-center justify-between">
                    <CardTitle className="text-gray-400 text-xl">
                        Latest Blog Posts
                    </CardTitle>
                    <Link
                        href={"/blog"}
                        className="text-sm text-gray-400 hover:text-black"
                    >
                        See more
                    </Link>
                </div>
            </CardHeader>
            <CardContent>
                <div className="space-y-2 min-h-[320px]">
                    {loading
                        ? Array.from({ length: 4 }).map((_, index) => (
                              <div
                                  key={index}
                                  className="space-y-3 animate-pulse"
                              >
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
                                  <div className="pt-1">
                                      <div className="border-t" />
                                  </div>
                              </div>
                          ))
                        : posts
                              .slice(0, 4)
                              .reverse()
                              .map((post, index) => (
                                  <div key={index} className="space-y-2">
                                      <h3 className=" text-gray-600">
                                          {post.name || "N/A"}
                                      </h3>
                                      <div className="flex items-center justify-between">
                                          <div className="flex items-center space-x-2">
                                              {post.user.profile ? (
                                                  <Image
                                                      src={post.user.profile}
                                                      alt={post.user.profile}
                                                      width={36}
                                                      height={36}
                                                      className="rounded-full object-cover"
                                                  />
                                              ) : (
                                                  <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center text-sm font-semibold text-gray-700">
                                                      {post.user?.name
                                                          ?.charAt(0)
                                                          .toUpperCase() || "?"}
                                                  </div>
                                              )}
                                              <span className="text-xs text-gray-400">
                                                  {post.user?.name || "N/A"}
                                              </span>
                                          </div>
                                          <div className="flex items-center text-xs text-gray-400">
                                              <CalendarIcon className="h-3 w-3 mr-1 text-green-500" />
                                              <span className="text-green-500">
                                                  {(() => {
                                                      const date = new Date(
                                                          post.created_at
                                                      );
                                                      date.setMonth(
                                                          date.getMonth() + 6
                                                      );
                                                      return date.toLocaleDateString(
                                                          "en-US",
                                                          {
                                                              day: "2-digit",
                                                              month: "short",
                                                              year: "numeric"
                                                          }
                                                      );
                                                  })() || "N/A"}
                                              </span>
                                              <span className="mx-2">•</span>
                                              <span className="text-red-400">
                                                  {post.views} views
                                              </span>
                                          </div>
                                      </div>
                                      {index < posts.length - 1 && (
                                          <div className="pt-1">
                                              <div className="border-t"></div>
                                          </div>
                                      )}
                                  </div>
                              ))}
                </div>
            </CardContent>
        </Card>
    );
};

export default BlogPosts;
