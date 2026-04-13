"use client";
import { useState, useEffect } from "react";

// ─────────────────────────────────────────────────────────────────────────────
// CERTIFICADOS — Editá este array para agregar más certificados
//
// CÓMO AGREGAR IMAGEN:
//   1. Guardá la imagen en: /public/certificates/  (ej: powerbi.png)
//   2. image: "/certificates/powerbi.png"
//   3. credential: "https://link-a-tu-credencial-online"  (o null)
// ─────────────────────────────────────────────────────────────────────────────
const certificates = [
  {
    id: 0,
    title: "Ingles para Tecnología de la Información",
    institution: "I.F.D Nro 7 CLODOMIRA",
    date: "12/2022  ",
    category: "Idiomas",
    credential: null, // 👈 Link a la credencial online (opcional)
    image: "/certificates/ingles-a2.png", // 👈 Reemplazá con tu imagen real
  },
  {
    id: 1,
    title: "Fundamentos de Power BI",
    institution: "Udemy",
    date: "08/2025",
    category: "Business Intelligence",
    credential: null, // 👈 Link a la credencial online (opcional)
    image: "/certificates/powerbi.png", // 👈 Reemplazá con tu imagen real
  },
  {
    id: 2,
    title: "Funciones DAX avanzadas, Objetos IA y dashboards en Power BI",
    institution: "Udemy",
    date: "03/2026",
    category: "Análisis de Datos",
    credential: null, // 👈 Link a la credencial online (opcional)
    image: "/certificates/dax.png", // 👈 Reemplazá con tu imagen real
  },
 
];
// ─────────────────────────────────────────────────────────────────────────────

// ─────────────────────────────────────────────────────────────────────────────
// ESTUDIOS UNIVERSITARIOS — Editá este array para agregar/modificar carreras
//
// status: "En curso" | "Egresado" | "Pausado"
// materiaspdf: ruta al PDF en /public/ (ej: "/materias-aprobadas.pdf") o null
// ─────────────────────────────────────────────────────────────────────────────
const universities = [
  {
    id: 0,
    career: "Ingeniería en Informática",
    institution: "Universidad Nacional de La Matanza",
    period: "2020 — Presente",
    status: "En curso" as "En curso" | "Egresado" | "Pausado",
    materiasPdf: "/certificates/materias-aprobadas.pdf", // 👈 null si no tenés PDF aún
  },
];
// ─────────────────────────────────────────────────────────────────────────────

const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
  "Análisis de Datos":    { bg: "rgba(79,127,255,0.1)",   text: "#7aa3ff", border: "rgba(79,127,255,0.2)" },
  "Business Intelligence":{ bg: "rgba(124,58,237,0.1)",   text: "#a78bfa", border: "rgba(124,58,237,0.2)" },
  "Programación":         { bg: "rgba(6,182,212,0.1)",    text: "#67e8f9", border: "rgba(6,182,212,0.2)" },
  "Bases de Datos":       { bg: "rgba(34,197,94,0.1)",    text: "#86efac", border: "rgba(34,197,94,0.2)" },
  "Automatización":       { bg: "rgba(251,146,60,0.1)",   text: "#fdba74", border: "rgba(251,146,60,0.2)" },
  "Machine Learning":     { bg: "rgba(244,63,94,0.1)",    text: "#fda4af", border: "rgba(244,63,94,0.2)" },
  "Idiomas":              { bg: "rgba(244,63,94,0.1)",    text: "#fda4af", border: "rgba(244,63,94,0.2)" },
};

export default function Certificates() {
  const [modal, setModal] = useState<string | null>(null); // imagen en el modal
  const [hovered, setHovered] = useState<number | null>(null);

  // Cerrar modal con Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setModal(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Bloquear scroll cuando el modal está abierto
  useEffect(() => {
    if (modal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [modal]);

  return (
    <>
      <section
        id="certificados"
        style={{
          padding: "80px 0 100px",
          background: "var(--bg-dark-2)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Top divider line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: "600px",
            height: "1px",
            background: "linear-gradient(90deg, transparent, rgba(79,127,255,0.3), transparent)",
          }}
        />

        <div className="container">
          {/* Header */}
          <div style={{ marginBottom: "52px" }}>
            <div className="section-label" style={{ marginBottom: "12px" }}>
              Formación Continua
            </div>
            <h2
              style={{
                fontSize: "clamp(28px, 3.5vw, 40px)",
                fontWeight: 800,
                color: "var(--text-white)",
                letterSpacing: "-0.5px",
                marginBottom: "12px",
              }}
            >
              Certificados &{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #4f7fff, #a78bfa)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Estudios
              </span>
            </h2>
            <p style={{ fontSize: "14px", color: "var(--text-muted)", maxWidth: "480px" }}>
              Cursos y certificaciones que respaldan mis habilidades técnicas.
              Hacé clic en un certificado para verlo completo.
            </p>
          </div>

          {/* Cards grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "20px",
            }}
          >
            {certificates.map((cert, i) => {
              const color = categoryColors[cert.category] ?? categoryColors["Business Intelligence"];
              const isHovered = hovered === i;

              return (
                <div
                  key={cert.id}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  onClick={() => cert.image && setModal(cert.image)}
                  style={{
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid",
                    borderColor: isHovered ? "rgba(79,127,255,0.35)" : "rgba(255,255,255,0.06)",
                    borderRadius: "18px",
                    overflow: "hidden",
                    transition: "all 0.25s ease",
                    transform: isHovered ? "translateY(-4px)" : "none",
                    boxShadow: isHovered ? "0 16px 48px rgba(0,0,0,0.35)" : "none",
                    cursor: cert.image ? "pointer" : "default",
                  }}
                >
                  {/* ── MINIATURA DEL CERTIFICADO ── */}
                  <div
                    style={{
                      position: "relative",
                      height: "190px",
                      background: "rgba(0,0,0,0.3)",
                      overflow: "hidden",
                    }}
                  >
                    {cert.image ? (
                      <>
                        <img
                          src={cert.image}
                          alt={cert.title}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            objectPosition: "top",
                            display: "block",
                            transition: "transform 0.4s ease",
                            transform: isHovered ? "scale(1.04)" : "scale(1)",
                          }}
                        />
                        {/* Hover overlay con ícono */}
                        <div
                          style={{
                            position: "absolute",
                            inset: 0,
                            background: "rgba(79,127,255,0.15)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            opacity: isHovered ? 1 : 0,
                            transition: "opacity 0.25s ease",
                            backdropFilter: "blur(2px)",
                          }}
                        >
                          <div
                            style={{
                              width: "52px",
                              height: "52px",
                              borderRadius: "50%",
                              background: "rgba(79,127,255,0.9)",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              boxShadow: "0 4px 20px rgba(79,127,255,0.5)",
                            }}
                          >
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                              <circle cx="11" cy="11" r="8" />
                              <path d="M21 21l-4.35-4.35M11 8v6M8 11h6" />
                            </svg>
                          </div>
                        </div>
                      </>
                    ) : (
                      /* Placeholder si no hay imagen */
                      <div
                        style={{
                          width: "100%",
                          height: "100%",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "10px",
                          background: "linear-gradient(135deg, rgba(79,127,255,0.06), rgba(124,58,237,0.06))",
                        }}
                      >
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="rgba(79,127,255,0.35)" strokeWidth="1.5">
                          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                          <polyline points="14 2 14 8 20 8" />
                          <line x1="16" y1="13" x2="8" y2="13" />
                          <line x1="16" y1="17" x2="8" y2="17" />
                          <polyline points="10 9 9 9 8 9" />
                        </svg>
                        <span style={{ fontSize: "12px", color: "rgba(79,127,255,0.4)", fontWeight: 500 }}>
                          Sin imagen
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Card content */}
                  <div style={{ padding: "18px 22px 20px" }}>
                    <h3
                      style={{
                        fontSize: "15px",
                        fontWeight: 700,
                        color: "var(--text-white)",
                        lineHeight: 1.3,
                        marginBottom: "6px",
                      }}
                    >
                      {cert.title}
                    </h3>
                    <div
                      style={{
                        fontSize: "12px",
                        color: "var(--text-dim)",
                        marginBottom: "14px",
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                      }}
                    >
                      <span>{cert.institution}</span>
                      <span style={{ opacity: 0.4 }}>·</span>
                      <span>{cert.date}</span>
                    </div>

                    {/* Bottom row */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "8px",
                      }}
                    >
                      <span
                        style={{
                          padding: "3px 10px",
                          borderRadius: "100px",
                          fontSize: "10px",
                          fontWeight: 700,
                          letterSpacing: "0.5px",
                          background: color.bg,
                          color: color.text,
                          border: `1px solid ${color.border}`,
                        }}
                      >
                        {cert.category}
                      </span>

                      {cert.credential && (
                        <a
                          href={cert.credential}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "4px",
                            fontSize: "11px",
                            fontWeight: 600,
                            color: "var(--text-dim)",
                            textDecoration: "none",
                            transition: "color 0.2s",
                          }}
                          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent-blue-light)")}
                          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-dim)")}
                        >
                          Ver credencial
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ── ESTUDIOS UNIVERSITARIOS (datos desde array `universities`) ── */}
          <div
            style={{
              marginTop: "52px",
              paddingTop: "48px",
              borderTop: "1px solid rgba(255,255,255,0.05)",
            }}
          >
            <div
              style={{
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "var(--accent-blue)",
                marginBottom: "24px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c3 3 9 3 12 0v-5" />
              </svg>
              Educación universitaria
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {universities.map((uni) => {
                const statusStyle =
                  uni.status === "Egresado"
                    ? { bg: "rgba(79,127,255,0.1)",  color: "#7aa3ff", border: "rgba(79,127,255,0.2)" }
                    : uni.status === "Pausado"
                    ? { bg: "rgba(251,146,60,0.1)",  color: "#fdba74", border: "rgba(251,146,60,0.2)" }
                    : { bg: "rgba(34,197,94,0.1)",   color: "#86efac", border: "rgba(34,197,94,0.2)" };

                return (
                  <div
                    key={uni.id}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      flexWrap: "wrap",
                      gap: "24px",
                      background: "rgba(255,255,255,0.02)",
                      border: "1px solid rgba(255,255,255,0.06)",
                      borderRadius: "18px",
                      padding: "28px 32px",
                    }}
                  >
                    {/* Info */}
                    <div style={{ display: "flex", gap: "20px", alignItems: "flex-start", flexWrap: "wrap" }}>
                      {/* Ícono */}
                      <div
                        style={{
                          width: "52px",
                          height: "52px",
                          borderRadius: "14px",
                          background: "linear-gradient(135deg, rgba(79,127,255,0.15), rgba(124,58,237,0.15))",
                          border: "1px solid rgba(79,127,255,0.2)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7aa3ff" strokeWidth="1.8">
                          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                          <path d="M6 12v5c3 3 9 3 12 0v-5" />
                        </svg>
                      </div>

                      <div>
                        <h3
                          style={{
                            fontSize: "17px",
                            fontWeight: 700,
                            color: "var(--text-white)",
                            marginBottom: "4px",
                          }}
                        >
                          {uni.career}
                        </h3>
                        <div
                          style={{
                            fontSize: "13px",
                            color: "var(--accent-blue-light)",
                            fontWeight: 600,
                            marginBottom: "10px",
                          }}
                        >
                          {uni.institution}
                        </div>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                          <span
                            style={{
                              padding: "3px 10px",
                              borderRadius: "100px",
                              fontSize: "10px",
                              fontWeight: 700,
                              letterSpacing: "0.5px",
                              background: statusStyle.bg,
                              color: statusStyle.color,
                              border: `1px solid ${statusStyle.border}`,
                            }}
                          >
                            {uni.status}
                          </span>
                          <span
                            style={{
                              padding: "3px 10px",
                              borderRadius: "100px",
                              fontSize: "10px",
                              fontWeight: 700,
                              letterSpacing: "0.5px",
                              background: "rgba(255,255,255,0.05)",
                              color: "var(--text-dim)",
                              border: "1px solid rgba(255,255,255,0.08)",
                            }}
                          >
                            {uni.period}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Botón PDF materias (solo si hay PDF) */}
                    {uni.materiasPdf && (
                      <a
                        href={uni.materiasPdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "8px",
                          padding: "11px 20px",
                          borderRadius: "10px",
                          border: "1px solid rgba(79,127,255,0.25)",
                          background: "rgba(79,127,255,0.07)",
                          color: "var(--accent-blue-light)",
                          fontSize: "13px",
                          fontWeight: 600,
                          textDecoration: "none",
                          transition: "all 0.2s ease",
                          whiteSpace: "nowrap",
                          flexShrink: 0,
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLElement).style.background = "rgba(79,127,255,0.15)";
                          (e.currentTarget as HTMLElement).style.borderColor = "rgba(79,127,255,0.5)";
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLElement).style.background = "rgba(79,127,255,0.07)";
                          (e.currentTarget as HTMLElement).style.borderColor = "rgba(79,127,255,0.25)";
                        }}
                      >
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                          <polyline points="14 2 14 8 20 8" />
                          <line x1="16" y1="13" x2="8" y2="13" />
                          <line x1="16" y1="17" x2="8" y2="17" />
                        </svg>
                        Ver materias aprobadas
                      </a>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {modal && (
        <div
          onClick={() => setModal(null)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "rgba(0,0,0,0.85)",
            backdropFilter: "blur(10px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "24px",
            animation: "fadeIn 0.2s ease",
          }}
        >
          {/* Modal container */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative",
              maxWidth: "900px",
              width: "100%",
              maxHeight: "90vh",
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: "0 40px 120px rgba(0,0,0,0.8), 0 0 0 1px rgba(79,127,255,0.2)",
              animation: "fadeInUp 0.25s ease",
            }}
          >
            {/* Close button */}
            <button
              onClick={() => setModal(null)}
              aria-label="Cerrar"
              style={{
                position: "absolute",
                top: "14px",
                right: "14px",
                zIndex: 10,
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                background: "rgba(0,0,0,0.6)",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(255,255,255,0.15)",
                color: "white",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "rgba(79,127,255,0.7)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "rgba(0,0,0,0.6)")}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>

            {/* Certificate image */}
            <img
              src={modal}
              alt="Certificado"
              style={{
                width: "100%",
                height: "auto",
                maxHeight: "90vh",
                objectFit: "contain",
                display: "block",
                background: "#fff",
              }}
            />
          </div>

          {/* Hint text */}
          <p
            style={{
              position: "fixed",
              bottom: "20px",
              left: "50%",
              transform: "translateX(-50%)",
              fontSize: "12px",
              color: "rgba(255,255,255,0.35)",
              pointerEvents: "none",
            }}
          >
            Presioná Esc o hacé clic afuera para cerrar
          </p>
        </div>
      )}
    </>
  );
}
