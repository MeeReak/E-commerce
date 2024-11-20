"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import Image from "next/image";

const IMAGES = [
  {
    id: 1,
    src: "https://img.freepik.com/free-vector/food-cartoon-illustration_52683-135634.jpg?semt=ais_hybrid",
    alt: "Image 1",
  },
  {
    id: 2,
    src: "https://img.freepik.com/premium-photo/picture-green-vegetable-with-face-drawn-it_1308157-373698.jpg",
    alt: "Image 2",
  },
  {
    id: 3,
    src: "https://img.freepik.com/free-vector/hand-drawn-food-cartoon-illustration_23-2150760206.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1721433600&semt=ais_user",
    alt: "Image 3",
  },
  {
    id: 4,
    src: "https://img.freepik.com/free-vector/food-cartoon-illustration_52683-135660.jpg?w=360",
    alt: "Image 4",
  },
];

export const ProductDisplay = () => {
  const [selected, setSelected] = useState(1);

  const handleIncrement = () => {
    setSelected((prev) => (prev === IMAGES.length ? 1 : prev + 1));
  };

  const handleDecrease = () => {
    setSelected((prev) => (prev === 1 ? IMAGES.length : prev - 1));
  };

  const handleSelect = (id: number) => {
    setSelected(id);
  };

  return (
    <div className="w-[660px] h-[558px] flex gap-x-3 items-center">
      <div className="space-y-12 flex items-center flex-col">
        <Button
          onClick={handleDecrease}
          size="icon"
          variant="custom"
          className="text-black hover:text-[#999999]"
        >
          <ChevronUpIcon />
        </Button>
        <div>
          {IMAGES.map((image) => (
            <Image
              key={image.id}
              src={image.src}
              alt={image.alt}
              width={80}
              height={90}
              onClick={() => handleSelect(image.id)}
              className={`cursor-pointer ${
                image.id === selected
                  ? "border-2 border-[#00B207] rounded-sm"
                  : ""
              }`}
            />
          ))}
        </div>
        <Button
          onClick={handleIncrement}
          size="icon"
          variant="custom"
          className="text-black hover:text-[#999999]"
        >
          <ChevronDownIcon />
        </Button>
      </div>
      <div>
        {IMAGES.filter((image) => image.id === selected).map((image) => (
          <Image
            key={image.id}
            src={image.src}
            alt={image.alt}
            width={556}
            height={556}
          />
        ))}
      </div>
    </div>
  );
};
