import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

interface IBannerProps {
  subTitle?: string;
  title?: string;
  children?: React.ReactNode;
  backgroundImage?: string;
}

export const Banner: React.FC<IBannerProps> = ({
  subTitle = "Best Deals",
  title = "Sale of the Month",
  children,
  backgroundImage = "/images/banner-vegetable.png",
}) => {
  return (
    <div className="relative">
      <Image
        src={backgroundImage}
        className="w-[424px] h-[536px]"
        width={424}
        height={536} // Adjusted height to match the aspect ratio of the image
        alt="banner"
      />
      <div className="absolute top-[35px] w-full flex flex-col items-center justify-center">
        <p className="text-white text-center text-sm font-medium mb-4 leading-[14px] tracking-[0.42px] uppercase">
          {subTitle}
        </p>
        <p className="text-white text-center text-4xl mb-2 font-semibold leading-[48px]">
          {title}
        </p>
        <div>{children}</div>
        <Button
          variant="outline"
          className="rounded-full mt-6 border-none"
          rightIcon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
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
  );
};
