import Image from "next/image";
import React from "react";
import { InputField } from "../product/View";
import { IUser } from "./Table";

export const UserDetail = ({ user }: { user: IUser }) => {
    return (
        <>
            <div className=" flex items-center flex-col">
                {user.profile ? (
                    <Image
                        src={user.profile}
                        alt={user.name}
                        width={100}
                        height={100}
                        className="rounded-full object-cover"
                    />
                ) : (
                    <div className=" w-[100px] h-[100px] rounded-full bg-gray-200 flex items-center justify-center text-5xl font-semibold text-gray-700">
                        {user.name?.charAt(0).toUpperCase() || "?"}
                    </div>
                )}
                <div className=" space-y-3">
                    <div className=" flex gap-x-5">
                        <InputField
                            label="Name"
                            value={user.name || "N/A"}
                            id={user.name}
                            className=" w-full"
                        />
                        <InputField
                            label="Status"
                            value={"Status"}
                            id={"status"}
                        />
                    </div>
                    <InputField
                        label="Email"
                        value={user.email || "N/A"}
                        id={user.email}
                        className=" w-full"
                    />
                    <div className=" flex items-center gap-x-5">
                        <InputField
                            label="Phone Number"
                            value={user.phone_number || "N/A"}
                            id={user.phone_number}
                        />
                        {/* <InputField
                            label="Date of Birth"
                            value={user.dateOfBirth || "N/A"}
                            id={user.dateOfBirth}
                        /> */}
                        <InputField
                            label="Gender"
                            value={user.gender || "N/A"}
                            id={user.gender}
                        />
                    </div>
                    <InputField
                        label="Address"
                        value={user.address || "N/A"}
                        id={user.address}
                        className=" w-full"
                    />
                    <InputField
                        label="Billing Name"
                        value={user.billing_address.name || "N/A"}
                        id={user.billing_address.name}
                        className=" w-full"
                    />
                    <div className=" flex gap-x-5">
                        <InputField
                            label="Billing Phone Number"
                            value={user.billing_address.phone_number || "N/A"}
                            id={user.billing_address.phone_number}
                            className=" w-full"
                        />
                        <InputField
                            label="Billing Email"
                            value={user.billing_address.email || "N/A"}
                            id={user.billing_address.email}
                            className=" w-full"
                        />
                    </div>

                    <InputField
                        label="Billing Village"
                        value={
                            user.billing_address.village ||
                            user.billing_address.sangkat ||
                            user.billing_address.district ||
                            user.billing_address.state
                                ? `${user.billing_address.village || ""}, ${user.billing_address.sangkat || ""}, ${user.billing_address.district || ""}, ${user.billing_address.state || ""}`
                                : "N/A"
                        }
                        id={user.billing_address.village}
                        className=" w-full"
                    />
                </div>
            </div>
        </>
    );
};
