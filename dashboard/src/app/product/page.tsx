import { DialogDemo } from "@/components/CreateForm";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

export default function page() {
  return (
    <div>
      <div className="px-5 flex h-20 items-center justify-between gap-x-5 text-black">
        <div className=" flex gap-x-4">
          <Input className=" w-fit placeholder:text-white" />
          <Button>Filter</Button>
        </div>{" "}
        <DialogDemo />
      </div>
      <div></div>
    </div>
  );
}
