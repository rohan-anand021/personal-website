import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// Updated metadata object
export const metadata: Metadata = {
  title: "Rohan Anand | Personal Website",
  description: "My personal portfolio and blog.",
  icons: {
    icon: "/favicon.svg", // This points to your new SVG favicon in the public folder
  },
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
        <main className="max-w-4xl mx-auto p-4 sm:p-8">{children}</main>
      </body>
    </html>
  );
}
