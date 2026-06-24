import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Trophy, Target, Gift, Music, UtensilsCrossed, Users, ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import crowdImg from "@/assets/crowd.jpg";
import { Splatter } from "@/components/splatter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Galway City's MayDay — Aug 3rd · Mervue, Galway" },
      { name: "description", content: "5-a-side €1000, 1v1 €250, side games, music, food & drinks. Free RSVP for Galway City's MayDay football festival." },
      { property: "og:title", content: "Galway City's MayDay — Aug 3rd · Mervue, Galway" },
      { property: "og:description", content: "5-a-side €1000, 1v1 €250, side games, music, food & drinks. Free RSVP." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: heroImg },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: Home,
});

const sideGames = [
  { icon: Target, label: "Penalty Shootout" },
  { icon: Trophy, label: "Crossbar Challenge" },
  { icon: Gift, label: "Raffles & Prizes" },
  { icon: Music, label: "Live Music" },
  { icon: UtensilsCrossed, label: "Food & Drinks" },
  { icon: Users, label: "Fun For Everyone" },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={heroImg} alt="" className="h-full w-full object-cover opacity-40" width={1920} height={1280} />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.62_0.28_300/0.35),transparent_60%)]" />
        </div>

        <Splatter className="pointer-events-none absolute -left-16 top-20 h-72 w-72 text-primary/30" rotate={-20} />
        <Splatter className="pointer-events-none absolute -right-20 bottom-10 h-80 w-80 text-accent/25" rotate={35} />

        <div className="mx-auto flex max-w-7xl flex-col items-center px-5 pt-20 pb-28 text-center lg:px-8 lg:pt-32 lg:pb-40">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-accent"
          >
            August 3rd · Bank Holiday
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 font-display text-6xl leading-[0.85] sm:text-8xl lg:text-[10rem]"
          >
            <span className="block text-foreground">GALWAY CITY'S</span>
            <span className="block text-gradient">MAY DAY</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg"
          >
            A one-day football festival in Mervue. Tournaments, prizes, music, food and pure craic for everyone.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            <Link
              to="/register"
              className="group inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-bold text-accent-foreground shadow-[var(--shadow-neon)] transition hover:brightness-110"
            >
              Register Free <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </Link>
            <Link
              to="/tournaments"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-background/50 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur transition hover:bg-secondary"
            >
              View Tournaments
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-12 grid w-full max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3"
          >
            {[
              { icon: Calendar, label: "August 3rd", sub: "Bank Holiday" },
              { icon: Clock, label: "10AM – 5PM", sub: "All day fun" },
              { icon: MapPin, label: "Mervue", sub: "Galway" },
            ].map((c) => (
              <div key={c.label} className="flex items-center justify-center gap-3 rounded-lg border border-border/60 bg-card/60 px-4 py-3 backdrop-blur">
                <c.icon className="h-5 w-5 text-accent" />
                <div className="text-left">
                  <div className="text-sm font-semibold">{c.label}</div>
                  <div className="text-xs text-muted-foreground">{c.sub}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* INTRO */}
      <section className="border-y border-border/40 bg-card/30">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.25em] text-accent">August 3rd · Mervue, Galway</div>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl">
              ONE DAY.<br />ALL THE GAMES.
            </h2>
            <p className="mt-5 text-base text-muted-foreground">
              Galway City's MayDay brings the community together for a full day of football, music and prizes.
              Whether you're rolling deep with a 5-a-side squad chasing the €1000 cash prize, going solo in the
              €250 1v1 tournament, or just here for the craic — there's a spot for you.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link to="/register" className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground transition hover:brightness-110">
                Reserve your spot <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/about" className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-semibold transition hover:bg-secondary">
                Read more
              </Link>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl border border-border/60">
            <img src={crowdImg} alt="Crowd cheering at a previous tournament" className="h-full w-full object-cover" loading="lazy" width={1280} height={896} />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-accent/20 mix-blend-overlay" />
          </div>
        </div>
      </section>

      {/* TOURNAMENTS */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-xs font-bold uppercase tracking-[0.25em] text-accent">Compete</div>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl">THE TOURNAMENTS</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <TournamentCard
            badge="5 ASIDE · 2 SUBS"
            title="Team Tournament"
            prize="€1,000"
            prizeLabel="CASH PRIZE"
            description="Grab six mates and battle through the day. Each team plays at least 3 games."
            accent="primary"
          />
          <TournamentCard
            badge="1 v 1"
            title="Solo Tournament"
            prize="€250"
            prizeLabel="CASH PRIZE"
            description="Pure footwork, no excuses. Win on the spot with a knockout 1v1 bracket."
            accent="accent"
          />
        </div>
      </section>

      {/* SIDE GAMES */}
      <section className="relative isolate overflow-hidden border-y border-border/40 bg-card/30">
        <Splatter className="pointer-events-none absolute -right-20 top-10 h-72 w-72 text-primary/20" rotate={15} />
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="text-xs font-bold uppercase tracking-[0.25em] text-accent">More than football</div>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl">SIDE GAMES &amp; VIBES</h2>
            <p className="mt-4 text-muted-foreground">Penalty shootouts, crossbar challenge, raffles, music, food — and many more games on the day.</p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {sideGames.map((g) => (
              <div key={g.label} className="group flex flex-col items-center gap-3 rounded-xl border border-border/60 bg-background/40 p-6 text-center transition hover:-translate-y-1 hover:border-accent/60 hover:shadow-[var(--shadow-neon)]">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/15 text-accent transition group-hover:bg-accent group-hover:text-accent-foreground">
                  <g.icon className="h-5 w-5" />
                </span>
                <div className="text-sm font-semibold leading-tight">{g.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-primary/40 bg-gradient-to-br from-primary/20 via-card to-accent/15 p-10 text-center sm:p-16">
          <Splatter className="pointer-events-none absolute -left-10 -top-10 h-56 w-56 text-primary/30" />
          <Splatter className="pointer-events-none absolute -right-10 -bottom-10 h-56 w-56 text-accent/30" rotate={140} />
          <h2 className="font-display text-4xl sm:text-6xl">DON'T MISS IT.</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">RSVP is free. Save your spot and we'll send you the pitch details, timings and updates before the day.</p>
          <Link to="/register" className="mt-8 inline-flex items-center gap-2 rounded-md bg-accent px-7 py-3 text-sm font-bold text-accent-foreground shadow-[var(--shadow-neon)] transition hover:brightness-110">
            Register Free <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}

function TournamentCard({
  badge, title, prize, prizeLabel, description, accent,
}: { badge: string; title: string; prize: string; prizeLabel: string; description: string; accent: "primary" | "accent" }) {
  const ring = accent === "primary" ? "border-primary/40 hover:shadow-[var(--shadow-glow)]" : "border-accent/40 hover:shadow-[var(--shadow-neon)]";
  const dot = accent === "primary" ? "bg-primary" : "bg-accent";
  return (
    <div className={`group relative overflow-hidden rounded-2xl border ${ring} bg-card p-8 transition hover:-translate-y-1`}>
      <div className="flex items-center justify-between">
        <span className="inline-flex items-center gap-2 rounded-full bg-background/60 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
          <span className={`h-2 w-2 rounded-full ${dot}`} /> {badge}
        </span>
      </div>
      <h3 className="mt-6 font-display text-3xl">{title}</h3>
      <p className="mt-3 text-sm text-muted-foreground">{description}</p>
      <div className="mt-8 flex items-end justify-between">
        <div>
          <div className="font-display text-5xl text-gradient">{prize}</div>
          <div className="text-xs font-bold uppercase tracking-[0.25em] text-muted-foreground">{prizeLabel}</div>
        </div>
        <Link to="/register" className="rounded-md border border-border px-4 py-2 text-xs font-semibold uppercase tracking-wider transition hover:bg-secondary">
          Enter
        </Link>
      </div>
    </div>
  );
}
