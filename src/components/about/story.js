import Section from "./section";

export default function Story() {
  return (
    <Section
      id="story"
      title="Our Story"
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px",
          alignItems: "start",
          marginTop: "20px",
        }}
      >
        {/* Left Text */}
        <div
          style={{
            background: "linear-gradient(135deg, #f0f7ff, #e6f2ff)",
            borderRadius: "12px",
            padding: "20px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
            fontSize: "14px",
            lineHeight: "1.6",
            color: "#1c3f7a",
          }}
        >
          <p style={{ marginBottom: "12px" }}>
            We started Yombly after seeing the same pattern repeat across companies: wrong hires slowing growth, sales
            leaders making decisions on outdated or incomplete data, and teams spending energy in silos instead of
            selling.
          </p>
          <p>
            Revenue success shouldn’t depend on guesswork or luck. We built Yombly to give leaders a unified growth
            platform—where hiring, training, and intelligence finally work together.
          </p>
        </div>

        {/* Right Visual */}
        <div
          style={{
            borderRadius: "12px",
            padding: "20px",
            background: "linear-gradient(145deg, #ffffff, #f4faff)",
            border: "1px solid #cce0ff",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
          }}
        >
          <div
            style={{
              width: "100%",
              padding: "40px",
              borderRadius: "12px",
              background: "linear-gradient(135deg, #d0e7ff, #ffffff)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              color: "#4a6fa5",
              fontSize: "13px",
              fontStyle: "italic",
              boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
            }}
          >
            {"\"Fragmented → Unified\" journey visual placeholder"}
          </div>
          <p style={{ marginTop: "12px", fontSize: "12px", color: "#6b7a99", textAlign: "center" }}>
            A single platform replaces scattered vendors and systems.
          </p>
        </div>
      </div>
    </Section>
  );
}
