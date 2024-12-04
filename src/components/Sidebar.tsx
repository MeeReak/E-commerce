"use client";

import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Input } from "./ui/input";
import { CalendarIcon, SearchIcon, XIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion"; // Import motion from framer-motion
import { BlogsMock as Img } from "@/utils/mockup";

export const Sidebar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // State for selected values (categories and tags)
  const [selectedValues, setSelectedValues] = useState<Record<string, string>>(
    () => Object.fromEntries(searchParams.entries())
  );

  // State to store the search query and debounce timeout
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [debounceTimeout, setDebounceTimeout] = useState<NodeJS.Timeout | null>(
    null
  );

  // Update the selected values based on search params when the URL changes
  useEffect(() => {
    setSelectedValues(Object.fromEntries(searchParams.entries()));
  }, [searchParams]);

  // Handle category/tag selection and update URL
  const handleSelectChange = useCallback(
    (query: string, value: string) => {
      const updatedValues = { ...selectedValues, [query]: value };
      setSelectedValues(updatedValues);
      const queryString = new URLSearchParams(updatedValues)
        .toString()
        .toLocaleLowerCase();
      router.replace(`?${queryString}`);
    },
    [router, selectedValues]
  );

  // Handle search input change with debounce
  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setSearchQuery(value);

      // Clear the previous timeout
      if (debounceTimeout) clearTimeout(debounceTimeout);

      // Set a new timeout to update the URL after 500ms
      const timeout = setTimeout(() => {
        handleSelectChange("search", value);
      }, 500);

      setDebounceTimeout(timeout);
    },
    [debounceTimeout, handleSelectChange]
  );

  // Categories and Tags data
  const Category = [
    { name: "Fruit", number: 134 },
    { name: "Vegetables", number: 150 },
    { name: "Cooking", number: 54 },
    { name: "Beverages", number: 43 },
    { name: "Snacks", number: 47 },
    { name: "Beauty & Health", number: 38 },
    { name: "Bread & Bakery", number: 15 },
  ];

  const Tag = [
    "Healthy",
    "Vegetarian",
    "Bread",
    "Vitamins",
    "Snack",
    "Tiffin",
    "Meat",
    "Food",
  ];

  const activeFilters = useMemo(() => {
    const filters = Array.from(searchParams.entries())
      .filter(([key, value]) => key !== "search" && value !== "all")
      .map(([key, value]) => ({ key, value }));

    // Remove duplicate filter values by using a Set
    const uniqueFiltersMap: Record<string, string> = {};

    filters.forEach(({ key, value }) => {
      // If the value hasn't been added already, store it in uniqueFiltersMap
      if (!uniqueFiltersMap[value]) {
        uniqueFiltersMap[value] = key;
      }
    });

    return Object.entries(uniqueFiltersMap).map(([value, key]) => ({
      key,
      value,
    }));
  }, [searchParams]);

  const handleDelete = (filterKey: string) => {
    const updatedParams = new URLSearchParams(searchParams.toString());
    updatedParams.delete(filterKey);
    router.push(`?${updatedParams.toString()}`);
  };

  const renderCategory = (item: { name: string; number: number }) => {
    return (
      <div
        key={item.name}
        onClick={() => handleSelectChange("category", item.name)}
        className="group flex cursor-pointer justify-between items-center py-1"
      >
        <p
          className={`text-sm font-normal leading-6 group-hover:underline group-hover:decoration-[#00B207] decoration-2 group-hover:text-gray-950 
            ${
              searchParams.get("category")?.toLocaleLowerCase() ===
              item.name.toLocaleLowerCase()
                ? "text-[#00B207]"
                : "text-gray-800"
            }`}
        >
          {item.name}
        </p>
        <p
          className={`text-sm font-normal leading-6 group-hover:underline group-hover:decoration-[#00B207] decoration-2 
          ${
            searchParams.get("category")?.toLocaleLowerCase() ===
            item.name.toLocaleLowerCase()
              ? "text-[#00B207]"
              : "text-gray-500"
          }`}
        >
          ({item.number})
        </p>
      </div>
    );
  };

  const renderTag = (tag: string) => (
    <Link
      href={`/blog-list/1?tag=${tag}`}
      key={tag}
      onClick={() => handleSelectChange("tag", tag)}
      className={
        searchParams.get("tag")?.toLocaleLowerCase() === tag.toLocaleLowerCase()
          ? ` cursor-pointer bg-[#00B207] m-1 ml-0 text-white px-4 py-1 rounded-full text-sm font-normal leading-6 hover:bg-gray-200`
          : `cursor-pointer bg-[#F2F2F2] m-1 ml-0 text-gray-900 px-4 py-1 rounded-full text-sm font-normal leading-6 hover:bg-gray-200`
      }
    >
      <div>{tag}</div>
    </Link>
  );

  const renderImageBlog = (
    blog: { id: string; src: string },
    index: number
  ) => (
    <Link href={`/blog/${blog.id}`} key={blog.id}>
      <Image
        className="object-cover w-[100px] h-[100px] rounded-sm"
        src={blog.src}
        alt={`Blog image ${index}`}
        width={100}
        height={100}
      />
    </Link>
  );

  const renderRecentPost = (
    item: { src: string; title: string; date: string; id: string },
    index: number
  ) => (
    <Link
      href={`/blog/${item.id}`}
      key={index}
      className="flex cursor-pointer items-center gap-x-3"
    >
      <Image
        alt="blog"
        className="w-[100px] h-[100px] object-cover rounded-sm"
        src={item.src}
        width={80}
        height={70}
      />
      <div className="space-y-1">
        <p className="text-gray-900 text-base font-medium leading-[150%] line-clamp-2">
          {item.title}
        </p>
        <div className="flex gap-x-2 items-center">
          <CalendarIcon className="size-5 text-[#00B307] stroke-[1.5px]" />
          <p className="text-gray-600 text-sm font-normal leading-6">
            {item.date}
          </p>
        </div>
      </div>
    </Link>
  );

  return (
    <motion.div
      className="mt-[41px] w-[424px]"
      initial={{ opacity: 0, y: 50 }} // Starting position and opacity
      animate={{ opacity: 1, y: 0 }} // Final state
      transition={{ duration: 0.6 }} // Duration of the animation
    >
      {/* Search Section */}
      <motion.div
        className="pb-7 border-b border-gray-200"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <Input
          onChange={handleSearchChange}
          className="w-[424px] py-5 rounded-md"
          type="text"
          placeholder="Search..."
          value={searchQuery}
          leftIcon={<SearchIcon className="text-gray-900 stroke-[1.5px]" />}
        />
      </motion.div>

      {/* Applied filters Section */}
      {activeFilters.length > 0 && (
        <motion.div
          className="pb-7 border-b border-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1, delay: 0 }}
        >
          <p className="text-gray-900 pt-5 text-lg font-medium leading-7">
            Applied filters
          </p>
          <div className=" flex flex-wrap">
            {activeFilters.map(({ key, value }) => (
              <div
                key={key}
                className="flex items-center w-fit space-x-1 cursor-pointer bg-[#00B207] m-1 ml-0 text-white px-3 py-1 rounded-full text-sm font-normal leading-6 "
              >
                <p className="text-white text-sm font-medium leading-[21px]">
                  {value.toUpperCase()}
                </p>
                <XIcon
                  onClick={() => handleDelete(key)}
                  className="size-4 text-[#ffffff] hover:text-[#1A1A1A] cursor-pointer"
                />
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Category Section */}
      <motion.div
        className="pb-7 border-b border-gray-200"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <p className="text-gray-900 pt-5 text-lg font-medium leading-7">
          Top Categories
        </p>
        <div>{Category.map(renderCategory)}</div>
      </motion.div>

      {/* Tag Section */}
      <motion.div
        className="pb-7 border-b border-gray-200"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <p className="text-gray-900 pt-5 text-lg font-medium leading-7">
          Popular Tags
        </p>
        <div className="pt-4 flex flex-wrap">{Tag.map(renderTag)}</div>
      </motion.div>

      {/* Blog Images Section */}
      <motion.div
        className="grid gap-x-2 gap-y-2 pt-7 grid-cols-4 pb-7 border-b border-gray-200"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        {Img.map((blog) => ({
          id: blog.id,
          src: blog.src,
        })).map(renderImageBlog)}
      </motion.div>

      {/* Recent Posts Section */}
      <motion.div
        className="pt-7"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        <p className="pb-4 text-gray-900 text-lg font-medium leading-7">
          Recently Added
        </p>
        <div className="space-y-4">
          {Img.map((blog) => ({
            id: blog.id,
            src: blog.src,
            title: blog.title,
            date: `${blog.date.month.slice(0, 3)} ${blog.date.day}, ${
              blog.date.year
            }`,
          }))
            .slice(0, 3)
            .map(renderRecentPost)}
        </div>
      </motion.div>
    </motion.div>
  );
};
