import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center py-10 justify-center">
      <span className=" four_zero_four_bg"></span>
      <h1 className="text-gray-900 text-center text-4xl font-semibold leading-[48px]">
        Oops! Looks like this page is lost.
      </h1>
      <p className="text-gray-500 text-center py-5 text-base font-normal leading-6 max-w-[612px]">
        Don’t worry—there’s still plenty of ways to nourish your body and mind.
        Explore our collection of health products and discover something that
        will help you feel your best.
      </p>
      <Button className="rounded-full">
        <Link href="/">Return to Healthy Living</Link>
      </Button>
    </div>
  );
}
