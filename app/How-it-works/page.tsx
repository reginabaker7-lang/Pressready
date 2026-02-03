// ARCHIVED - do not use (use /how-it-works lowercase folder)export default function HowItWorksPage() {
  return (
    <main style={{ maxWidth: 980, margin: "0 auto", padding: "40px 16px" }}>
      <h1 style={{ fontSize: 36, fontWeight: 700, marginBottom: 16 }}>
        How PressReady Works
      </h1>

      <p style={{ fontSize: 18, marginBottom: 32, color: "#444" }}>
        PressReady helps you check your artwork before ordering DTF prints —
        so you don’t waste money on files that print with boxes, missing
        transparency, or bad sizing.
      </p>

      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 24, fontWeight: 600 }}>1. Upload Your Design</h2>
        <p>
          Upload your PNG design file. PressReady checks transparency,
          background issues, sizing, and print risks automatically.
        </p>
      </section>

      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 24, fontWeight: 600 }}>2. Get Instant Feedback</h2>
        <p>
          We flag common problems like background boxes, low resolution,
          and edge issues — before you order.
        </p>
      </section>

      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 24, fontWeight: 600 }}>3. Fix or Order Confidently</h2>
        <p>
          Fix issues yourself or move forward knowing your file is
          PressReady-approved.
        </p>
      </section>

      <a
        href="/check"
        style={{
          display: "inline-block",
          marginTop: 24,
          padding: "12px 20px",
          background: "#000",
          color: "#fff",
          borderRadius: 6,
          textDecoration: "none",
          fontWeight: 600,
        }}
      >
        Check a Design →
      </a>
    </main>
  );
}
