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
import { TrashIcon } from "lucide-react";
import { IBlog } from "./Table";
import api from "@/lib/axios";
import { useRouter } from "next/navigation";

export function AlertDialogDemo({ blog }: { blog: IBlog }) {
    const router = useRouter();
    const handleDelete = async () => {
        try {
            await api.delete(
                `${process.env.NEXT_PUBLIC_API_URL}/v1/blogs/${blog.id}`
            );

            router.refresh();
        } catch (error) {
            console.error(
                "An error occurred while deleting the product:",
                error
            );
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
                        Are you sure you want to delete this item?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone. This will permanently
                        delete
                        <strong className="mx-2 text-red-600">
                            {blog.name || "N/A"}
                        </strong>
                        from your product list.
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
