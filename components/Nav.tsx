"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="top-nav">
      {/* Logo / brand */}
      <Link
        href="/"
        aria-label="PDF-Werkzeug – Startseite"
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
        PDF-Werkzeug
      </Link>

      <div className="flex items-center gap-1 ml-auto">
        <Link
          href="/merge"
          className={`nav-link px-3${pathname === "/merge" ? " active" : ""}`}
        >
          Zusammenführen
        </Link>
        <Link
          href="/split"
          className={`nav-link px-3${pathname === "/split" ? " active" : ""}`}
        >
          Aufteilen
        </Link>
      </div>
    </nav>
  );
}
