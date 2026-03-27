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
        className="flex items-center gap-2 mr-4 text-white no-underline"
      >
        <span className="step-badge active text-sm">P</span>
        <span
          style={{
            fontWeight: 900,
            fontSize: "0.9375rem",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
          }}
        >
          PDF Tool
        </span>
      </Link>

      <div className="flex items-center gap-1 ml-auto">
        <Link
          href="/merge"
          className={`nav-link px-3${pathname === "/merge" ? " active" : ""}`}
        >
          Merge
        </Link>
        <Link
          href="/split"
          className={`nav-link px-3${pathname === "/split" ? " active" : ""}`}
        >
          Split
        </Link>
      </div>
    </nav>
  );
}
