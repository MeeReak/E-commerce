import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import Sidebar from "@/components/Sidebar";

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

interface RootLayoutProps {
    children: React.ReactNode; // Ensure consistent type
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en">
            <body className={`${poppin.className} antialiased`}>
                <Sidebar>{children}</Sidebar>
            </body>
        </html>
    );
}
