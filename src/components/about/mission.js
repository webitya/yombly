import Section from "./section";

export default function Mission() {
  return (
    <Section
      id="mission"
      title="Our Mission"
      subtitle="At Yombly, we’re on a mission to give organizations the clarity, talent, and intelligence they need to scale with confidence."
    >
      <div
        style={{
          display: "grid",
          gap: "20px",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          marginTop: "20px",
        }}
      >
        <ul
          style={{
            listStyleType: "disc",
            paddingLeft: "20px",
            background: "linear-gradient(135deg, #f5f9ff, #e6f0ff)",
            border: "1px solid #d0e3ff",
            borderRadius: "10px",
            padding: "20px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
          }}
        >
          <li style={{ marginBottom: "10px", color: "#0a3d91", fontSize: "14px", lineHeight: "1.6" }}>
            Hire right-fit sales & marketing talent
          </li>
          <li style={{ marginBottom: "10px", color: "#0a3d91", fontSize: "14px", lineHeight: "1.6" }}>
            Upskill teams with real-world, case-based learning
          </li>
          <li style={{ marginBottom: "10px", color: "#0a3d91", fontSize: "14px", lineHeight: "1.6" }}>
            Build performance management systems that actually drive results
          </li>
          <li style={{ color: "#0a3d91", fontSize: "14px", lineHeight: "1.6" }}>
            Access market intelligence that’s close to reality, not guesswork
          </li>
        </ul>

        <div
          style={{
            border: "1px dashed #b5cfff",
            borderRadius: "10px",
            padding: "20px",
            background: "linear-gradient(145deg, #ffffff, #f0f6ff)",
            boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
          }}
        >
          <h3
            style={{
              fontSize: "13px",
              fontWeight: "600",
              textTransform: "uppercase",
              letterSpacing: "1px",
              marginBottom: "8px",
              color: "#4b5b7a",
            }}
          >
            Why it matters
          </h3>
          <p
            style={{
              fontSize: "14px",
              lineHeight: "1.6",
              color: "#1e3a8a",
            }}
          >
            Revenue teams deserve one source of truth. Yombly aligns hiring, training, and intelligence so leaders can
            act with clarity—and teams can focus on selling.
          </p>
        </div>
      </div>
    </Section>
  );
}
