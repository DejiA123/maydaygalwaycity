import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, ExternalLink } from "lucide-react";

export const Route = createFileRoute("/register")({
  head: () => ({
    meta: [
      { title: "Register Free — Galway City's MayDay" },
      { name: "description", content: "Free RSVP for Galway City's MayDay football festival on August 3rd in Mervue, Galway." },
      { property: "og:title", content: "Register Free — Galway City's MayDay" },
      { property: "og:description", content: "Free RSVP for MayDay, August 3rd in Mervue, Galway." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: RegisterPage,
});

const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfAe9_hcurTjZKNuQSscrxWCDWyibwuODALBJR0f1t_VO1Qtg/viewform?embedded=true";

const GOOGLE_FORM_DIRECT =
  "https://docs.google.com/forms/d/e/1FAIpQLSfAe9_hcurTjZKNuQSscrxWCDWyibwuODALBJR0f1t_VO1Qtg/viewform?usp=header";

function RegisterPage() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="register-page">
      {/* ── Hero section ── */}
      <div className="register-hero">
        <div className="register-hero-inner">
          <div className="register-tag">Free RSVP</div>
          <h1 className="register-title">
            SAVE YOUR <span className="text-gradient">SPOT</span>
          </h1>
          <p className="register-subtitle">
            Fill in the form below and we'll send you confirmation, venue info
            and updates for <strong>August 3rd</strong> in Mervue, Galway.
          </p>
          <ul className="register-perks">
            <li><span className="register-check">✔</span> 100% free to RSVP</li>
            <li><span className="register-check">✔</span> Pick your tournament when you sign up</li>
            <li><span className="register-check">✔</span> Full details emailed before the day</li>
          </ul>
          <a
            href={GOOGLE_FORM_DIRECT}
            target="_blank"
            rel="noopener noreferrer"
            className="register-external-link"
          >
            Open form in new tab <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>

      {/* ── Embedded form section ── */}
      <div className="register-form-section">
        <div className="register-form-wrapper">
          {/* Loading state */}
          {!loaded && (
            <div className="register-loader">
              <div className="register-spinner" />
              <span>Loading registration form…</span>
            </div>
          )}

          <iframe
            src={GOOGLE_FORM_URL}
            title="MayDay Galway City Registration Form"
            className={`register-iframe ${loaded ? "register-iframe--visible" : ""}`}
            onLoad={() => setLoaded(true)}
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            allowFullScreen
          >
            Loading…
          </iframe>
        </div>

        <p className="register-fallback">
          Having trouble viewing the form?{" "}
          <a href={GOOGLE_FORM_DIRECT} target="_blank" rel="noopener noreferrer">
            Open it directly here
          </a>
          .
        </p>
      </div>

      <style>{`
        .register-page {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        /* ── Hero ── */
        .register-hero {
          position: relative;
          padding: 5rem 1.25rem 3rem;
          text-align: center;
          overflow: hidden;
        }
        .register-hero::before {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(
            ellipse 70% 50% at 50% 0%,
            oklch(0.35 0.15 300 / 0.25) 0%,
            transparent 100%
          );
          pointer-events: none;
        }
        .register-hero-inner {
          position: relative;
          max-width: 640px;
          margin: 0 auto;
        }
        .register-tag {
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: var(--color-accent, oklch(0.75 0.18 300));
        }
        .register-title {
          margin-top: 0.75rem;
          font-family: var(--font-display, inherit);
          font-size: clamp(2.5rem, 6vw, 4rem);
          line-height: 1.05;
        }
        .register-subtitle {
          margin-top: 1.25rem;
          color: var(--color-muted-foreground, #999);
          max-width: 480px;
          margin-inline: auto;
          line-height: 1.6;
        }
        .register-subtitle strong {
          color: var(--color-foreground, #fff);
        }

        .register-perks {
          list-style: none;
          padding: 0;
          margin: 2rem auto 0;
          display: inline-flex;
          flex-direction: column;
          gap: 0.65rem;
          text-align: left;
          font-size: 0.85rem;
          color: var(--color-muted-foreground, #999);
        }
        .register-perks li {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .register-check {
          color: var(--color-accent, oklch(0.75 0.18 300));
          font-size: 0.9rem;
        }

        .register-external-link {
          margin-top: 1.5rem;
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.8rem;
          font-weight: 500;
          color: var(--color-muted-foreground, #999);
          text-decoration: none;
          transition: color 0.2s;
        }
        .register-external-link:hover {
          color: var(--color-foreground, #fff);
        }

        /* ── Form section ── */
        .register-form-section {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0 1.25rem 4rem;
        }

        .register-form-wrapper {
          position: relative;
          width: 100%;
          max-width: 720px;
          border-radius: 1rem;
          overflow: hidden;
          border: 1px solid var(--color-border, rgba(255 255 255 / 0.08));
          background: var(--color-card, rgba(255 255 255 / 0.04));
          box-shadow:
            0 0 0 1px rgba(255 255 255 / 0.03),
            0 20px 60px -12px rgba(0 0 0 / 0.5),
            0 0 40px -8px oklch(0.5 0.2 300 / 0.08);
          min-height: 600px;
        }

        /* Loading overlay */
        .register-loader {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          z-index: 2;
          font-size: 0.85rem;
          color: var(--color-muted-foreground, #999);
          background: var(--color-card, rgba(255 255 255 / 0.04));
        }
        .register-spinner {
          width: 32px;
          height: 32px;
          border: 3px solid var(--color-border, rgba(255 255 255 / 0.1));
          border-top-color: var(--color-accent, oklch(0.75 0.18 300));
          border-radius: 50%;
          animation: register-spin 0.8s linear infinite;
        }
        @keyframes register-spin {
          to { transform: rotate(360deg); }
        }

        /* Iframe */
        .register-iframe {
          display: block;
          width: 100%;
          height: 1100px;
          border: none;
          opacity: 0;
          transition: opacity 0.5s ease;
        }
        .register-iframe--visible {
          opacity: 1;
        }

        .register-fallback {
          margin-top: 1rem;
          font-size: 0.75rem;
          color: var(--color-muted-foreground, #999);
          text-align: center;
        }
        .register-fallback a {
          color: var(--color-accent, oklch(0.75 0.18 300));
          text-decoration: underline;
          text-underline-offset: 2px;
        }
        .register-fallback a:hover {
          color: var(--color-foreground, #fff);
        }

        /* ── Responsive ── */
        @media (min-width: 768px) {
          .register-hero {
            padding: 6rem 2rem 3.5rem;
          }
          .register-form-section {
            padding: 0 2rem 5rem;
          }
          .register-form-wrapper {
            min-height: 700px;
          }
          .register-iframe {
            height: 1200px;
          }
        }
      `}</style>
    </div>
  );
}
