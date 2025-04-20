import React, { Suspense } from "react";
import { BlogTable } from "@/components/blog/features";
import { Header } from "@/components/Header";
export default async function page() {
    return (
        <Suspense>
            <Header title="Blogs" showAddButton enableSearch blog />
            <div className="flex items-center ">
                <BlogTable />
            </div>
        </Suspense>
    );
}
