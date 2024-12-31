import React from "react";
import { Button } from "./ui/button";
import {
  FacebookIcon,
  GithubIcon,
  TwitterIcon,
  InstagramIcon,
} from "lucide-react";
const socialIcons = [
  { icon: <FacebookIcon />, label: "Facebook" },
  { icon: <GithubIcon />, label: "Github" },
  { icon: <TwitterIcon />, label: "Twitter" },
  { icon: <InstagramIcon />, label: "Instagram" },
];
const Social = () => {
  return (
    <div className="flex">
      {socialIcons.map((social, index) => (
        <Button
          key={index}
          size="icon"
          variant="custom"
          className="p-3 text-[#4D4D4D] hover:text-white hover:bg-[#00B207]"
          aria-label={social.label}
        >
          {social.icon}
        </Button>
      ))}
    </div>
  );
};

export default Social;
