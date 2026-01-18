export default function HowItWorksPage() {
  return (
    <main style={{ maxWidth: 980, margin: "0 auto", padding: "3rem" }}>
      <h1>How PressReady works</h1>

      <ol style={{ lineHeight: 1.8 }}>
        <li>Upload your DTF PNG.</li>
        <li>PressReady checks transparency, size, and print readiness.</li>
        <li>You get PASS / WARN results before you press.</li>
      </ol>

      <a href="/" style={{ display: "inline-block", marginTop: "2rem" }}>
        ← Back to Home
      </a>
    </main>
  );
}
