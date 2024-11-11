"use client";

import React from "react";
import { Button } from "./ui/button";
import { MinusIcon, PlusIcon } from "lucide-react";

export const Quantity = () => {
  const [count, setCount] = React.useState(1);

  const handleDecrease = () => count > 1 && setCount(count - 1);
  const handleIncrease = () => setCount(count + 1);

  const buttonStyles =
    "bg-[#F2F2F2] text-[#1A1A1A] p-[10px] hover:bg-[#F2F2F2] hover:text-[#666666]";

  return (
    <div className="flex gap-x-[15px] items-center border-2 rounded-full p-2 border-[#E6E6E6]">
      <Button
        onClick={handleDecrease}
        size="icon"
        variant="custom"
        className={buttonStyles}
      >
        <MinusIcon size={14} />
      </Button>
      <span className="text-[16px] font-normal leading-[1.5] text-[#1A1A1A]">
        {count}
      </span>
      <Button
        onClick={handleIncrease}
        size="icon"
        variant="custom"
        className={buttonStyles}
      >
        <PlusIcon size={14} />
      </Button>
    </div>
  );
};
