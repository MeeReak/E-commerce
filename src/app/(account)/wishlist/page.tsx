import React from "react";
import { WishList } from "@/components/WishList";
import { NaviDash } from "@/components/NaviDash";
export default function page() {
  return (
    <div className=" flex justify-center gap-x-6 ">
      <NaviDash />
      <div className="w-[1070px] my-10">
        <WishList />
      </div>
    </div>
  );
}
