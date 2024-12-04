import { EyeIcon } from "lucide-react";
import React from "react";
import Link from "next/link";
// import Footer_Section from "../footer";

export default function SignInPage() {
  return (
    <div className="flex flex-col min-h-[600px]">
      {/* Sign-In Section */}
      <div className="flex items-center justify-center flex-grow bg-gray-100">
        <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
          <h2 className="text-gray-900 text-center text-2xl font-semibold leading-[38.4px] mb-6">
            Sign In
          </h2>
          <form>
            {/* Email Input */}
            <div className="mb-4">
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="w-full px-4 py-2 border rounded-sm focus:ring-1 focus:ring-green-500 focus:outline-none placeholder:text-gray-400 placeholder:text-base placeholder:font-normal placeholder:leading-[20.8px]"
              />
            </div>

            {/* Password Input */}
            <div className="mb-4">
              {/* <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label> */}
              <div className="relative">
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  className="w-full px-4 py-2 border rounded-sm focus:ring-1 focus:ring-green-500 focus:outline-none placeholder:text-gray-400 placeholder:text-base placeholder:font-normal placeholder:leading-[20.8px]"
                />
                <EyeIcon className="absolute right-3 top-2 text-gray-600 stroke-[1px]" />
              </div>
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
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-2 px-4 rounded-full hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:outline-none"
            >
              Login
            </button>
          </form>

          {/* Register Link */}
          <p className="text-gray-600 text-center text-sm font-normal leading-[21px] mt-6">
            Don’t have account?{" "}
            {/* <a href="#" >
              Register
            </a> */}
            <Link
              href="/sign-up"
              className="text-gray-900   text-sm font-medium leading-[21px] hover:underline"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
