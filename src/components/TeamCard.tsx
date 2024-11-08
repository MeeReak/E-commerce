"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Button } from "./ui/button";
import {
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  TwitterIcon,
} from "lucide-react";

export const TeamCard = () => {
  const [isHovered, setIsHovered] = useState(false);

  const socialIcons = [
    { icon: <FacebookIcon />, label: "Facebook" },
    { icon: <GithubIcon />, label: "Github" },
    { icon: <TwitterIcon />, label: "Twitter" },
    { icon: <InstagramIcon />, label: "Instagram" },
  ];

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && (
        <div className="absolute h-[280px] inset-0 bg-black bg-opacity-40 flex justify-center items-center space-x-2">
          {socialIcons.map((social, index) => (
            <Button
              key={index}
              size="icon"
              variant="custom"
              className="p-3 hover:bg-[#00B207]"
              aria-label={social.label}
            >
              {social.icon}
            </Button>
          ))}
        </div>
      )}

      <Image
        className="w-[312px] h-[280px] object-cover"
        src="/images/farmer.jpg"
        alt="Team member Jenny Wilson"
        width={312}
        height={280}
      />

      <div className="p-5 pt-4 border border-t-0">
        <p className="text-[18px] font-medium text-gray-900">Jenny Wilson</p>
        <p className="text-[14px] font-normal text-gray-500">H.E & CEO</p>
      </div>
    </div>
  );
};
