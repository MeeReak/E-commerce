import { EyeIcon } from "lucide-react";
import React from "react";
import Link from "next/link";
// import Footer_Section from "../footer";

export default function SignInPage() {
  return (
    <div className="flex flex-col min-h-[600px]">
      {/* Sign-In Section */}
      <div className="flex items-center justify-center flex-grow bg-gray-100">
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center mb-6">Sign In</h2>
          <form>
            {/* Email Input */}
            <div className="mb-8">
              {/* <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label> */}
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
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
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
                />
                <button
                  type="button"
                  className="absolute right-3 top-2 text-gray-500"
                >
                  <EyeIcon className="relative top-[5px]" />
                </button>
              </div>
            </div>

            {/* Remember Me and Forgot Password */}
            <div className="flex items-center justify-between mb-6">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-green-500 border-gray-300 rounded"
                />
                <span className="ml-2 text-sm text-gray-600">Remember me</span>
              </label>
              <a href="#" className="text-sm text-green-500 hover:underline">
                Forgot Password
              </a>
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
          <p className="text-center text-sm text-gray-600 mt-4">
            Don’t have account?{" "}
            {/* <a href="#" >
              Register
            </a> */}
            <Link href="/sign-up" className="text-black hover:underline font-bold">Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
