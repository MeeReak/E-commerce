import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import Footer from "./_components/templates/Footer";
import React from "react";
import { Poppins } from "next/font/google";

const poppin = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  subsets: ["latin-ext"],
});

export const metadata: Metadata = {
  title: "EcoFresh",
  description: "EcoFresh is a marketplace for sustainable products.",
  icons: "/svg/logo.svg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppin.className} antialiased`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
