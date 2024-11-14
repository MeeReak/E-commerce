import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { renderStars } from "./RenderStar";
type ProductCardYProps = {
  title: string;
  price: number;
  rating: number;
  imgURl: string;
};
const ProductCardY: React.FC<ProductCardYProps> = ({
  title,
  price,
  rating,
  imgURl,
}) => {
  return (
    <div className="container w-[248px] border border-[#E6E6E6] shadow hover:border-green-700 hover:shadow-[0px_0px_12px_0px_rgba(32,181,38,0.32)] ">
      <div className="flex justify-center items-center">
        <Image src={imgURl} alt="" width={248} height={200}/>
      </div>
      <div className="flex justify-between p-5">
        <div className="flex flex-col justify-center space-y-2">
          <header className="text-[14px]">{title}</header>
          <p className=" text-[16px] font-bold">${price.toFixed(2)}</p>
          <div className="flex">{renderStars({ rating })}</div>
        </div>
        <div className="flex justify-center items-center ">
          <Button
            leftIcon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
            }
            size={"icon"}
            variant={"ghost"}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCardY;
