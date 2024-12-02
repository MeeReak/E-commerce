"use client";

import React, { useMemo } from "react";
import { SelectDemo } from "./Select";
import { Blogs as data } from "@/utils/mockup";
import { BlogCard } from "./BlogCard";
import { PaginationDemo } from "./Pagination";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

export const BlogList = ({ id }: { id: string }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const SortBy = ["Latest", "Newest"];

  // Helper function to get query parameters with fallback values
  const getQueryParams = () => ({
    search: searchParams.get("search")?.toLowerCase() || "",
    category: searchParams.get("category")?.toLowerCase() || "all",
    time: searchParams.get("time")?.toLowerCase() || "newest",
    tag: searchParams.get("tag")?.toLowerCase() || "",
  });

  // Handle category/tag selection and update URL
  const handleSelectChange = (query: string, value: string) => {
    const updatedParams = new URLSearchParams(searchParams.toString());
    updatedParams.set(query, value);
    router.push(`?${updatedParams.toString()}`);
  };

  // Memoize filtered items based on query parameters
  const filteredItems = useMemo(() => {
    const { search, category, time, tag } = getQueryParams();

    // Filter by category
    let filtered = data.filter(
      (item) => category === "all" || item.category.toLowerCase() === category
    );

    // Filter by search query
    if (search) {
      filtered = filtered.filter(
        (item) =>
          item.title.toLowerCase().includes(search) ||
          item.category.toLowerCase().includes(search) ||
          item.tag.toLowerCase().includes(search)
      );
    }

    // Filter by tag
    if (tag) {
      filtered = filtered.filter((item) =>
        item.tag.toLowerCase().includes(tag)
      );
    }

    // Sort by time (Newest or Latest)
    if (time) {
      filtered.sort((a, b) => {
        const dateA = new Date(`${a.date.month} ${a.date.day}, ${a.date.year}`);
        const dateB = new Date(`${b.date.month} ${b.date.day}, ${b.date.year}`);

        if (time === "latest") {
          return dateB.getTime() - dateA.getTime(); // Most recent first
        } else {
          return dateA.getTime() - dateB.getTime(); // Oldest first
        }
      });
    }

    return filtered;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  // Render Blog Cards or No Results Message
  const renderBlogCards = () => {
    if (filteredItems.length === 0) {
      return (
        <div className="w-[880px] flex justify-center items-center h-[350px]">
          <p className="text-[#4D4D4D] text-base font-normal leading-[19.2px]">
            No results found
          </p>
        </div>
      );
    }

    return filteredItems.slice(0, 8).map((item, index) => (
      <div key={index} className="flex">
        <Link key={index} href={`/blog/${item.id}`}>
          <BlogCard
            id={index.toString()}
            comment={item.comment.toString()}
            day={item.date.day}
            month={item.date.month}
            src={item.src}
            tag={item.tag}
            title={item.title}
            user={item.by}
          />
        </Link>
      </div>
    ));
  };

  return (
    <div className="w-[880px]">
      <div className="flex items-center pb-8 justify-between">
        <div className="flex items-center gap-x-2">
          <p>Sort by:</p>
          <SelectDemo
            query="time"
            onSelectChange={handleSelectChange}
            className="text-[#4D4D4D] w-[180px]"
            item={SortBy}
          />
        </div>
        <div className="flex items-center gap-x-1">
          <p className="text-base font-semibold leading-[19.2px] text-gray-900">
            {filteredItems.length}
          </p>
          <p className="text-base font-normal leading-[19.2px] text-gray-900">
            Results Found
          </p>
        </div>
      </div>
      <div className="mx-auto grid grid-cols-2 pb-10 gap-x-1 gap-y-5">
        {renderBlogCards()}
      </div>

      <PaginationDemo pageName="blog-list" param={id} />
    </div>
  );
};
