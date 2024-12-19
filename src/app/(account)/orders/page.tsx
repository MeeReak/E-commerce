import { NaviDash } from "@/components/NaviDash";
import { RecentOrder } from "@/components/RecentOrder";
import React from "react";

const page = () => {
  return (
    <>
      <div className="flex gap-x-6 justify-center h-[100vh]">
        <NaviDash />
        <div className="mt-4 w-[1070px]">
          <RecentOrder />
        </div>
      </div>
    </>
  );
};

export default page;
