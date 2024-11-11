import React from "react";
import { SelectDemo } from "./Select";
import { MapPinIcon, PhoneCallIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { BreadcrumbWithCustomSeparator } from "./BreadCrumb";

export const Navigation = () => {
  const lan = ["En", "Km"];
  const curr = ["USD", "KHR"];

  return (
    <nav>
      <div className="flex bg-[#333333] w-screen items-center justify-evenly ">
        <div className="flex gap-x-1 items-center ">
          <MapPinIcon className=" text-gray-400 size-5" />
          <p className=" text-gray-400 text-sm">
            Store Location: Lincoln- 344, Illinois, Chicago, USA
          </p>
        </div>

        <span className=" w-[200px]"></span>

        <div className="flex items-center ">
          <SelectDemo item={lan} />
          <SelectDemo item={curr} />
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

      <div className=" flex justify-evenly py-7  border-b-[1px] border-[#CCCCCC]">
        {/* logo */}
        <div className="flex items-center gap-2">
          <Image src={"/logo.svg"} alt="logo" width={32} height={32} />
          <h1 className="text-[#002603] font-poppins text-2xl font-medium leading-[38px] tracking-[-0.96px]">
            Ecobazar
          </h1>
        </div>

        <input type="text" className=" w-[500px] border-2" />

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
          <div className=" flex gap-3">
            <div className="relative">
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
                  d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
              <span className="absolute -top-1 left-[19px] border-white border-2 px-1 text-[10px] text-white py-0 bg-[#2C742F] rounded-full">
                2
              </span>
            </div>
            <div className=" space-y-1">
              <p className="text-gray-600 text-[11px] font-normal leading-[1.2]">
                Shopping cart:
              </p>
              <p className="text-gray-800 text-sm font-medium leading-[1]">
                $57.00
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className=" flex justify-evenly items-center py-4 border-b-[1px] border-[#CCCCCC]">
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
        className=" flex justify-evenly items-center "
      >
        <BreadcrumbWithCustomSeparator />
        <span className=" w-[110px]"></span>
        <span className=" w-[200px]"></span>
      </div>
    </nav>
  );
};
