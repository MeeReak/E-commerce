"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { renderStars } from "./RenderStar";
import Link from "next/link";

type ProductCardYProps = {
  id: string;
  title: string;
  price: number;
  rating: number;
  imgUrl: string;
};

export const ProductCardY: React.FC<ProductCardYProps> = ({
  id,
  title,
  price,
  rating,
  imgUrl,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Trigger animation when in view
        } else {
          setIsVisible(false); // Reset animation when out of view
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of the card is visible
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <Link href={`/product/${id}`}>
      <div
        onMouseEnter={() => {
          setIsHovered(!isHovered);
        }}
        onMouseLeave={() => {
          setIsHovered(!isHovered);
        }}
        ref={cardRef}
        className={`relative container border border-[#E6E6E6] shadow-md transition-transform duration-500 ease-in-out ${
          isVisible ? "scale-100 opacity-100" : "scale-90 opacity-80"
        } hover:border-green-700 hover:shadow-[0px_0px_12px_0px_rgba(32,181,38,0.32)] hover:scale-110`}
      >
        <Image
          className={`size-[248px] object-contain transition-transform duration-500 ${
            isVisible ? "scale-95" : "scale-90"
          }`}
          src={imgUrl}
          alt=""
          width={248}
          height={200}
        />

        {isHovered && (
          <div className=" absolute top-2 space-y-2 right-2">
            <Button
              variant="custom"
              className="p-[10px] text-black border-2 bg-[#F2F2F2] border-[#F2F2F2] transition-colors duration-300 hover:bg-[#00B207] hover:text-white"
              size="icon"
            >
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
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
            </Button>
            <Button
              variant="custom"
              className="p-[10px] text-black border-2 bg-[#F2F2F2] border-[#F2F2F2] transition-colors duration-300 hover:bg-[#00B207] hover:text-white"
              size="icon"
            >
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
                  d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </Button>
          </div>
        )}
        <div className="flex items-center justify-between px-4 py-3">
          <div>
            <header className="text-[#4D4D4D] text-sm font-normal leading-[1.5]">
              {title}
            </header>
            <p className="text-[#1A1A1A] font-poppins text-base font-medium leading-[1.5]">
              ${price.toFixed(2)}
            </p>
            <div className="flex">{renderStars({ rating })}</div>
          </div>
          <Button
            variant="custom"
            className="p-[10px] text-black border-2 bg-[#F2F2F2] border-[#F2F2F2] transition-colors duration-300 hover:bg-[#00B207] hover:text-white"
            size="icon"
          >
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
          </Button>
        </div>
      </div>
    </Link>
  );
};
