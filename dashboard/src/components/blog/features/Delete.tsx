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
import Cookies from "js-cookie";
import { IBlog } from "./Table";

export function AlertDialogDemo({ blog }: { blog: IBlog }) {
    const handleDelete = async () => {
        const token = Cookies.get("auth_token");

        try {
            const res = await fetch(
                `http://127.0.0.1:8000/api/v1/blogs/${blog.id}`,
                {
                    method: "DELETE",
                    headers: {
                        Accept: "application/json",
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            if (!res.ok) {
                const error = await res.json();
                console.error("Delete failed:", error);
                alert("Failed to delete product.");
                return;
            }

            // You can refresh the list, route away, or show a toast
            window.location.reload();
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
