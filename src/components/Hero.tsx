"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import { Button } from "./ui/button";
import { MoveRightIcon } from "lucide-react";
import { motion } from "framer-motion";
import { heroImage as Images } from "@/utils/mockup";

export const Hero = () => {
  const [selected, setSelected] = React.useState(1);
  const [images, setImages] = React.useState(Images[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSelected((prevSelected) => {
        const newIndex = (prevSelected % Images.length) + 1;
        setImages(Images[newIndex - 1]);
        return newIndex;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      <motion.div
        key={selected} // This triggers re-mounting on every change of `selected`
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.75, ease: "easeInOut" }}
        className="w-full h-full"
      >
        <Image
          className="object-cover w-[1320px] h-[600px]"
          src={images}
          alt="hero"
          width={1320}
          height={600}
        />
      </motion.div>
      {/* Conditional styling for alternating content alignment */}
      <motion.div
        key={`content-${selected}`}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 20 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={`absolute top-[20%] ${
          selected % 2 === 0
            ? "right-[5%] flex items-end text-end flex-col"
            : "flex flex-col left-[5%] items-start "
        }`}
      >
        <p className="uppercase text-[#00B207] pb-2 text-[14px] font-medium leading-[14px] tracking-[0.28px]">
          welcome to shopery
        </p>
        <p className="text-[#ffffff] max-w-[600px] pb-7 text-[72px] font-semibold leading-[86.4px]">
          Fresh & Healthy Organic Food
        </p>
        <div className="flex gap-x-2 pb-3">
          <span className="text-[#ffffff] text-[32px] font-normal leading-[38.4px]">
            Sale up to
          </span>
          <p className="text-[#FF8A00] text-[32px] font-semibold leading-[38.4px]">
            30% OFF
          </p>
        </div>
        <p className="pb-8 text-[#a6a6a6] text-[14px] font-normal leading-[21px]">
          Free shipping on all your order. we deliver, you enjoy
        </p>
        <Button
          className="rounded-full py-4 px-10 text-[16px] font-semibold leading-[19.2px]"
          rightIcon={<MoveRightIcon />}
        >
          Shop Now
        </Button>
      </motion.div>

      {/* Image selector buttons */}
      <div className="absolute bottom-[10%] left-[47%] flex gap-3">
        {[1, 2, 3].map((index) => (
          <motion.div
            key={index}
            onClick={() => {
              setSelected(index);
              setImages(Images[index - 1]);
            }}
            className="rounded-full"
            initial={false}
            animate={{
              width: selected === index ? "1.5rem" : "0.75rem",
              height: "0.75rem",
              backgroundColor: selected === index ? "#00B207" : "#B4CCB4",
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
          ></motion.div>
        ))}
      </div>
    </div>
  );
};
