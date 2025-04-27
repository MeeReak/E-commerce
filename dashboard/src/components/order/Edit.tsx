import React from "react";
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
import { IOrder } from "./Table";

export function EditForm({ order }: { order: IOrder }): JSX.Element {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <EditIcon className=" stroke-[1.5px] p-1 bg-yellow-100 text-yellow-600 rounded-sm" />
            </DialogTrigger>
            <DialogContent className="sm:max-w-[1120px] flex flex-col overflow-y-auto hide-scrollbar">
                <DialogHeader>
                    <DialogTitle>
                        <div className=" flex items-center gap-x-5">
                            <span className="text-gray-900 text-[20px] font-medium leading-[30px]">
                                Order Id: {order.id}
                            </span>
                            <div className=" flex items-center gap-x-2">
                                <span className=" bg-green-500 text-white text-xs px-2 py-1 rounded-sm font-normal">
                                    {order.payment_status}
                                </span>
                                <span className=" bg-none text-[#e8c141] border border-[#e8c141] text-xs px-2 py-1 rounded-sm font-medium">
                                    {order.status.toLowerCase()}
                                </span>
                            </div>
                        </div>
                    </DialogTitle>
                    <DialogDescription></DialogDescription>
                </DialogHeader>
                <Process order={order} />
                <DialogFooter>
                    {/* <>
                        <DialogClose asChild>
                            <Button variant="outline">Cancel</Button>
                        </DialogClose>
                        <Button type="button">Update</Button>
                    </> */}
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
