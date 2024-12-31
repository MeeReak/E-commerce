"use client";

import { motion } from "framer-motion";
import {
  CircleHelpIcon,
  HeadsetIcon,
  HomeIcon,
  MenuIcon,
  ShoppingBagIcon,
} from "lucide-react";
import Link from "next/link";
import React, { useState, useCallback } from "react";

interface MenuItem {
  label: string;
  href: string;
  icon: JSX.Element;
}

const menu: MenuItem[] = [
  { label: "Home", href: "/", icon: <HomeIcon className="stroke-[1.5px]" /> },
  {
    label: "Shop",
    href: "/shop/1",
    icon: <ShoppingBagIcon className="stroke-[1.5px]" />,
  },
  {
    label: "Blog",
    href: "/blog/1",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="size-6 stroke-[1.5px]"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z"
        />
      </svg>
    ),
  },
  {
    label: "About Us",
    href: "/about-us",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="size-6 stroke-[1.5px]"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
        />
      </svg>
    ),
  },
  {
    label: "Contact Us",
    href: "/contact-us",
    icon: <HeadsetIcon className="stroke-[1.5px]" />,
  },
  {
    label: "FAQs",
    href: "/faqs",
    icon: <CircleHelpIcon className="stroke-[1.5px]" />,
  },
];

const AnimatedOverlay: React.FC<{ onClick: () => void }> = ({ onClick }) => (
  <motion.div
    className="fixed inset-0 bg-black z-40"
    onClick={onClick}
    initial={{ opacity: 0 }}
    animate={{ opacity: 0.6 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5, ease: "easeInOut" }}
  />
);

export const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleCart = useCallback(() => {
    setIsOpen((prevState) => !prevState);
  }, []);

  return (
    <div className="relative flex items-center">
      <MenuIcon onClick={handleToggleCart} className="cursor-pointer size-6" />

      {isOpen && <AnimatedOverlay onClick={handleToggleCart} />}

      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? 0 : "-100%" }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
        className="fixed top-0 left-0 w-[300px] sm:w-[450px] h-screen bg-white z-50 shadow-lg flex flex-col justify-between"
      >
        <div className="mt-2 flex flex-col gap-y-1 overflow-y-auto #008f07 #00b306">
          <p className="text-xl font-medium text-gray-900 leading-[30px] pl-4">
            EcoFresh
          </p>
          {menu.map((item) => (
            <div key={item.label}>
              <Link
                href={item.href}
                passHref
                onClick={handleToggleCart}
                className="flex items-center gap-x-3 py-2 pl-2 mx-2 rounded-md hover:bg-gray-100 text-[#27272a] cursor-pointer"
                aria-label={item.label}
              >
                <div className="text-[#00b306]">{item.icon}</div>
                <p className="text-sm text-gray-400 font-normal">
                  {item.label}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
