"use client";

import React, { ReactNode, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ClipboardListIcon,
  LayoutDashboardIcon,
  PanelRightIcon,
  ShoppingCartIcon,
  UsersIcon,
} from "lucide-react";

const SidebarItem = ({
  href,
  icon: Icon,
  label,
  isOpen,
}: {
  href: string;
  icon: React.ElementType;
  label: string;
  isOpen: boolean;
}) => (
  <li>
    <Link
      href={href}
      className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
    >
      <Icon className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
      <span className={isOpen ? "ms-3 whitespace-nowrap text-gray-200 group-hover:text-gray-900" : "hidden "}>
        {label}
      </span>
    </Link>
  </li>
);

const Layout = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(true);

  const menuItems = [
    {
      href: "/",
      icon: () => (
        <LayoutDashboardIcon className=" flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
      ),
      label: "Overview",
    },
    {
      href: "/product",
      icon: () => (
        <ShoppingCartIcon className=" flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
      ),
      label: "Product",
    },
    {
      href: "/order",
      icon: () => (
        <ClipboardListIcon className=" flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
      ),
      label: "Orders",
    },
    {
      href: "/user",
      icon: () => (
        <UsersIcon className=" flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
      ),
      label: "User",
    },
  ];

  return (
    <div className="flex min-h-screen ">
      {/* Sidebar */}
      <aside
        onClick={() => setIsOpen(true)}
        id="logo-sidebar"
        className={`fixed  top-0 left-0 z-40 h-screen transition-all duration-300 ${
          isOpen ? "w-64" : "w-[70px]"
        }`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-black">
          <div
            className={
              isOpen
                ? "flex items-center justify-between p-2 mb-4"
                : "flex items-center justify-center p-2 mb-4"
            }
          >
            <div className="flex items-center gap-x-2 flex-1">
              <Image
                alt="ecoFresh"
                src={"svg/logo.svg"}
                width={30}
                height={30}
              />
              <span
                className={
                  isOpen
                    ? "self-center text-xl font-semibold whitespace-nowrap text-white"
                    : "hidden"
                }
              >
                ecoBoard
              </span>
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(!isOpen);
              }}
              className="focus:outline-none"
            >
              {isOpen && (
                <PanelRightIcon className="w-6 h-6 text-gray-500 cursor-pointer" />
              )}
            </button>
          </div>
          <ul className="space-y-2 pl-1 font-medium">
            {menuItems.map((item, index) => (
              <SidebarItem
                key={index}
                href={item.href}
                icon={item.icon}
                label={item.label}
                isOpen={isOpen}
              />
            ))}
          </ul>
        </div>
      </aside>

      {/* Main Content */}
      <main
        className={`flex-1 transition-all duration-300 ${
          isOpen ? "ml-64" : "ml-[70px]"
        }`}
      >
        {children}
      </main>
    </div>
  );
};

export default Layout;
