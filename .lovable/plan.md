
## Galway City's MayDay — event site + RSVP

A bold, dark-themed event site inspired by the Salthill 5ives layout, but executed in the MayDay flyer's identity: deep near-black background, electric purple (#7C3AED-ish) and neon green (#A3E635-ish) accents, paint-splatter texture moments, and a chunky condensed display font (à la the flyer's "MAY DAY" lockup) paired with a clean sans body.

### Pages (TanStack Start routes)
- `/` — Home: full-bleed hero with stadium/crowd photo, dark gradient overlay, paint-splatter accents, "GALWAY CITY'S MAYDAY" lockup, date/time/venue chips (Aug 3rd · Bank Holiday · 10AM–5PM · Mervue, Galway), primary CTA "Register" + secondary "View details". Below: "MayDay Returns" intro section, tournament cards (5-a-side €1000 / 1v1 €250), side-games grid (Penalty Shootout, Crossbar Challenge, Raffles & Prizes, Music, Food & Drinks, Fun for Everyone), sponsors strip placeholder, footer.
- `/about` — Event story, what to expect, schedule overview.
- `/tournaments` — Details for 5-a-side (5 + 2 subs, €1000 cash prize) and 1v1 (€250).
- `/register` — Free RSVP form (name, email, phone, number of people, which competition interests them, optional notes). Success state with confirmation message.
- `/contact` — youths.powerhouse@gmail.com, Mervue Galway, social placeholders.

Each route has its own SEO `head()` (title, description, og:title, og:description). The hero image is wired as og:image on the home route.

### Registration (free RSVP)
- Lovable Cloud (Supabase) enabled for storage.
- Table `public.rsvps` (id, created_at, full_name, email, phone, party_size, interest, notes).
- Grants for `anon` INSERT only; `service_role` ALL. RLS enabled, policy allows anonymous insert, no public select.
- A TanStack server function `submitRsvp` validates with Zod and inserts via the server publishable client.
- After enabling Lovable Cloud, set up Lovable Emails so a confirmation email goes to the registrant and a notification to `youths.powerhouse@gmail.com` (via the email queue). If email domain setup needs the user, surface the email setup action; the form still saves to the database regardless.

### Design system
- Tokens in `src/styles.css`:
  - `--background` near-black (oklch ~0.12), `--foreground` near-white
  - `--primary` electric purple, `--accent` neon green
  - Gradients: `--gradient-hero` (purple → green diagonal), `--gradient-cta` (purple glow)
  - Shadow tokens with purple glow
- Fonts via `@fontsource`: a chunky condensed display (e.g. `@fontsource/archivo-black` or `bebas-neue`) for headings, `@fontsource/inter` for body. Imported in `src/main.tsx`; family names mapped in `@theme` block.
- Paint-splatter SVG accents generated as a reusable component, positioned behind hero text.
- Subtle motion via framer-motion: hero text fade-up, card hover lifts, CTA glow pulse.

### Verification
After build, drive Playwright headless against `localhost`: load `/`, screenshot the hero; navigate to `/register`, fill and submit the RSVP form, screenshot the success state, and confirm the row exists by re-querying via a small admin check (or by seeing the success UI).

### Technical notes
- Routes use the standard `createFileRoute` pattern; no hash anchors for primary nav.
- All colors via semantic tokens — no hardcoded hex in components.
- Hero image generated via `imagegen` (stadium crowd + purple/green paint splatter energy) and saved under `src/assets/`.
- No payment integration (event is free RSVP).
