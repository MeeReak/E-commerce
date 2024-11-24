// import Image from "next/image";
import React from "react";
import { CountdownTimer } from "./CountdownTimer";
import { MoveRightIcon } from "lucide-react";
import { Button } from "./ui/button";

export const BannerDiscount = () => {
  return (
    <div
      className="w-[1320px] relative h-[400px] mt-5 gap-y-5 flex flex-col items-end justify-center pr-20"
      style={{
        backgroundImage: `url(https://s3-alpha-sig.figma.com/img/736a/c341/802327b2806c879e76b9b8612d16e984?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y6BRkqATh2myZEaokbc5mTU1MpM43i3s9k~byde85cGAPHcs8UIgIFPEzhB8xs0SIwdA4xZUMCbAERLn3pP4wdenBV0wHv9loO2pZ-rfBfRQ4KwDhmF1hT7dSH8c9fUG8yIK~R7yAAC3nB~kVu2HEmxtubBa-TrpnxveJ11auoCY6n4IvJ~3abZyJ9XDVyX7uCJ7lbiO85wz1BBw-Jh~edZpJiezsJEaZ~HKax18l6nlvjiDeCLJuJ8qYJLo-L3VZTwTriNKLL62AcNvXUAAd1EoEB~MHevMlAKd9EloitViyR7e2Lq0u8F7YsNxgQKMkLbVnlFkdnbhB6C2vqyVgg__)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        // rotate: "180deg",
      }}
    >
      <p className="text-[#ffffff] text-[14px] font-medium leading-[14px] tracking-[0.28px] uppercase">
        Best Deals
      </p>
      <p className="text-[#00B207] text-[36px] font-semibold leading-[43.2px]">
        Sale of the Month
      </p>
      <CountdownTimer />
      <Button
        className="rounded-full py-4 px-10 text-[16px] font-semibold leading-[19.2px]"
        rightIcon={<MoveRightIcon />}
      >
        Shop Now
      </Button>
      <span className="absolute right-1/3 top-[90px] bg-[#FF8A00] px-6 py-[22px] flex flex-col rounded-full">
        <p className="text-white text-center text-xl font-semibold leading-[150%]">
          56%
        </p>
        <p className="text-[rgba(255,255,255,0.80)] text-center font-poppins text-sm font-medium leading-[100%] tracking-[0.42px] uppercase">
          OFF
        </p>
      </span>
    </div>
  );
};
