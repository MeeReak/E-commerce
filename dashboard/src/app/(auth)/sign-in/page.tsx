"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Cookies from "js-cookie";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { useRouter } from "next/navigation";

const signInSchema = z.object({
    email: z
        .string()
        .nonempty({ message: "Email is required" })
        .email({ message: "Please enter a valid email address" }),
    password: z
        .string()
        .nonempty({ message: "Password is required" })
        .min(6, { message: "Password must be at least 6 characters" })
});

type SignInFormData = z.infer<typeof signInSchema>;

export default function SignInPage() {
    const router = useRouter();
    const {
        control,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<SignInFormData>({
        resolver: zodResolver(signInSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    });

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [apiError, setApiError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const togglePasswordVisibility = () =>
        setIsPasswordVisible((prev) => !prev);

    const onSubmit = async (data: SignInFormData) => {
        setIsLoading(true);
        try {
            const response = await axios.post(
                `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
                {
                    email: data.email,
                    password: data.password
                }
            );

            const result = response.data;

            //expries in 20s after login
            // Cookies.set("auth_token", result.access_token, {
            //     expires: 10 / (60 * 60 * 24) // 20 seconds in days
            // });
            Cookies.set("auth_token", result.access_token, { expires: 7 });
            setApiError(null);
            reset();
            router.push("/");
        } catch (error: any) {
            if (axios.isAxiosError(error)) {
                setApiError(
                    error.response?.data?.message ||
                        "Login failed. Please try again."
                );
            } else {
                setApiError("An error occurred. Please try again later.");
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex flex-col h-screen">
            <div className="flex items-center justify-center flex-grow bg-gray-100">
                <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
                    <h2 className="text-center text-2xl font-semibold text-gray-900 mb-6">
                        Sign In
                    </h2>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        {apiError && (
                            <p className="text-red-500 text-sm text-center mb-4">
                                {apiError}
                            </p>
                        )}

                        {/* Email */}
                        <FormField
                            control={control}
                            name="email"
                            type="email"
                            placeholder="Email"
                            error={errors.email?.message}
                        />

                        {/* Password */}
                        <div className="mb-4 relative">
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
                                            placeholder="Password"
                                            className="w-full px-4 py-2 border rounded-sm focus:ring-1 focus:ring-green-500 focus:outline-none placeholder:text-gray-400"
                                        />
                                        {field.value &&
                                            (isPasswordVisible ? (
                                                <EyeIcon
                                                    aria-label="Hide password"
                                                    onClick={
                                                        togglePasswordVisibility
                                                    }
                                                    className="absolute right-3 top-2 text-gray-600 stroke-[1px] cursor-pointer"
                                                />
                                            ) : (
                                                <EyeOffIcon
                                                    aria-label="Show password"
                                                    onClick={
                                                        togglePasswordVisibility
                                                    }
                                                    className="absolute right-3 top-2 text-gray-600 stroke-[1px] cursor-pointer"
                                                />
                                            ))}
                                    </>
                                )}
                            />
                            {errors.password && (
                                <p className="text-red-500 text-xs pt-1">
                                    {errors.password.message}
                                </p>
                            )}
                        </div>

                        {/* Options */}
                        <div className="flex items-center justify-between mb-6">
                            <label className="flex items-center text-sm text-gray-600">
                                <input
                                    type="checkbox"
                                    className="h-4 w-4 rounded"
                                />
                                <span className="ml-2">Remember me</span>
                            </label>
                            <Link
                                href="#"
                                className="text-sm text-gray-600 hover:underline"
                            >
                                Forgot Password
                            </Link>
                        </div>

                        <Button
                            type="submit"
                            disabled={isLoading}
                            className="w-full py-2 px-4"
                        >
                            {isLoading ? "Logging in..." : "Login"}
                        </Button>
                    </form>

                    {/* Register */}
                    <p className="text-center text-sm text-gray-600 mt-6">
                        Don’t have an account?{" "}
                        <Link
                            href="/sign-up"
                            className="text-sm font-medium text-gray-900 hover:underline"
                        >
                            Register
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

type FormFieldProps = {
    control: any;
    name: "email" | "password";
    type: string;
    placeholder: string;
    error?: string;
};

function FormField({
    control,
    name,
    type,
    placeholder,
    error
}: FormFieldProps) {
    return (
        <div className="mb-4">
            <Controller
                name={name}
                control={control}
                render={({ field }) => (
                    <Input
                        {...field}
                        type={type}
                        placeholder={placeholder}
                        className="w-full px-4 py-2 border rounded-sm focus:ring-1 focus:ring-green-500 focus:outline-none placeholder:text-gray-400"
                    />
                )}
            />
            {error && <p className="text-red-500 text-xs pt-1">{error}</p>}
        </div>
    );
}
