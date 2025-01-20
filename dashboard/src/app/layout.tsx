import React, { ReactNode } from "react";
import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "../components/Layout";
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
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppin.className} antialiased`}>
        <Sidebar>{children}</Sidebar>
      </body>
    </html>
  );
}
