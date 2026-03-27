"use client";

import { useCallback, useRef, useState } from "react";
import { PDFDocument } from "pdf-lib";

interface PdfFile {
  id: string;
  name: string;
  size: number;
  data: ArrayBuffer;
}

type Step = 1 | 2 | 3;

function formatBytes(bytes: number) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export default function MergePage() {
  const [files, setFiles] = useState<PdfFile[]>([]);
  const [step, setStep] = useState<Step>(1);
  const [isDragOver, setIsDragOver] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const [outputName, setOutputName] = useState("merged.pdf");
  const inputRef = useRef<HTMLInputElement>(null);

  const readFiles = useCallback(async (rawFiles: File[]) => {
    const pdfs: PdfFile[] = [];
    for (const f of rawFiles) {
      if (f.type !== "application/pdf" && !f.name.toLowerCase().endsWith(".pdf")) {
        setError(`"${f.name}" ist keine PDF-Datei.`);
        return;
      }
      const data = await f.arrayBuffer();
      pdfs.push({ id: crypto.randomUUID(), name: f.name, size: f.size, data });
    }
    setFiles((prev) => [...prev, ...pdfs]);
    setStep(2);
    setError(null);
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragOver(false);
      readFiles(Array.from(e.dataTransfer.files));
    },
    [readFiles]
  );

  const handleFileInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) readFiles(Array.from(e.target.files));
    },
    [readFiles]
  );

  const moveFile = (id: string, direction: "up" | "down") => {
    setFiles((prev) => {
      const idx = prev.findIndex((f) => f.id === id);
      if (idx === -1) return prev;
      const next = [...prev];
      const swapIdx = direction === "up" ? idx - 1 : idx + 1;
      if (swapIdx < 0 || swapIdx >= next.length) return prev;
      [next[idx], next[swapIdx]] = [next[swapIdx], next[idx]];
      return next;
    });
  };

  const removeFile = (id: string) => {
    setFiles((prev) => {
      const updated = prev.filter((f) => f.id !== id);
      if (updated.length === 0) setStep(1);
      return updated;
    });
  };

  const merge = async () => {
    if (files.length < 2) {
      setError("Bitte mindestens 2 PDF-Dateien hinzufügen.");
      return;
    }
    setIsProcessing(true);
    setProgress(0);
    setError(null);
    setDownloadUrl(null);

    try {
      const merged = await PDFDocument.create();
      for (let i = 0; i < files.length; i++) {
        const src = await PDFDocument.load(files[i].data);
        const pages = await merged.copyPages(src, src.getPageIndices());
        pages.forEach((p) => merged.addPage(p));
        setProgress(Math.round(((i + 1) / files.length) * 90));
      }
      const bytes = await merged.save();
      setProgress(100);
      const blob = new Blob([bytes.buffer as ArrayBuffer], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);
      setDownloadUrl(url);
      setStep(3);
    } catch (err) {
      setError(err instanceof Error ? err.message : "PDFs konnten nicht zusammengeführt werden.");
    } finally {
      setIsProcessing(false);
    }
  };

  const download = () => {
    if (!downloadUrl) return;
    const a = document.createElement("a");
    a.href = downloadUrl;
    a.download = outputName.endsWith(".pdf") ? outputName : `${outputName}.pdf`;
    a.click();
  };

  const reset = () => {
    if (downloadUrl) URL.revokeObjectURL(downloadUrl);
    setFiles([]);
    setStep(1);
    setDownloadUrl(null);
    setProgress(0);
    setError(null);
    setOutputName("merged.pdf");
  };

  return (
    <div className="max-w-2xl mx-auto px-6 py-14">
      {/* Page header */}
      <div className="mb-10">
        <p className="text-xs font-black uppercase tracking-widest text-[var(--accent)] mb-3" style={{ letterSpacing: "0.18em" }}>
          PDF Tool
        </p>
        <h1 className="font-black leading-none mb-3" style={{ fontSize: "clamp(2rem, 5vw, 3.25rem)", letterSpacing: "-0.03em" }}>
          PDFs zusammenführen
        </h1>
        <p className="text-[var(--muted)] text-sm">
          Mehrere PDF-Dateien zu einem Dokument zusammenführen — vollständig im Browser verarbeitet.
        </p>
      </div>

      {/* Step indicators */}
      <div className="flex items-center gap-0 mb-10 select-none">
        {[
          { n: 1, label: "Dateien hinzufügen" },
          { n: 2, label: "Sortieren" },
          { n: 3, label: "Herunterladen" },
        ].map(({ n, label }, i) => (
          <div key={n} className="flex items-center">
            {i > 0 && (
              <div
                className="w-8 h-px mx-1"
                style={{ background: step > i ? "var(--accent)" : "var(--border)" }}
              />
            )}
            <div className="flex items-center gap-1.5">
              <span
                className={`step-badge${step === n ? " active" : step > n ? " done" : ""}`}
                style={{ width: "1.75rem", height: "1.75rem", fontSize: "0.75rem" }}
              >
                {step > n ? "✓" : n}
              </span>
              <span
                className="text-xs font-bold uppercase tracking-wide"
                style={{
                  color: step === n ? "var(--foreground)" : step > n ? "var(--success)" : "var(--muted)",
                }}
              >
                {label}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Step 1 – Add files */}
      {step === 1 && (
        <div>
          <div
            className={`drop-zone${isDragOver ? " over" : ""} flex flex-col items-center justify-center py-16 px-8 text-center`}
            onDragOver={(e) => { e.preventDefault(); setIsDragOver(true); }}
            onDragLeave={() => setIsDragOver(false)}
            onDrop={handleDrop}
            onClick={() => inputRef.current?.click()}
          >
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="mb-4 opacity-40">
              <path d="M12 16V8m0 0-3 3m3-3 3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
            </svg>
            <p className="font-bold text-sm mb-1">PDF-Dateien hier ablegen</p>
            <p className="text-[var(--muted)] text-xs">oder klicken zum Durchsuchen</p>
            <input
              ref={inputRef}
              type="file"
              accept=".pdf,application/pdf"
              multiple
              className="hidden"
              onChange={handleFileInput}
            />
          </div>
          {error && <p className="mt-3 text-sm text-red-600 font-medium">{error}</p>}
        </div>
      )}

      {/* Step 2 – Arrange */}
      {step === 2 && (
        <div>
          <div className="step-card mb-4">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[var(--muted)]">
                {files.length} Datei{files.length !== 1 ? "en" : ""} ausgewählt
              </span>
              <button
                className="text-xs font-bold uppercase tracking-wide text-[var(--accent)] hover:underline"
                onClick={() => inputRef.current?.click()}
              >
                + Weitere hinzufügen
              </button>
              <input
                ref={inputRef}
                type="file"
                accept=".pdf,application/pdf"
                multiple
                className="hidden"
                onChange={handleFileInput}
              />
            </div>

            <ul className="space-y-2">
              {files.map((f, i) => (
                <li key={f.id} className="file-item justify-between">
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="w-5 h-5 rounded-full bg-[var(--step-bg)] text-white text-[10px] font-bold flex items-center justify-center flex-shrink-0">
                      {i + 1}
                    </span>
                    <span className="truncate font-medium text-sm">{f.name}</span>
                    <span className="text-[var(--muted)] text-xs flex-shrink-0">{formatBytes(f.size)}</span>
                  </div>
                  <div className="flex items-center gap-1 flex-shrink-0">
                    <button
                      disabled={i === 0}
                      onClick={() => moveFile(f.id, "up")}
                      className="w-6 h-6 flex items-center justify-center rounded hover:bg-[var(--border)] disabled:opacity-30 text-xs"
                      title="Move up"
                    >
                      ↑
                    </button>
                    <button
                      disabled={i === files.length - 1}
                      onClick={() => moveFile(f.id, "down")}
                      className="w-6 h-6 flex items-center justify-center rounded hover:bg-[var(--border)] disabled:opacity-30 text-xs"
                      title="Move down"
                    >
                      ↓
                    </button>
                    <button
                      onClick={() => removeFile(f.id)}
                      className="w-6 h-6 flex items-center justify-center rounded hover:bg-red-50 text-red-400 hover:text-red-600 text-xs"
                      title="Remove"
                    >
                      ✕
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Output filename */}
          <div className="step-card mb-4">
            <label className="block text-xs font-bold uppercase tracking-widest text-[var(--muted)] mb-2">
              Ausgabedateiname
            </label>
            <input
              type="text"
              value={outputName}
              onChange={(e) => setOutputName(e.target.value)}
              className="w-full border border-[var(--border)] rounded px-3 py-2 text-sm font-mono focus:outline-none focus:border-[var(--accent)]"
              placeholder="merged.pdf"
            />
          </div>

          {error && <p className="mb-3 text-sm text-red-600 font-medium">{error}</p>}

          {isProcessing && (
            <div className="mb-4">
              <div className="progress-bar">
                <div className="progress-bar-fill" style={{ width: `${progress}%` }} />
              </div>
              <p className="text-xs text-[var(--muted)] mt-1">Verarbeitung… {progress}%</p>
            </div>
          )}

          <div className="flex gap-3">
            <button className="btn-outline" onClick={reset}>
              ← Zurücksetzen
            </button>
            <button
              className="btn-accent"
              onClick={merge}
              disabled={isProcessing || files.length < 2}
            >
              {isProcessing ? "Zusammenführen…" : `${files.length} PDFs zusammenführen →`}
            </button>
          </div>
        </div>
      )}

      {/* Step 3 – Download */}
      {step === 3 && (
        <div className="step-card text-center py-10">
          <div
            className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
            style={{ background: "var(--success)" }}
          >
            <span className="text-white text-2xl font-black">✓</span>
          </div>
          <h2 className="font-black text-xl mb-2" style={{ letterSpacing: "-0.02em" }}>
            Zusammenführen abgeschlossen!
          </h2>
          <p className="text-[var(--muted)] text-sm mb-8">
            Ihre PDF wurde erfolgreich zusammengeführt.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <button className="btn-accent" onClick={download}>
              ↓ Download {outputName}
            </button>
            <button className="btn-outline" onClick={reset}>
              Von vorne beginnen
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
