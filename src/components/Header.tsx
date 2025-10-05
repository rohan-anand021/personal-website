// src/components/Header.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
  { name: "Skills", href: "/skills" },
  { name: "Resume", href: "/resume" },
];

export default function Header() {
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(href + "/");

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <nav className="mx-auto max-w-5xl px-4 py-3 flex items-center gap-3">
        <Link href="/" className="font-semibold tracking-tight mr-4">
          Rohan Anand
        </Link>

        <ul className="flex items-center gap-2 text-sm">
          {nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={[
                  "px-3 py-1.5 rounded-md transition",
                  isActive(item.href)
                    ? "bg-gray-900 text-white"
                    : "hover:bg-gray-100",
                ].join(" ")}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="ml-auto">
          <a
            href="/resume/download" // uses your force-download route
            className="px-3 py-1.5 rounded-md border border-gray-300 hover:border-gray-400 text-sm transition"
          >
            Download Resume
          </a>
        </div>
      </nav>
    </header>
  );
}
