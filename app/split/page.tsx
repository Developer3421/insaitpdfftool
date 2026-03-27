"use client";

import { useCallback, useRef, useState } from "react";
import { PDFDocument } from "pdf-lib";

type Step = 1 | 2 | 3;
type SplitMode = "all" | "range" | "custom";

interface OutputFile {
  name: string;
  url: string;
}

export default function SplitPage() {
  const [pdfFile, setPdfFile] = useState<{ name: string; data: ArrayBuffer } | null>(null);
  const [pageCount, setPageCount] = useState(0);
  const [step, setStep] = useState<Step>(1);
  const [isDragOver, setIsDragOver] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [mode, setMode] = useState<SplitMode>("all");
  const [rangeFrom, setRangeFrom] = useState("1");
  const [rangeTo, setRangeTo] = useState("");
  const [customPages, setCustomPages] = useState("");
  const [outputs, setOutputs] = useState<OutputFile[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const loadPdf = useCallback(async (file: File) => {
    if (file.type !== "application/pdf" && !file.name.toLowerCase().endsWith(".pdf")) {
      setError(`"${file.name}" is not a PDF file.`);
      return;
    }
    setError(null);
    const data = await file.arrayBuffer();
    try {
      const doc = await PDFDocument.load(data);
      const count = doc.getPageCount();
      setPdfFile({ name: file.name, data });
      setPageCount(count);
      setRangeTo(String(count));
      setStep(2);
    } catch {
      setError("Failed to read the PDF. Make sure it is a valid PDF file.");
    }
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragOver(false);
      const file = e.dataTransfer.files[0];
      if (file) loadPdf(file);
    },
    [loadPdf]
  );

  const handleFileInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) loadPdf(file);
    },
    [loadPdf]
  );

  /** Parse "1,3,5-7,9" → zero-indexed page indices */
  const parsePageSpec = (spec: string, total: number): number[] => {
    const indices: number[] = [];
    const parts = spec.split(",").map((s) => s.trim()).filter(Boolean);
    for (const part of parts) {
      if (part.includes("-")) {
        const [a, b] = part.split("-").map(Number);
        for (let i = a; i <= b; i++) {
          if (i >= 1 && i <= total) indices.push(i - 1);
        }
      } else {
        const n = Number(part);
        if (n >= 1 && n <= total) indices.push(n - 1);
      }
    }
    return [...new Set(indices)].sort((a, b) => a - b);
  };

  const split = async () => {
    if (!pdfFile) return;
    setIsProcessing(true);
    setProgress(0);
    setError(null);
    // Clean up previous output URLs
    outputs.forEach((o) => URL.revokeObjectURL(o.url));
    setOutputs([]);

    try {
      const src = await PDFDocument.load(pdfFile.data);
      const baseName = pdfFile.name.replace(/\.pdf$/i, "");

      let pageGroups: { indices: number[]; name: string }[] = [];

      if (mode === "all") {
        // Every page becomes its own PDF
        pageGroups = src.getPageIndices().map((i) => ({
          indices: [i],
          name: `${baseName}_page${i + 1}.pdf`,
        }));
      } else if (mode === "range") {
        const from = Math.max(1, Number(rangeFrom));
        const to = Math.min(pageCount, Number(rangeTo));
        if (from > to) {
          setError("From page must be ≤ To page.");
          setIsProcessing(false);
          return;
        }
        pageGroups = [
          {
            indices: Array.from({ length: to - from + 1 }, (_, i) => from - 1 + i),
            name: `${baseName}_pages${from}-${to}.pdf`,
          },
        ];
      } else {
        // custom
        const indices = parsePageSpec(customPages, pageCount);
        if (indices.length === 0) {
          setError("No valid pages specified. Use format: 1,3,5-7");
          setIsProcessing(false);
          return;
        }
        pageGroups = [
          {
            indices,
            name: `${baseName}_custom.pdf`,
          },
        ];
      }

      const result: OutputFile[] = [];
      for (let i = 0; i < pageGroups.length; i++) {
        const group = pageGroups[i];
        const doc = await PDFDocument.create();
        const copied = await doc.copyPages(src, group.indices);
        copied.forEach((p) => doc.addPage(p));
        const bytes = await doc.save();
        const blob = new Blob([bytes.buffer as ArrayBuffer], { type: "application/pdf" });
        result.push({ name: group.name, url: URL.createObjectURL(blob) });
        setProgress(Math.round(((i + 1) / pageGroups.length) * 100));
      }

      setOutputs(result);
      setStep(3);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to split PDF.");
    } finally {
      setIsProcessing(false);
    }
  };

  const download = (file: OutputFile) => {
    const a = document.createElement("a");
    a.href = file.url;
    a.download = file.name;
    a.click();
  };

  const downloadAll = () => outputs.forEach(download);

  const reset = () => {
    outputs.forEach((o) => URL.revokeObjectURL(o.url));
    setPdfFile(null);
    setPageCount(0);
    setStep(1);
    setOutputs([]);
    setProgress(0);
    setError(null);
    setMode("all");
    setRangeFrom("1");
    setRangeTo("");
    setCustomPages("");
  };

  return (
    <div className="max-w-2xl mx-auto px-6 py-14">
      {/* Page header */}
      <div className="mb-10">
        <p className="text-xs font-black uppercase tracking-widest text-[var(--accent)] mb-3" style={{ letterSpacing: "0.18em" }}>
          PDF Tool
        </p>
        <h1 className="font-black leading-none mb-3" style={{ fontSize: "clamp(2rem, 5vw, 3.25rem)", letterSpacing: "-0.03em" }}>
          Split PDF
        </h1>
        <p className="text-[var(--muted)] text-sm">
          Extract individual pages or custom ranges — processed entirely in your browser.
        </p>
      </div>

      {/* Step indicators */}
      <div className="flex items-center gap-0 mb-10 select-none">
        {[
          { n: 1, label: "Select File" },
          { n: 2, label: "Configure" },
          { n: 3, label: "Download" },
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

      {/* Step 1 – Select file */}
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
            <p className="font-bold text-sm mb-1">Drop a PDF file here</p>
            <p className="text-[var(--muted)] text-xs">or click to browse</p>
            <input
              ref={inputRef}
              type="file"
              accept=".pdf,application/pdf"
              className="hidden"
              onChange={handleFileInput}
            />
          </div>
          {error && <p className="mt-3 text-sm text-red-600 font-medium">{error}</p>}
        </div>
      )}

      {/* Step 2 – Configure split */}
      {step === 2 && pdfFile && (
        <div>
          {/* File info */}
          <div className="file-item mb-4">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="flex-shrink-0 opacity-50">
              <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
              <path d="M7 9h10M7 13h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <span className="font-medium truncate">{pdfFile.name}</span>
            <span className="text-[var(--muted)] text-xs ml-auto flex-shrink-0">
              {pageCount} page{pageCount !== 1 ? "s" : ""}
            </span>
          </div>

          {/* Split mode */}
          <div className="step-card mb-4">
            <p className="text-xs font-black uppercase tracking-widest text-[var(--muted)] mb-4">
              Split mode
            </p>
            <div className="space-y-3">
              {/* All pages */}
              <label className="flex items-start gap-3 cursor-pointer group">
                <input
                  type="radio"
                  name="mode"
                  value="all"
                  checked={mode === "all"}
                  onChange={() => setMode("all")}
                  className="mt-0.5 accent-[var(--accent)]"
                />
                <div>
                  <span className="font-bold text-sm">Split every page</span>
                  <p className="text-[var(--muted)] text-xs">
                    Each page becomes a separate PDF file ({pageCount} files)
                  </p>
                </div>
              </label>

              {/* Page range */}
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="radio"
                  name="mode"
                  value="range"
                  checked={mode === "range"}
                  onChange={() => setMode("range")}
                  className="mt-0.5 accent-[var(--accent)]"
                />
                <div className="flex-1">
                  <span className="font-bold text-sm">Extract page range</span>
                  <p className="text-[var(--muted)] text-xs mb-2">
                    Extract a consecutive range of pages
                  </p>
                  {mode === "range" && (
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-[var(--muted)]">From</span>
                      <input
                        type="number"
                        min={1}
                        max={pageCount}
                        value={rangeFrom}
                        onChange={(e) => setRangeFrom(e.target.value)}
                        className="w-16 border border-[var(--border)] rounded px-2 py-1 text-sm font-mono focus:outline-none focus:border-[var(--accent)]"
                      />
                      <span className="text-xs text-[var(--muted)]">to</span>
                      <input
                        type="number"
                        min={1}
                        max={pageCount}
                        value={rangeTo}
                        onChange={(e) => setRangeTo(e.target.value)}
                        className="w-16 border border-[var(--border)] rounded px-2 py-1 text-sm font-mono focus:outline-none focus:border-[var(--accent)]"
                      />
                      <span className="text-xs text-[var(--muted)]">of {pageCount}</span>
                    </div>
                  )}
                </div>
              </label>

              {/* Custom pages */}
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="radio"
                  name="mode"
                  value="custom"
                  checked={mode === "custom"}
                  onChange={() => setMode("custom")}
                  className="mt-0.5 accent-[var(--accent)]"
                />
                <div className="flex-1">
                  <span className="font-bold text-sm">Custom page selection</span>
                  <p className="text-[var(--muted)] text-xs mb-2">
                    Specify individual pages and ranges (e.g.{" "}
                    <code className="font-mono bg-[var(--border)] px-1 rounded text-xs">1,3,5-7,9</code>)
                  </p>
                  {mode === "custom" && (
                    <input
                      type="text"
                      placeholder="e.g. 1,3,5-7"
                      value={customPages}
                      onChange={(e) => setCustomPages(e.target.value)}
                      className="w-full border border-[var(--border)] rounded px-3 py-1.5 text-sm font-mono focus:outline-none focus:border-[var(--accent)]"
                    />
                  )}
                </div>
              </label>
            </div>
          </div>

          {error && <p className="mb-3 text-sm text-red-600 font-medium">{error}</p>}

          {isProcessing && (
            <div className="mb-4">
              <div className="progress-bar">
                <div className="progress-bar-fill" style={{ width: `${progress}%` }} />
              </div>
              <p className="text-xs text-[var(--muted)] mt-1">Processing… {progress}%</p>
            </div>
          )}

          <div className="flex gap-3">
            <button className="btn-outline" onClick={reset}>
              ← Reset
            </button>
            <button className="btn-accent" onClick={split} disabled={isProcessing}>
              {isProcessing ? "Splitting…" : "Split PDF →"}
            </button>
          </div>
        </div>
      )}

      {/* Step 3 – Download */}
      {step === 3 && (
        <div>
          <div className="step-card mb-4 text-center py-8">
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
              style={{ background: "var(--success)" }}
            >
              <span className="text-white text-2xl font-black">✓</span>
            </div>
            <h2 className="font-black text-xl mb-1" style={{ letterSpacing: "-0.02em" }}>
              Split complete!
            </h2>
            <p className="text-[var(--muted)] text-sm">
              {outputs.length} file{outputs.length !== 1 ? "s" : ""} ready to download.
            </p>
          </div>

          <div className="space-y-2 mb-6">
            {outputs.map((f) => (
              <div key={f.name} className="file-item justify-between">
                <span className="font-medium text-sm truncate">{f.name}</span>
                <button
                  className="btn-accent text-xs flex-shrink-0 ml-2"
                  style={{ padding: "0.375rem 0.875rem" }}
                  onClick={() => download(f)}
                >
                  ↓ Download
                </button>
              </div>
            ))}
          </div>

          <div className="flex gap-3 flex-wrap">
            {outputs.length > 1 && (
              <button className="btn-accent" onClick={downloadAll}>
                ↓ Download All ({outputs.length})
              </button>
            )}
            <button className="btn-outline" onClick={reset}>
              Start over
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
