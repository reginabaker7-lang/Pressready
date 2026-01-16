import Link from "next/link";

export default function CheckPage() {
  return (
    <main style={{ padding: 40, fontFamily: "system-ui" }}>
      <Link
        href="/"
        style={{
          display: "inline-block",
          marginBottom: 20,
          textDecoration: "none",
          fontSize: 16,
        }}
      >
        ← Back
      </Link>

      <h1>Design Check</h1>
      <p>Design check coming next.</p>
    </main>
  );
}
