// src/app/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="text-center my-16">
      <h1 className="text-5xl font-bold tracking-tight text-gray-900">404</h1>
      <p className="mt-4 text-xl text-gray-600">
        Oops! The page you&apos;re looking for could not be found.
      </p>
      <div className="mt-10">
        <Link
          href="/"
          className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
}
