import React from "react";
import { SelectDemo } from "./Select";
import { MapPinIcon, PhoneCallIcon, SearchIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { BreadcrumbWithCustomSeparator } from "./BreadCrumb";
import { ShoppingCart } from "./ShoppingCart";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export const Navigation = () => {
  const lan = ["En", "Km"];
  const curr = ["USD", "KHR"];

  return (
    <nav>
      <div className="flex bg-[#333333]  items-center justify-around ">
        <div className="flex gap-x-1 items-center ">
          <MapPinIcon className=" text-gray-400 size-5" />
          <p className=" text-gray-400 text-sm">
            Location: Lincoln- 344, Illinois, Chicago, USA
          </p>
        </div>

        <span className=" w-[220px]"></span>

        <div className="flex items-center ">
          <SelectDemo
            item={lan}
            className=" border-none w-auto space-x-2 text-white"
          />
          <SelectDemo
            item={curr}
            className=" border-none w-auto space-x-2 text-white"
          />
          <span className=" text-gray-400 pr-4">|</span>
          <div className="flex items-center gap-x-2">
            <Link
              className="text-gray-400 text-sm font-normal leading-[1.3] hover:text-white"
              href="/sign-in"
            >
              Sign In
            </Link>
            <span className=" text-gray-400">/</span>
            <Link
              className=" text-gray-400 text-sm font-normal leading-[1.3] hover:text-white"
              href="/sign-up"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>

      <div className=" flex justify-around py-7  border-b-[1px] border-[#CCCCCC]">
        {/* logo */}
        <div className="flex items-center gap-2">
          <Image src={"/svg/logo.svg"} alt="logo" width={32} height={32} />
          <h1 className="text-[#002603] font-poppins text-2xl font-medium leading-[38px] tracking-[-0.96px]">
            Ecobazar
          </h1>
        </div>

        <div className=" flex items-center">
          <Input
            className="w-[400px] py-[21px] rounded-tr-none rounded-br-none"
            type="text"
            placeholder="Search..."
            leftIcon={<SearchIcon />}
          />
          <Button className=" py-3 px-6 rounded-tl-none rounded-bl-none">
            Search
          </Button>
        </div>

        <div className=" flex gap-x-4 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            />
          </svg>
          <span className=" h-7 w-[1.5px] bg-[#CCCCCC]"></span>
          <ShoppingCart />
        </div>
      </div>

      <div className=" flex justify-around items-center py-4 border-b-[1px] border-[#CCCCCC]">
        <ul className=" flex gap-x-8">
          <li className="text-gray-600 text-sm font-medium leading-[21px] hover:text-[#00B207]">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="text-gray-600 text-sm font-medium leading-[21px] hover:text-[#00B207]">
            <Link href={"/shop"}>Shop</Link>
          </li>
          <li className="text-gray-600 text-sm font-medium leading-[21px] hover:text-[#00B207]">
            <Link href={"/blog"}>Blog</Link>
          </li>
          <li className="text-gray-600 text-sm font-medium leading-[21px] hover:text-[#00B207]">
            <Link href={"/about-us"}>About Us</Link>
          </li>
          <li className="text-gray-600 text-sm font-medium leading-[21px] hover:text-[#00B207]">
            <Link href={"/contact-us"}>Contact Us</Link>
          </li>
        </ul>

        <span className=" w-[330px]"></span>

        <div className=" flex items-center gap-x-2">
          <PhoneCallIcon className=" size-7 " />
          <p className="text-gray-800 text-sm font-medium leading-[21px]">
            (219) 555-0114
          </p>
        </div>
      </div>

      <div
        style={{
          backgroundImage: `url(/images/Breadcrumbs.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className=" flex justify-evenly items-center h-[90px]"
      >
        <BreadcrumbWithCustomSeparator />
        <span className=" w-[110px]"></span>
        <span className=" w-[200px]"></span>
      </div>
    </nav>
  );
};
