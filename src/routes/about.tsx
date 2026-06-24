import { createFileRoute, Link } from "@tanstack/react-router";
import { Calendar, MapPin, Clock, Users, Trophy, PartyPopper } from "lucide-react";
import { Splatter } from "@/components/splatter";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Galway City's MayDay" },
      { name: "description", content: "Galway City's MayDay is a one-day community football festival in Mervue. Tournaments, music, food, prizes and craic for all ages." },
      { property: "og:title", content: "About — Galway City's MayDay" },
      { property: "og:description", content: "A one-day community football festival in Mervue, Galway." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="relative">
      <Splatter className="pointer-events-none absolute right-0 top-0 h-72 w-72 text-primary/15" rotate={20} />
      <div className="mx-auto max-w-4xl px-5 pt-20 pb-10 lg:px-8">
        <div className="text-xs font-bold uppercase tracking-[0.25em] text-accent">About the day</div>
        <h1 className="mt-3 font-display text-5xl sm:text-7xl">
          ABOUT <span className="text-gradient">MAYDAY</span>
        </h1>
        <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
          MayDay is Galway City's biggest community football festival of the summer.
          One bank holiday. One venue. A full day of tournaments, side games,
          live music, food trucks and craic for every age.
        </p>
      </div>

      <div className="mx-auto grid max-w-7xl gap-4 px-5 pb-12 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {[
          { icon: Calendar, label: "Date", value: "Sunday, Aug 3rd" },
          { icon: Clock, label: "Time", value: "10AM – 5PM" },
          { icon: MapPin, label: "Venue", value: "Mervue, Galway" },
          { icon: Users, label: "Open to", value: "All ages & abilities" },
        ].map((c) => (
          <div key={c.label} className="rounded-xl border border-border/60 bg-card/60 p-5">
            <c.icon className="h-5 w-5 text-accent" />
            <div className="mt-3 text-xs font-bold uppercase tracking-wider text-muted-foreground">{c.label}</div>
            <div className="mt-1 font-display text-xl">{c.value}</div>
          </div>
        ))}
      </div>

      <section className="mx-auto max-w-4xl px-5 py-16 lg:px-8">
        <h2 className="font-display text-3xl sm:text-4xl">WHAT TO EXPECT</h2>
        <div className="mt-8 space-y-6 text-muted-foreground">
          <p>
            From the first whistle at 10AM, the pitches in Mervue will be buzzing with five-a-side
            action. Sign up a squad of seven (five plus two subs) and battle for the €1,000 cash
            prize, or go it alone in the high-octane 1v1 knockout for €250.
          </p>
          <p>
            Between matches there's a packed side-games line-up: penalty shootouts, the crossbar
            challenge, raffles with serious prizes, live music sets and food trucks running
            all day. Bring the family, bring the lads, bring the dog — it's that kind of day.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {[
            { icon: Trophy, title: "Compete", body: "5-a-side & 1v1 cash prize tournaments." },
            { icon: PartyPopper, title: "Celebrate", body: "Music, raffles & community vibes." },
            { icon: Users, title: "Connect", body: "Built by Galway, for Galway." },
          ].map((c) => (
            <div key={c.title} className="rounded-xl border border-border/60 bg-card/40 p-6">
              <c.icon className="h-5 w-5 text-accent" />
              <div className="mt-3 font-display text-lg">{c.title}</div>
              <p className="mt-1 text-sm text-muted-foreground">{c.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-3">
          <Link to="/register" className="rounded-md bg-accent px-6 py-3 text-sm font-bold text-accent-foreground shadow-[var(--shadow-neon)] transition hover:brightness-110">
            RSVP Free
          </Link>
          <Link to="/tournaments" className="rounded-md border border-border px-6 py-3 text-sm font-semibold transition hover:bg-secondary">
            See tournaments
          </Link>
        </div>
      </section>
    </div>
  );
}
