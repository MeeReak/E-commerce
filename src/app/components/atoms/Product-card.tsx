import React from "react";
import Image from "next/image";

interface ProductCardProps {
  title: string;
  price: number;
  imageUrl: string;
  rating: number; // rating will be out of 5
}

const ProductCard: React.FC<ProductCardProps> = ({ title, price, imageUrl, rating }) => {
  // Function to render stars based on the rating
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          fill={i < rating ? "#FF8A00" : "#E6E6E6"} // filled or empty based on rating
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="none"
          className="size-[13px] outline-none"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
          />
        </svg>
      );
    }
    return stars;
  };

  return (
    <div className="container w-[312px] border border-[#E6E6E6]">
      <div className="flex p-1 gap-5">
        <div className="flex justify-center items-center">
          <Image src={imageUrl} alt={title} width={102} height={102} />
        </div>
        <div className="flex flex-col justify-center items-start text-start">
          <header className="text-[14px]">{title}</header>
          <p className="font-medium text-[16px]">${price.toFixed(2)}</p>
          <div className="flex">{renderStars()}</div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
