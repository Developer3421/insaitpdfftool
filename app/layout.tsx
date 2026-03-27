import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: "PDF Tool — Merge & Split",
  description: "Client-side PDF merger and splitter powered by pdf-lib",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <footer className="border-t border-[var(--border)] py-4 px-8 text-xs text-[var(--muted)] flex items-center justify-between">
          <span>PDF Tool — All processing happens in your browser. No files are uploaded.</span>
          <span className="font-bold tracking-widest uppercase text-[10px]">Step Further</span>
        </footer>
      </body>
    </html>
  );
}
