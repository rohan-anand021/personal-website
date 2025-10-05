// src/app/projects/page.tsx
import Link from "next/link";
import SideMenu from "./SideMenu";

/** ---------- Helpers ---------- */
type LinkBtn = {
  label: string;
  href?: string;
  variant?: "primary" | "dark" | "danger";
  newTab?: boolean;
};
type Project = {
  key: string;
  title: string;
  blurb: string;
  impact?: string;
  tech?: string[];
  iframeSrc?: string; // for live embeds
  pdfSrc?: string; // for posters/reports
  links?: LinkBtn[]; // buttons row
  video?: string; // optional YouTube URL
};

const slug = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");

/** ---------- Data ---------- */
/** Professional projects FIRST (no recommender) */
const professional: Project[] = [
  {
    key: "faircase",
    title: "FairCase AI — LLM Assessment for Police Misconduct",
    blurb:
      "LLM workflow (LangChain + ChromaDB) to evaluate police misconduct allegations against departmental rules; explainable outputs and visuals for stakeholders.",
    impact: "Cut investigation time by ~80% in prototype demos",
    tech: ["OpenAI", "LangChain", "ChromaDB", "FastAPI", "Pandas"],
    pdfSrc: "/faircase-poster.pdf",
    links: [
      {
        label: "Source Code",
        href: "https://github.com/rohan-anand21/faircase-ai/tree/main/fa24/LLM_Assesment_Model",
        variant: "dark",
        newTab: true,
      },
    ],
  },
  {
    key: "maternal-health",
    title: "Maternal Health & Infant Outcomes Analysis",
    blurb:
      "R/Quarto site analyzing how maternal lifestyle (esp. smoking) correlates with infant outcomes (birth weight, APGAR), with additional factors like BMI.",
    tech: ["R", "Quarto"],
    iframeSrc:
      "https://ma-415-53lsxj6bk-rohan-anands-projects.vercel.app/big_picture.html",
    links: [
      {
        label: "View Live Site",
        href: "https://ma-415-n8hl1cp2x-rohan-anands-projects.vercel.app",
        variant: "primary",
        newTab: true,
      },
      {
        label: "Source Code",
        href: "https://github.com/rohan-anand21/ma415-maternal-health-analysis/tree/main",
        variant: "dark",
        newTab: true,
      },
      {
        label: "Project Video",
        href: "https://youtu.be/idH7NyRJwKc",
        variant: "danger",
        newTab: true,
      },
    ],
  },
  {
    key: "election-unemployment",
    title: "Unemployment & Voting Patterns Analysis",
    blurb:
      "Regression analysis of county-level unemployment, age demographics, and Democratic vote share across seven swing states (2020 election).",
    tech: ["R", "Quarto"],
    pdfSrc: "/399poster.pdf",
    links: [
      {
        label: "Source Code",
        href: "https://github.com/rohan-anand021/politics",
        variant: "dark",
        newTab: true,
      },
    ],
  },
  {
    key: "boston-311",
    title: "Boston 311 Service Tracker",
    blurb:
      "Longitudinal analysis of 2.7M+ 311 requests (2011–2023) to surface disparities and service bottlenecks across neighborhoods.",
    tech: ["Pandas", "PowerBI"],
    pdfSrc: "/311-poster.pdf",
    links: [
      {
        label: "Source Code",
        href: "https://github.com/rohan-anand21/311-service-tracker/tree/main/fa23-team-d",
        variant: "dark",
        newTab: true,
      },
    ],
  },
  {
    key: "rust-graph",
    title: "Graphing & Analyzing a Dataset in Rust",
    blurb:
      "Built a graph with petgraph to explore degrees of separation and the friendship paradox on a Twitter-friends dataset.",
    tech: ["Rust", "petgraph"],
    pdfSrc: "/report.pdf",
    links: [
      {
        label: "Source Code",
        href: "https://github.com/rohan-anand021/Analyzing-a-Graph-using-Rust",
        variant: "dark",
        newTab: true,
      },
    ],
  },
  {
    key: "covid-svd",
    title: "COVID-19 Mortality Prediction",
    blurb:
      "Supervised learning (Decision Trees, k-NN) with SVD for dimensionality reduction on a Kaggle dataset to predict mortality.",
    tech: ["scikit-learn"],
    pdfSrc: "/covid.pdf",
  },
];

/** Personal projects AFTER (only Voronoi) */
const personal: Project[] = [
  {
    key: "nfl-voronoi",
    title: "NFL Voronoi Map",
    blurb:
      "Interactive Voronoi map that recommends an NFL team based on distance to the nearest stadium.",
    tech: ["Next.js", "D3", "TopoJSON"],
    iframeSrc: "https://nfl-voronoi-map.vercel.app",
    links: [
      {
        label: "View Live Site",
        href: "https://nfl-voronoi-map.vercel.app",
        variant: "primary",
        newTab: true,
      },
      {
        label: "Source Code",
        href: "https://github.com/rohan-anand021/nfl-map",
        variant: "dark",
        newTab: true,
      },
    ],
  },
];

/** ---------- UI bits ---------- */
function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700">
      {children}
    </span>
  );
}

function Buttons({ items }: { items?: LinkBtn[] }) {
  if (!items?.length) return null;
  const cls = (v?: LinkBtn["variant"]) =>
    v === "primary"
      ? "bg-blue-600 hover:bg-blue-700 text-white"
      : v === "danger"
        ? "bg-red-600 hover:bg-red-700 text-white"
        : "bg-gray-800 hover:bg-gray-700 text-white";
  return (
    <div className="mt-5 flex flex-wrap items-center gap-3">
      {items.map(({ label, href, variant, newTab }) =>
        href ? (
          <Link
            key={label}
            href={href}
            target={newTab ? "_blank" : undefined}
            rel={newTab ? "noopener noreferrer" : undefined}
            className={`inline-block font-semibold px-4 py-2 rounded-lg transition-colors ${cls(
              variant,
            )}`}
          >
            {label}
          </Link>
        ) : null,
      )}
    </div>
  );
}

// In ProjectCard (replace the classNames & a couple sizes)
function ProjectCard({ p }: { p: Project }) {
  const id = slug(p.title);
  return (
    <div
      id={id}
      className="scroll-mt-28 bg-white border border-gray-200 rounded-lg p-5 shadow-sm"
    >
      {/* 2xl -> xl */}
      <h3 className="text-xl font-semibold">{p.title}</h3>

      {/* mt-3 -> mt-2; slightly smaller text */}
      <p className="mt-2 text-gray-700 leading-relaxed text-[0.95rem]">
        {p.blurb}
      </p>

      {p.impact && (
        <p className="mt-2 text-xs font-medium text-emerald-700 bg-emerald-50 inline-block px-2 py-1 rounded">
          {p.impact}
        </p>
      )}

      {p.tech?.length ? (
        <div className="mt-3 flex flex-wrap gap-2">
          {p.tech.map((t) => (
            <Badge key={t}>{t}</Badge>
          ))}
        </div>
      ) : null}

      {/* Embed (live or PDF) — slightly shorter */}
      {p.iframeSrc ? (
        <>
          {/* 96/500px -> 80/420px */}
          <div className="mt-5 border rounded-lg overflow-hidden shadow bg-gray-50">
            <iframe
              src={p.iframeSrc}
              className="w-full h-80 sm:h-[420px]"
              title={`${p.title} — live embed`}
              loading="lazy"
            />
          </div>
        </>
      ) : p.pdfSrc ? (
        <>
          {/* 500/650px -> 440/560px */}
          <div className="mt-5 border rounded-lg overflow-hidden shadow">
            <iframe
              src={p.pdfSrc}
              className="w-full h-[440px] sm:h-[560px]"
              title={`${p.title} — PDF`}
              loading="lazy"
            />
          </div>
        </>
      ) : null}

      <Buttons items={p.links} />
    </div>
  );
}

/** ---------- Page ---------- */
export default function ProjectsPage() {
  // Build grouped TOC (indented under each section)
  const tocGroups = [
    {
      heading: "Professional Projects",
      id: "professional",
      items: professional.map((p) => ({
        label: p.title,
        href: `#${slug(p.title)}`,
      })),
    },
    {
      heading: "Personal Projects",
      id: "personal",
      items: personal.map((p) => ({
        label: p.title,
        href: `#${slug(p.title)}`,
      })),
    },
  ];

  return (
    <section id="projects" className="my-12">
      {/* NEW container adds generous side margins */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-8">
          {/* Sticky side menu (desktop) */}
          <aside className="hidden lg:block">
            <SideMenu groups={tocGroups} />
          </aside>

          {/* Main content */}
          <div className="space-y-12">
            {/* Professional */}
            <div id="professional" className="scroll-mt-28">
              <h2 className="text-3xl font-bold border-b pb-2 mb-6">
                Professional Projects
              </h2>
              <div className="grid gap-6">
                {professional.map((p) => (
                  <ProjectCard key={p.key} p={p} />
                ))}
              </div>
            </div>

            {/* Personal */}
            <div id="personal" className="scroll-mt-28">
              <h2 className="text-3xl font-bold border-b pb-2 mb-6">
                Personal Projects
              </h2>
              <div className="grid gap-6">
                {personal.map((p) => (
                  <ProjectCard key={p.key} p={p} />
                ))}
              </div>
            </div>

            {/* Back to top */}
            <div>
              <a
                href="#projects"
                className="text-sm text-blue-700 hover:underline"
              >
                Back to top ↑
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
