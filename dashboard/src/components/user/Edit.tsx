"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import { EditIcon } from "lucide-react";
import Image from "next/image";
import { InputField } from "../product/Detail";

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

export const UserDetail = ({
    formData,
    onInputChange
}: {
    formData: Record<string, any>;
    onInputChange: (key: string, value: string) => void;
}) => {
    return (
        <div className="flex items-center flex-col">
            <Image
                src="https://avatars.githubusercontent.com/u/124599?v=4"
                alt="profile"
                width={100}
                height={100}
                className="rounded-full"
            />
            <div className="w-full space-y-3 mt-4">
                <div className="flex gap-x-5">
                    <InputField
                        label="Name"
                        id="name"
                        value={formData.name}
                        onChange={(e) => onInputChange("name", e.target.value)}
                    />
                    <InputField
                        label="Status"
                        id="status"
                        value={formData.status}
                        onChange={(e) =>
                            onInputChange("status", e.target.value)
                        }
                    />
                </div>
                <InputField
                    label="Email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => onInputChange("email", e.target.value)}
                    className="w-full"
                />
                <div className="flex items-center gap-x-5">
                    <InputField
                        label="Phone Number"
                        id="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={(e) =>
                            onInputChange("phoneNumber", e.target.value)
                        }
                    />
                    <InputField
                        label="Date of Birth"
                        id="dateOfBirth"
                        value={formData.dateOfBirth}
                        onChange={(e) =>
                            onInputChange("dateOfBirth", e.target.value)
                        }
                    />
                    <InputField
                        label="Gender"
                        id="gender"
                        value={formData.gender}
                        onChange={(e) =>
                            onInputChange("gender", e.target.value)
                        }
                    />
                </div>
                <InputField
                    label="Address"
                    id="address"
                    value={formData.address}
                    onChange={(e) => onInputChange("address", e.target.value)}
                    className="w-full"
                />
                <InputField
                    label="Billing Name"
                    id="billingName"
                    value={formData.billing.name}
                    onChange={(e) =>
                        onInputChange("billing.name", e.target.value)
                    }
                    className="w-full"
                />
                <div className="flex gap-x-5">
                    <InputField
                        label="Billing Phone Number"
                        id="billingPhoneNumber"
                        value={formData.billing.phoneNumber}
                        onChange={(e) =>
                            onInputChange("billing.phoneNumber", e.target.value)
                        }
                        className="w-full"
                    />
                    <InputField
                        label="Billing Email"
                        id="billingEmail"
                        value={formData.billing.email}
                        onChange={(e) =>
                            onInputChange("billing.email", e.target.value)
                        }
                        className="w-full"
                    />
                </div>
                <InputField
                    label="Billing Address"
                    id="billingAddress"
                    value={formData.billing.address}
                    onChange={(e) =>
                        onInputChange("billing.address", e.target.value)
                    }
                    className="w-full"
                />
            </div>
        </div>
    );
};

export function EditForm(): JSX.Element {
    const [formData, setFormData] = useState({
        name: user.name,
        email: user.email,
        totalOrders: user.totalOrders.toString(),
        totalSpent: user.totalSpent.toString(),
        lastOrder: user.lastOrder,
        dateOfBirth: user.dateOfBirth,
        gender: user.gender,
        phoneNumber: user.phoneNumber,
        address: user.address,
        status: user.status,
        billing: {
            name: user.billing.name,
            phoneNumber: user.billing.phoneNumber,
            email: user.billing.email,
            address: user.billing.address
        }
    });

    const handleInputChange = (key: string, value: string | string[]): void => {
        setFormData((prev) => ({ ...prev, [key]: value }));
    };

    const handleSelectChange = (key: string, value: string): void => {
        setFormData((prev) => ({ ...prev, [key]: value }));
    };

    const handleSubmit = (): void => {
        console.log("Form Data:", formData);
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <EditIcon className=" stroke-[1.5px] p-1 bg-yellow-100 text-yellow-600 rounded-sm" />
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px] flex flex-col overflow-y-auto hide-scrollbar">
                <DialogHeader>
                    <DialogTitle>User Information</DialogTitle>
                    <DialogDescription></DialogDescription>
                </DialogHeader>
                <UserDetail
                    formData={formData}
                    onInputChange={handleInputChange}
                    // handleSelectChange={handleSelectChange}
                />
                <DialogFooter>
                    <Button type="button" onClick={() => handleSubmit()}>
                        Update
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
