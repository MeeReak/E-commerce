import { NaviDash } from "@/components/NaviDash";
import Link from "next/link";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  console.log(id);
  return (
    <div className="flex gap-x-6 justify-center h-[100vh]">
      <NaviDash />
      <div className=" mt-10 w-[1070px] border rounded-md border-gray-200">
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
              3 Products
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
        <div className=" flex py-6 w-full gap-x-8 justify-center">
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
                Billing Address
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
            <div className=" p-5 border border-t-0 border-gray-200 rounded-md rounded-t-none">
              <div className=" flex justify-between pb-3 border-b border-gray-200">
                <p className="text-gray-600 text-[14px] font-normal leading-[21px] font-poppins">
                  Subtotal:
                </p>
                <p className="text-gray-900 text-[14px] font-medium leading-[21px] font-poppins">
                  $365.00
                </p>
              </div>
              <div className=" flex justify-between py-3 border-b border-gray-200">
                <p className="text-gray-600 text-[14px] font-normal leading-[21px] font-poppins">
                  Discount
                </p>
                <p className="text-gray-900 text-[14px] font-medium leading-[21px] font-poppins">
                  20%
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
                  $84.00
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Order Summary */}
      </div>
    </div>
  );
}
