// src/app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import Header from "../components/Header"; // 👈 add your site header

export const metadata: Metadata = {
  metadataBase: new URL("https://rh-anand.vercel.app"),
  title: {
    default: "Rohan Anand — Data Scientist / ML Engineer / Data Engineer",
    template: "%s · Rohan Anand",
  },
  description:
    "Rohan Anand — data science, machine learning, and data engineering projects. Production ML, experimentation, and reliable data platforms.",
  alternates: { canonical: "/" },
  icons: { icon: "/favicon.ico" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rh-anand.vercel.app/",
    title: "Rohan Anand — Data Scientist / ML Engineer / Data Engineer",
    description:
      "Data science, ML, and data engineering projects. Production ML, A/B testing, and reliable data platforms.",
    siteName: "Rohan Anand",
    images: [
      {
        url: "/og.png", // optional; add /public/og.png (1200x630) when ready
        width: 1200,
        height: 630,
        alt: "Rohan Anand — Data Scientist / ML Engineer / Data Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rohan Anand — Data Scientist / ML Engineer / Data Engineer",
    description:
      "Data science, ML, and data engineering projects. Production ML, A/B testing, and reliable data platforms.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Keep this server-rendered. Your Header can be a client component; that's fine.
  return (
    <html lang="en">
      <body className="antialiased">
        <Header /> {/* 👈 put your navigation back */}
        {children}
        {/* Person JSON-LD for rich results */}
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Rohan Anand",
              jobTitle: [
                "Data Scientist",
                "Machine Learning Engineer",
                "Data Engineer",
              ],
              email: "mailto:anandro@bu.edu",
              url: "https://rh-anand.vercel.app/",
              sameAs: [
                "https://www.linkedin.com/in/rohan-h-anand",
                "https://github.com/rohan-anand21",
                "https://github.com/rohan-anand021",
              ],
              alumniOf: "Boston University",
            }),
          }}
        />
      </body>
    </html>
  );
}
