"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import { EditIcon } from "lucide-react";
import Image from "next/image";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    totalOrders: 5,
    totalSpent: 320.5,
    lastOrder: "2025-04-04"
};

export const UserDetail = () => {
    return (
        <>
            <div className=" flex items-center flex-col">
                <Image
                    src={"https://avatars.githubusercontent.com/u/124599?v=4"}
                    alt=""
                    width={150}
                    height={150}
                    className=" rounded-full"
                />
                <div className=" w-full  space-y-3">
                    <div className=" space-y-2">
                        <Label>Name</Label>
                        <Input
                            type="text"
                            defaultValue={user.name}
                            id={user.name}
                            className=" w-full"
                        />
                    </div>
                    <div className=" space-y-2">
                        <Label>Email</Label>
                        <Input
                            type="text"
                            defaultValue={user.name}
                            id={user.name}
                            className=" w-full"
                        />
                    </div>
                    <div className=" flex items-center w-full gap-x-5">
                        <div className=" space-y-2 w-full">
                            <Label>Total Spent</Label>
                            <Input
                                type="text"
                                defaultValue={user.name}
                                id={user.name}
                            />
                        </div>
                        <div className=" space-y-2 w-full">
                            <Label>Total Order</Label>
                            <Input
                                type="text"
                                defaultValue={user.name}
                                id={user.name}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export function EditForm(): JSX.Element {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <EditIcon className=" stroke-[1.5px] p-1 bg-yellow-100 text-yellow-600 rounded-sm" />
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px] flex flex-col overflow-y-auto hide-scrollbar">
                <DialogHeader>
                    <DialogTitle>User Information</DialogTitle>
                    <DialogDescription></DialogDescription>
                </DialogHeader>
                <UserDetail />
                <DialogFooter>
                    <Button type="button">Update</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
