import { DialogDemo } from "@/components/CreateForm";
import { TableDemo } from "@/components/ProductDisplay";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
// async function fetchData() {
//   try {
//     const apiUrl = process.env.API_URL || "http://localhost:3001/v1/products";
//     const api = `${apiUrl}/products`;
//     const response = await fetch(api, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     return await response.json();
//   } catch (error: unknown) {
//     console.error("Error in fetch data", error);
//   }
// }
export default async function page() {
  // const response = await fetchData();

  // console.log(response);

  return (
    <div>
      <div className="px-5 flex h-20 items-center justify-between gap-x-5 text-black">
        <div className=" flex gap-x-4">
          <Input className=" w-fit placeholder:text-white" />
          <Button>Filter</Button>
        </div>
        <DialogDemo />
      </div>
      <div className="px-5 flex items-center">
        <TableDemo />
      </div>
    </div>
  );
}
