"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";

// ─────────────────────────────────────────────────────────────────────────────
// CONFIGURACIÓN EMAILJS
// Seguí los pasos del README o la guía de configuración para obtener estos valores
// ─────────────────────────────────────────────────────────────────────────────
const EMAILJS_SERVICE_ID  = "service_s72yvqq";   // 👈 Reemplazá
const EMAILJS_TEMPLATE_ID = "template_fqchot9";  // 👈 Reemplazá
const EMAILJS_PUBLIC_KEY  = "QNHMdABKXiY8d6HeV";   // 👈 Reemplazá
// ─────────────────────────────────────────────────────────────────────────────

const serviceOptions = [
  { id: "analisis", label: "Análisis de datos" },
  { id: "automatizacion", label: "Automatización" },
  { id: "viz", label: "Visualización" },
  { id: "otros", label: "Otros" },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    asunto: "",
    mensaje: "",
    service: "",
  });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name:    formData.name,
          from_email:   formData.email,
          subject:      formData.asunto,
          message:      formData.mensaje,
          service_type: serviceOptions.find(o => o.id === formData.service)?.label ?? "No especificado",
          // ⚠️ NO pongas to_email aquí — configurá el destinatario
          //    directamente en el template de EmailJS Dashboard
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      setSent(true);
    } catch (err: any) {
      console.error("EmailJS error →", err?.text ?? err?.status ?? err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contacto"
      style={{
        padding: "100px 0",
        background: "var(--bg-dark-2)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background effects */}
      <div
        style={{
          position: "absolute",
          bottom: "-20%",
          left: "-5%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(79,127,255,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "-20%",
          right: "-5%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "start",
          }}
          className="contact-grid"
        >
          {/* Left: Text content */}
          <div>
            <div className="section-label" style={{ marginBottom: "16px" }}>
              Contacto
            </div>
            <h2
              style={{
                fontSize: "clamp(30px, 4vw, 46px)",
                fontWeight: 800,
                color: "var(--text-white)",
                letterSpacing: "-1px",
                marginBottom: "20px",
                lineHeight: 1.15,
              }}
            >
              ¿Tienes un proyecto{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #4f7fff, #a78bfa)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                en mente?
              </span>
            </h2>
            <p
              style={{
                fontSize: "15px",
                color: "var(--text-muted)",
                lineHeight: 1.7,
                marginBottom: "40px",
                maxWidth: "420px",
              }}
            >
              Estoy disponible para proyectos freelance, consultoría de datos o 
              posiciones full-time. Cuéntame sobre tu proyecto y encontremos la 
              mejor solución juntos.
            </p>

            {/* Contact info */}
            <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginBottom: "40px" }}>
              {[
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  ),
                  label: "Email",
                  value: "samue0465@gmail.com",
                },
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  ),
                  label: "Ubicación",
                  value: "Buenos Aires, Argentina",
                },
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  ),
                  label: "Disponibilidad",
                  value: "Lun–Vie · 8am–6pm ART",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                  }}
                >
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "12px",
                      background: "rgba(79,127,255,0.1)",
                      border: "1px solid rgba(79,127,255,0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--accent-blue-light)",
                      flexShrink: 0,
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: "11px", color: "var(--text-dim)", marginBottom: "2px" }}>
                      {item.label}
                    </div>
                    <div style={{ fontSize: "14px", color: "var(--text-light)", fontWeight: 500 }}>
                      {item.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div style={{ display: "flex", gap: "12px" }}>
              {[
                {
                  label: "LinkedIn",
                  href: "#",
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  ),
                },
                {
                  label: "GitHub",
                  href: "#",
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                    </svg>
                  ),
                },
                {
                  label: "Twitter",
                  href: "#",
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  ),
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "12px",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--text-muted)",
                    textDecoration: "none",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(79,127,255,0.1)";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(79,127,255,0.3)";
                    (e.currentTarget as HTMLElement).style.color = "var(--accent-blue-light)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
                    (e.currentTarget as HTMLElement).style.color = "var(--text-muted)";
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right: Contact form */}
          <div
            style={{
              background: "rgba(13,13,31,0.7)",
              backdropFilter: "blur(20px)",
              borderRadius: "24px",
              border: "1px solid rgba(255,255,255,0.06)",
              padding: "40px",
              boxShadow: "0 24px 80px rgba(0,0,0,0.4)",
            }}
          >
            {sent ? (
              <div
                style={{
                  textAlign: "center",
                  padding: "40px 20px",
                }}
              >
                <div
                  style={{
                    width: "72px",
                    height: "72px",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #4f7fff, #7c3aed)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 20px",
                  }}
                >
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
                <h3 style={{ fontSize: "22px", fontWeight: 700, color: "white", marginBottom: "10px" }}>
                  ¡Mensaje enviado!
                </h3>
                <p style={{ color: "var(--text-muted)", fontSize: "14px" }}>
                  Gracias por contactarme. Te responderé en menos de 24 horas.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3
                  style={{
                    fontSize: "18px",
                    fontWeight: 700,
                    color: "var(--text-white)",
                    marginBottom: "28px",
                  }}
                >
                  Enviar mensaje
                </h3>

                {/* Fields */}
                <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "20px" }}>
                  {[
                    { name: "name", label: "Nombre completo", type: "text", placeholder: "John Doe" },
                    { name: "email", label: "Email", type: "email", placeholder: "john@empresa.com" },
                    { name: "asunto", label: "Asunto", type: "text", placeholder: "Proyecto de análisis..." },
                  ].map((field) => (
                    <div key={field.name}>
                      <label
                        htmlFor={field.name}
                        style={{
                          display: "block",
                          fontSize: "12px",
                          fontWeight: 600,
                          color: "var(--text-muted)",
                          marginBottom: "6px",
                          textTransform: "uppercase",
                          letterSpacing: "0.8px",
                        }}
                      >
                        {field.label}
                      </label>
                      <input
                        id={field.name}
                        name={field.name}
                        type={field.type}
                        placeholder={field.placeholder}
                        value={(formData as any)[field.name]}
                        onChange={handleChange}
                        required
                        style={{
                          width: "100%",
                          padding: "12px 16px",
                          background: "rgba(255,255,255,0.04)",
                          border: "1px solid rgba(255,255,255,0.08)",
                          borderRadius: "10px",
                          color: "var(--text-white)",
                          fontSize: "14px",
                          outline: "none",
                          transition: "border-color 0.2s",
                        }}
                        onFocus={(e) => (e.target.style.borderColor = "rgba(79,127,255,0.5)")}
                        onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.08)")}
                      />
                    </div>
                  ))}

                  {/* Textarea */}
                  <div>
                    <label
                      htmlFor="mensaje"
                      style={{
                        display: "block",
                        fontSize: "12px",
                        fontWeight: 600,
                        color: "var(--text-muted)",
                        marginBottom: "6px",
                        textTransform: "uppercase",
                        letterSpacing: "0.8px",
                      }}
                    >
                      Mensaje
                    </label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      placeholder="Cuéntame sobre tu proyecto..."
                      value={formData.mensaje}
                      onChange={handleChange}
                      required
                      rows={4}
                      style={{
                        width: "100%",
                        padding: "12px 16px",
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        borderRadius: "10px",
                        color: "var(--text-white)",
                        fontSize: "14px",
                        outline: "none",
                        resize: "vertical",
                        transition: "border-color 0.2s",
                        fontFamily: "inherit",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "rgba(79,127,255,0.5)")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.08)")}
                    />
                  </div>
                </div>

                {/* Service checkboxes */}
                <div style={{ marginBottom: "24px" }}>
                  <p style={{ fontSize: "12px", fontWeight: 600, color: "var(--text-muted)", marginBottom: "10px", textTransform: "uppercase", letterSpacing: "0.8px" }}>
                    Servicio de interés
                  </p>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
                    {serviceOptions.map((opt) => (
                      <label
                        key={opt.id}
                        htmlFor={opt.id}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          cursor: "pointer",
                          fontSize: "13px",
                          color: formData.service === opt.id ? "var(--accent-blue-light)" : "var(--text-muted)",
                          padding: "8px 12px",
                          borderRadius: "8px",
                          border: "1px solid",
                          borderColor: formData.service === opt.id ? "rgba(79,127,255,0.4)" : "rgba(255,255,255,0.06)",
                          background: formData.service === opt.id ? "rgba(79,127,255,0.08)" : "transparent",
                          transition: "all 0.2s",
                        }}
                      >
                        <input
                          id={opt.id}
                          type="radio"
                          name="service"
                          value={opt.id}
                          checked={formData.service === opt.id}
                          onChange={() => setFormData({ ...formData, service: opt.id })}
                          style={{ display: "none" }}
                        />
                        <span
                          style={{
                            width: "14px",
                            height: "14px",
                            borderRadius: "50%",
                            border: "2px solid",
                            borderColor: formData.service === opt.id ? "var(--accent-blue)" : "rgba(255,255,255,0.2)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                          }}
                        >
                          {formData.service === opt.id && (
                            <span
                              style={{
                                width: "6px",
                                height: "6px",
                                borderRadius: "50%",
                                background: "var(--accent-blue)",
                                display: "block",
                              }}
                            />
                          )}
                        </span>
                        {opt.label}
                      </label>
                    ))}
                  </div>
                </div>

                {/* Action buttons */}
                <div style={{ display: "flex", gap: "12px" }}>
                  <button
                    type="submit"
                    className="btn-primary"
                    disabled={loading}
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      opacity: loading ? 0.7 : 1,
                    }}
                  >
                    {loading ? (
                      <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ animation: "spin-slow 1s linear infinite" }}>
                          <path d="M21 12a9 9 0 11-6.219-8.56" />
                        </svg>
                        Enviando...
                      </span>
                    ) : (
                      "ENVIAR MENSAJE"
                    )}
                  </button>
                  <a
                    href="/cv_data.pdf"
                    download="CV_Samuel_Mendez.pdf"
                    className="btn-ghost"
                    style={{ flexShrink: 0 }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
                    </svg>
                    DESCARGAR CV
                  </a>
                </div>

                {/* Error message */}
                {error && (
                  <div
                    style={{
                      marginTop: "14px",
                      padding: "12px 16px",
                      borderRadius: "10px",
                      background: "rgba(239,68,68,0.08)",
                      border: "1px solid rgba(239,68,68,0.2)",
                      fontSize: "13px",
                      color: "#fca5a5",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="8" x2="12" y2="12" />
                      <line x1="12" y1="16" x2="12.01" y2="16" />
                    </svg>
                    Hubo un error al enviar. Intentá de nuevo o escribime directamente a samue0465@gmail.com
                  </div>
                )}
              </form>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
        input::placeholder, textarea::placeholder {
          color: rgba(148, 163, 184, 0.4);
        }
      `}</style>
    </section>
  );
}
