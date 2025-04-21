import Image from "next/image";
import React from "react";
import { InputField } from "../product/View";

const user = {
    name: "John Doe",
    gender: "M",
    dateOfBirth: "2025-04-04",
    email: "john.doe@example.com",
    totalOrders: 5,
    totalSpent: 320.5,
    lastOrder: "2025-04-04",
    phoneNumber: "123-456-7890",
    address: "testing",
    status: "Active",
    billing: {
        name: "test",
        address: "taei",
        email: "john.doe@example.com",
        phoneNumber: "123-456-7890"
    }
};

export const UserDetail = () => {
    return (
        <>
            <div className=" flex items-center flex-col">
                <Image
                    src={"https://avatars.githubusercontent.com/u/124599?v=4"}
                    alt={"profile"}
                    width={100}
                    height={100}
                    className=" rounded-full"
                />
                <div className=" space-y-3">
                    <div className=" flex gap-x-5">
                        <InputField
                            label="Name"
                            value={user.name}
                            id={user.name}
                            className=" w-full"
                        />
                        <InputField
                            label="Status"
                            value={user.status}
                            id={user.status}
                        />
                    </div>
                    <InputField
                        label="Email"
                        value={user.email}
                        id={user.email}
                        className=" w-full"
                    />
                    <div className=" flex items-center gap-x-5">
                        <InputField
                            label="Phone Number"
                            value={user.phoneNumber}
                            id={user.phoneNumber}
                        />
                        <InputField
                            label="Date of Birth"
                            value={user.dateOfBirth}
                            id={user.dateOfBirth.toString()}
                        />
                        <InputField
                            label="Gender"
                            value={user.gender}
                            id={user.gender}
                        />
                    </div>
                    <InputField
                        label="Address"
                        value={user.address}
                        id={user.address}
                        className=" w-full"
                    />
                    <InputField
                        label="Billing Name"
                        value={user.billing.name}
                        id={user.billing.name}
                        className=" w-full"
                    />
                    <div className=" flex gap-x-5">
                        <InputField
                            label="Billing Phone Number"
                            value={user.billing.phoneNumber}
                            id={user.billing.phoneNumber}
                            className=" w-full"
                        />
                        <InputField
                            label="Billing Email"
                            value={user.billing.email}
                            id={user.billing.email}
                            className=" w-full"
                        />
                    </div>
                    <InputField
                        label="Address"
                        value={user.billing.address}
                        id={user.billing.address}
                        className=" w-full"
                    />
                </div>
            </div>
        </>
    );
};
