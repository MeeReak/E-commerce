import React from "react";
import WishList from "@/components/WishList";
export default function page() {
  return (
    <>
      <div className="w-[1320px] mx-auto space-y-5">
        <header className="text-center mt-5 text-2xl font-bold">My Wishlist</header>
        <WishList />
      </div>
    </>
  );
}
