import { Header } from "@/components/Header";
import { TableDemo } from "@/components/order/Table";
import React, { Suspense } from "react";

export default async function page() {
    return (
        <Suspense>
            <Header enableSearch title="Orders" />
            <div className=" flex items-center">
                <TableDemo />
            </div>
        </Suspense>
    );
}
