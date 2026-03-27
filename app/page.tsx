"use client";

import Link from "next/link";
import { useLocale } from "@/contexts/LocaleContext";

export default function Home() {
  const { t } = useLocale();

  const titleLines = t("home_title").split("\n");

  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <div className="mb-16">
        <p
          className="font-black uppercase tracking-widest text-[var(--accent)] mb-4"
          style={{ fontSize: "0.75rem", letterSpacing: "0.18em" }}
        >
          {t("home_hero_badge")}
        </p>
        <h1
          className="font-black leading-none mb-6"
          style={{
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            letterSpacing: "-0.03em",
            background: "linear-gradient(90deg, #fff 30%, var(--orange-light) 70%, var(--purple-light) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            hyphens: "auto",
          }}
        >
          {titleLines[0]}
          {titleLines[1] && <><br />{titleLines[1]}</>}
        </h1>
        <p className="text-[var(--muted)] text-lg max-w-md leading-relaxed">
          {t("home_subtitle")}
        </p>
      </div>

      {/* Two tool cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Merge card */}
        <Link href="/merge" className="group step-card block no-underline hover:border-[var(--accent)] transition-colors">
          <div className="flex items-start gap-4 mb-4">
            <span className="step-badge active" style={{ fontSize: "1.25rem", fontWeight: 900 }}>M</span>
            <div>
              <h2
                className="font-black uppercase tracking-wide"
                style={{ fontSize: "1rem", letterSpacing: "0.06em" }}
              >
                {t("home_merge_title")}
              </h2>
              <p className="text-[var(--muted)] text-sm mt-1">
                {t("home_merge_desc")}
              </p>
            </div>
          </div>

          <ol className="space-y-2 text-sm text-[var(--muted)] mb-6 pl-1">
            {[t("home_merge_step1"), t("home_merge_step2"), t("home_merge_step3")].map((step, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[var(--step-bg)] text-white text-[10px] font-bold flex items-center justify-center flex-shrink-0">
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>

          <span className="btn-accent text-xs">{t("home_merge_cta")}</span>
        </Link>

        {/* Split card */}
        <Link href="/split" className="group step-card block no-underline hover:border-[var(--accent)] transition-colors">
          <div className="flex items-start gap-4 mb-4">
            <span className="step-badge active" style={{ fontSize: "1.25rem", fontWeight: 900 }}>A</span>
            <div>
              <h2
                className="font-black uppercase tracking-wide"
                style={{ fontSize: "1rem", letterSpacing: "0.06em" }}
              >
                {t("home_split_title")}
              </h2>
              <p className="text-[var(--muted)] text-sm mt-1">
                {t("home_split_desc")}
              </p>
            </div>
          </div>

          <ol className="space-y-2 text-sm text-[var(--muted)] mb-6 pl-1">
            {[t("home_split_step1"), t("home_split_step2"), t("home_split_step3")].map((step, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[var(--step-bg)] text-white text-[10px] font-bold flex items-center justify-center flex-shrink-0">
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>

          <span className="btn-accent text-xs">{t("home_split_cta")}</span>
        </Link>
      </div>

      {/* How it works */}
      <div className="mt-20 pt-12 border-t border-[var(--border)]">
        <p
          className="font-black uppercase tracking-widest text-[var(--muted)] mb-8 text-xs"
          style={{ letterSpacing: "0.18em" }}
        >
          {t("home_how_title")}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {([
            { n: "01", titleKey: "home_step01_title", descKey: "home_step01_desc" },
            { n: "02", titleKey: "home_step02_title", descKey: "home_step02_desc" },
            { n: "03", titleKey: "home_step03_title", descKey: "home_step03_desc" },
          ] as const).map(({ n, titleKey, descKey }) => (
            <div key={n}>
              <span
                className="block font-black mb-2"
                style={{
                  fontSize: "2.5rem",
                  lineHeight: 1,
                  letterSpacing: "-0.04em",
                  background: "linear-gradient(90deg, var(--orange), var(--orange-light))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {n}
              </span>
              <h3 className="font-bold text-sm uppercase tracking-wide mb-1">{t(titleKey)}</h3>
              <p className="text-[var(--muted)] text-sm leading-relaxed">{t(descKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

