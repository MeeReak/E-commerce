import { EyeIcon } from "lucide-react";
import React from "react";
import Link from "next/link";

export default function CreateAccountPage() {
  return (
    <>
    <div className="flex items-center justify-center min-h-[600px] bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center mb-6">Create Account</h2>
        <form>
          {/* Email Input */}
          <div className="mb-4">
            <input
              type="email"
              id="email"
              placeholder="Email"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
          </div>

          {/* Password Input */}
          <div className="mb-4">
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

          {/* Confirm Password Input */}
          <div className="mb-4">
          
            <div className="relative">
              <input
                type="password"
                id="confirm-password"
                placeholder="Confirm Password"
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

          {/* Terms & Conditions */}
          <div className="flex items-center mb-6">
            <input
              type="checkbox"
              id="terms"
              className="h-4 w-4 text-green-500 border-gray-300 rounded"
            />
            <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
              Accept all terms & Conditions
            </label>
          </div>

          {/* Create Account Button */}
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 px-4 rounded-full hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:outline-none"
          >
            Create Account
          </button>
        </form>

        {/* Login Link */}
        <p className="text-center text-sm text-gray-600 mt-4">
          Already have account?{" "}
          <Link href="/sign-in" className="text-black hover:underline font-bold">Login</Link>
        </p>
      </div>
    </div>
    </>
  );
}
