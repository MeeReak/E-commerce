"use client";

import React, { useRef } from "react";
import { BlogCard } from "./BlogCard";
import { BlogsMock as data } from "@/utils/mockup";
import { motion, useInView } from "framer-motion";

export const Blogs = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { amount: 0.2 });

  return (
    <motion.section
      ref={containerRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="py-14"
    >
      {/* Category Header */}
      <header className="text-center">
        <motion.p
          className="text-[#00B207] text-[14px] font-medium leading-[14px] tracking-[0.28px] uppercase"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Blog
        </motion.p>
        <motion.h2
          className="text-[#1A1A1A] pt-2 pb-9 text-[36px] font-semibold leading-[43.2px]"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Latest Blog
        </motion.h2>
      </header>

      {/* Blog Card Grid */}
      <div className="flex justify-between w-full">
        {data.slice(0,3).map((item, index) => (
          <motion.div
            onClick={() => (window.location.href = `/blog/${item.id}`)}
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <BlogCard
              src={item.src}
              tag={item.tag}
              user={item.by}
              comment={item.comment}
              title={item.title}
              day={item.date.day}
              month={item.date.month}
              id={item.id}
            />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};
