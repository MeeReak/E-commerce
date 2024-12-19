import React from "react";
import { NaviDash } from "@/components/NaviDash";
import { Shopping } from "@/components/Shopping";

export default function page() {
  return (
    <div className=" flex gap-x-6 justify-center">
      <NaviDash />

      <Shopping />
    </div>
  );
}
