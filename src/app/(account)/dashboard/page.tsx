import { NaviDash } from "@/components/NaviDash";
import { RecentOrder } from "@/components/RecentOrder";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <div className="flex gap-x-6 justify-center">
        <NaviDash />
        <div className="my-10">
          <div className="  h-[280px] flex gap-x-6">
            {/* Profile */}
            <div className=" flex flex-col items-center py-8 px-[200px] border border-gray-200 rounded-md">
              <Image
                className=" rounded-full"
                src="https://img.freepik.com/premium-psd/3d-render-avatar-character_23-2150611774.jpg?uid=R25760465&ga=GA1.1.328256508.1700589986"
                alt="Profile"
                width={120}
                height={120}
              />
              <p className="text-[#1A1A1A] text-center font-poppins text-xl font-medium leading-[1.5]">
                Dianne Russell
              </p>
              <p className="text-[#808080] text-center font-poppins text-sm font-normal leading-[1.5]">
                Customer
              </p>
              <Link
                className="text-[#00B207] text-center font-poppins text-base font-medium leading-[1.5]"
                href={`/setting`}
              >
                Edit Profile
              </Link>
            </div>

            {/* Order */}
            <div className=" py-8 pr-[162px] pl-8 border border-gray-200 rounded-md">
              <p className="text-[#999999] font-poppins text-sm font-medium leading-none tracking-[0.42px] uppercase pb-[18px]">
                Billing Address
              </p>
              <p className="text-[#1A1A1A] font-poppins text-lg font-medium leading-[1.5] pb-2">
                Dainne Russell
              </p>
              <p className="text-[#666666] font-poppins text-sm font-normal leading-[1.5] pb-2">
                4140 Parker Rd. Allentown, New Mexico 31134
              </p>
              <p className="text-[#1A1A1A] font-poppins text-base font-normal leading-[1.5] pb-1">
                dainne.ressell@gmail.com
              </p>
              <p className="text-[#1A1A1A] font-poppins text-base font-normal leading-[1.5] pb-5">
                (671) 555-0110
              </p>
              <Link
                className="text-[#00B207] text-center font-poppins text-base font-medium leading-[1.5]"
                href={`/setting`}
              >
                Edit Address
              </Link>
            </div>
          </div>
          <RecentOrder showAll={true} />
        </div>
      </div>
    </>
  );
};

export default page;
