import React, { Suspense } from "react";
import { BlogHeader } from "@/components/blog/features/BlogHeader";
import { BlogTable } from "@/components/blog/features";
export default async function page() {
    return (
        <Suspense>
            <BlogHeader showAddButton enableSearch title="Blogs" />
            <div className="flex items-center mx-5">
                <BlogTable />
            </div>
        </Suspense>
    );
}
