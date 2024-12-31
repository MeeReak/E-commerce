import { Tracker } from "@/components/Tracker";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { CheckIcon } from "lucide-react";
import Link from "next/link";
import { Product as products } from "@/utils/mockup";
import Image from "next/image";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;

  const process = [1, 2];

  const total = products.reduce((acc, product) => {
    return acc + product.price * product.gty;
  }, 0);

  const invoices = [
    {
      invoice: "INV001",
      totalAmount: "Processing",
    },
    {
      invoice: "INV002",
      totalAmount: "on the way",
    },
    {
      invoice: "INV003",
      totalAmount: "Completed",
    },
    {
      invoice: "INV004",
      totalAmount: "Completed",
    },
    {
      invoice: "INV005",
      totalAmount: "Completed",
    },
    {
      invoice: "INV006",
      totalAmount: "Completed",
    },
  ];

  const status = invoices.find((invoice) => invoice.invoice === id);

  return (
    <div className=" h-auto mb-10">
      <div className=" mt-10 w-[1070px] border rounded-md border-gray-200 ">
        <div className=" flex items-center justify-between px-6 py-4 border-b border-gray-200">
          <div className=" flex items-center gap-x-2">
            <p className="text-gray-900 text-[20px] font-medium leading-[30px]">
              Order Details
            </p>
            <span className=" text-gray-700">•</span>
            <p className="text-gray-700 text-[14px] font-normal leading-[21px] ">
              April 24, 2021
            </p>
            <span className=" text-gray-700">•</span>
            <p className="text-gray-700 text-[14px] font-normal leading-[21px] ">
              {products.slice(0, 5).length} Products
            </p>
          </div>
          <Link
            className="text-[#00B207] text-[16px] font-medium leading-[24px] "
            href={`/orders`}
          >
            Back to List
          </Link>
        </div>

        {/* address */}
        <div className=" flex py-7 w-full gap-x-8 justify-center">
          <div className="flex">
            <div>
              <p className="text-gray-400 text-[14px] font-medium leading-[14px] tracking-[0.42px] uppercase py-[18px] pl-6 border border-gray-200 rounded-tl-md border-r-0">
                Billing Address
              </p>
              <div className=" border border-t-[0px] border-gray-200 rounded-bl-md pl-6 pr-6 border-r-0">
                <div>
                  <p className="text-gray-900 text-[16px] font-normal leading-[24px] font-poppins pt-4">
                    Dainne Russell
                  </p>
                  <p className="text-gray-600 text-[14px] font-normal leading-[21px] font-poppins pt-2 max-w-[282px]">
                    4140 Parker Rd. Allentown, New Mexico 31134
                  </p>
                </div>
                <div className="mt-9 mb-3">
                  <p className="text-gray-400 text-[12px] font-medium leading-[12px] tracking-[0.36px] uppercase font-poppins pb-1">
                    Email
                  </p>
                  <p className="text-gray-900 text-[14px] font-normal leading-[21px] font-poppins">
                    dainne.ressell@gmail.com
                  </p>
                </div>
                <div className="mb-5">
                  <p className="text-gray-400 text-[12px] font-medium leading-[12px] tracking-[0.36px] uppercase font-poppins pb-1">
                    Phone
                  </p>
                  <p className="text-gray-900 text-[14px] font-normal leading-[21px] font-poppins">
                    (671) 555-0110
                  </p>
                </div>
              </div>
            </div>
            <div>
              <p className="text-gray-400 text-[14px] font-medium leading-[14px] tracking-[0.42px] uppercase py-[18px] pl-6 border border-gray-200 rounded-tr-md">
                Shipping Address
              </p>
              <div className=" border border-t-[0px]  border-gray-200 rounded-br-md pl-6 pr-6">
                <div>
                  <p className="text-gray-900 text-[16px] font-normal leading-[24px] font-poppins pt-4">
                    Dainne Russell
                  </p>
                  <p className="text-gray-600 text-[14px] font-normal leading-[21px] font-poppins pt-2 max-w-[282px]">
                    4140 Parker Rd. Allentown, New Mexico 31134
                  </p>
                </div>
                <div className="mt-9 mb-3">
                  <p className="text-gray-400 text-[12px] font-medium leading-[12px] tracking-[0.36px] uppercase font-poppins pb-1">
                    Email
                  </p>
                  <p className="text-gray-900 text-[14px] font-normal leading-[21px] font-poppins">
                    dainne.ressell@gmail.com
                  </p>
                </div>
                <div className="mb-5">
                  <p className="text-gray-400 text-[12px] font-medium leading-[12px] tracking-[0.36px] uppercase font-poppins pb-1">
                    Phone
                  </p>
                  <p className="text-gray-900 text-[14px] font-normal leading-[21px] font-poppins">
                    (671) 555-0110
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="border border-gray-200 rounded-md rounded-b-none">
              <div className="p-6 flex ">
                <div className="pr-10 space-y-[6px] border-r">
                  <p className="text-gray-400 text-[12px] font-medium leading-[12px] tracking-[0.36px] uppercase font-poppins">
                    Order ID:
                  </p>
                  <p className="text-gray-900 text-[14px] font-normal leading-[21px] font-poppins">
                    #4152
                  </p>
                </div>
                <div className="pl-5 pr-6 space-y-[6px]">
                  <p className="text-gray-400 text-[12px] font-medium leading-[12px] tracking-[0.36px] uppercase font-poppins">
                    Payment Method:
                  </p>
                  <p className="text-gray-900 text-[14px] font-normal leading-[21px] font-poppins">
                    Paypal
                  </p>
                </div>
              </div>
            </div>
            <div className="pb-[11px] p-5 border border-t-0 border-gray-200 rounded-md rounded-t-none">
              <div className=" flex justify-between pb-3 border-b border-gray-200">
                <p className="text-gray-600 text-[14px] font-normal leading-[21px] font-poppins">
                  Subtotal:
                </p>
                <p className="text-gray-900 text-[14px] font-medium leading-[21px] font-poppins">
                  ${total.toFixed(2)}
                </p>
              </div>
              <div className=" flex justify-between py-3 border-b border-gray-200">
                <p className="text-gray-600 text-[14px] font-normal leading-[21px] font-poppins">
                  Discount
                </p>
                <p className="text-gray-900 text-[14px] font-medium leading-[21px] font-poppins">
                  10%
                </p>
              </div>
              <div className=" flex justify-between py-3 border-b border-gray-200">
                <p className="text-gray-600 text-[14px] font-normal leading-[21px] font-poppins">
                  Shipping
                </p>
                <p className="text-gray-900 text-[14px] font-medium leading-[21px] font-poppins">
                  Free
                </p>
              </div>
              <div className=" flex justify-between pt-3">
                <p className="text-gray-900 text-[18px] font-normal leading-[27px] font-poppins">
                  Total
                </p>
                <p className="text-[#2C742F] text-[18px] font-semibold leading-[27px] font-poppins">
                  ${(total - total * 0.1).toFixed(2)}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-full gap-x-8 justify-center relative pt-5">
          <Tracker status={status?.totalAmount} />
          <div className=" absolute flex justify-between w-[90%] top-1 left-10">
            <div className=" flex flex-col justify-center items-center">
              <div className="mb-2 size-10 bg-[#00B207] rounded-full flex items-center justify-center">
                <CheckIcon className=" text-white" />
              </div>
              <p
                className={` text-center font-poppins text-sm font-normal leading-[1.5] ${
                  process.includes(1) ? "text-[#2C742F]" : "text-white"
                }`}
              >
                Order received
              </p>
            </div>
            <div className=" flex flex-col justify-center items-center">
              <div className="mb-2 size-10 bg-[#00B207] rounded-full flex items-center justify-center">
                {status?.totalAmount.toLocaleLowerCase() === "processing" ||
                status?.totalAmount.toLocaleLowerCase() === "on the way" ||
                status?.totalAmount.toLocaleLowerCase() === "completed" ? (
                  <CheckIcon className=" text-white" />
                ) : (
                  2
                )}
              </div>
              <p
                className={` text-center font-poppins text-sm font-normal leading-[1.5] ${
                  status?.totalAmount.toLocaleLowerCase() === "processing" ||
                  status?.totalAmount.toLocaleLowerCase() === "on the way" ||
                  status?.totalAmount.toLocaleLowerCase() === "completed"
                    ? "text-[#2C742F]"
                    : "text-white"
                }`}
              >
                Processing
              </p>
            </div>
            <div className=" flex flex-col justify-center items-center">
              <div
                className={`mb-2 size-10  rounded-full flex items-center justify-center ${
                  status?.totalAmount.toLocaleLowerCase() === "on the way" ||
                  status?.totalAmount.toLocaleLowerCase() === "completed"
                    ? "bg-[#00b207]"
                    : " bg-white border-2 border-dashed border-[#00b207] text-[#00b207]"
                }`}
              >
                {status?.totalAmount.toLocaleLowerCase() === "on the way" ||
                status?.totalAmount.toLocaleLowerCase() === "completed" ? (
                  <CheckIcon className=" text-white" />
                ) : (
                  3
                )}
              </div>
              <p
                className={` text-center font-poppins text-sm font-normal leading-[1.5] ${
                  status?.totalAmount.toLocaleLowerCase() === "on the way" ||
                  status?.totalAmount.toLocaleLowerCase() === "completed"
                    ? "text-[#2C742F]"
                    : "text-gray-800"
                }`}
              >
                On the way
              </p>
            </div>
            <div className=" flex flex-col justify-center items-center">
              <div
                className={`mb-2 size-10  rounded-full flex items-center justify-center ${
                  status?.totalAmount.toLocaleLowerCase() === "completed"
                    ? "bg-[#00b207]"
                    : " bg-white border-2 border-dashed border-[#00b207] text-[#00b207]"
                }`}
              >
                {status?.totalAmount.toLocaleLowerCase() === "completed" ? (
                  <CheckIcon className=" text-white" />
                ) : (
                  4
                )}
              </div>
              <p
                className={` text-center font-poppins text-sm font-normal leading-[1.5] ${
                  status?.totalAmount.toLocaleLowerCase() === "completed"
                    ? "text-[#2C742F]"
                    : "text-gray-800"
                }`}
              >
                Delivered
              </p>
            </div>
          </div>
        </div>

        <Table className=" mt-20">
          <TableHeader>
            <TableRow className="hover:bg-gray-100 bg-gray-100 text-gray-500 font-medium text-xs tracking-wider uppercase leading-none">
              <TableHead className="pl-10">Product</TableHead>
              <TableHead>price</TableHead>
              <TableHead>Quantity</TableHead>
              <TableHead>SubTotal</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.slice(0, 5).map((invoice) => (
              <TableRow
                key={invoice.id}
                className="text-[#333333] font-poppins text-sm font-normal leading-[1.5]"
              >
                <TableCell className="pl-6 py-3 flex items-center gap-x-5 text-gray-900 font-normal text-base leading-6">
                  <Image
                    src={invoice.src}
                    alt={invoice.name}
                    width={100}
                    height={100}
                  />
                  {invoice.name}
                </TableCell>
                <TableCell className="w-[250px] text-gray-900 font-normal text-base leading-6">
                  ${invoice.price.toFixed(2)}
                  <span className="pl-1 text-gray-400 font-normal text-base leading-6 line-through">
                    {" "}
                    $
                    {(
                      invoice.price -
                      invoice.price * (invoice.discount / 100)
                    ).toFixed(2)}
                  </span>
                </TableCell>
                <TableCell>{invoice.gty}</TableCell>
                <TableCell className=" text-gray-900 font-poppins text-base font-medium leading-6">
                  ${(invoice.price * invoice.gty).toFixed(2)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
