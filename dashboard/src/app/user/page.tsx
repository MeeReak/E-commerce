import { Header } from "@/components/Header";
import { TableDemo } from "@/components/user/Table";
import React, { Suspense } from "react";

export default async function page() {
    // const response = await fetchData();

    // console.log(response);

    return (
        <Suspense>
            <Header enableSearch title="Users" />
            <div className=" flex items-center">
                <TableDemo />
            </div>
        </Suspense>
    );
}
