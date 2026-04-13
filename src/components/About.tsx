"use client";

const stats = [
  { value: "1", label: "Años de Experiencia" },
  { value: "3+", label: "Proyectos Completados" },
  { value: "120k+", label: "Filas de Datos Procesadas" },
];

export default function About() {
  return (
    <>
      {/* About / Profile Section */}
      <section
        id="habilidades"
        style={{
          background: "var(--bg-dark)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "0",
              minHeight: "600px",
              alignItems: "stretch",
            }}
            className="about-grid"
          >
            {/* Left: Photo placeholder with dramatic effect */}
            <div
              style={{
                position: "relative",
                background: "linear-gradient(160deg, #0d0d1f 0%, #1a1a35 100%)",
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "center",
                overflow: "hidden",
                minHeight: "540px",
              }}
            >
              {/* Background elements */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: "60%",
                  background: "linear-gradient(to top, rgba(79,127,255,0.08), transparent)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "30px",
                  left: "30px",
                  width: "120px",
                  height: "120px",
                  borderRadius: "50%",
                  background: "radial-gradient(circle, rgba(79,127,255,0.12), transparent)",
                }}
              />

              {/* Silhouette/person illustration */}
              <svg
                viewBox="0 0 300 480"
                style={{
                  width: "70%",
                  maxWidth: "280px",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                {/* Suit body */}
                <rect x="80" y="200" width="140" height="240" rx="10" fill="#1a1a2e" />
                {/* Jacket lapels */}
                <path d="M150,200 L110,230 L125,480 L150,450 L175,480 L190,230Z" fill="#111122" />
                {/* Shirt/tie */}
                <path d="M145,200 L150,240 L155,200Z" fill="white" opacity="0.8" />
                <path d="M148,200 L150,300 L152,200Z" fill="#4f7fff" opacity="0.8" />
                {/* Head */}
                <ellipse cx="150" cy="160" rx="50" ry="55" fill="#d4a96a" />
                {/* Hair */}
                <ellipse cx="150" cy="120" rx="47" ry="25" fill="#2d1a0e" />
                {/* Ears */}
                <ellipse cx="100" cy="162" rx="9" ry="12" fill="#c49a5a" />
                <ellipse cx="200" cy="162" rx="9" ry="12" fill="#c49a5a" />
                {/* Eyes */}
                <ellipse cx="133" cy="162" rx="8" ry="9" fill="white" />
                <ellipse cx="167" cy="162" rx="8" ry="9" fill="white" />
                <circle cx="135" cy="163" r="5" fill="#3d2b1f" />
                <circle cx="169" cy="163" r="5" fill="#3d2b1f" />
                {/* Shoulders */}
                <ellipse cx="78" cy="205" rx="28" ry="18" fill="#1a1a2e" />
                <ellipse cx="222" cy="205" rx="28" ry="18" fill="#1a1a2e" />
              </svg>

              {/* Horizontal line at bottom */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: "3px",
                  background: "linear-gradient(90deg, transparent, #4f7fff, #7c3aed, transparent)",
                }}
              />
            </div>

            {/* Right: Info */}
            <div
              style={{
                padding: "64px 56px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                background: "var(--bg-dark-2)",
              }}
            >
              <div className="section-label" style={{ marginBottom: "16px" }}>
                Sobre mí
              </div>
              <h2
                style={{
                  fontSize: "clamp(28px, 3.5vw, 42px)",
                  fontWeight: 800,
                  color: "var(--text-white)",
                  letterSpacing: "-0.5px",
                  marginBottom: "20px",
                  lineHeight: 1.15,
                }}
              >
                Analista de Datos y{" "}
                <span
                  style={{
                    background: "linear-gradient(90deg, #4f7fff, #a78bfa)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Estratega Visual
                </span>
              </h2>

              <p
                style={{
                  fontSize: "14px",
                  color: "var(--text-muted)",
                  lineHeight: 1.75,
                  marginBottom: "36px",
                }}
              >
                Soy un analista de datos apasionado por transformar la complejidad en claridad. 
                Con más de 1 años desarrollando proyectos de análisis en sectores como logística, retail y redes sociales, siempre con foco en el impacto de negocio y la 
                toma de decisiones basada en evidencia. También he automatizado procesos repetitivos para la optimización de recursos, tiempo y costos.
              </p>

              {/* Skill grid */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "16px",
                  marginBottom: "36px",
                }}
              >
                {[
                  { label: "Power BI", value: "Avanzado" },
                  { label: "Python & Pandas", value: "Intermedio" },
                  { label: "n8n", value: "Intermedio" },
                  { label: "SQLServer / PostgreSQL", value: "Intermedio" },
                  { label: "Herramientas de IA", value: "Avanzado" },
                  { label: "AWS / GCP", value: "Básico" },
                ].map((skill) => (
                  <div
                    key={skill.label}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "10px 14px",
                      background: "rgba(255,255,255,0.03)",
                      borderRadius: "8px",
                      border: "1px solid rgba(255,255,255,0.05)",
                    }}
                  >
                    <span style={{ fontSize: "12px", color: "var(--text-muted)" }}>{skill.label}</span>
                    <span
                      style={{
                        fontSize: "11px",
                        fontWeight: 600,
                        color: "var(--accent-blue-light)",
                        background: "rgba(79,127,255,0.1)",
                        padding: "2px 8px",
                        borderRadius: "4px",
                      }}
                    >
                      {skill.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div
          style={{
            background: "rgba(79,127,255,0.06)",
            borderTop: "1px solid rgba(79,127,255,0.1)",
            borderBottom: "1px solid rgba(79,127,255,0.1)",
          }}
        >
          <div className="container">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "0",
                padding: "32px 0",
              }}
              className="stats-grid"
            >
              {stats.map((stat, i) => (
                <div
                  key={i}
                  style={{
                    textAlign: "center",
                    padding: "16px",
                    borderRight: i < stats.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none",
                  }}
                >
                  <div
                    style={{
                      fontSize: "32px",
                      fontWeight: 800,
                      background: "linear-gradient(90deg, #4f7fff, #a78bfa)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      marginBottom: "4px",
                    }}
                  >
                    {stat.value}
                  </div>
                  <div style={{ fontSize: "12px", color: "var(--text-dim)" }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </section>

      <style jsx>{`
        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr !important;
          }
          .stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </>
  );
}
