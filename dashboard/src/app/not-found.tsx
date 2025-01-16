import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center py-10 justify-center">
      <Image
        className="w-[590px] h-[360px]"
        src={"/svg/not-found.svg"}
        alt={"wellness-not-found"}
        width={20}
        height={20}
      />
      <h1 className="text-gray-900 text-center text-4xl font-semibold leading-[48px]">
        Oops! Looks like this page is lost.
      </h1>
      <p className="text-gray-500 text-center py-5 text-base font-normal leading-6 max-w-[612px]">
        Don&apos;t worry—there&apos;s still plenty of ways to nourish your body and mind.
        Explore our collection of health products and discover something that
        will help you feel your best.
      </p>
      <Button className="rounded-full">
        <Link href="/">Return to Healthy Living</Link>
      </Button>
    </div>
  );
}
