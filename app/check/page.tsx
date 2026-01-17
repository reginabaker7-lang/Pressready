
"use client";

import { useMemo, useState } from "react";

type Analysis = {
  fileName: string;
  fileSizeMB: number;
  widthPx: number;
  heightPx: number;
  dpi: number | null;
  hasTransparency: boolean;
  transparentPixelPct: number; // 0-100
  contentBox?: { x: number; y: number; w: number; h: number };
};

type Row = { label: string; status: "PASS" | "WARN" | "INFO"; detail: string };

export default function CheckPage() {
  const [file, setFile] = useState<File | null>(null);
  const [analysis, setAnalysis] = useState<Analysis | null>(null);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  async function onPick(f: File | null) {
    setFile(f);
    setErr(null);
    setAnalysis(null);

    if (!f) return;

    // Only PNG for now (your MVP)
    if (f.type !== "image/png" && !f.name.toLowerCase().endsWith(".png")) {
      setErr("Please upload a PNG file.");
      return;
    }

    setBusy(true);
    try {
      const a = await analyzePngFile(f);
      setAnalysis(a);
    } catch (e: any) {
      setErr(e?.message || "Something went wrong analyzing that file.");
    } finally {
      setBusy(false);
    }
  }

  const rows: Row[] = useMemo(() => {
    if (!analysis) return [];

    const dpi = analysis.dpi ?? 300; // fallback if no DPI metadata
    const wIn = analysis.widthPx / dpi;
    const hIn = analysis.heightPx / dpi;

    const maxIn = Math.max(wIn, hIn);
    const minIn = Math.min(wIn, hIn);
    return [];
});

    
  
  
    label: "File",
    status: "PASS",
    detail: `${analysis.fileName} • ${analysis.fileSizeMB.toFixed(2)} MB`,
  },
  {
    label: "Dimensions",
    status: "PASS",
    detail: `${analysis.widthPx} × ${analysis.heightPx} px`,
  },
  {
    label: "DPI",
    status: dpiWarn,
    detail:
      analysis.dpi == null
        ? "No DPI data found in this PNG (common). We’re estimating at 300 DPI."
        : `${analysis.dpi} DPI detected`,
  },
  {
    label: "Estimated print size",
    status: "INFO",
    detail: `${wIn.toFixed(2)}" × ${hIn.toFixed(2)}" (based on ${dpi} DPI)`,
  },
  {
    label: "Best fit",
    status: "INFO",
    detail: sizeLabel,
  },
  {
    label: "Transparency",
    status: analysis.hasTransparency ? "PASS" : "WARN",
    detail: analysis.hasTransparency
      ? `Transparent background confirmed • ~${analysis.transparentPixelPct.toFixed(1)}% transparent pixels`
      : "No transparency found • This may print with a background box (not DTF-ready)",
  },
  {
    label: "Dark-shirt check (no white ink)",
    status: analysis.hasTransparency ? "WARN" : "INFO",
    detail: analysis.hasTransparency
      ? "Heads up: Transparent PNG + no white ink usually won’t show on dark shirts. Use light shirts or order DTF with white underbase."
      : "If your design has light colors, dark shirts still need white ink/underbase to pop.",
  },
  {
    label: "Auto-crop hint",
    status: "INFO",
    detail: analysis.contentBox
      ? `We found your design edges (safe crop): ${analysis.contentBox.w}×${analysis.contentBox.h} px content area`
      : "We couldn’t find a content box (image may be fully transparent or very faint).",
  },
];
  });

  return (
    <main style={{ maxWidth: 980, margin: "0 auto", padding: "32px 16px" }}>
      <a href="/" style={{ display: "inline-block", marginBottom: 18, opacity: 0.8 }}>
        ← Back
      </a>

      <h1 style={{ fontSize: 44, marginBottom: 8 }}>Design Check</h1>
      <p style={{ opacity: 0.8, marginBottom: 18 }}>
        Upload your DTF PNG and we’ll run quick checks before you press.
      </p>

      <label
        style={{
          display: "inline-block",
          padding: "14px 18px",
          borderRadius: 12,
          background: "#ffcc00",
          color: "#111",
          fontWeight: 700,
          cursor: "pointer",
        }}
      >
        {busy ? "Analyzing..." : "Upload Your DTF PNG"}
        <input
          type="file"
          accept="image/png"
          style={{ display: "none" }}
          onChange={(e) => onPick(e.target.files?.[0] ?? null)}
        />
      </label>

      {err && (
        <div
          style={{
            marginTop: 16,
            padding: 12,
            borderRadius: 12,
            border: "1px solid rgba(0,0,0,0.15)",
          }}
        >
          <strong>⚠️ {err}</strong>
        </div>
      )}

    {analysis && (
  <section style={{ marginTop: 18 }}>
    {/* TOP VERDICT BOX */}
    {verdict && (
      <div
        style={{
          padding: 14,
          borderRadius: 14,
          border: "1px solid rgba(0,0,0,0.12)",
          background:
            verdict.status === "PASS"
              ? "rgba(0, 200, 0, 0.10)"
              : "rgba(255, 193, 7, 0.20)",
          marginBottom: 14,
        }}
      >
        <div style={{ fontSize: 20, fontWeight: 900, marginBottom: 6 }}>
          {verdict.title}
        </div>

        <div style={{ opacity: 0.85, marginBottom: 6 }}>
          {verdict.subtitle}
        </div>

        <div style={{ fontSize: 13, opacity: 0.75 }}>
          {verdict.note}
        </div>
      </div>
    )}

    <h3 style={{ margin: "16px 0 10px" }}>PressReady Results</h3>

    <div style={{ display: "grid", gap: 10 }}>
      {rows.map((r) => (
        <div key={r.label}>{/* your row UI here */}</div>
      ))}
    </div>
  </section>
)}
          <h3 style={{ margin: "16px 0 10px" }}>PressReady Results</h3>

          <div style={{ display: "grid", gap: 10 }}>
            {rows.map((r) => (
              <div
                key={r.label}
                style={{
                  padding: 12,
                  borderRadius: 12,
                  border: "1px solid rgba(0,0,0,0.12)",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    padding: "2px 10px",
                    borderRadius: 999,
                    fontSize: 12,
                    fontWeight: 800,
                    marginRight: 10,
                    background:
                      r.status === "PASS"
                        ? "#b6ffb6"
                        : r.status === "WARN"
                        ? "#ffdd66"
                        : "#eaeaea",
                  }}
                >
                  {r.status}
                </span>
                <strong>{r.label}:</strong> <span>{r.detail}</span>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 14, fontSize: 13, opacity: 0.75 }}>
            Next upgrade: show a visual preview + “safe crop” box and export press notes.
          </div>
        </section>
      )}
    </main>
  );
}

/**
 * Analyze PNG:
 * - Read DPI from pHYs chunk if present
 * - Decode image to canvas to detect transparency + content bounds
 */
async function analyzePngFile(file: File): Promise<Analysis> {
  const buf = await file.arrayBuffer();

  const dpi = readPngDpiFromPhys(buf); // null if not present
  const img = await loadImageFromFile(file);

  const { hasTransparency, transparentPixelPct, contentBox } = analyzeTransparencyAndBounds(img);

  return {
    fileName: file.name,
    fileSizeMB: file.size / 1024 / 1024,
    widthPx: img.width,
    heightPx: img.height,
    dpi,
    hasTransparency,
    transparentPixelPct,
    contentBox,
  };
}

function loadImageFromFile(file: File): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file);
    const img = new Image();
    img.onload = () => {
      URL.revokeObjectURL(url);
      resolve(img);
    };
    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error("Could not read that PNG."));
    };
    img.src = url;
  });
}

function analyzeTransparencyAndBounds(img: HTMLImageElement) {
  const canvas = document.createElement("canvas");
  canvas.width = img.width;
  canvas.height = img.height;
  const ctx = canvas.getContext("2d", { willReadFrequently: true });
  if (!ctx) throw new Error("Canvas not supported in this browser.");

  ctx.drawImage(img, 0, 0);

  const { data, width, height } = ctx.getImageData(0, 0, canvas.width, canvas.height);

  let transparentCount = 0;
  let total = width * height;

  // content bounds of non-transparent pixels
  let minX = width, minY = height, maxX = -1, maxY = -1;

  for (let i = 0; i < data.length; i += 4) {
    const a = data[i + 3]; // alpha
    const pxIndex = i / 4;
    const x = pxIndex % width;
    const y = Math.floor(pxIndex / width);

    if (a < 255) transparentCount++;
    if (a > 0) {
      if (x < minX) minX = x;
      if (y < minY) minY = y;
      if (x > maxX) maxX = x;
      if (y > maxY) maxY = y;
    }
  }

  const hasTransparency = transparentCount > 0;
  const transparentPixelPct = total > 0 ? (transparentCount / total) * 100 : 0;

  const contentBox =
    maxX >= 0
      ? { x: minX, y: minY, w: maxX - minX + 1, h: maxY - minY + 1 }
      : undefined;

  return { hasTransparency, transparentPixelPct, contentBox };
}

/**
 * PNG pHYs chunk:
 * - Stores pixels per unit (meter) for X and Y + unit specifier.
 * - Convert pixels/meter to DPI: DPI = ppm * 0.0254
 */
function readPngDpiFromPhys(arrayBuffer: ArrayBuffer): number | null {
  const bytes = new Uint8Array(arrayBuffer);

  // PNG signature
  const sig = [137, 80, 78, 71, 13, 10, 26, 10];
  for (let i = 0; i < sig.length; i++) {
    if (bytes[i] !== sig[i]) return null;
  }

  let offset = 8; // after signature
  const dv = new DataView(arrayBuffer);

  while (offset + 8 <= bytes.length) {
    const length = dv.getUint32(offset); // big-endian
    offset += 4;

    const type = String.fromCharCode(
      bytes[offset],
      bytes[offset + 1],
      bytes[offset + 2],
      bytes[offset + 3]
    );
    offset += 4;

    if (type === "pHYs" && length >= 9) {
      const ppmX = dv.getUint32(offset);
      const ppmY = dv.getUint32(offset + 4);
      const unit = bytes[offset + 8]; // 1 = meter, 0 = unknown

      if (unit === 1 && ppmX > 0 && ppmY > 0) {
        const dpiX = ppmX * 0.0254;
        const dpiY = ppmY * 0.0254;
        const dpiAvg = (dpiX + dpiY) / 2;
        return Math.round(dpiAvg);
      }
      return null;
    }

    // skip chunk data + crc
    offset += length + 4;

    if (type === "IEND") break;
  }

  return null;
}
