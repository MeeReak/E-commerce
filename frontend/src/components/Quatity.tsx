import { MinusIcon, PlusIcon } from "lucide-react";
import { Button } from "./ui/button";

export const Quantity = ({
  id,
  qty,
  setQty,
  setQtys,
}: {
  id: string;
  qty: number;
  setQty?: (id: string, qty: number) => void;
  setQtys?: (qty: number) => void;
}) => {
  const handleDecrease = () => {
    if (qty > 1) {
      if (setQty) {
        setQty(id, qty - 1);
      } else {
        setQtys!(qty - 1);
      }
    }
  };

  const handleIncrease = () => {
    if (setQty) {
      setQty(id, qty + 1);
    } else {
      setQtys!(qty + 1);
    }
  };

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
      <span className="text-[16px] font-normal pr-2 w-[5px]  leading-[1.5] text-[#1A1A1A]">
        {qty}
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
