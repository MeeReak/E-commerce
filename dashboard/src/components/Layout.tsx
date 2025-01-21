"use client";

import React, { ReactNode, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ClipboardListIcon,
  LayoutDashboardIcon,
  PanelRightIcon,
  ShoppingCartIcon,
  UsersIcon,
} from "lucide-react";

const SidebarItem = ({
  href,
  Icon,
  label,
  isOpen,
}: {
  href: string;
  Icon: React.ElementType;
  label: string;
  isOpen: boolean;
}) => {
  const pathname = usePathname();
  const isActive =
    pathname === href || (href === "/" && pathname === "/localhost:3000");

  return (
    <li>
      <Link
        href={href}
        className={`flex items-center p-2 rounded-lg dark:text-white group ${
          isActive
            ? "bg-gray-700"
            : "text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700"
        }`}
      >
        <Icon
          className={`flex-shrink-0 w-6 h-6 transition duration-75 ${
            isActive
              ? "text-white"
              : "text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
          }`}
        />
        <span
          className={
            isOpen
              ? `ms-3 whitespace-nowrap ${
                  isActive
                    ? "text-white"
                    : "text-gray-200 group-hover:text-gray-900"
                }`
              : "hidden"
          }
        >
          {label}
        </span>
      </Link>
    </li>
  );
};

const SidebarCom = ({
  isOpen,
  toggleSidebar,
}: {
  isOpen: boolean;
  toggleSidebar: () => void;
}) => {
  const menuItems = [
    { href: "/", Icon: LayoutDashboardIcon, label: "Overview" },
    { href: "/product", Icon: ShoppingCartIcon, label: "Product" },
    { href: "/order", Icon: ClipboardListIcon, label: "Orders" },
    { href: "/user", Icon: UsersIcon, label: "User" },
  ];

  return (
    <aside
      onClick={() => {
        if (!isOpen) toggleSidebar();
      }}
      className={`fixed top-0 left-0 z-40 h-screen transition-all duration-300 bg-black ${
        isOpen ? "w-64" : "w-[70px]"
      }`}
      aria-label="Sidebar"
    >
      <div className="h-full px-3 py-4 overflow-y-auto">
        <div
          className={`flex items-center p-2 mb-4 ${
            isOpen ? "justify-between" : "justify-center"
          }`}
        >
          <div className="flex gap-x-2 flex-1">
            <Image alt="ecoFresh" src="/svg/logo.svg" width={30} height={30} />
            {isOpen && (
              <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
                ecoBoard
              </span>
            )}
          </div>

          {isOpen && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleSidebar();
              }}
              className="focus:outline-none"
            >
              <PanelRightIcon className="w-6 h-6 text-gray-500 cursor-pointer" />
            </button>
          )}
        </div>
        <ul className="space-y-2 pl-1 font-medium">
          {menuItems.map((item, index) => (
            <SidebarItem
              key={index}
              href={item.href}
              Icon={item.Icon}
              label={item.label}
              isOpen={isOpen}
            />
          ))}
        </ul>
      </div>
    </aside>
  );
};

const Sidebar = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => setIsOpen((prev) => !prev);

  return (
    <div className="flex min-h-screen">
      <SidebarCom isOpen={isOpen} toggleSidebar={toggleSidebar} />
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

export default Sidebar;
