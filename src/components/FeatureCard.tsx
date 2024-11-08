import React from "react";
import { Button } from "./ui/button";
import { HeadsetIcon } from "lucide-react";

export const FeatureCard = () => {
  return (
    <div className="group flex items-center gap-x-4 border-b-4 border-white pb-7 hover:border-[#00B207]">
      <Button
        size="icon"
        variant="custom"
        className="bg-[#EDF2EE] text-[#00B207] p-4 group-hover:bg-[#00B207] group-hover:text-white"
      >
        <HeadsetIcon className="size-9" />
      </Button>
      <div className="space-y-2 mr-4">
        <p className="text-gray-900 text-[18px] font-semibold leading-[1.5]">Great Support 24/7</p>
        <p className="text-gray-400 text-[14px] font-normal leading-[1.5]">
          Instant access to Contact
        </p>
      </div>
    </div>
  );
};
