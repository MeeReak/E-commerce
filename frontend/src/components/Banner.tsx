"use client";

import React, { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";

interface IBannerProps {
  subTitle?: string;
  title?: string;
  children?: React.ReactNode;
  backgroundImage?: string;
  titleStyle?: string;
  subTitleStyle?: string;
  className?: string;
  cate?: string;
}

export const Banner: React.FC<IBannerProps> = ({
  subTitle = "Best Deals",
  title = "Sale of the Month",
  children,
  backgroundImage = "/images/banner-vegetable.png",
  titleStyle = "text-white",
  subTitleStyle = "text-white",
  className = "",
  cate = "vegetable",
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Trigger animation when visible
        } else {
          setIsVisible(false); // Reset animation when out of view
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of the banner is visible
      }
    );

    if (bannerRef.current) {
      observer.observe(bannerRef.current);
    }

    return () => {
      if (bannerRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(bannerRef.current);
      }
    };
  }, []);

  return (
    <Link href={`/shop/1?category=${cate}`}>
      {" "}
      <div
        className={`relative  ${isVisible ? "animate-visible " : ""}`}
        ref={bannerRef}
      >
        <Image
          src={backgroundImage}
          className={`rounded-sm transition-opacity duration-700 ease-in-out ${
            isVisible ? "opacity-100" : "opacity-90"
          } ${className}`}
          width={424}
          height={106}
          alt="banner"
        />
        <div
          className={`absolute top-[35px] w-full flex flex-col items-center justify-center transition-all duration-700 ease-in-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <p
            className={`text-center text-sm font-medium mb-4 leading-[14px] tracking-[0.42px] uppercase transition-all duration-700 ease-in-out ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-5 opacity-0"
            } ${subTitleStyle}`}
          >
            {subTitle}
          </p>
          <p
            className={`text-center text-4xl mb-2 font-semibold leading-[48px] transition-all duration-700 ease-in-out ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-5 opacity-0"
            } ${titleStyle}`}
          >
            {title}
          </p>
          <div
            className={`transition-opacity duration-700 ease-in-out ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            {children}
          </div>
          <Button
            variant="outline"
            className={`rounded-full border-none text-[#00B207] text-sm font-semibold leading-[1.2] transition-transform duration-700 ease-in-out ${
              isVisible ? "scale-100" : "scale-90"
            }`}
            rightIcon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0L13.5 19.5M21 12H3"
                />
              </svg>
            }
          >
            Shop Now
          </Button>
        </div>
      </div>
    </Link>
  );
};
