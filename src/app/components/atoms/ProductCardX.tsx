"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ActionProduct from "./ActionProduct";
import { renderStars } from "./RenderStar";

interface ProductCardProps {
  title: string;
  price: number;
  imageUrl: string;
  rating: number; // rating will be out of 5
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  price,
  imageUrl,
  rating,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const renderPriceAndRating = () => (
    <div>
      <p className="text-gray-900 pb-[7px] text-[16px] font-medium leading-[150%]">
        ${price.toFixed(2)}
      </p>
      <div className="flex">{renderStars({ rating })}</div>
    </div>
  );

  return (
    <motion.div
      className=" w-[312px] border border-[#E6E6E6] hover:border-green-700 hover:shadow-[0px_0px_12px_0px_rgba(32,181,38,0.32)] hover:text-green-800"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      initial={{ scale: 1, opacity: 1 }}
      animate={
        isHovered ? { scale: 1.05, opacity: 1 } : { scale: 1, opacity: 1 }
      }
      transition={{ duration: 0.3 }}
    >
      <div className="flex p-1 gap-5 items-center pr-5 ">
        <motion.div
          className="flex justify-center items-center"
          initial={{ opacity: 0.9 }}
          animate={{ opacity: isHovered ? 1 : 0.9 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            className="object-cover w-[102px] h-[102px]"
            src={imageUrl}
            alt={title}
            width={102}
            height={102}
          />
        </motion.div>
        <div className="flex flex-col justify-center items-start text-start space-y-1">
          <header className="text-gray-700 text-[14px] font-normal leading-[150%]">
            {title}
          </header>
          {isHovered ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ActionProduct />
            </motion.div>
          ) : (
            renderPriceAndRating()
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
