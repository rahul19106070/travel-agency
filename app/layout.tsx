"use client";

import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { usePathname } from "next/navigation";

import LegalFooter from "@/components/shared/LegalFooter";
import PrimaryFooter from "@/components/shared/PrimaryFooter";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const hideFooter = pathname === "/aboutextra/how-it-all-works";

  return (
    <html lang="en" className={inter.variable}>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div id="smooth-wrapper">
          <div id="smooth-content">
            {children}

            {!hideFooter && <PrimaryFooter />}
            {!hideFooter && <LegalFooter />}
          </div>
        </div>
      </body>
    </html>
  );
}