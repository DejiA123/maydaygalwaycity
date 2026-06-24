import { createFileRoute, Link } from "@tanstack/react-router";
import { Mail, MapPin, Calendar } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Galway City's MayDay" },
      { name: "description", content: "Get in touch with the Galway City MayDay team. Email youths.powerhouse@gmail.com." },
      { property: "og:title", content: "Contact — Galway City's MayDay" },
      { property: "og:description", content: "Get in touch with the Galway City MayDay team." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-5 pt-20 pb-24 lg:px-8">
      <div className="text-xs font-bold uppercase tracking-[0.25em] text-accent">Say hello</div>
      <h1 className="mt-3 font-display text-5xl sm:text-7xl">
        GET IN <span className="text-gradient">TOUCH</span>
      </h1>
      <p className="mt-6 max-w-2xl text-muted-foreground">
        Sponsorship, volunteering, press, or just a question about the day — drop us a line.
      </p>

      <div className="mt-12 grid gap-4 sm:grid-cols-3">
        <a href="mailto:youths.powerhouse@gmail.com" className="rounded-xl border border-border/60 bg-card/60 p-6 transition hover:border-accent/60">
          <Mail className="h-5 w-5 text-accent" />
          <div className="mt-3 text-xs font-bold uppercase tracking-wider text-muted-foreground">Email</div>
          <div className="mt-1 break-all font-semibold">youths.powerhouse@gmail.com</div>
        </a>
        <div className="rounded-xl border border-border/60 bg-card/60 p-6">
          <MapPin className="h-5 w-5 text-accent" />
          <div className="mt-3 text-xs font-bold uppercase tracking-wider text-muted-foreground">Where</div>
          <div className="mt-1 font-semibold">Mervue, Galway</div>
        </div>
        <div className="rounded-xl border border-border/60 bg-card/60 p-6">
          <Calendar className="h-5 w-5 text-accent" />
          <div className="mt-3 text-xs font-bold uppercase tracking-wider text-muted-foreground">When</div>
          <div className="mt-1 font-semibold">Aug 3rd · 10AM–5PM</div>
        </div>
      </div>

      <div className="mt-12">
        <Link to="/register" className="inline-flex rounded-md bg-accent px-6 py-3 text-sm font-bold text-accent-foreground shadow-[var(--shadow-neon)] transition hover:brightness-110">
          RSVP for the day
        </Link>
      </div>
    </div>
  );
}
