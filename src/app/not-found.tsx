import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className=" flex flex-col items-center justify-center h-screen">
      <Image
        className=" w-[590px] h-[360px]"
        src={"/svg/not-found.svg"}
        alt={"not-found"}
        width={20}
        height={20}
      />
      <h1 className="text-gray-900 text-center text-4xl font-semibold leading-[48px]">
        Oops! page not found
      </h1>
      <p className="text-gray-500 text-center py-5 text-base font-normal leading-6 max-w-[612px]">
        Ut consequat ac tortor eu vehicula. Aenean accumsan purus eros. Maecenas
        sagittis tortor at metus mollis
      </p>
      <Button className=" rounded-full">
        <Link href="/">Return Home</Link>
      </Button>
    </div>
  );
}
