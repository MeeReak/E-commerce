"use client";

import React, { useRef } from "react";
import { Category } from "./Category";
import { Button } from "./ui/button";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import { category as cate } from "@/utils/mockup";
import { motion, useInView } from "framer-motion";

export const Categories = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { amount: 0.2 });
  const ITEM_WIDTH = 200;

  const handleScroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -2 * ITEM_WIDTH : 2 * ITEM_WIDTH,
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      <p className="text-[#00B207] pt-14 text-center text-[14px] font-medium leading-[14px] tracking-[0.28px] uppercase">
        Category
      </p>
      <p className="text-[#1A1A1A] text-center pt-2 pb-9 text-[36px] font-semibold leading-[43.2px]">
        Shop by Top Categories
      </p>
      <div className="relative">
        <ScrollButton direction="left" onClick={() => handleScroll("left")} />
        <div
          ref={scrollRef}
          className="flex overflow-x-scroll space-x-4 hide-scrollbar"
        >
          {cate.map((item, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 w-[200px]"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Category title={item.title} image={item.image} />
            </motion.div>
          ))}
        </div>
        <ScrollButton direction="right" onClick={() => handleScroll("right")} />
      </div>
    </motion.div>
  );
};

interface ScrollButtonProps {
  direction: "left" | "right";
  onClick: () => void;
}

export const ScrollButton: React.FC<ScrollButtonProps> = ({
  direction,
  onClick,
}) => (
  <Button
    variant="custom"
    onClick={onClick}
    className={`absolute ${
      direction === "left" ? "left-[-100px]" : "right-[-120px]"
    } top-1/2 transform -translate-y-1/2 text-black border-[1px] border-gray-200 bg-white p-4 shadow-sm rounded-full hover:text-gray-400`}
  >
    {direction === "left" ? <ArrowLeftIcon /> : <ArrowRightIcon />}
  </Button>
);
