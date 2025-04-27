import React, { Suspense } from "react";
import { Header } from "@/components/Header";
import { cookies } from "next/headers";
import { BlogTable } from "@/components/blog/features/Table";

export default async function page() {
    const token = (await cookies()).get("auth_token")?.value || "";

    return (
        <Suspense>
            <Header title="Blogs" showAddButton enableSearch blog />
            <div className="flex items-center ">
                <BlogTable token={token} />
            </div>
        </Suspense>
    );
}
