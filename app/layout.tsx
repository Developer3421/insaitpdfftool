import type { Metadata } from "next";
import "./globals.css";
import { LocaleProvider } from "@/contexts/LocaleContext";
import AppShell from "@/components/AppShell";

export const metadata: Metadata = {
  title: "PDF Tool — Merge & Split",
  description: "Client-side PDF merging and splitting powered by pdf-lib",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <LocaleProvider>
          <AppShell>{children}</AppShell>
        </LocaleProvider>
      </body>
    </html>
  );
}
