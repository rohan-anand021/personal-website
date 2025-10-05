// src/app/projects/SideMenu.tsx
"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type TocGroup = {
  heading: string; // "Professional Projects" / "Personal Projects"
  id: string; // "professional" / "personal"
  items: { label: string; href: string }[];
};

export default function SideMenu({ groups }: { groups: TocGroup[] }) {
  // Build the ordered list of in-page IDs
  const orderedIds = useMemo(
    () =>
      groups.flatMap((g) => [
        g.id,
        ...g.items.map((i) => i.href.replace(/^#/, "")),
      ]),
    [groups],
  );

  // --- Hydration-safe mount flag ---
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // Active id (don’t derive from window during SSR)
  const [activeId, setActiveId] = useState<string>("");

  const getHashId = () =>
    typeof window !== "undefined" && window.location.hash
      ? window.location.hash.slice(1)
      : "";

  // Lock to prevent observer from overriding immediately after a click
  const clickLockUntil = useRef<number>(0);

  // Initialize from hash & keep in sync after mount
  useEffect(() => {
    if (!mounted) return;
    const apply = () => {
      const id = getHashId();
      if (id) setActiveId(id);
    };
    window.addEventListener("hashchange", apply);
    apply();
    return () => window.removeEventListener("hashchange", apply);
  }, [mounted]);

  // Bottom-of-page safeguard
  useEffect(() => {
    if (!mounted) return;
    const onScroll = () => {
      const nearBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;
      if (nearBottom) {
        for (let i = orderedIds.length - 1; i >= 0; i--) {
          const el = document.getElementById(orderedIds[i]);
          if (el) {
            setActiveId(orderedIds[i]);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [mounted, orderedIds]);

  // IntersectionObserver scroll-spy
  useEffect(() => {
    if (!mounted) return;

    const els = orderedIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);
    if (!els.length) return;

    const onObserve: IntersectionObserverCallback = (entries) => {
      if (Date.now() < clickLockUntil.current) return;

      const visible = entries.filter((e) => e.isIntersecting);
      if (!visible.length) return;

      const scored = visible.map((e) => {
        const rect = (e.target as HTMLElement).getBoundingClientRect();
        return {
          id: (e.target as HTMLElement).id,
          ratio: e.intersectionRatio,
          absTop: Math.abs(rect.top),
          top: rect.top,
        };
      });

      scored.sort((a, b) => {
        if (b.ratio !== a.ratio) return b.ratio - a.ratio; // more coverage wins
        if (a.top >= 0 !== b.top >= 0) return a.top >= 0 ? -1 : 1; // prefer at/after top
        return a.absTop - b.absTop; // closest to top
      });

      const best = scored[0];
      if (best && best.id !== activeId) setActiveId(best.id);
    };

    const observer = new IntersectionObserver(onObserve, {
      rootMargin: "-35% 0px -45% 0px",
      threshold: [0, 0.1, 0.25, 0.5, 0.75, 0.95, 1],
    });

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [mounted, orderedIds, activeId]);

  // Helpers (only apply "active" when mounted to avoid SSR/CSR mismatch)
  const isActive = (id: string) => mounted && activeId === id;
  const groupIsActive = (group: TocGroup) =>
    isActive(group.id) ||
    group.items.some((i) => isActive(i.href.replace(/^#/, "")));

  // Smooth scroll + immediate highlight + short lock
  const goTo = (id: string) => {
    setActiveId(id); // instant feedback
    clickLockUntil.current = Date.now() + 450;
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    if (history?.replaceState) history.replaceState(null, "", `#${id}`);
    setTimeout(() => {
      clickLockUntil.current = 0;
    }, 475);
  };

  return (
    <nav className="sticky top-24">
      <h2 className="text-sm font-semibold text-gray-600 mb-3">On this page</h2>
      <ul className="space-y-2 text-sm">
        {groups.map((group) => (
          <li key={group.id}>
            <button
              type="button"
              onClick={() => goTo(group.id)}
              className={[
                "w-full text-left block rounded px-2 py-1",
                groupIsActive(group)
                  ? "bg-blue-50 text-blue-700 font-semibold"
                  : "hover:bg-gray-100 text-gray-800",
              ].join(" ")}
              aria-current={groupIsActive(group) ? "true" : undefined}
            >
              {group.heading}
            </button>

            {group.items.length > 0 && (
              <ul className="mt-1 ml-2 pl-3 border-l border-gray-200 space-y-1">
                {group.items.map((it) => {
                  const id = it.href.replace(/^#/, "");
                  const active = isActive(id);
                  return (
                    <li key={it.href}>
                      <button
                        type="button"
                        onClick={() => goTo(id)}
                        className={[
                          "w-full text-left block rounded px-2 py-1",
                          active
                            ? "bg-blue-50 text-blue-700 font-semibold"
                            : "hover:bg-gray-100 text-gray-800",
                        ].join(" ")}
                        aria-current={active ? "true" : undefined}
                        title={it.label}
                      >
                        {it.label}
                      </button>
                    </li>
                  );
                })}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
