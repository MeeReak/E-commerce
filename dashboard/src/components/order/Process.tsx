import React from "react";
import { products } from "./Detail";
import { CheckIcon, SquareArrowRight } from "lucide-react";
import { Tracker } from "../Tracker";
import { Button } from "../ui/button";

export const Process = () => {
    const id = "INV003";

    const process = [1, 2];

    const total = products.reduce((acc, product) => {
        return acc + product.price * product.gty;
    }, 0);

    const invoices = [
        {
            invoice: "INV001",
            totalAmount: "Processing"
        },
        {
            invoice: "INV002",
            totalAmount: "on the way"
        },
        {
            invoice: "INV003",
            totalAmount: "Completed"
        },
        {
            invoice: "INV004",
            totalAmount: "Completed"
        },
        {
            invoice: "INV005",
            totalAmount: "Completed"
        },
        {
            invoice: "INV006",
            totalAmount: "Completed"
        }
    ];

    const status = invoices.find((invoice) => invoice.invoice === id);

    return (
        <div>
            <div className=" px-5 py-3 mb-2 h-[150px] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] rounded-sm">
                <h2 className=" text-base">Process</h2>
                <div className="flex w-full gap-x-8 justify-center relative pt-9">
                    <Tracker status={status?.totalAmount} />
                    <div className="absolute flex justify-between w-[100%] top-5">
                        <div className=" flex flex-col justify-center items-center">
                            <div className="mb-2 size-10 bg-black rounded-full flex items-center justify-center">
                                <CheckIcon className=" text-white" />
                            </div>
                            <p
                                className={` text-center font-poppins text-sm font-normal leading-[1.5] ${
                                    status?.totalAmount.toLocaleLowerCase() ===
                                    "processing"
                                        ? "text-black"
                                        : "text-green-500"
                                }`}
                            >
                                Order received
                            </p>
                        </div>
                        <div className=" flex flex-col justify-center items-center">
                            <div className="mb-2 size-10 bg-black rounded-full flex items-center justify-center">
                                {status?.totalAmount.toLocaleLowerCase() ==
                                    "processing" ||
                                status?.totalAmount.toLocaleLowerCase() ==
                                    "on the way" ||
                                status?.totalAmount.toLocaleLowerCase() ==
                                    "completed" ? (
                                    <CheckIcon className=" text-white" />
                                ) : (
                                    2
                                )}
                            </div>
                            <p
                                className={` text-center font-poppins text-sm font-normal leading-[1.5] ${
                                    status?.totalAmount.toLocaleLowerCase() ===
                                        "processing" ||
                                    status?.totalAmount.toLocaleLowerCase() ===
                                        "on the way" ||
                                    status?.totalAmount.toLocaleLowerCase() ===
                                        "completed"
                                        ? "text-green-500"
                                        : "text-black"
                                }`}
                            >
                                Processing
                            </p>
                        </div>
                        <div className=" flex flex-col justify-center items-center">
                            <div
                                className={`mb-2 size-10  rounded-full flex items-center justify-center ${
                                    status?.totalAmount.toLocaleLowerCase() ===
                                        "on the way" ||
                                    status?.totalAmount.toLocaleLowerCase() ===
                                        "completed"
                                        ? "bg-black"
                                        : " bg-white border-2 border-dashed border-[#00b207] text-[#00b207]"
                                }`}
                            >
                                {status?.totalAmount.toLocaleLowerCase() ===
                                    "on the way" ||
                                status?.totalAmount.toLocaleLowerCase() ===
                                    "completed" ? (
                                    <CheckIcon className=" text-white" />
                                ) : (
                                    3
                                )}
                            </div>
                            <p
                                className={` text-center font-poppins text-sm font-normal leading-[1.5] ${
                                    status?.totalAmount.toLocaleLowerCase() ===
                                        "on the way" ||
                                    status?.totalAmount.toLocaleLowerCase() ===
                                        "completed"
                                        ? "text-green-500"
                                        : "text-gray-800"
                                }`}
                            >
                                On the way
                            </p>
                        </div>
                        <div className=" flex flex-col justify-center items-center">
                            <div
                                className={`mb-2 size-10  rounded-full flex items-center justify-center ${
                                    status?.totalAmount.toLocaleLowerCase() ===
                                    "completed"
                                        ? "bg-black"
                                        : " bg-white border-2 border-dashed border-[#00b207] text-[#00b207]"
                                }`}
                            >
                                {status?.totalAmount.toLocaleLowerCase() ===
                                "completed" ? (
                                    <CheckIcon className=" text-white" />
                                ) : (
                                    4
                                )}
                            </div>
                            <p
                                className={` text-center font-poppins text-sm font-normal leading-[1.5] ${
                                    status?.totalAmount.toLocaleLowerCase() ===
                                    "completed"
                                        ? "text-green-500"
                                        : "text-gray-800"
                                }`}
                            >
                                Delivered
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mb-2 flex items-center justify-between shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] rounded-sm px-4 py-3">
                <div className=" flex items-center gap-x-2 border border-[#e8e8e8] px-3 py-2 rounded-full text-sm ">
                    <SquareArrowRight className=" size-4 stroke-[1.5px]" />
                    <p>Estimated shipping date:</p>
                    <p>Apr 23, 2024</p>
                </div>
                <Button className=" bg-blue-600 hover:bg-blue-800 border-none">
                    Mark as ready to next
                </Button>
            </div>
        </div>
    );
};
