import type { Metadata } from "next";
import "./globals.css";
import React, { ReactNode } from "react";
import { Poppins } from "next/font/google";
import { Layout } from "lucide-react";

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
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
