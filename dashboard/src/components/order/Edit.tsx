"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import { EditIcon } from "lucide-react";
import { Process } from "./Process";

export function EditForm(): JSX.Element {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <EditIcon className=" stroke-[1.5px] p-1 bg-yellow-100 text-yellow-600 rounded-sm" />
            </DialogTrigger>
            <DialogContent className="sm:max-w-[750px] flex flex-col overflow-y-auto hide-scrollbar">
                <DialogHeader>
                    <DialogTitle>
                        <div className=" flex items-center gap-x-5">
                            <p className="text-gray-900 text-[20px] font-medium leading-[30px]">
                                #ORD-005
                            </p>
                            <div className=" flex items-center gap-x-2">
                                <p className=" bg-green-500 text-white text-xs px-2 py-1 rounded-sm font-normal">
                                    Paid
                                </p>
                                <p className=" bg-none text-[#e8c141] border border-[#e8c141] text-xs px-2 py-1 rounded-sm font-medium">
                                    On the Way
                                </p>
                            </div>
                        </div>
                    </DialogTitle>
                    <DialogDescription>
                        <div className=" flex items-center gap-x-2">
                            <p className="text-gray-700 text-xs font-normal leading-[21px] ">
                                April 24, 2021
                            </p>
                            <span className=" text-gray-700">•</span>
                            <p className="text-gray-700 text-xs font-normal leading-[21px] ">
                                5 Products
                            </p>
                        </div>
                    </DialogDescription>
                </DialogHeader>
                <Process />
                <DialogFooter>
                    <>
                        <DialogClose asChild>
                            <Button variant="outline">Cancel</Button>
                        </DialogClose>
                        <Button type="button">Update</Button>
                    </>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
