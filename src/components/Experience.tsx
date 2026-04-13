"use client";
import { useState } from "react";

const experiences = [
  {
    id: 0,
    role: "Vendedor",
    company: "Juega Libre",
    period: "2025 - Eventual",
    location: "Buenos Aires, Argentina",
    type: "Eventual",
    bullets: [
      "Atención al cliente presencial, asesorando sobre productos según edad, intereses y presupuesto.",
      "Venta directa y cumplimiento de objetivos comerciales diarios y mensuales.",
      "Manejo de caja: cobros en efectivo, débito, crédito y billeteras virtuales.",
      "Limpieza y orden del área de trabajo.",
    ],
    tags: ["Atención al cliente", "Venta directa", "Manejo de caja", "Limpieza y orden"],
  },
  {
    id: 1,
    role: "Pasante IT",
    company: "Adox S.A.",
    period: "2019 — 2020",
    location: "Remoto",
    type: "Part-time",
    bullets: [
      "Participación en proyecto PulserVet, ",
      "Creación y mejora de entornos visuales con html, css y javascript. Creación de funcionalidades para backend en Java.",
      "Implementé mejoras en la interfaz de usuario en Linux, asegurando ejecución en modo fullscreen para aplicaciones médicas críticas.",
      "Optimicé la interacción usuario-sistema reduciendo riesgos operativos en entornos clínicos.",
      "Trabajo en equipo con otros pasantes y con apoyo de los profesionales del area.",
    ],
    tags: ["HTML", "CSS", "JavaScript", "Linux", "Java"],
  },
];

export default function Experience() {
  const [activeIdx, setActiveIdx] = useState(0);
  const exp = experiences[activeIdx];

  return (
    <section
      id="experiencia"
      style={{
        padding: "100px 0",
        background: "#edf0f7",
        position: "relative",
      }}
    >
      {/* Subtle top border accent */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "80px",
          height: "3px",
          background: "linear-gradient(90deg, #4f7fff, #7c3aed)",
          borderRadius: "0 0 4px 4px",
        }}
      />

      <div className="container">
        {/* Section header */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            marginBottom: "60px",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          <div>
            <div
              className="section-label"
              style={{ color: "var(--accent-blue)", marginBottom: "12px" }}
            >
              Mi trayectoria
            </div>
            <h2
              style={{
                fontSize: "clamp(32px, 4vw, 48px)",
                fontWeight: 800,
                color: "var(--text-dark)",
                letterSpacing: "-1px",
              }}
            >
              Experiencia Profesional
            </h2>
          </div>

          {/* Prev / Next arrows */}
          <div style={{ display: "flex", gap: "10px" }}>
            <button
              onClick={() => setActiveIdx((prev) => (prev - 1 + experiences.length) % experiences.length)}
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                border: "1.5px solid rgba(0,0,0,0.10)",
                background: "#f0f3fa",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.2s",
                color: "var(--text-dark-2)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--accent-blue)";
                (e.currentTarget as HTMLElement).style.color = "var(--accent-blue)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,0,0,0.12)";
                (e.currentTarget as HTMLElement).style.color = "var(--text-dark-2)";
              }}
              aria-label="Anterior"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={() => setActiveIdx((prev) => (prev + 1) % experiences.length)}
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                border: "1.5px solid rgba(0,0,0,0.10)",
                background: "#f0f3fa",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.2s",
                color: "var(--text-dark-2)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--accent-blue)";
                (e.currentTarget as HTMLElement).style.color = "var(--accent-blue)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,0,0,0.12)";
                (e.currentTarget as HTMLElement).style.color = "var(--text-dark-2)";
              }}
              aria-label="Siguiente"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Experience tabs */}
        <div style={{ display: "flex", gap: "8px", marginBottom: "40px" }}>
          {experiences.map((e, i) => (
            <button
              key={e.id}
              onClick={() => setActiveIdx(i)}
              style={{
                padding: "8px 20px",
                borderRadius: "100px",
                border: "1.5px solid",
                borderColor: i === activeIdx ? "var(--accent-blue)" : "rgba(0,0,0,0.1)",
                background: i === activeIdx ? "rgba(79,127,255,0.08)" : "transparent",
                color: i === activeIdx ? "var(--accent-blue)" : "var(--text-dim)",
                fontSize: "13px",
                fontWeight: 600,
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              {e.role}
            </button>
          ))}
        </div>

        {/* Active experience card */}
        <div
          style={{
            background: "#f8f9fc",
            borderRadius: "20px",
            border: "1px solid rgba(0,0,0,0.07)",
            boxShadow: "0 4px 30px rgba(0,0,0,0.06)",
            overflow: "hidden",
          }}
        >
          {/* Card header with accent bar */}
          <div
            style={{
              height: "3px",
              background: "linear-gradient(90deg, #4f7fff, #7c3aed)",
            }}
          />

          <div
            style={{
              padding: "40px",
              display: "grid",
              gridTemplateColumns: "280px 1fr",
              gap: "48px",
            }}
            className="exp-card-grid"
          >
            {/* Left: meta info */}
            <div>
              <h3
                style={{
                  fontSize: "22px",
                  fontWeight: 800,
                  color: "var(--text-dark)",
                  marginBottom: "6px",
                }}
              >
                {exp.role}
              </h3>
              <div
                style={{
                  fontSize: "15px",
                  fontWeight: 600,
                  color: "var(--accent-blue)",
                  marginBottom: "16px",
                }}
              >
                {exp.company}
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  marginBottom: "24px",
                }}
              >
                {[
                  { icon: "📅", text: exp.period },
                  { icon: "📍", text: exp.location },
                  { icon: "💼", text: exp.type },
                ].map((item) => (
                  <div
                    key={item.text}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      fontSize: "13px",
                      color: "var(--text-dim)",
                    }}
                  >
                    <span>{item.icon}</span>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      padding: "4px 10px",
                      borderRadius: "6px",
                      fontSize: "11px",
                      fontWeight: 600,
                      background: "rgba(79,127,255,0.08)",
                      border: "1px solid rgba(79,127,255,0.15)",
                      color: "var(--accent-blue)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: bullets */}
            <div>
              <h4
                style={{
                  fontSize: "13px",
                  fontWeight: 600,
                  color: "var(--text-dim)",
                  textTransform: "uppercase",
                  letterSpacing: "1.5px",
                  marginBottom: "20px",
                }}
              >
                Logros Principales
              </h4>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "16px" }}>
                {exp.bullets.map((bullet, i) => (
                  <li
                    key={i}
                    style={{
                      display: "flex",
                      gap: "12px",
                      fontSize: "14px",
                      lineHeight: 1.65,
                      color: "var(--text-dark-2)",
                    }}
                  >
                    <span
                      style={{
                        flexShrink: 0,
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                        background: "linear-gradient(135deg, #4f7fff, #7c3aed)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginTop: "2px",
                      }}
                    >
                      <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                        <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Dots indicator */}
        <div style={{ display: "flex", gap: "8px", justifyContent: "center", marginTop: "32px" }}>
          {experiences.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIdx(i)}
              style={{
                width: i === activeIdx ? "24px" : "8px",
                height: "8px",
                borderRadius: "4px",
                background: i === activeIdx ? "var(--accent-blue)" : "rgba(0,0,0,0.15)",
                border: "none",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              aria-label={`Ir a experiencia ${i + 1}`}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 800px) {
          .exp-card-grid {
            grid-template-columns: 1fr !important;
            gap: 28px !important;
          }
        }
      `}</style>
    </section>
  );
}
