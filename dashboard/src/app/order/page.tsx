import { Header } from "@/components/Header";
import { TableDemo } from "@/components/order/Table";
import React, { Suspense } from "react";
import { cookies } from "next/headers";

export default async function page() {
    const token = (await cookies()).get("auth_token")?.value || "";

    return (
        <Suspense>
            <Header enableSearch title="Orders" />
            <div className=" flex items-center">
                <TableDemo token={token} />
            </div>
        </Suspense>
    );
}
