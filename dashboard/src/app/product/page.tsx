import { Header } from "@/components/Header";
import { TableDemo } from "@/components/product/Table";
import React, { Suspense } from "react";

export default async function page() {
    return (
        <Suspense>
            <Header showAddButton enableSearch title="Products" />
            <div className=" flex items-center">
                <TableDemo />
            </div>
        </Suspense>
    );
}
