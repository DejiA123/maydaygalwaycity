import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Calendar } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="relative mt-16 border-t border-border/40 bg-card/40">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-3 lg:px-8">
        <div>
          <div className="font-display text-2xl leading-none">
            GALWAY CITY'S<br />
            <span className="text-gradient">MAYDAY</span>
          </div>
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">
            A one-day football festival. Tournaments, prizes, music, food &amp; fun for everyone.
          </p>
        </div>

        <div className="space-y-3 text-sm">
          <div className="flex items-start gap-3">
            <Calendar className="mt-0.5 h-4 w-4 text-accent" />
            <div>
              <div className="font-semibold">August 3rd</div>
              <div className="text-muted-foreground">Bank Holiday · 10AM – 5PM</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <MapPin className="mt-0.5 h-4 w-4 text-accent" />
            <div>
              <div className="font-semibold">Mervue, Galway</div>
              <div className="text-muted-foreground">Pitch details sent on RSVP</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Mail className="mt-0.5 h-4 w-4 text-accent" />
            <a href="mailto:youths.powerhouse@gmail.com" className="font-medium hover:text-accent">
              youths.powerhouse@gmail.com
            </a>
          </div>
        </div>

        <div className="space-y-2 text-sm md:text-right">
          <Link to="/" className="block text-muted-foreground hover:text-foreground">Home</Link>
          <Link to="/about" className="block text-muted-foreground hover:text-foreground">About</Link>
          <Link to="/tournaments" className="block text-muted-foreground hover:text-foreground">Tournaments</Link>
          <Link to="/register" className="block text-muted-foreground hover:text-foreground">Register</Link>
          <Link to="/contact" className="block text-muted-foreground hover:text-foreground">Contact</Link>
        </div>
      </div>
      <div className="border-t border-border/40">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 py-5 text-xs text-muted-foreground md:flex-row lg:px-8">
          <div>© {new Date().getFullYear()} Galway City's MayDay. All rights reserved.</div>
          <div>Brought to you by Youths Powerhouse.</div>
        </div>
      </div>
    </footer>
  );
}
