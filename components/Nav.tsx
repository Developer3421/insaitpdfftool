"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { useLocale } from "@/contexts/LocaleContext";
import { LOCALES } from "@/lib/translations";

export default function Nav() {
  const pathname = usePathname();
  const { locale, setLocale, t } = useLocale();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const current = LOCALES.find((l) => l.code === locale)!;

  return (
    <nav className="top-nav">
      {/* Logo / brand */}
      <Link
        href="/"
        aria-label={t("nav_brand")}
        className="flex items-center gap-2 mr-4 no-underline"
        style={{
          background: "linear-gradient(90deg, var(--orange), var(--purple-light))",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          fontWeight: 900,
          fontSize: "0.9375rem",
          letterSpacing: "0.06em",
          textTransform: "uppercase" as const,
        }}
      >
        {t("nav_brand")}
      </Link>

      <div className="flex items-center gap-1 ml-auto">
        <Link
          href="/merge"
          className={`nav-link px-3${pathname === "/merge" ? " active" : ""}`}
        >
          {t("nav_merge")}
        </Link>
        <Link
          href="/split"
          className={`nav-link px-3${pathname === "/split" ? " active" : ""}`}
        >
          {t("nav_split")}
        </Link>

        {/* Language switcher */}
        <div ref={dropdownRef} className="relative ml-2">
          <button
            onClick={() => setOpen((v) => !v)}
            className="nav-link px-2 flex items-center gap-1.5 select-none"
            aria-label="Select language"
            aria-expanded={open}
            aria-haspopup="listbox"
          >
            <span>{current.flag}</span>
            <span className="text-[0.7rem] font-bold uppercase tracking-wider">
              {current.code.toUpperCase()}
            </span>
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              style={{ transform: open ? "rotate(180deg)" : "none", transition: "transform 0.15s" }}
            >
              <path d="M2 3.5 5 6.5 8 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {open && (
            <div
              role="listbox"
              aria-label="Language"
              className="absolute right-0 mt-1 py-1 rounded-lg border border-[var(--border)] bg-[var(--card)] shadow-lg z-50"
              style={{ minWidth: "9rem" }}
            >
              {LOCALES.map((loc) => (
                <button
                  key={loc.code}
                  role="option"
                  aria-selected={locale === loc.code}
                  onClick={() => { setLocale(loc.code); setOpen(false); }}
                  className="w-full flex items-center gap-2 px-3 py-1.5 text-sm hover:bg-[var(--border)] transition-colors text-left"
                  style={{
                    fontWeight: locale === loc.code ? 700 : 400,
                    color: locale === loc.code ? "var(--accent)" : "var(--foreground)",
                  }}
                >
                  <span>{loc.flag}</span>
                  <span>{loc.label}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

