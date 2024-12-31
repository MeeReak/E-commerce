import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { OverView } from "./OverView";
import { Product as data } from "@/utils/mockup";

export function DialogDemo({
  id,
  setIsHovered,
}: {
  id: string;
  setIsHovered: (value: boolean) => void;
}) {
  const selectData = data.find((item) => item.id === id);

  // Prevent link navigation when dialog is opened
  const handleDialogTriggerClick = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent default link behavior
    e.stopPropagation(); // Stop event from bubbling up
  };

  // Handle dialog close
  const handleDialogClose = () => {
    setIsHovered(false); // Reset hover state when dialog is closed
  };

  return (
    <Dialog onOpenChange={(open) => !open && handleDialogClose()}>
      <div onClick={handleDialogTriggerClick}>
        <DialogTrigger asChild>
          <Button
            variant="custom"
            className="p-[10px] bg-[#F2F2F2] text-black border-2 border-[#F2F2F2] hover:bg-[#00B207] hover:text-white"
            size="icon"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
          </Button>
        </DialogTrigger>
      </div>

      <DialogContent className="w-[1400px] mx-auto">
        <DialogHeader>
          <DialogTitle>{selectData?.name}</DialogTitle>
        </DialogHeader>
        <OverView id={id} />
      </DialogContent>
    </Dialog>
  );
}
