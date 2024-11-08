'use client'
import React, { useState } from "react";
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

  

  return (
    <div
      className="container w-[312px] h-[116px] border border-[#E6E6E6] hover:border-green-700 hover:shadow-[0px_0px_12px_0px_rgba(32,181,38,0.32)] hover:text-green-800"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex p-1 gap-5">
        <div className="flex justify-center items-center">
          <Image src={imageUrl} alt={title} width={102} height={102} />
        </div>
        <div className="flex flex-col justify-center items-start text-start space-y-1">
          <header className="text-[14px]">{title}</header>
          {isHovered ? (
            // Show ActionProduct component when hovered
            <ActionProduct />
          ) : (
            // Show price and stars when not hovered
            <>
              <p className="font-medium text-[16px]">${price.toFixed(2)}</p>
              <div className="flex">{renderStars({ rating })}</div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
