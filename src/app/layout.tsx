// src/app/layout.tsx
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rohan Anand | Personal Website",
  description: "My personal portfolio and blog.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 text-gray-800`}>
        <Header />
        {/* Added the animation class here */}
        <main className="max-w-4xl mx-auto p-4 sm:p-8 animate-fadeIn">
          {children}
        </main>
      </body>
    </html>
  );
}
