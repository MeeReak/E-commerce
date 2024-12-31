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
import Link from "next/link";

interface TeamCardProps {
  image: string;
  name: string;
  role: string;
}

export const TeamCard = ({ name, image, role }: TeamCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const socialIcons = [
    { icon: <FacebookIcon />, label: "Facebook" },
    { icon: <GithubIcon />, label: "Github" },
    { icon: <TwitterIcon />, label: "Twitter" },
    { icon: <InstagramIcon />, label: "Instagram" },
  ];

  return (
    <div
      className="relative "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && (
        <div className="absolute h-[280px] inset-0 bg-black bg-opacity-40 flex justify-center items-center space-x-2">
          {socialIcons.map((social, index) => (
            <Link
              key={index}
              href={"https://www.facebook.com/profile.php?id=100024190094545"}
            >
              <Button
                size="icon"
                variant="custom"
                className="p-3 hover:bg-[#00B207]"
                aria-label={social.label}
              >
                {social.icon}
              </Button>
            </Link>
          ))}
        </div>
      )}

      <Image
        className="w-[312px] h-[280px] object-cover rounded-t-md"
        src={image}
        alt="Team member Jenny Wilson"
        width={312}
        height={280}
      />

      <div className="p-5 pt-4 border border-t-0 rounded-b-md">
        <p className="text-[18px] font-medium text-gray-900">{name}</p>
        <p className="text-[14px] font-normal text-gray-500">{role}</p>
      </div>
    </div>
  );
};
