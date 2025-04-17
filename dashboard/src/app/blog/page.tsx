import { BlogTable } from "@/components/blog/features";
import React from "react";

const page = () => {
    return (
        <div className="p-5">
            <h1>This is blog page</h1>
            <BlogTable />
        </div>
    );
};

export default page;
