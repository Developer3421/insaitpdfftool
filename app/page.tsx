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
          PDF zusammenführen
          <br />
          &amp; aufteilen
        </h1>
        <p className="text-[var(--muted)] text-lg max-w-md leading-relaxed">
          Mehrere PDF-Dateien zusammenführen oder einzelne Seiten extrahieren — vollständig im
          Browser. Keine Uploads, keine Server, Ihre Daten verlassen Ihr Gerät nicht.
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
                PDFs zusammenführen
              </h2>
              <p className="text-[var(--muted)] text-sm mt-1">
                Mehrere PDF-Dateien zu einem Dokument zusammenführen
              </p>
            </div>
          </div>

          <ol className="space-y-2 text-sm text-[var(--muted)] mb-6 pl-1">
            <li className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-[var(--step-bg)] text-white text-[10px] font-bold flex items-center justify-center flex-shrink-0">1</span>
              PDF-Dateien auswählen
            </li>
            <li className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-[var(--step-bg)] text-white text-[10px] font-bold flex items-center justify-center flex-shrink-0">2</span>
              Reihenfolge festlegen
            </li>
            <li className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-[var(--step-bg)] text-white text-[10px] font-bold flex items-center justify-center flex-shrink-0">3</span>
              Zusammengeführtes PDF herunterladen
            </li>
          </ol>

          <span className="btn-accent text-xs">Jetzt zusammenführen →</span>
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
                PDF aufteilen
              </h2>
              <p className="text-[var(--muted)] text-sm mt-1">
                Seiten oder Seitenbereiche aus einer PDF-Datei extrahieren
              </p>
            </div>
          </div>

          <ol className="space-y-2 text-sm text-[var(--muted)] mb-6 pl-1">
            <li className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-[var(--step-bg)] text-white text-[10px] font-bold flex items-center justify-center flex-shrink-0">1</span>
              PDF-Datei auswählen
            </li>
            <li className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-[var(--step-bg)] text-white text-[10px] font-bold flex items-center justify-center flex-shrink-0">2</span>
              Seiten oder Bereich wählen
            </li>
            <li className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-[var(--step-bg)] text-white text-[10px] font-bold flex items-center justify-center flex-shrink-0">3</span>
              Aufgeteilte PDFs herunterladen
            </li>
          </ol>

          <span className="btn-accent text-xs">Jetzt aufteilen →</span>
        </Link>
      </div>

      {/* How it works */}
      <div className="mt-20 pt-12 border-t border-[var(--border)]">
        <p
          className="font-black uppercase tracking-widest text-[var(--muted)] mb-8 text-xs"
          style={{ letterSpacing: "0.18em" }}
        >
          So funktioniert es
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {[
            { n: "01", title: "Dateien wählen", desc: "Per Drag & Drop oder Klick PDF-Dateien von Ihrem Gerät auswählen." },
            { n: "02", title: "Konfigurieren", desc: "Dateien für die Zusammenführung sortieren oder Seitenbereiche für die Aufteilung angeben." },
            { n: "03", title: "Herunterladen", desc: "Das Ergebnis wird direkt im Browser erzeugt und sofort heruntergeladen." },
          ].map(({ n, title, desc }) => (
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
              <h3 className="font-bold text-sm uppercase tracking-wide mb-1">{title}</h3>
              <p className="text-[var(--muted)] text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
