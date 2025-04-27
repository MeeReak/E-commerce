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
import { OrderDetail } from "./Detail";
import { IOrder } from "./Table";

export function DialogDemo({ order }: { order: IOrder }): JSX.Element {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <EyeIcon className=" cursor-pointer stroke-[1.5px] p-1 bg-blue-100 text-blue-600 rounded-sm" />
            </DialogTrigger>
            <DialogContent className="sm:max-w-[1120px] h-[700px] flex flex-col overflow-y-auto hide-scrollbar">
                <DialogHeader>
                    <DialogTitle>
                        <div className=" flex items-center gap-x-2">
                            <p className="text-blue-500 text-2xl font-medium leading-[30px]">
                                Order Details
                            </p>
                            <span className=" text-gray-400">•</span>
                            <p className="text-gray-700 text-sm font-normal leading-[21px] ">
                                {new Date(order.created_at).toLocaleDateString(
                                    "en-US",
                                    {
                                        day: "2-digit",
                                        month: "short",
                                        year: "numeric"
                                    }
                                )}
                            </p>
                            <span className=" text-gray-400">•</span>
                            <p className="text-gray-700 text-sm  font-normal leading-[21px] ">
                                {order.items.length > 1
                                    ? `${order.items.length} items`
                                    : `${order.items.length} item`}
                            </p>
                        </div>
                    </DialogTitle>
                    <DialogDescription></DialogDescription>
                </DialogHeader>
                <OrderDetail order={order} />
                <DialogFooter>
                    {/* <Button type="button">Save changes</Button> */}
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
