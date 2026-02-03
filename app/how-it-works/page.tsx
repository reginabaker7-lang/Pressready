export default function HowItWorksPage() {
  const steps = [
    {
      title: "1) Upload your art",
      body:
        "Add a PNG (transparent background) or your file format supported by your workflow. Best results come from high-resolution artwork.",
    },
    {
      title: "2) Run Design Check",
      body:
        "PressReady scans for issues like low resolution, stray pixels, unwanted backgrounds, and sizing problems.",
    },
    {
      title: "3) Get clear results",
      body:
        "You’ll see what passed, what failed, and quick tips to fix it (ex: “too small”, “background detected”, “blurry”).",
    },
    {
      title: "4) Export with confidence",
      body:
        "Once it passes, you’re ready to print or send to your DTF vendor—cleaner output, less waste.",
    },
  ];

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
        {steps.map((s) => (
          <div
            key={s.title}
            style={{
              border: "1px solid rgba(0,0,0,0.12)",
              borderRadius: 12,
              padding: 16,
            }}
          >
            <div style={{ fontWeight: 700, marginBottom: 6 }}>{s.title}</div>
            <div style={{ opacity: 0.9, lineHeight: 1.55 }}>{s.body}</div>
          </div>
        ))}
      </section>

      <div style={{ fontSize: 14, opacity: 0.7 }}>
        Tip: If you print on dark shirts, make sure your design includes a white base layer where needed.
      </div>
    </main>
  );
}
