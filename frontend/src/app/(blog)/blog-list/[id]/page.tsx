import { BlogList } from "@/components/BlogList";
import { Sidebar } from "@/components/Sidebar";
import React from "react";

export default async function page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  return (
    <div className="w-[1320px] pb-20 flex justify-between items-start mx-auto space-y-10 ">
      <Sidebar />
      <BlogList id={id} />
    </div>
  );
}
