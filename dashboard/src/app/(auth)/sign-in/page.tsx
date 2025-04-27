"use client";

import { EyeIcon } from "lucide-react";
import React, { useState } from "react";
import Link from "next/link";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Cookies from "js-cookie";

// Zod validation schema for the sign-in form
const signInSchema = z.object({
    email: z
        .string()
        .nonempty({ message: "Email is required" })
        .email({ message: "Please enter a valid email address" }),
    password: z
        .string()
        .min(6, { message: "Password must be at least 6 characters" })
        .nonempty({ message: "Password is required" })
});

type SignInFormData = z.infer<typeof signInSchema>;

export default function SignInPage() {
    const {
        control,
        handleSubmit,
        formState: { errors },
        reset,
        setError
    } = useForm<SignInFormData>({
        resolver: zodResolver(signInSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    });

    // State to handle password visibility
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    // State to handle API error messages
    const [apiError, setApiError] = useState<string | null>(null);

    // Toggle password visibility
    const handlePasswordVisibility = () => {
        setIsPasswordVisible((prev: boolean) => !prev);
    };

    // Handle form submission
    const onSubmit = async (data: SignInFormData) => {
        try {
            const response = await fetch(
                "http://127.0.0.1:8000/api/auth/login",
                {
                    method: "POST",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        email: data.email,
                        password: data.password
                    })
                }
            );

            const result = await response.json();

            if (!response.ok) {
                // Handle API errors
                setApiError(
                    result.message || "Login failed. Please try again."
                );
                return;
            }

            // Save token to cookie expires in 10 seconds
            Cookies.set("auth_token", result.access_token, { expires: 7 }); // Expires in 7 days
            setApiError(null);
            reset(); // Reset form after successful login

            // Optionally redirect user to a protected page
            window.location.href = "/";
        } catch (error) {
            setApiError("An error occurred. Please try again later.");
            console.error("Login error:", error);
        }
    };

    return (
        <div className="flex flex-col h-[100vh] ">
            {/* Sign-In Section */}
            <div className="flex items-center justify-center flex-grow bg-gray-100">
                <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
                    <h2 className="text-gray-900 text-center text-2xl font-semibold leading-[38.4px] mb-6">
                        Sign In
                    </h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* API Error Message */}
                        {apiError && (
                            <p className="text-red-500 text-center text-sm mb-4">
                                {apiError}
                            </p>
                        )}

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
                                        value={field.value}
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
                                                value={field.value}
                                                placeholder="Password"
                                                className="w-full px-4 py-2 border rounded-sm focus:ring-1 focus:ring-green-500 focus:outline-none placeholder:text-gray-400 placeholder:text-base placeholder:font-normal placeholder:leading-[20.8px]"
                                            />
                                            {field.value && (
                                                <EyeIcon
                                                    onClick={
                                                        handlePasswordVisibility
                                                    }
                                                    className="absolute right-3 top-2 text-gray-600 stroke-[1px]"
                                                />
                                            )}
                                        </>
                                    )}
                                />
                            </div>
                            <p className="text-red-500 text-xs h-1 pt-1 pb-2">
                                {errors.password && errors.password.message}
                            </p>
                        </div>

                        {/* Remember Me and Forgot Password */}
                        <div className="flex items-center justify-between mb-6">
                            <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    className="h-4 w-4 text-green-500 border-gray-300 rounded"
                                />
                                <span className="ml-2 text-gray-600 text-sm font-normal leading-[21px]">
                                    Remember me
                                </span>
                            </label>
                            <Link
                                href="#"
                                className="text-gray-600 text-sm font-normal leading-[21px] hover:underline"
                            >
                                Forgot Password
                            </Link>
                        </div>

                        {/* Login Button */}
                        <Button type="submit" className="w-full py-2 px-4">
                            Login
                        </Button>
                    </form>

                    {/* Register Link
                    <p className="text-gray-600 text-center text-sm font-normal leading-[21px] mt-6">
                        Don’t have an account?
                        <Link
                            href="/sign-up"
                            className="text-gray-900 text-sm font-medium leading-[21px] hover:underline"
                        >
                            Register
                        </Link>
                    </p> */}
                </div>
            </div>
        </div>
    );
}
