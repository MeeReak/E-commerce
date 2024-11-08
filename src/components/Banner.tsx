import React from "react";
import { Button } from "./ui/button";

interface IBannerProps {
  subTitle?: string;
  title?: string;
  children?: React.ReactNode;
  backgroundImage?: string; // Optional prop to pass the background image URL
}

export const Banner = ({
  children,
  subTitle,
  title,
  backgroundImage,
}: IBannerProps) => {
  return (
    <div
      style={{
        backgroundImage: `url(${
          backgroundImage || "/images/banner-vegetable.png"
        })`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "2rem", // Adds padding to avoid overlapping
      }}
      className="text-white w-[424px] h-[536px] flex flex-col items-center "
    >
      <div className="flex items-center flex-col gap-y-4 pb-7">
        <p className=" text-[14px] font-medium leading-none tracking-[0.42px] uppercase">
          {subTitle}
        </p>
        <p className="text-[40px] font-semibold leading-[48px]">{title}</p>
        <div>{children}</div>
      </div>
      <Button
        variant={"outline"}
        className="rounded-full"
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
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        }
      >
        Shop Now
      </Button>
    </div>
  );
};
