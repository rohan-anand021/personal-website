// src/components/CopyButton.tsx
"use client";

import { useState } from "react";

type Props = {
  text: string;
  className?: string;
  label?: string; // accessible name
  iconOnly?: boolean; // show only an icon (no text)
};

export default function CopyButton({
  text,
  className,
  label,
  iconOnly,
}: Props) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        const ta = document.createElement("textarea");
        ta.value = text;
        ta.style.position = "fixed";
        ta.style.opacity = "0";
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      const selection = window.getSelection();
      if (!selection) return;
      const temp = document.createElement("span");
      temp.textContent = text;
      temp.style.position = "fixed";
      temp.style.opacity = "0";
      document.body.appendChild(temp);
      const range = document.createRange();
      range.selectNodeContents(temp);
      selection.removeAllRanges();
      selection.addRange(range);
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={copy}
        aria-label={label ?? `Copy ${text}`}
        className={`inline-flex items-center justify-center rounded-lg border border-gray-300 hover:border-gray-400 active:scale-[0.98] transition
          ${iconOnly ? "p-2" : "px-3 py-2"} ${className ?? ""}`}
      >
        {iconOnly ? (
          copied ? (
            // ✓ checkmark (stroke only)
            <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M20 6 9 17l-5-5"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            // Clipboard with white fill + black outline
            <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
              {/* body */}
              <rect
                x="5"
                y="4"
                width="14"
                height="16"
                rx="2"
                fill="white"
                stroke="currentColor"
                strokeWidth="2"
              />
              {/* clip */}
              <rect
                x="8"
                y="2"
                width="8"
                height="4"
                rx="1"
                fill="white"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          )
        ) : (
          <span className="inline-flex items-center gap-1">
            {/* same white-fill, outlined clipboard when not iconOnly */}
            <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
              <rect
                x="5"
                y="4"
                width="14"
                height="16"
                rx="2"
                fill="white"
                stroke="currentColor"
                strokeWidth="2"
              />
              <rect
                x="8"
                y="2"
                width="8"
                height="4"
                rx="1"
                fill="white"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
            {copied ? "Copied!" : "Copy"}
          </span>
        )}
      </button>

      {/* Screen-reader announcement */}
      <span className="sr-only" aria-live="polite">
        {copied ? "Copied to clipboard" : ""}
      </span>
    </>
  );
}
