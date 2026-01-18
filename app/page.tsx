
import Link from "next/link";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "40px 20px",
        fontFamily: "system-ui, sans-serif",
        backgroundColor: "#0b0b0b",
        color: "#f5f5f5",
      }}
    >
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <h1 style={{ fontSize: 42, marginBottom: 16 }}>
          Press it right the first time.
        </h1>

        <p style={{ fontSize: 18, lineHeight: 1.6 }}>
          PressReady checks your DTF designs before you print so you waste less
          film, save ink, and avoid bad transfers.
        </p>

        <div style={{ marginTop: 30 }}>
          <Link
            href="/check"
            style={{
              display: "inline-block",
              padding: "14px 22px",
              backgroundColor: "#d4af37",
              color: "#000",
              borderRadius: 8,
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Get Started Free
          </Link>
        </div>
      </div>
    </main>
  );
}