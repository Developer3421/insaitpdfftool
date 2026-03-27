import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <div className="mb-16">
        <p
          className="font-black uppercase tracking-widest text-[var(--accent)] mb-4"
          style={{ fontSize: "0.75rem", letterSpacing: "0.18em" }}
        >
          Step Further
        </p>
        <h1
          className="font-black leading-none mb-6"
          style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", letterSpacing: "-0.03em" }}
        >
          PDF Merge
          <br />
          &amp; Split Tool
        </h1>
        <p className="text-[var(--muted)] text-lg max-w-md leading-relaxed">
          Combine multiple PDF files or extract individual pages — entirely in
          your browser. No uploads, no servers, no data leaves your device.
        </p>
      </div>

      {/* Two tool cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Merge card */}
        <Link href="/merge" className="group step-card block no-underline hover:border-[var(--accent)] transition-colors">
          <div className="flex items-start gap-4 mb-4">
            <span className="step-badge" style={{ fontSize: "1.25rem", fontWeight: 900 }}>M</span>
            <div>
              <h2
                className="font-black uppercase tracking-wide"
                style={{ fontSize: "1rem", letterSpacing: "0.06em" }}
              >
                Merge PDFs
              </h2>
              <p className="text-[var(--muted)] text-sm mt-1">
                Combine multiple PDF files into one document
              </p>
            </div>
          </div>

          <ol className="space-y-2 text-sm text-[var(--muted)] mb-6 pl-1">
            <li className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-[var(--step-bg)] text-white text-[10px] font-bold flex items-center justify-center flex-shrink-0">1</span>
              Select PDF files
            </li>
            <li className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-[var(--step-bg)] text-white text-[10px] font-bold flex items-center justify-center flex-shrink-0">2</span>
              Arrange the order
            </li>
            <li className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-[var(--step-bg)] text-white text-[10px] font-bold flex items-center justify-center flex-shrink-0">3</span>
              Download merged PDF
            </li>
          </ol>

          <span className="btn-accent text-xs">Start Merging →</span>
        </Link>

        {/* Split card */}
        <Link href="/split" className="group step-card block no-underline hover:border-[var(--accent)] transition-colors">
          <div className="flex items-start gap-4 mb-4">
            <span className="step-badge" style={{ fontSize: "1.25rem", fontWeight: 900 }}>S</span>
            <div>
              <h2
                className="font-black uppercase tracking-wide"
                style={{ fontSize: "1rem", letterSpacing: "0.06em" }}
              >
                Split PDF
              </h2>
              <p className="text-[var(--muted)] text-sm mt-1">
                Extract pages or ranges from a PDF file
              </p>
            </div>
          </div>

          <ol className="space-y-2 text-sm text-[var(--muted)] mb-6 pl-1">
            <li className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-[var(--step-bg)] text-white text-[10px] font-bold flex items-center justify-center flex-shrink-0">1</span>
              Select a PDF file
            </li>
            <li className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-[var(--step-bg)] text-white text-[10px] font-bold flex items-center justify-center flex-shrink-0">2</span>
              Choose pages or range
            </li>
            <li className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-[var(--step-bg)] text-white text-[10px] font-bold flex items-center justify-center flex-shrink-0">3</span>
              Download split PDFs
            </li>
          </ol>

          <span className="btn-accent text-xs">Start Splitting →</span>
        </Link>
      </div>

      {/* How it works */}
      <div className="mt-20 pt-12 border-t border-[var(--border)]">
        <p
          className="font-black uppercase tracking-widest text-[var(--muted)] mb-8 text-xs"
          style={{ letterSpacing: "0.18em" }}
        >
          How it works
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {[
            { n: "01", title: "Pick Files", desc: "Drag & drop or click to select PDFs from your device." },
            { n: "02", title: "Configure", desc: "Reorder files for merging or specify page ranges for splitting." },
            { n: "03", title: "Download", desc: "Your result is generated in-browser and downloaded instantly." },
          ].map(({ n, title, desc }) => (
            <div key={n}>
              <span
                className="block font-black text-[var(--accent)] mb-2"
                style={{ fontSize: "2.5rem", lineHeight: 1, letterSpacing: "-0.04em" }}
              >
                {n}
              </span>
              <h3 className="font-bold text-sm uppercase tracking-wide mb-1">{title}</h3>
              <p className="text-[var(--muted)] text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
