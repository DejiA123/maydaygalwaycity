import { createFileRoute, Link } from "@tanstack/react-router";
import { Trophy, Users, Zap, Clock } from "lucide-react";

export const Route = createFileRoute("/tournaments")({
  head: () => ({
    meta: [
      { title: "Tournaments — Galway City's MayDay" },
      { name: "description", content: "5-a-side (5 + 2 subs) €1000 cash prize and 1v1 €250 cash prize tournaments at Galway City's MayDay, August 3rd." },
      { property: "og:title", content: "Tournaments — Galway City's MayDay" },
      { property: "og:description", content: "5-a-side €1000 and 1v1 €250 cash prize tournaments." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: TournamentsPage,
});

function TournamentsPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 pt-20 pb-24 lg:px-8">
      <div className="text-xs font-bold uppercase tracking-[0.25em] text-accent">Compete</div>
      <h1 className="mt-3 font-display text-5xl sm:text-7xl">
        THE <span className="text-gradient">TOURNAMENTS</span>
      </h1>
      <p className="mt-6 max-w-2xl text-muted-foreground">
        Two tournaments. One day. Real cash on the line. Register free and we'll send you your bracket and kick-off time.
      </p>

      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        {/* 5-a-side */}
        <div className="relative overflow-hidden rounded-3xl border border-primary/40 bg-gradient-to-br from-primary/15 via-card to-card p-8 sm:p-10">
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-2 rounded-full bg-background/60 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em]">
              <span className="h-2 w-2 rounded-full bg-primary" /> 5 ASIDE · 2 SUBS
            </span>
            <Trophy className="h-6 w-6 text-primary" />
          </div>
          <h2 className="mt-6 font-display text-4xl">TEAM TOURNAMENT</h2>
          <div className="mt-3 font-display text-6xl text-gradient">€1,000</div>
          <div className="text-xs font-bold uppercase tracking-[0.25em] text-muted-foreground">Cash prize</div>
          <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><Users className="h-4 w-4 text-accent" /> 5 players + 2 substitutes</li>
            <li className="flex items-center gap-2"><Clock className="h-4 w-4 text-accent" /> Minimum 3 group games guaranteed</li>
            <li className="flex items-center gap-2"><Zap className="h-4 w-4 text-accent" /> Knockout finals from the afternoon</li>
          </ul>
          <Link to="/register" className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground transition hover:brightness-110">
            Register a team
          </Link>
        </div>

        {/* 1v1 */}
        <div className="relative overflow-hidden rounded-3xl border border-accent/40 bg-gradient-to-br from-accent/10 via-card to-card p-8 sm:p-10">
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-2 rounded-full bg-background/60 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em]">
              <span className="h-2 w-2 rounded-full bg-accent" /> 1 v 1
            </span>
            <Zap className="h-6 w-6 text-accent" />
          </div>
          <h2 className="mt-6 font-display text-4xl">SOLO TOURNAMENT</h2>
          <div className="mt-3 font-display text-6xl text-gradient">€250</div>
          <div className="text-xs font-bold uppercase tracking-[0.25em] text-muted-foreground">Cash prize</div>
          <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><Users className="h-4 w-4 text-accent" /> Individual entry, open to all</li>
            <li className="flex items-center gap-2"><Clock className="h-4 w-4 text-accent" /> Short-format knockout bracket</li>
            <li className="flex items-center gap-2"><Zap className="h-4 w-4 text-accent" /> Quick rounds — pure skill</li>
          </ul>
          <Link to="/register" className="mt-8 inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-bold text-accent-foreground transition hover:brightness-110">
            Register solo
          </Link>
        </div>
      </div>

      <div className="mt-12 rounded-2xl border border-border/60 bg-card/40 p-6 text-sm text-muted-foreground">
        <strong className="text-foreground">Not playing?</strong> RSVP anyway — penalty shootouts, crossbar challenge,
        raffles, music and food are open to all attendees.
      </div>
    </div>
  );
}
