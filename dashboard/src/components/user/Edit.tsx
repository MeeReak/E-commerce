"use client";

import React, { use, useState } from "react";
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
import { IUser } from "./Table";
import Cookies from "js-cookie";

export const UserDetail = ({
    formData,
    onInputChange
}: {
    formData: Record<string, any>;
    onInputChange: (key: string, value: string) => void;
}) => {
    return (
        <div className="flex items-center flex-col">
            {formData.profile ? (
                <Image
                    src={formData.profile}
                    alt={formData.name}
                    width={100}
                    height={100}
                    className="rounded-full object-cover"
                />
            ) : (
                <div className=" w-[100px] h-[100px] rounded-full bg-gray-200 flex items-center justify-center text-5xl font-semibold text-gray-700">
                    {formData.name?.charAt(0).toUpperCase() || "?"}
                </div>
            )}
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
                        value={"Status"}
                        onChange={(e) =>
                            onInputChange("status", e.target.value)
                        }
                    />
                </div>

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
                <div className="flex gap-x-5">
                    <InputField
                        label="Billing Village"
                        id="billingVillage"
                        value={formData.billing.village}
                        onChange={(e) =>
                            onInputChange("billing.village", e.target.value)
                        }
                        className="w-full"
                    />
                    <InputField
                        label="Billing Sangkat"
                        id="billingSangkat"
                        value={formData.billing.sangkat}
                        onChange={(e) =>
                            onInputChange("billing.sangkat", e.target.value)
                        }
                        className="w-full"
                    />
                </div>
                <div className="flex gap-x-5">
                    <InputField
                        label="Billing District"
                        id="billingDistrict"
                        value={formData.billing.district}
                        onChange={(e) =>
                            onInputChange("billing.district", e.target.value)
                        }
                        className="w-full"
                    />
                    <InputField
                        label="Billing State"
                        id="billingState"
                        value={formData.billing.state}
                        onChange={(e) =>
                            onInputChange("billing.state", e.target.value)
                        }
                        className="w-full"
                    />
                </div>
            </div>
        </div>
    );
};

export function EditForm({ user }: { user: IUser }): JSX.Element {
    const [formData, setFormData] = useState({
        name: user.name || "",
        status: "Status",
        gender: user.gender || "",
        phoneNumber: user.phone_number || "",
        address: user.address || "",
        email: user.email || "",
        profile: user.profile || "",
        billing: {
            id: user.billing_address.id || "",
            name: user.billing_address.name || "",
            phoneNumber: user.billing_address.phone_number || "",
            email: user.billing_address.email || "",
            address: user.billing_address.district || "",
            village: user.billing_address.village || "",
            sangkat: user.billing_address.sangkat || "",
            state: user.billing_address.state || "",
            district: user.billing_address.district || ""
        }
    });

    const handleInputChange = (key: string, value: string): void => {
        if (key.startsWith("billing.")) {
            const billingKey = key.split(".")[1];
            setFormData((prev) => ({
                ...prev,
                billing: {
                    ...prev.billing,
                    [billingKey]: value
                }
            }));
        } else {
            setFormData((prev) => ({
                ...prev,
                [key]: value
            }));
        }
    };

    const handleSelectChange = (key: string, value: string): void => {
        setFormData((prev) => ({ ...prev, [key]: value }));
    };

    const handleSubmit = async () => {
        const token = Cookies.get("auth_token");
        const form = new FormData();

        form.append("_method", "PUT"); // Laravel expects this to simulate PUT
        form.append("name", formData.name);
        form.append("phone_number", formData.phoneNumber);
        form.append("gender", formData.gender);
        form.append("address", formData.address);

        // Flatten billing address fields
        const billingAddress = {
            user_id: user.id,
            name: formData.billing.name,
            phone_number: formData.billing.phoneNumber,
            email: formData.billing.email,
            village: formData.billing.village,
            sangkat: formData.billing.sangkat,
            state: formData.billing.state,
            district: formData.billing.district
        };

        // Optional: Add profile file if needed
        // form.append("profile", selectedFile);
        try {
            const res = await fetch(
                `http://127.0.0.1:8000/api/v1/users/${user.id}`,
                {
                    method: "POST", // Laravel will interpret this as PUT via _method
                    headers: {
                        Accept: "application/json",
                        Authorization: `Bearer ${token}` // Replace dynamically
                    },
                    body: form
                }
            );

            const billing = user.billing_address.id
                ? await fetch(
                      `http://127.0.0.1:8000/api/v1/billing_address/${user.billing_address.id}`,
                      {
                          method: "PUT", // Laravel will interpret this as PUT via _method
                          headers: {
                              Accept: "application/json",
                              "Content-Type": "application/json",
                              Authorization: `Bearer ${token}` // Replace dynamically
                          },
                          body: JSON.stringify(billingAddress)
                      }
                  )
                : await fetch(`http://127.0.0.1:8000/api/v1/billing_address`, {
                      method: "POST", // Laravel will interpret this as PUT via _method
                      headers: {
                          Accept: "application/json",
                          "Content-Type": "application/json",
                          Authorization: `Bearer ${token}` // Replace dynamically
                      },
                      body: JSON.stringify(billingAddress)
                  });

            if (!res.ok || !billing.ok) {
                const errorData = await billing.json();
                console.error("Update failed:", errorData);
                return;
            }

            const data = await res.json();
            //redirect to the product page or show a success message

            // Optional: close modal or trigger UI refresh
            window.location.reload();
        } catch (error) {
            console.error("An error occurred during product update:", error);
        }
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <EditIcon className=" stroke-[1.5px] p-1 bg-yellow-100 text-yellow-600 rounded-sm" />
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px] flex flex-col overflow-y-auto hide-scrollbar">
                <DialogHeader>
                    <DialogTitle>User Information</DialogTitle>
                    <DialogDescription></DialogDescription>
                </DialogHeader>
                <UserDetail
                    formData={formData}
                    onInputChange={handleInputChange}
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
