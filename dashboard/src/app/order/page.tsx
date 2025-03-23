import { Header } from "@/components/Header";
import { TableDemo } from "@/components/order/Table";
import React, { Suspense } from "react";
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
        <Suspense>
            <Header enableSearch title="Orders"  />
            <div className=" flex items-center">
                <TableDemo />
            </div>
        </Suspense>
    );
}
