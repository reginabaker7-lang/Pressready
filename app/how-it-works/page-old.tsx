export default function HowItWorksPage() {
  return (
    <main style={{ maxWidth: 980, margin: "0 auto", padding: "40px 16px" }}>
      <header style={{ marginBottom: 28 }}>
        <h1 style={{ fontSize: 36, lineHeight: 1.15, margin: 0 }}>
          How PressReady Works
        </h1>
        <p style={{ marginTop: 12, fontSize: 18, lineHeight: 1.6, opacity: 0.85 }}>
          Upload your design. PressReady checks it for common print issues and
          tells you exactly what to fix before you waste film, ink, or time.
        </p>
      </header>

      <section style={{ display: "grid", gap: 14, marginBottom: 28 }}>
        {[
          {
            title: "1) Upload your art",
            body:
              "Add a PNG (transparent background) or your file format supported by your workflow. Best results come from high-resolution artwork.",
          },
          {
            title: "2) Run Design Check",
            body:
              "PressReady scans for issues like low resolution, stray pixels, unwanted backgrounds, thin lines, and other common DTF problems.",
          },
          {
            title: "3) Get clear results",
            body:
              "You’ll see what passed, what failed, and quick tips to fix it (ex: “too small”, “needs higher DPI”, “background detected”).",
          },
          {
            title: "4) Export with confidence",
            body:
              "Once it passes, you’re ready to print or send to your DTF vendor—cleaner output, fewer surprises.",
          },
        ].map((step) => (
          <div
            key={step.title}
            style={{
              border: "1px solid rgba(0,0,0,0.12)",
              borderRadius: 14,
              padding: 16,
            }}
          >
            <h2 style={{ fontSize: 18, margin: 0 }}>{step.title}</h2>
            <p style={{ marginTop: 8, lineHeight: 1.6, opacity: 0.85 }}>
              {step.body}
            </p>
          </div>
        ))}
      </section>

      <section
        style={{
          borderRadius: 16,
          padding: 18,
          background: "rgba(0,0,0,0.04)",
        }}
      >
        <h2 style={{ margin: 0, fontSize: 18 }}>Quick Tips for Best Results</h2>
        <ul style={{ marginTop: 10, lineHeight: 1.7, paddingLeft: 18 }}>
          <li>Use transparent PNGs (no checkerboard background baked in).</li>
          <li>Aim for crisp edges and avoid fuzzy screenshots.</li>
          <li>Watch thin lines & tiny text—they can disappear in print.</li>
          <li>Check contrast for dark shirts vs light shirts.</li>
        </ul>
      </section>
    </main>
  );
}}
