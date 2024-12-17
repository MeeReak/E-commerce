import React from "react";
import WishList from "@/components/WishList";
import { NaviDash } from "@/components/NaviDash";
export default function page() {
  return (
    <div className=" flex">
      <NaviDash />
      <div className="w-[1320px] mt-10 pb-20 space-y-5">
        {/* <header className="text-center mt-5 text-2xl font-bold">
          My Wishlist
        </header> */}
        <WishList />
      </div>
    </div>
  );
}
