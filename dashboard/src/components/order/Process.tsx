import React, { useState } from "react";
import { CheckIcon, SquareArrowRight } from "lucide-react";
import { Tracker } from "../Tracker";
import { Button } from "../ui/button";
import { IOrder } from "./Table";
import Cookies from "js-cookie";

export const Process = ({ order }: { order: IOrder }) => {
    const steps = [
        { label: "Order Received", status: "pending" },
        { label: "Processing", status: "processing" },
        { label: "Shipped", status: "shipped" },
        { label: "Delivered", status: "delivered" }
    ];

    const statusOrder = [
        "pending",
        "processing",
        "shipped",
        "delivered",
        "cancelled"
    ];
    const [localStatus, setLocalStatus] = useState(order.status.toLowerCase());
    const [isChanged, setIsChanged] = useState(false);

    const currentIndex = statusOrder.indexOf(localStatus);

    const handleNextStep = () => {
        const nextIndex = currentIndex + 1;
        if (nextIndex < steps.length) {
            setLocalStatus(steps[nextIndex].status);
            setIsChanged(true);
        }
    };
    //Estimated shipping date + 7 days from created_at
    const createdAt = new Date(order.created_at);
    const estimatedShippingDate = new Date(
        createdAt.getTime() + 7 * 24 * 60 * 60 * 1000
    ).toLocaleDateString("en-US", {
        day: "2-digit",
        month: "short",
        year: "numeric"
    });

    const handleUpdate = async () => {
        try {
            const token = Cookies.get("auth_token");
            const res = await fetch(
                `http://127.0.0.1:8000/api/v1/orders/${order.id}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}` // Replace with real token
                    },
                    body: JSON.stringify({ status: localStatus })
                }
            );

            if (!res.ok) {
                console.log("Error updating order status:", await res.json());
            }

            setIsChanged(false); // reset after successful update
            window.location.reload(); // reload the page to see the changes
        } catch (err) {
            console.error("Update error:", err);
        }
    };

    return (
        <>
            <div className=" px-5 py-3 h-[150px] shadow rounded-sm">
                <div className="flex items-center gap-x-2 mb-5">
                    <h2 className="text-base text-gray-800">Process</h2>
                    <span className="text-gray-400">•</span>
                    <span className="text-gray-500 text-xs">
                        {new Date(order.created_at).toLocaleDateString(
                            "en-US",
                            {
                                day: "2-digit",
                                month: "short",
                                year: "numeric"
                            }
                        )}
                    </span>
                    <span className="text-gray-400">•</span>
                    <span className="text-gray-500 text-xs">
                        {order.items.length > 1
                            ? `${order.items.length} items`
                            : `${order.items.length} item`}
                    </span>
                </div>
                <div className="flex w-full gap-x-8 justify-center relative pt-5">
                    <Tracker status={localStatus} />
                    <div className="absolute flex justify-between w-[97%] top-1">
                        {steps.map((step, index) => {
                            const isActive = currentIndex >= index;
                            return (
                                <div
                                    key={step.status}
                                    className="flex flex-col items-center"
                                >
                                    <div
                                        className={`mb-2 size-10 rounded-full flex items-center justify-center ${
                                            isActive
                                                ? "bg-green-600 text-white"
                                                : "bg-white border-2 border-dashed border-[#00b207] text-[#00b207]"
                                        }`}
                                    >
                                        {isActive ? <CheckIcon /> : index + 1}
                                    </div>
                                    <p
                                        className={`text-sm ${
                                            isActive
                                                ? "text-green-500"
                                                : "text-gray-800"
                                        }`}
                                    >
                                        {step.label}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            <div className="mb-2 flex items-center justify-between shadow rounded-sm px-4 py-3">
                <div className="flex items-center gap-x-2 border px-3 py-2 rounded-full text-sm">
                    <SquareArrowRight className="size-4" />
                    <span>Estimated shipping date:</span>
                    <span>
                        {new Date(estimatedShippingDate).toLocaleDateString(
                            "en-US",
                            {
                                day: "2-digit",
                                month: "short",
                                year: "numeric"
                            }
                        )}
                    </span>
                </div>
                <div className="flex gap-x-3">
                    {currentIndex < steps.length - 1 && (
                        <Button
                            className="bg-blue-500 hover:bg-blue-700"
                            onClick={handleNextStep}
                            disabled={isChanged}
                        >
                            Mark as ready to next
                        </Button>
                    )}
                    {isChanged && (
                        <Button
                            className="bg-green-600 hover:bg-green-800"
                            onClick={handleUpdate}
                        >
                            Update
                        </Button>
                    )}
                </div>
            </div>
        </>
    );
};
