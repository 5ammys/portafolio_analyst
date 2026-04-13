"use client";
import { useState } from "react";
import Link from "next/link";

// ─────────────────────────────────────────────────────────────────────────────
// PROYECTOS — Edita este array para personalizar tus proyectos
//
// CÓMO AGREGAR UNA IMAGEN:
//   1. Guardá tu imagen en: /public/projects/   (ej: mi-proyecto.png)
//   2. En el campo "image" escribí: "/projects/mi-proyecto.png"
//   3. Si no tenés imagen, dejá image: null  → se muestra un placeholder
// ─────────────────────────────────────────────────────────────────────────────
const projects = [
  {
    id: 0,
    title: "Análisis de Ventas y Rentabilidad",
    description:
      "Dashboard interactivo para analizar ventas, rentabilidad y comportamiento comercial. Incluye análisis temporal (MoM, YoY), identificación de productos con alto volumen pero bajo margen y segmentación por categoría y región.",
    tags: ["Power BI", "SQL", "Excel"],
    tagColors: ["blue", "purple", "blue"],
    category: "Business Intelligence",
    metrics: "+15% mejora potencial en rentabilidad identificada",
    image: null, // 👈 Reemplazá null por "/projects/tu-imagen.png"
    link: "#",   // 👈 URL del proyecto (GitHub, demo, etc.)
  },
  {
    id: 1,
    title: "Análisis de Clientes (RFM & Segmentación)",
    description:
      "Análisis RFM y segmentación de clientes para identificar grupos de valor, predecir churn y personalizar estrategias de retención. Incluye segmentación por valor, frecuencia y recencia.",
    tags: ["Power BI", "SQL", "Excel"],
    tagColors: ["blue", "purple", "blue"],
    category: "Business Intelligence",
    metrics: "Top 20% clientes generan ~60% de ingresos",
    image: null, // 👈 Reemplazá null por "/projects/tu-imagen.png"
    link: "#",
  },
  {
    id: 2,
    title: "Análisis de Sentimiento Social",
    description:
      "Pipeline de NLP para análisis de sentimiento en tiempo real sobre redes sociales. Procesó +500K tweets diarios con clasificación de emociones y detección de tendencias.",
    tags: ["NLP", "BERT", "AWS"],
    tagColors: ["cyan", "purple", "blue"],
    category: "NLP",
    metrics: "500K tweets/día",
    image: null, // 👈 Reemplazá null por "/projects/tu-imagen.png"
    link: "#",
  },
];
// ─────────────────────────────────────────────────────────────────────────────

// Placeholder que se muestra cuando image: null
function ImagePlaceholder({ category }: { category: string }) {
  return (
    <div
      style={{
        width: "100%",
        height: "180px",
        background: "linear-gradient(135deg, rgba(79,127,255,0.06) 0%, rgba(124,58,237,0.06) 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="rgba(79,127,255,0.4)" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path d="M21 15l-5-5L5 21" />
      </svg>
      <span style={{ fontSize: "11px", color: "rgba(79,127,255,0.4)", fontWeight: 500 }}>
        Agregar imagen del proyecto
      </span>
    </div>
  );
}

export default function Projects() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      id="proyectos"
      style={{
        padding: "100px 0",
        background: "var(--bg-dark)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* BG gradient */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "800px",
          height: "400px",
          background: "radial-gradient(ellipse, rgba(79,127,255,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="container">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <div
            className="section-label"
            style={{ justifyContent: "center", marginBottom: "16px" }}
          >
            Portfolio
          </div>
          <h2
            style={{
              fontSize: "clamp(32px, 4vw, 48px)",
              fontWeight: 800,
              color: "var(--text-white)",
              letterSpacing: "-1px",
              marginBottom: "16px",
            }}
          >
            Proyectos Destacados
          </h2>
          <p style={{ fontSize: "15px", color: "var(--text-muted)", maxWidth: "520px", margin: "0 auto" }}>
            Una selección de mis mejores trabajos, combinando análisis avanzado,
            automatización y visualización de datos para resolver problemas reales.
          </p>
        </div>

        {/* Project cards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px",
            marginBottom: "64px",
          }}
          className="projects-grid"
        >
          {projects.map((project, i) => (
            <div
              key={project.id}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                background: "var(--bg-card)",
                borderRadius: "20px",
                border: "1px solid",
                borderColor: hovered === i ? "rgba(79,127,255,0.35)" : "rgba(255,255,255,0.05)",
                overflow: "hidden",
                transition: "all 0.3s ease",
                transform: hovered === i ? "translateY(-6px)" : "none",
                boxShadow: hovered === i ? "0 20px 60px rgba(0,0,0,0.4), 0 0 0 1px rgba(79,127,255,0.2)" : "none",
                cursor: "pointer",
              }}
            >
              {/* ── IMAGEN DEL PROYECTO ── */}
              {project.image ? (
                <div style={{ overflow: "hidden", height: "180px" }}>
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                      transition: "transform 0.4s ease",
                      transform: hovered === i ? "scale(1.05)" : "scale(1)",
                    }}
                  />
                </div>
              ) : (
                <ImagePlaceholder category={project.category} />
              )}

              {/* Content */}
              <div style={{ padding: "24px" }}>
                {/* Category badge */}
                <div
                  style={{
                    display: "inline-block",
                    padding: "3px 10px",
                    borderRadius: "100px",
                    fontSize: "10px",
                    fontWeight: 700,
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                    background: "rgba(79,127,255,0.1)",
                    color: "var(--accent-blue-light)",
                    marginBottom: "12px",
                  }}
                >
                  {project.category}
                </div>

                <h3
                  style={{
                    fontSize: "17px",
                    fontWeight: 700,
                    color: "var(--text-white)",
                    marginBottom: "10px",
                    lineHeight: 1.3,
                  }}
                >
                  {project.title}
                </h3>
                <p
                  style={{
                    fontSize: "13px",
                    color: "var(--text-muted)",
                    lineHeight: 1.65,
                    marginBottom: "18px",
                  }}
                >
                  {project.description}
                </p>

                {/* Tags */}
                <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginBottom: "18px" }}>
                  {project.tags.map((tag, ti) => (
                    <span key={tag} className={`tech-tag ${project.tagColors[ti]}`}>
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingTop: "14px",
                    borderTop: "1px solid rgba(255,255,255,0.05)",
                  }}
                >
                  <span style={{ fontSize: "12px", color: "var(--accent-blue)", fontWeight: 600 }}>
                    {project.metrics}
                  </span>
                  <Link
                    href={project.link}
                    style={{
                      fontSize: "12px",
                      fontWeight: 600,
                      color: "var(--text-muted)",
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent-blue-light)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
                  >
                    Ver más
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .projects-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 600px) {
          .projects-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
