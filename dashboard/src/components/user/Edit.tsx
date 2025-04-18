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
    email: "john.doe@example.com",
    totalOrders: 5,
    totalSpent: 320.5,
    lastOrder: "2025-04-04"
};

export const UserDetail = ({
    formData,
    onInputChange,
    handleSelectChange
}: {
    formData: Record<string, any>;
    onInputChange: (key: string, value: string | string[]) => void;
    handleSelectChange: (key: string, value: string) => void;
}) => {
    return (
        <>
            <div className=" flex items-center flex-col">
                <div>
                    <Image
                        src={
                            "https://avatars.githubusercontent.com/u/124599?v=4"
                        }
                        alt=""
                        width={150}
                        height={150}
                        className=" rounded-full"
                    />
                </div>
                <div className=" w-full  space-y-3">
                    <InputField
                        id="name"
                        label="Name"
                        value={formData.name}
                        onChange={(e) =>
                            onInputChange(e.target.name, e.target.value)
                        }
                    />
                    <InputField
                        id="email"
                        label="Email"
                        value={formData.email}
                        onChange={(e) =>
                            onInputChange(e.target.name, e.target.value)
                        }
                    />
                    <div className=" flex items-center w-full gap-x-5">
                        <InputField
                            id="totalOrder"
                            label="Total Order"
                            value={formData.totalOrders}
                            onChange={(e) =>
                                onInputChange(e.target.name, e.target.value)
                            }
                        />
                        <InputField
                            id="totalSpent"
                            label="Total Spent"
                            value={formData.totalSpent}
                            onChange={(e) =>
                                onInputChange(e.target.name, e.target.value)
                            }
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export function EditForm(): JSX.Element {
    const [formData, setFormData] = useState({
        name: user.name,
        email: user.email,
        totalOrders: user.totalOrders,
        totalSpent: user.totalSpent,
        date: user.lastOrder
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
                    handleSelectChange={handleSelectChange}
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
