"use client";

import { type ReactNode } from "react";
import Nav from "@/components/Nav";
import { useLocale } from "@/contexts/LocaleContext";

export default function AppShell({ children }: { children: ReactNode }) {
  const { t } = useLocale();

  return (
    <>
      <Nav />
      <main className="flex-1">{children}</main>
      <footer className="border-t border-[var(--border)] py-4 px-8 text-xs text-[var(--muted)] flex items-center justify-between">
        <span>{t("footer_text")}</span>
        <span className="font-bold tracking-widest uppercase text-[10px]">Step Further</span>
      </footer>
    </>
  );
}
