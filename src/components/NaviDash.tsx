"use client";

import {
  LayoutDashboardIcon,
  RefreshCwIcon,
  SettingsIcon,
  ShoppingBagIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export const NaviDash = () => {
  const pathname = usePathname();

  // Define your navigation items and corresponding paths
  const navItem = [
    {
      label: "Dashboard",
      icon: (
        <LayoutDashboardIcon
          className={`${
            pathname == "/dashboard" ? "fill-gray-900" : "fill-gray-200 "
          }`}
        />
      ),
      path: "/dashboard", // Add the path for comparison
    },
    {
      label: "Order History",
      icon: <RefreshCwIcon className="text-gray-200" />,
      path: "/orders", // Add the path for comparison
    },
    {
      label: "Wishlist",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6 text-gray-200"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
          />
        </svg>
      ),
      path: "/wishlist", // Add the path for comparison
    },
    {
      label: "Shopping Cart",
      icon: <ShoppingBagIcon className="text-gray-200" />,
      path: "/shopping-cart", // Add the path for comparison
    },
    {
      label: "Setting",
      icon: <SettingsIcon />,
      path: "/setting", // Add the path for comparison
    },
    {
      label: "Log-out",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6 "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25"
          />
        </svg>
      ),
      path: "/logout", // Add the path for comparison
    },
  ];

  return (
    <div className="border-2 h-fit mt-10 sticky top-0 border-gray-200 w-[312px] rounded-md">
      <p className="pt-6 pb-4 pl-5 text-gray-900 text-xl font-medium leading-7">
        Navigation
      </p>
      {navItem.map(({ label, icon, path }, index) => (
        <Link
          href={path}
          key={index}
          className={`flex gap-x-[10px] py-4 px-5 hover:bg-gray-100 group ${
            pathname === path ? "bg-gray-100" : ""
          }`}
        >
          <div
            className={`${
              pathname === path ? "text-gray-900" : "text-gray-200"
            } `}
          >
            {icon}
          </div>
          <p
            className={`w-[238px] text-base font-normal leading-6 ${
              pathname === path ? "text-gray-900" : "text-gray-600"
            }`}
          >
            {label}
          </p>
        </Link>
      ))}
    </div>
  );
};
