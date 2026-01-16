
"use client";

import { useState } from "react";

export default function CheckPage() {
  const [file, setFile] = useState<File | null>(null);

  return (
    <main style={{ maxWidth: 900, margin: "0 auto", padding: "32px 16px" }}>
      <a href="/" style={{ display: "inline-block", marginBottom: 18, opacity: 0.8 }}>
        ← Back
      </a>

      <h1 style={{ fontSize: 44, marginBottom: 8 }}>Design Check</h1>
      <p style={{ opacity: 0.8, marginBottom: 24 }}>
        Upload your DTF PNG and we’ll run quick checks before you press.
      </p>

      {/* Upload Button */}
      <label
        style={{
          display: "inline-block",
          padding: "14px 18px",
          borderRadius: 12,
          background: "#ffcc00",
          color: "#111",
          fontWeight: 700,
          cursor: "pointer",
          marginBottom: 20,
        }}
      >
        Upload Your DTF PNG
        <input
          type="file"
          accept="image/png"
          style={{ display: "none" }}
          onChange={(e) => setFile(e.target.files?.[0] ?? null)}
        />
      </label>

      {/* File Info */}
      {file && (
        <div style={{ marginTop: 20 }}>
          <strong>{file.name}</strong>
          <div style={{ fontSize: 13, opacity: 0.7 }}>
            {(file.size / 1024 / 1024).toFixed(2)} MB
          </div>

          <hr style={{ margin: "20px 0" }} />

          <h3>PressReady Checks</h3>
          <ul>
            <li>✅ PNG file detected</li>
            <li>⚠️ Dark shirts need white ink</li>
            <li>ℹ️ DPI + transparency check coming next</li>
          </ul>
        </div>
      )}
    </main>
  );
}
