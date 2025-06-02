"use client";

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger
} from "@/components/ui/alert-dialog";
import api from "@/lib/axios";
import { TrashIcon } from "lucide-react";
import { useRouter } from "next/navigation";

interface AlertDialogDemoProps {
    orderId: number;
    orderName?: string;
}

export function AlertDialogDemo({
    orderId,
    orderName = ""
}: AlertDialogDemoProps) {
    const handleDelete = async () => {
        const route = useRouter();

        try {
            await api.delete(
                `${process.env.NEXT_PUBLIC_API_URL}/v1/orders/${orderId}`
            );

            route.refresh();
        } catch (error) {
            console.error("An error occurred while deleting the order:", error);
        }
    };

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <TrashIcon className="stroke-[1.5px] p-1 bg-red-100 text-red-600 rounded-sm cursor-pointer" />
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>
                        Are you sure you want to delete this order?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone. This will permanently
                        delete order of
                        <strong className="mx-2 text-red-600">
                            {orderName || "N/A"}
                        </strong>
                        from your order list.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={handleDelete}>
                        Delete
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
