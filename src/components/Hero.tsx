"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";

// 3D data visualization SVG component
function DataViz() {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Outer ring */}
      <div
        style={{
          position: "absolute",
          width: "420px",
          height: "420px",
          borderRadius: "50%",
          border: "1px solid rgba(79, 127, 255, 0.15)",
          animation: "spin-slow 20s linear infinite",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: "320px",
          height: "320px",
          borderRadius: "50%",
          border: "1px solid rgba(124, 58, 237, 0.2)",
          animation: "spin-slow 15s linear infinite reverse",
        }}
      />

      {/* Central visualization */}
      <svg
        width="380"
        height="320"
        viewBox="0 0 380 320"
        style={{ position: "relative", zIndex: 1 }}
      >
        <defs>
          <linearGradient id="waveGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4f7fff" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.6" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Grid lines */}
        {[0, 1, 2, 3, 4, 5, 6].map((i) => (
          <line
            key={`h${i}`}
            x1="20" y1={40 + i * 40} x2="360" y2={40 + i * 40}
            stroke="rgba(255,255,255,0.04)" strokeWidth="1"
          />
        ))}
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <line
            key={`v${i}`}
            x1={20 + i * 45} y1="20" x2={20 + i * 45} y2="300"
            stroke="rgba(255,255,255,0.04)" strokeWidth="1"
          />
        ))}

        {/* Area chart */}
        <path
          d="M20,240 L65,200 L110,210 L155,160 L200,140 L245,100 L290,80 L335,60 L360,50 L360,280 L20,280Z"
          fill="url(#waveGrad)"
          opacity="0.15"
        />
        <path
          d="M20,240 L65,200 L110,210 L155,160 L200,140 L245,100 L290,80 L335,60 L360,50"
          fill="none"
          stroke="url(#waveGrad)"
          strokeWidth="2.5"
          filter="url(#glow)"
        />

        {/* Second line */}
        <path
          d="M20,260 L65,230 L110,240 L155,200 L200,185 L245,155 L290,130 L335,110 L360,100"
          fill="none"
          stroke="rgba(124, 58, 237, 0.6)"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />

        {/* Data points */}
        {[
          [65, 200], [155, 160], [245, 100], [335, 60]
        ].map(([x, y], i) => (
          <g key={i}>
            <circle cx={x} cy={y} r="6" fill="var(--accent-blue)" filter="url(#glow)" />
            <circle cx={x} cy={y} r="12" fill="none" stroke="var(--accent-blue)" strokeWidth="1" opacity="0.4" />
          </g>
        ))}

        {/* Bars (histogram at bottom) */}
        {[0, 1, 2, 3, 4, 5, 6].map((i) => (
          <rect
            key={i}
            x={30 + i * 49}
            y={280 - (30 + i * 15)}
            width="22"
            height={30 + i * 15}
            rx="3"
            fill={`rgba(79, 127, 255, ${0.15 + i * 0.05})`}
            stroke="rgba(79, 127, 255, 0.3)"
            strokeWidth="0.5"
          />
        ))}

        {/* Value labels */}
        <text x="245" y="90" fill="white" fontSize="12" fontWeight="600" textAnchor="middle" filter="url(#glow)">
          +24.5%
        </text>
      </svg>

      {/* Floating stat cards */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          right: "0",
          background: "rgba(13, 13, 31, 0.9)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(79,127,255,0.2)",
          borderRadius: "12px",
          padding: "14px 18px",
          animation: "float 6s ease-in-out infinite",
        }}
      >
        <div style={{ fontSize: "11px", color: "var(--text-muted)", marginBottom: "4px" }}>KPIs realizados</div>
        <div style={{ fontSize: "22px", fontWeight: 700, color: "var(--accent-blue)" }}>20+</div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "15%",
          left: "0",
          background: "rgba(13, 13, 31, 0.9)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(124,58,237,0.2)",
          borderRadius: "12px",
          padding: "14px 18px",
          animation: "float 6s ease-in-out infinite 2s",
        }}
      >
        <div style={{ fontSize: "11px", color: "var(--text-muted)", marginBottom: "4px" }}>Registros <br /> Procesados</div>
        <div style={{ fontSize: "22px", fontWeight: 700, color: "#a78bfa" }}>120k+</div>
      </div>
    </div>
  );
}

// Terminal / code preview card
function CodeCard() {
  return (
    <div
      style={{
        background: "rgba(13, 13, 31, 0.95)",
        border: "1px solid rgba(79, 127, 255, 0.15)",
        borderRadius: "16px",
        overflow: "hidden",
        boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
        maxWidth: "320px",
        animation: "float 7s ease-in-out infinite 1s",
      }}
    >
      {/* Terminal header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          padding: "12px 16px",
          background: "rgba(255,255,255,0.03)",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5f57" }} />
        <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#febc2e" }} />
        <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#28c840" }} />
        <span style={{ marginLeft: "auto", fontSize: "11px", color: "var(--text-dim)" }}>
          analysis.py
        </span>
      </div>
      {/* Code */}
      <div style={{ padding: "16px", fontFamily: "monospace", fontSize: "12px", lineHeight: "1.8" }}>
        <div><span style={{ color: "#7c3aed" }}>import</span> <span style={{ color: "#67e8f9" }}>pandas</span> <span style={{ color: "#7c3aed" }}>as</span> <span style={{ color: "#67e8f9" }}>pd</span></div>
        <div><span style={{ color: "#7c3aed" }}>import</span> <span style={{ color: "#67e8f9" }}>numpy</span> <span style={{ color: "#7c3aed" }}>as</span> <span style={{ color: "#67e8f9" }}>np</span></div>
        <div style={{ marginTop: "8px" }}>
          <span style={{ color: "#4f7fff" }}>df</span> = pd.<span style={{ color: "#fbbf24" }}>read_csv</span>(<span style={{ color: "#86efac" }}>&apos;data.csv&apos;</span>)
        </div>
        <div>
          <span style={{ color: "#4f7fff" }}>insights</span> = df.<span style={{ color: "#fbbf24" }}>analyze</span>()
        </div>
        <div style={{ marginTop: "8px", color: "#94a3b8" }}>
          <span style={{ color: "#28c840" }}># Rows: 120K processed</span>
        </div>
        <div style={{ color: "#94a3b8" }}>
          <span style={{ color: "#28c840" }}># Accuracy: 97.3%</span>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="inicio"
      style={{
        minHeight: "100vh",
        background: "var(--bg-dark)",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Background effects */}
      <div
        style={{
          position: "absolute",
          top: "-20%",
          left: "-10%",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(79,127,255,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-20%",
          right: "-10%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Grid background */}
      <div
        className="grid-bg"
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.5,
          pointerEvents: "none",
        }}
      />

      <div className="container" style={{ width: "100%", paddingTop: "100px", paddingBottom: "60px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "60px",
            alignItems: "center",
          }}
          className="hero-grid"
        >
          {/* Left content */}
          <div>
            {/* Badge */}
            <div className="badge" style={{ marginBottom: "24px" }}>
              <span
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: "#28c840",
                  display: "inline-block",
                  boxShadow: "0 0 8px #28c840",
                }}
              />
              Disponible para proyectos
            </div>

            {/* Main title */}
            <h1
              style={{
                fontSize: "clamp(42px, 5vw, 64px)",
                fontWeight: 800,
                lineHeight: 1.1,
                marginBottom: "24px",
                color: "var(--text-white)",
                letterSpacing: "-1.5px",
              }}
            >
              Samuel Mendez 
              <span
                style={{
                  display: "block",
                  background: "linear-gradient(90deg, #4f7fff 0%, #a78bfa 60%, #7c3aed 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Analista de Datos
              </span>
              <span style={{ fontStyle: "italic", color: "var(--text-light)" }}>
                Transformo datos en 
              </span>{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #7c3aed, #4f7fff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                decisiones
              </span>
            </h1>

            {/* Description */}
            <p
              style={{
                fontSize: "16px",
                color: "var(--text-muted)",
                lineHeight: 1.7,
                maxWidth: "480px",
                marginBottom: "36px",
              }}
            >
              Especializado en análisis de datos, automatizaciones y visualización estratégica.
              Transformo conjuntos de datos complejos en narrativas claras y decisiones de negocio
              de alto impacto.
            </p>

            {/* CTA Buttons */}
            <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
              <Link href="#proyectos" className="btn-primary">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 3l14 9-14 9V3z" />
                </svg>
                VER PROYECTOS
              </Link>
              <a
                href="/cv_data.pdf"
                download="CV_Samuel_Mendez.pdf"
                className="btn-ghost"
              >
                DESCARGAR CV
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
                </svg>
              </a>
            </div>

            {/* Stats row */}
            <div
              style={{
                display: "flex",
                gap: "40px",
                marginTop: "52px",
                paddingTop: "32px",
                borderTop: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              {[
                { value: "1+", label: "Años de Experiencia" },
                { value: "3+", label: "Proyectos Completados" },
                { value: "120K+", label: "Filas de Datos Procesadas" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div
                    style={{
                      fontSize: "28px",
                      fontWeight: 800,
                      background: "linear-gradient(90deg, #4f7fff, #a78bfa)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {stat.value}
                  </div>
                  <div style={{ fontSize: "12px", color: "var(--text-dim)", marginTop: "2px" }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right visualization */}
          <div
            style={{
              position: "relative",
              height: "500px",
              display: "flex",
              flexDirection: "column",
              gap: "24px",
              alignItems: "center",
            }}
            className="hero-right"
          >
            <div style={{ position: "relative", width: "100%", height: "300px" }}>
              <DataViz />
            </div>
            <CodeCard />
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .hero-right {
            height: 360px !important;
          }
        }
        @media (max-width: 600px) {
          .hero-right {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
