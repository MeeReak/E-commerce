import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { TrashIcon } from "lucide-react";

interface AlertDialogDemoProps {
  itemName: string; // Name of the item to delete
  // onDelete: () => void; // Callback for delete action
}

export function AlertDialogDemo({ itemName }: AlertDialogDemoProps) {
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
            This action cannot be undone. This will permanently delete
            <strong>{itemName}</strong>
            from your data.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Delete</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
