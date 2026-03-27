import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: "PDF-Werkzeug — Zusammenführen & Aufteilen",
  description: "Client-seitiges PDF-Zusammenführen und -Aufteilen, unterstützt durch pdf-lib",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <footer className="border-t border-[var(--border)] py-4 px-8 text-xs text-[var(--muted)] flex items-center justify-between">
          <span>PDF-Werkzeug — Die gesamte Verarbeitung erfolgt in Ihrem Browser. Es werden keine Dateien hochgeladen.</span>
          <span className="font-bold tracking-widest uppercase text-[10px]">Step Further</span>
        </footer>
      </body>
    </html>
  );
}
