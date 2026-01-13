// PressReady landing page
export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      padding: "40px 20px",
      fontFamily: "system-ui, sans-serif",
      backgroundColor: "#0b0b0b",
      color: "#f5f5f5"
    }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <h1 style={{ fontSize: 42, marginBottom: 12 }}>
          Press it right the first time.
        </h1>

        <p style={{ fontSize: 18, lineHeight: 1.6, color: "#d4d4d4" }}>
          PressReady checks your DTF designs before you press —
          so you waste less film, save ink, and stop guessing.
        </p>

        <div style={{ marginTop: 30 }}>
          <a
            href="/check"
            style={{
              display: "inline-block",
              padding: "14px 22px",
              backgroundColor: "#d4af37",
              color: "#000",
              borderRadius: 8,
              fontWeight: 600,
              textDecoration: "none",
              marginRight: 12
            }}
          >
            Get Started Free
          </a>

          <a
            href="/press-guide"
            style={{
              color: "#d4af37",
              fontWeight: 500,
              textDecoration: "none"
            }}
          >
            How it works
          </a>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 20,
          marginTop: 60
        }}>
          <div>
            <h3>DTF Prep Check</h3>
            <p style={{ color: "#cfcfcf" }}>
              Transparency, sizing, DPI, and dark-shirt warnings — instantly.
            </p>
          </div>

          <div>
            <h3>No White Ink Friendly</h3>
            <p style={{ color: "#cfcfcf" }}>
              Home printer? We tell you what will actually work.
            </p>
          </div>

          <div>
            <h3>Youth + Sleeve Sizes</h3>
            <p style={{ color: "#cfcfcf" }}>
              Adult, youth, and sleeve sizing built in.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
 
