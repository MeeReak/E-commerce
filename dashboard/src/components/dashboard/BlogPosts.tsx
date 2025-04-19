"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { CalendarIcon } from "lucide-react";
import Link from "next/link";

const BlogPosts = () => {
    // Sample data for blog posts
    const posts = [
        {
            title: "The Future of E-commerce in 2025",
            excerpt:
                "Discover the emerging trends that will shape online retail in the coming years...",
            author: "Emma Stone",
            date: "April 5, 2025",
            authorImage: "https://avatars.githubusercontent.com/u/124599?v=4",
            readTime: "5 min read"
        },
        {
            title: "Sustainable Products: Meeting Consumer Demand",
            excerpt:
                "How eco-friendly practices are becoming a competitive advantage in today's market...",
            author: "Michael Chen",
            date: "April 4, 2025",
            authorImage: "https://avatars.githubusercontent.com/u/124599?v=4",
            readTime: "7 min read"
        },
        {
            title: "Optimizing Your Supply Chain: A Guide",
            excerpt:
                "Learn strategies to improve efficiency and reduce costs in your logistics operations...",
            author: "Sarah Johnson",
            date: "April 3, 2025",
            authorImage: "https://avatars.githubusercontent.com/u/124599?v=4",
            readTime: "6 min read"
        },
        {
            title: "Sustainable Products: Meeting Consumer Demand",
            excerpt:
                "How eco-friendly practices are becoming a competitive advantage in today's market...",
            author: "Michael Chen",
            date: "April 4, 2025",
            authorImage: "https://avatars.githubusercontent.com/u/124599?v=4",
            readTime: "7 min read"
        }
    ];

    return (
        <Card className="w-full bg-[#ffffff] shadow-sm h-full">
            <CardHeader className="pb-2">
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
                <div className="space-y-6 mt-2">
                    {posts.map((post, index) => (
                        <div key={index} className="space-y-2">
                            <h3 className="font-medium text-gray-600">
                                {post.title}
                            </h3>
                            {/* <p className="text-sm text-gray-400 line-clamp-2">
                                {post.excerpt}
                            </p> */}

                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-2">
                                    <Avatar className="h-6 w-6">
                                        <img
                                            src={post.authorImage}
                                            alt={post.author}
                                        />
                                    </Avatar>
                                    <span className="text-xs text-gray-400">
                                        {post.author}
                                    </span>
                                </div>

                                <div className="flex items-center text-xs text-gray-400">
                                    <CalendarIcon className="h-3 w-3 mr-1 text-green-500" />
                                    <span className=" text-green-500">
                                        {post.date}
                                    </span>
                                    <span className="mx-2">•</span>
                                    <span className=" text-red-400">
                                        {post.readTime}
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
