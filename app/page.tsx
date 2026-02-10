import Link from "next/link";
export default function Home() {
  return (
    <main style={{ minHeight: "100vh", padding: "40px 16px" }}>
      <div style={{ maxWidth: 980, margin: "0 auto" }}>
        <h1 style={{ fontSize: 48, margin: 0, lineHeight: 1.1 }}>PressReady</h1>

        <p style={{ marginTop: 14, fontSize: 18, lineHeight: 1.5 }}>
          Press it right the first time. Upload your design and PressReady checks it for common
          issues before you waste film and ink.
        </p>

        <div style={{ display: "flex", gap: 12, marginTop: 22, flexWrap: "wrap" }}>
          <Link
            href="/check"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "12px 16px",
              borderRadius: 12,
              background: "#f5c400",
              color: "#0b0b0b",
              fontWeight: 700,
              textDecoration: "none",
            }}
          >
            Go to Design Check →
          </Link>

          <Link
            href="/how-it-works"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "12px 16px",
              borderRadius: 12,
              border: "1px solid #f5c400",
              color: "#f5c400",
              fontWeight: 700,
            textDecoration: "none",
            }}
          >
            How it works →
          </Link>
        </div>
      </div>
    </main>
  );
}
