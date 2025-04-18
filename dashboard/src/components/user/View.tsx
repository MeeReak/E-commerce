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
import { UserDetail } from "./Detail";
// import { UserDetail } from "./UserDetail";

export function DialogDemo(): JSX.Element {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <EyeIcon className=" cursor-pointer stroke-[1.5px] p-1 bg-blue-100 text-blue-600 rounded-sm" />
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px] flex flex-col overflow-y-auto hide-scrollbar">
                <DialogHeader>
                    <DialogTitle>Information</DialogTitle>
                    <DialogDescription></DialogDescription>
                </DialogHeader>
                <div className=" flex items-center justify-center">
                    <UserDetail />
                </div>
                <DialogFooter>
                    {/* <Button type="button">Save changes</Button> */}
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
