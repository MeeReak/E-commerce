import { cookies } from "next/headers";
import React, { Suspense } from "react";
import "./globals.css";
import { Metadata } from "next";
import { Poppins } from "next/font/google";
import Sidebar from "@/components/Sidebar";
import Loading from "./loading";

const poppin = Poppins({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    display: "swap",
    subsets: ["latin-ext"]
});

export const metadata: Metadata = {
    title: "EcoBoard",
    description:
        "EcoBoard is a dashboard for managing your eco-friendly projects.",
    icons: "/svg/logo.svg"
};

export default async function RootLayout({
    children
}: {
    children: React.ReactNode;
}) {
    const token = (await cookies()).get("auth_token")?.value;
    const isAuthenticated = Boolean(token);

    return (
        <html lang="en">
            <body className={`${poppin.className} antialiased bg-white`}>
                {isAuthenticated ? (
                    <Suspense fallback={<Loading />}>
                        <Sidebar>{children}</Sidebar>
                    </Suspense>
                ) : (
                    children
                )}
            </body>
        </html>
    );
}
