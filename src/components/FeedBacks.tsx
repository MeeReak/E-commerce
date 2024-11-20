"use client";

import React, { useRef, useState, useEffect } from "react";
import { feedbackInfo as data } from "@/utils/mockup";
import FeedBackCard from "@/app/components/atoms/FeedBackCard";
import { motion, useInView } from "framer-motion";

export const FeedBacks = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { amount: 0.2 });
  const [currentIndex, setCurrentIndex] = useState(0);

  // Update the index every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex + 3 >= data.length ? 0 : prevIndex + 3
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Get the current set of items to display
  const currentItems = data.slice(currentIndex, currentIndex + 3);

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="bg-[#F2F2F2]"
    >
      {/* Header Section */}
      <header className="text-center pt-14 pb-9">
        <motion.p
          className="text-[#00B207] text-[14px] font-medium leading-[14px] tracking-[0.28px] uppercase"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Client Testimonial
        </motion.p>
        <motion.p
          className="text-[#1A1A1A] text-[36px] font-semibold leading-[43.2px]"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          What our Client Says
        </motion.p>
      </header>

      {/* Feedback Cards with Animation */}
      <div className="flex w-full justify-evenly pb-14 px-14 overflow-hidden">
        <motion.div
          key={currentIndex} // Unique key to trigger animations on batch change
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
          className="flex w-full justify-evenly"
        >
          {currentItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <FeedBackCard
                content={item.content}
                name={item.name}
                profile={item.src}
                rating={item.star}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};
