import React from "react";
import Image from "next/image";

interface ICategoryProps {
  title: string;
  image?: string;
}

export const Category = ({
  title,
  image = "/images/snack.png",
}: ICategoryProps) => {
  return (
    <div className=" px-5 border-[1px] border-gray-200 flex flex-col items-center justify-center  hover:border-green-700 bg-white hover:shadow-[0px_0px_12px_0px_rgba(32,181,38,0.32)] hover:text-green-800">
      <Image
        className=" pb-3 "
        src={image}
        alt="category"
        width={190}
        height={190}
      />
      <p className="pb-5 text-[18px] font-medium">{title}</p>
    </div>
  );
};
