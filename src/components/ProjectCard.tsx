// src/components/ProjectCard.tsx
import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  blurb: string;
  impact?: string; // e.g., "+50% top-K precision"
  tech: string[];
  live?: string;
  code?: string;
  image?: string; // e.g., "/window.svg"
};

export default function ProjectCard({
  title,
  blurb,
  impact,
  tech,
  live,
  code,
  image = "/window.svg",
}: Props) {
  return (
    <article className="group rounded-2xl border bg-white/60 p-4 shadow-sm transition transform hover:shadow-xl hover:-translate-y-0.5">
      <div className="flex items-center gap-3">
        <Image src={image} alt="" width={40} height={40} className="shrink-0" />
        <h3 className="font-semibold text-lg">{title}</h3>
      </div>

      <p className="mt-3 text-gray-700 text-sm leading-6">{blurb}</p>

      {impact && (
        <p className="mt-2 text-xs font-medium text-emerald-700 bg-emerald-50 inline-block px-2 py-1 rounded">
          {impact}
        </p>
      )}

      <div className="mt-3 flex flex-wrap gap-2">
        {tech.map((t) => (
          <span
            key={t}
            className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-4 flex gap-3">
        {live && (
          <Link
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-blue-700 hover:underline"
          >
            Live
          </Link>
        )}
        {code && (
          <Link
            href={code}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-blue-700 hover:underline"
          >
            Code
          </Link>
        )}
      </div>
    </article>
  );
}
