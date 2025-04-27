"use client";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import React, { useState } from "react";
import Link from "next/link";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// Zod validation schema for the create account form
const createAccountSchema = z
    .object({
        email: z
            .string()
            .nonempty({ message: "Email is required" })
            .email({ message: "Please enter a valid email address" }),
        password: z
            .string()
            .min(6, { message: "Password must be at least 6 characters" })
            .nonempty({ message: "Password is required" }),
        confirmPassword: z
            .string()
            .nonempty({ message: "Please confirm your password" })
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords do not match",
        path: ["confirmPassword"]
    });

type CreateAccountFormData = z.infer<typeof createAccountSchema>;

export default function CreateAccountPage() {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
        useState(false);

    const {
        control,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<CreateAccountFormData>({
        resolver: zodResolver(createAccountSchema),
        defaultValues: {
            email: "",
            password: "",
            confirmPassword: ""
        }
    });

    // Handle form submission
    const onSubmit = (data: CreateAccountFormData) => {
        console.log("Form submitted", data);
        reset(); // Optionally reset the form after submission
    };

    const handlePasswordVisibility = () => {
        setIsPasswordVisible((prev) => !prev);
    };

    const handleConfirmPasswordVisibility = () => {
        setIsConfirmPasswordVisible((prev) => !prev);
    };

    return (
        <div className="flex items-center justify-center h-[100vh] bg-gray-100">
            <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
                <h2 className="text-gray-900 text-center text-2xl font-semibold leading-[38.4px] mb-6">
                    Create Account
                </h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* Email Input */}
                    <div className="mb-4">
                        <Controller
                            name="email"
                            control={control}
                            render={({ field }) => (
                                <Input
                                    {...field}
                                    type="email"
                                    id="email"
                                    placeholder="Email"
                                    className="w-full px-4 py-2 border rounded-sm focus:ring-1 focus:ring-green-500 focus:outline-none placeholder:text-gray-400 placeholder:text-base placeholder:font-normal placeholder:leading-[20.8px]"
                                />
                            )}
                        />
                        <p className="text-red-500 text-xs h-1 pt-1 pb-2">
                            {errors.email && errors.email.message}
                        </p>
                    </div>

                    {/* Password Input */}
                    <div className="mb-4">
                        <div className="relative">
                            <Controller
                                name="password"
                                control={control}
                                render={({ field }) => (
                                    <>
                                        <Input
                                            {...field}
                                            type={
                                                isPasswordVisible
                                                    ? "text"
                                                    : "password"
                                            }
                                            id="password"
                                            placeholder="Password"
                                            className="w-full px-4 py-2 border rounded-sm focus:ring-1 focus:ring-green-500 focus:outline-none placeholder:text-gray-400 placeholder:text-base placeholder:font-normal placeholder:leading-[20.8px]"
                                        />
                                        <div
                                            onClick={handlePasswordVisibility}
                                            className="absolute right-3 top-2 cursor-pointer"
                                        >
                                            {isPasswordVisible ? (
                                                <EyeOffIcon className="text-gray-600 stroke-[1px]" />
                                            ) : (
                                                <EyeIcon className="text-gray-600 stroke-[1px]" />
                                            )}
                                        </div>
                                    </>
                                )}
                            />
                        </div>
                        <p className="text-red-500 text-xs h-1 pt-1 pb-2">
                            {errors.password && errors.password.message}
                        </p>
                    </div>

                    {/* Confirm Password Input */}
                    <div className="mb-4">
                        <div className="relative">
                            <Controller
                                name="confirmPassword"
                                control={control}
                                render={({ field }) => (
                                    <>
                                        <Input
                                            {...field}
                                            type={
                                                isConfirmPasswordVisible
                                                    ? "text"
                                                    : "password"
                                            }
                                            id="confirmPassword"
                                            placeholder="Confirm Password"
                                            className="w-full px-4 py-2 border rounded-sm focus:ring-1 focus:ring-green-500 focus:outline-none placeholder:text-gray-400 placeholder:text-base placeholder:font-normal placeholder:leading-[20.8px]"
                                        />
                                        <div
                                            onClick={
                                                handleConfirmPasswordVisibility
                                            }
                                            className="absolute right-3 top-2 cursor-pointer"
                                        >
                                            {isConfirmPasswordVisible ? (
                                                <EyeOffIcon className="text-gray-600 stroke-[1px]" />
                                            ) : (
                                                <EyeIcon className="text-gray-600 stroke-[1px]" />
                                            )}
                                        </div>
                                    </>
                                )}
                            />
                        </div>
                        <p className="text-red-500 text-xs h-1 pt-1 pb-2">
                            {errors.confirmPassword &&
                                errors.confirmPassword.message}
                        </p>
                    </div>

                    {/* Terms & Conditions */}
                    <div className="flex items-center mb-6">
                        <input
                            type="checkbox"
                            id="terms"
                            className="h-4 w-4 text-green-500 border-gray-300 rounded"
                        />
                        <label
                            htmlFor="terms"
                            className="ml-2 text-gray-600 text-base font-normal leading-[21px]"
                        >
                            Accept all terms & Conditions
                        </label>
                    </div>

                    {/* Create Account Button */}
                    <Button type="submit" className="w-full py-2 px-4">
                        Create Account
                    </Button>
                </form>

                {/* Login Link */}
                <p className="mt-6 text-gray-600 text-center text-base font-normal leading-[21px]">
                    Already have an account?
                    <Link
                        href="/sign-in"
                        className="text-gray-900 text-base font-semibold leading-[21px] hover:underline"
                    >
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
}
