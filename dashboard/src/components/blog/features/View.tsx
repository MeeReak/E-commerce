"use client";

import React from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import { EyeIcon } from "lucide-react";
import { BlogDetails } from "./BlogDetail";
import { CarouselDemo } from "@/components/ImageDemo";
import { IBlog } from "./Table";

export function DialogDisplayBlog({ blog }: { blog: IBlog }): JSX.Element {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <EyeIcon className=" cursor-pointer stroke-[1.5px] p-1 bg-blue-100 text-blue-600 rounded-sm" />
            </DialogTrigger>
            <DialogContent className="sm:max-w-[750px] h-[700px] flex flex-col overflow-y-auto hide-scrollbar">
                <DialogHeader>
                    <DialogTitle className=" text-blue-500">Detail</DialogTitle>
                    <DialogDescription></DialogDescription>
                </DialogHeader>
                <div className=" flex items-center justify-center">
                    <CarouselDemo images={blog.images} />
                </div>
                <BlogDetails product={blog} />
                <DialogFooter>
                    {/* <Button type="button">Save changes</Button> */}
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
