import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

export default function page() {
  return (
    <div>
      <div className="px-5 flex h-20 items-center justify-end gap-x-5 text-black">
        <Input className=" w-fit placeholder:text-white"/>
        <Button>Add New</Button>
      </div>
      <div></div>
    </div>
  );
}
