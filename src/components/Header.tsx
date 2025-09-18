import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-4xl mx-auto px-4 sm:px-8 py-4 flex justify-between items-center">
        <div>
          <Link
            href="/"
            className="text-xl font-bold text-gray-900 hover:text-gray-700"
          >
            Your Name
          </Link>
        </div>
        <div className="flex items-center gap-6">
          <Link href="/projects" className="text-gray-600 hover:text-gray-900">
            Projects
          </Link>
          <Link href="/resume" className="text-gray-600 hover:text-gray-900">
            Resume
          </Link>
        </div>
      </nav>
    </header>
  );
}
