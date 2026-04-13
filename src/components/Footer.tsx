"use client";

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--bg-dark)",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        padding: "32px 0",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "16px",
        }}
      >
        {/* Logo */}
        <div style={{ fontSize: "16px", fontWeight: 700, color: "white" }}>
          SAM<span style={{ color: "var(--accent-blue)" }}>()</span>
        </div>

        {/* Copyright */}
        <p style={{ fontSize: "12px", color: "var(--text-dim)", textAlign: "center" }}>
          © {new Date().getFullYear()} Samuel Mendez · Data Analyst Portfolio · Todos los derechos reservados.
        </p>

        {/* Back to top */}
        <a
          href="#inicio"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            fontSize: "12px",
            fontWeight: 600,
            color: "var(--text-dim)",
            textDecoration: "none",
            transition: "color 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent-blue-light)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-dim)")}
        >
          Volver arriba
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 19V5M5 12l7-7 7 7" />
          </svg>
        </a>
      </div>
    </footer>
  );
}
