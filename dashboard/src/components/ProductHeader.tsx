"use client";

import { useEffect, useState } from "react";
import { DialogDemo } from "./CreateForm";
import { Input } from "./ui/input";

export function Header() {
  const [searchQuery, setSearchQuery] = useState("");

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);

    // Update the URL with the search query
  };

  useEffect(() => {
    window.history.pushState({}, "", `?search=${searchQuery}`);
  }, [searchQuery]);

  return (
    <div className="flex  mx-5 h-20 items-center justify-between gap-x-5 text-black">
      <div className="flex gap-x-4">
        <Input
          className="w-[250px] placeholder:text-white"
          placeholder="Search"
          value={searchQuery}
          onChange={handleInputChange} // Update searchQuery on input change
        />
      </div>
      <DialogDemo />
    </div>
  );
}
