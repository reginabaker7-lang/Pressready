import Link from "next/link";

export default function Home() {
  return (
    <main style={{ minHeight: "100vh", padding: "40px 16px" }}>
      <div style={{ maxWidth: 980, margin: "0 auto" }}>
        <h1 style={{ fontSize: 40, margin: 0, lineHeight: 1.1 }}>
          PressReady
        </h1>

        <p style={{ marginTop: 12, fontSize: 18, lineHeight: 1.6, opacity: 0.85 }}>
          Press it right the first time. Upload your design and PressReady checks it
          for common DTF print issues before you waste film and ink.
        </p>

        <div style={{ marginTop: 22, display: "flex", gap: 12, flexWrap: "wrap" }}>
          <Link
            href="/check"
            style={{
              display: "inline-block",
              padding: "12px 16px",
              borderRadius: 12,
              textDecoration: "none",
              border: "1px solid rgba(0,0,0,0.2)",
            }}
          >
            Go to Design Check →
          </Link>

          <Link
            href="/how-it-works"
            style={{
              display: "inline-block",
              padding: "12px 16px",
              borderRadius: 12,
              textDecoration: "none",
              border: "1px solid rgba(0,0,0,0.2)",
            }}
          >
            How it works →
          </Link>
        </div>
      </div>
    </main>
  );
}
