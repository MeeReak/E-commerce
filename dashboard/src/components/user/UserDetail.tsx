import Image from "next/image";
import React from "react";
import { InputField } from "../product/ProductDetail";

const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    totalOrders: 5,
    totalSpent: 320.5,
    lastOrder: "2025-04-04"
};

export const UserDetail = () => {
    return (
        <>
            <div className=" flex items-center flex-col">
                <Image
                    src={"https://avatars.githubusercontent.com/u/124599?v=4"}
                    alt={"profile"}
                    width={150}
                    height={150}
                    className=" rounded-full"
                />
                <div className=" space-y-3">
                    <div className=" flex items-center gap-x-5">
                        <InputField
                            label="Name"
                            value={user.name}
                            id={user.name}
                        />
                        <InputField
                            label="Email"
                            value={user.email}
                            id={user.email}
                            className=" w-full"
                        />
                    </div>
                    <div className=" flex items-center gap-x-5">
                        <InputField
                            label="Total Spent"
                            value={user.totalSpent.toFixed(2) + " $"}
                            id={user.totalSpent.toString()}
                        />
                        <InputField
                            label="Total Orders"
                            value={user.totalOrders.toString()}
                            id={user.email}
                            className=" w-full"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};
