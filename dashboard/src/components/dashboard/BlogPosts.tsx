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
        <Card className="w-full bg-black border-gray-800 h-full">
            <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                    <CardTitle className="text-white text-xl">
                        Latest Blog Posts
                    </CardTitle>
                    <Link
                        href={"/blog"}
                        className="text-sm text-gray-400 hover:text-white"
                    >
                        See more
                    </Link>
                </div>
            </CardHeader>
            <CardContent>
                <div className="space-y-6 mt-2">
                    {posts.map((post, index) => (
                        <div key={index} className="space-y-2">
                            <h3 className="font-medium text-white">
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
                                    <CalendarIcon className="h-3 w-3 mr-1" />
                                    <span>{post.date}</span>
                                    <span className="mx-2">•</span>
                                    <span>{post.readTime}</span>
                                </div>
                            </div>

                            {index < posts.length - 1 && (
                                <div className="pt-1">
                                    <div className="border-t border-gray-800"></div>
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
