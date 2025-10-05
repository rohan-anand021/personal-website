// src/app/page.tsx
import Image from "next/image";
import Link from "next/link";
import CopyButton from "../components/CopyButton";

const EMAIL = "anandro@bu.edu";

// Shared card classes so Contact items look consistent
const contactCard =
  "group relative flex flex-col rounded-xl border bg-white/50 p-6 shadow-sm transition transform hover:shadow-xl hover:-translate-y-0.5 backdrop-blur-sm h-full";

export default function HomePage() {
  return (
    // Page container for consistent centering on Safari/others
    <div className="max-w-5xl mx-auto px-4">
      {/* ---------- Hero ---------- */}
      <header className="text-center my-16">
        <h1 className="text-5xl font-bold tracking-tight">Rohan Anand</h1>

        {/* Role targeting */}
        <p className="mt-4 text-xl text-gray-700">
          Data Scientist / ML Engineer / Data Engineer
        </p>

        {/* Company with hover tooltip */}
        <div className="mt-2 text-gray-600">
          Building data & ML systems @{" "}
          <span className="relative group">
            <a
              href="http://dataeconomy.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-blue-600 hover:underline"
            >
              Dataeconomy
            </a>
            <span className="absolute -top-2 left-1/2 -translate-x-1/2 -translate-y-full w-64 max-w-xs p-3 bg-white border rounded-lg shadow-lg invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <span className="font-bold text-gray-900">Dataeconomy Inc.</span>
              <div className="text-sm text-gray-600 mt-1">
                A provider of enterprise data management & cloud solutions.
              </div>
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-x-8 border-x-transparent border-t-8 border-t-white" />
            </span>
          </span>
        </div>

        {/* ---------- Primary CTAs (equal-size cards) ---------- */}
        <div className="mt-8">
          <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-3">
            <a
              href="/resume/download"
              className="group flex h-12 items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white/60 px-5 py-3 shadow-sm transition transform hover:shadow-xl hover:-translate-y-0.5"
            >
              Download Resume
            </a>

            <Link
              href="/projects"
              className="group flex h-12 items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white/60 px-5 py-3 shadow-sm transition transform hover:shadow-xl hover:-translate-y-0.5"
            >
              View Projects
            </Link>

            <div className="group flex h-12 items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white/60 px-5 py-3 shadow-sm transition transform hover:shadow-xl hover:-translate-y-0.5">
              <span className="select-all">{EMAIL}</span>
              <CopyButton
                text={EMAIL}
                iconOnly
                label="Copy email address"
                className="border-0 p-1.5"
              />
            </div>
          </div>
        </div>
      </header>

      {/* ---------- Highlights (quick recruiter scan) ---------- */}
      <section aria-labelledby="highlights" className="my-10">
        <h2 id="highlights" className="sr-only">
          Highlights
        </h2>
        <ul className="mx-auto grid max-w-4xl grid-cols-1 gap-3 sm:grid-cols-3">
          <li className="rounded-xl border bg-white/60 p-4 text-sm leading-6">
            <span className="block font-semibold">Production ML</span>
            <span className="text-gray-600">
              Deployed models & data pipelines end-to-end.
            </span>
          </li>
          <li className="rounded-xl border bg-white/60 p-4 text-sm leading-6">
            <span className="block font-semibold">Data Analysis</span>
            <span className="text-gray-600">
              Hypothesis exploration, metrics, and explainable reporting.
            </span>
          </li>
          <li className="rounded-xl border bg-white/60 p-4 text-sm leading-6">
            <span className="block font-semibold">Cloud & Data</span>
            <span className="text-gray-600">
              Kafka • Snowflake • Python • PySpark • SQL.
            </span>
          </li>
        </ul>
      </section>

      {/* ---------- About (centered, proportional) ---------- */}
      <section id="about" className="my-16">
        <h2 className="text-3xl font-bold tracking-tight text-center">
          About Me
        </h2>
        <div className="mt-6 max-w-3xl mx-auto">
          <div className="text-gray-700 leading-relaxed text-center space-y-4">
            <p>
              I&apos;m a data engineer with a passion for analyzing data and
              building the systems that make high-quality analysis possible.
            </p>
            <p>
              I focus on the intersection of ML, analytics, and data platforms:
              reliable ingestion, feature pipelines, model training/serving, and
              clear product metrics.
            </p>
            <p className="font-semibold pt-2">
              I&apos;m actively exploring roles in data science, ML, and data
              engineering—feel free to reach out or browse my projects.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- Contact (proportional bento; equal height cards) ---------- */}
      <section id="contact" className="mt-24 mb-16">
        <h2 className="text-3xl font-bold tracking-tight text-center">
          Contact Me
        </h2>

        {/* 1 col → 2 cols (md) → 4 cols (lg) for proportional feel */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/rohan-h-anand"
            target="_blank"
            rel="noopener noreferrer"
            className={contactCard}
            aria-label="LinkedIn Profile"
          >
            <div className="flex items-center gap-4">
              <Image
                src="/icons/linkedin.svg"
                alt="LinkedIn icon"
                width={48}
                height={48}
                aria-hidden
              />
              <div>
                <h3 className="font-semibold text-lg">LinkedIn</h3>
                <p className="text-gray-600 text-sm">Connect & message</p>
              </div>
            </div>
            <span className="absolute top-4 right-4 text-gray-300 group-hover:text-gray-700 transition-colors">
              &rarr;
            </span>
          </a>

          {/* Email (clickable + copy) */}
          {/* Email (clickable left area + safe CopyButton) */}
          <div
            className="group relative grid grid-cols-[1fr_auto] items-center gap-4 rounded-xl border bg-white/50 p-6 shadow-sm transition transform hover:shadow-xl hover:-translate-y-0.5 backdrop-blur-sm h-full overflow-hidden"
            aria-label="Email"
          >
            {/* Left side is the link (no nested interactive in it) */}
            <a
              href={`mailto:${EMAIL}`}
              className="flex items-center gap-4 min-w-0" // min-w-0 prevents text overflow weirdness
              aria-label="Compose email"
            >
              <Image
                src="/icons/gmail.svg"
                alt="Email icon"
                width={48}
                height={48}
                aria-hidden
              />
              <div className="truncate">
                <h3 className="font-semibold text-lg">Email</h3>
                <p className="text-gray-600 text-sm truncate">{EMAIL}</p>
              </div>
            </a>

            {/* Right side: real button, isolated from link flow */}
            <div className="shrink-0">
              <CopyButton
                text={EMAIL}
                iconOnly
                label="Copy email address"
                className="p-2"
              />
            </div>

            <span className="absolute top-4 right-4 text-gray-300 group-hover:text-gray-700 transition-colors pointer-events-none">
              &rarr;
            </span>
          </div>

          {/* GitHub - Professional */}
          <a
            href="https://github.com/rohan-anand21?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className={contactCard}
            aria-label="Professional GitHub Profile"
          >
            <div className="flex items-center gap-4">
              <Image
                src="/icons/github-professional.svg"
                alt="GitHub icon (professional)"
                width={48}
                height={48}
                aria-hidden
              />
              <div>
                <h3 className="font-semibold text-lg">GitHub — Professional</h3>
                <p className="text-gray-600 text-sm">Work-style projects</p>
              </div>
            </div>
            <span className="absolute top-4 right-4 text-gray-300 group-hover:text-gray-700 transition-colors">
              &rarr;
            </span>
          </a>

          {/* GitHub - Personal */}
          <a
            href="https://github.com/rohan-anand021?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className={contactCard}
            aria-label="Personal GitHub Profile"
          >
            <div className="flex items-center gap-4">
              <Image
                src="/icons/github-personal.svg"
                alt="GitHub icon (personal)"
                width={48}
                height={48}
                aria-hidden
              />
              <div>
                <h3 className="font-semibold text-lg">GitHub — Personal</h3>
                <p className="text-gray-600 text-sm">Side projects</p>
              </div>
            </div>
            <span className="absolute top-4 right-4 text-gray-300 group-hover:text-gray-700 transition-colors">
              &rarr;
            </span>
          </a>
        </div>
      </section>
    </div>
  );
}
