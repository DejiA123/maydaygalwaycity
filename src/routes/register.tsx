import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { useMutation } from "@tanstack/react-query";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { toast } from "sonner";
import { submitRsvp } from "@/lib/rsvp.functions";

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

type FormState = {
  full_name: string;
  email: string;
  phone: string;
  party_size: number;
  interest: string;
  notes: string;
};

const initial: FormState = {
  full_name: "",
  email: "",
  phone: "",
  party_size: 1,
  interest: "5-a-side team",
  notes: "",
};

function RegisterPage() {
  const [form, setForm] = useState<FormState>(initial);
  const [done, setDone] = useState(false);
  const submit = useServerFn(submitRsvp);

  const mutation = useMutation({
    mutationFn: (data: FormState) => submit({ data }),
    onSuccess: () => {
      setDone(true);
      toast.success("You're in! We'll be in touch.");
    },
    onError: (e: Error) => {
      toast.error(e.message || "Something went wrong. Please try again.");
    },
  });

  if (done) {
    return (
      <div className="mx-auto flex max-w-2xl flex-col items-center px-5 pt-24 pb-24 text-center lg:px-8">
        <CheckCircle2 className="h-16 w-16 text-accent" />
        <h1 className="mt-6 font-display text-5xl sm:text-6xl">YOU'RE <span className="text-gradient">IN!</span></h1>
        <p className="mt-4 max-w-md text-muted-foreground">
          Thanks {form.full_name.split(" ")[0]} — your spot is saved. We'll email{" "}
          <span className="text-foreground">{form.email}</span> with venue details, your bracket
          (if you're competing) and timings before the day.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link to="/" className="rounded-md border border-border px-5 py-2.5 text-sm font-semibold transition hover:bg-secondary">Back to home</Link>
          <button
            onClick={() => { setDone(false); setForm(initial); }}
            className="rounded-md bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground transition hover:brightness-110"
          >
            Register someone else
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto grid max-w-6xl gap-12 px-5 pt-20 pb-24 lg:grid-cols-[1fr_1.4fr] lg:gap-16 lg:px-8">
      <div>
        <div className="text-xs font-bold uppercase tracking-[0.25em] text-accent">Free RSVP</div>
        <h1 className="mt-3 font-display text-5xl sm:text-6xl">
          SAVE YOUR <span className="text-gradient">SPOT</span>
        </h1>
        <p className="mt-5 text-muted-foreground">
          Tell us a few details and we'll send confirmation, venue info and updates
          for August 3rd in Mervue, Galway.
        </p>
        <ul className="mt-8 space-y-3 text-sm text-muted-foreground">
          <li className="flex gap-2"><span className="text-accent">✔</span> 100% free to RSVP</li>
          <li className="flex gap-2"><span className="text-accent">✔</span> Pick your tournament when you sign up</li>
          <li className="flex gap-2"><span className="text-accent">✔</span> Full details emailed before the day</li>
        </ul>
      </div>

      <form
        onSubmit={(e) => { e.preventDefault(); mutation.mutate(form); }}
        className="rounded-2xl border border-border/60 bg-card/60 p-6 sm:p-8"
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Full name" required>
            <input
              required maxLength={120}
              value={form.full_name}
              onChange={(e) => setForm({ ...form, full_name: e.target.value })}
              className="form-input"
              placeholder="Your name"
            />
          </Field>
          <Field label="Email" required>
            <input
              required type="email" maxLength={254}
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="form-input"
              placeholder="you@example.com"
            />
          </Field>
          <Field label="Phone (optional)">
            <input
              type="tel" maxLength={40}
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="form-input"
              placeholder="+353 …"
            />
          </Field>
          <Field label="How many of you?" required>
            <input
              required type="number" min={1} max={50}
              value={form.party_size}
              onChange={(e) => setForm({ ...form, party_size: Math.max(1, Math.min(50, Number(e.target.value) || 1)) })}
              className="form-input"
            />
          </Field>
          <Field label="I'm interested in" className="sm:col-span-2">
            <select
              value={form.interest}
              onChange={(e) => setForm({ ...form, interest: e.target.value })}
              className="form-input"
            >
              <option>5-a-side team</option>
              <option>1v1 tournament</option>
              <option>Side games (penalty / crossbar / raffles)</option>
              <option>Just attending — music, food &amp; vibes</option>
              <option>Volunteering / helping out</option>
            </select>
          </Field>
          <Field label="Anything else?" className="sm:col-span-2">
            <textarea
              maxLength={1000} rows={4}
              value={form.notes}
              onChange={(e) => setForm({ ...form, notes: e.target.value })}
              className="form-input resize-y"
              placeholder="Team name, dietary stuff, questions…"
            />
          </Field>
        </div>

        <button
          type="submit"
          disabled={mutation.isPending}
          className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-bold text-accent-foreground shadow-[var(--shadow-neon)] transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
        >
          {mutation.isPending ? "Saving…" : <>Register Free <ArrowRight className="h-4 w-4" /></>}
        </button>
        <p className="mt-3 text-xs text-muted-foreground">
          By registering you agree to receive event-related updates by email. We won't share your details.
        </p>
      </form>

      <style>{`
        .form-input {
          width: 100%;
          background: var(--color-background);
          border: 1px solid var(--color-border);
          color: var(--color-foreground);
          border-radius: 0.5rem;
          padding: 0.65rem 0.85rem;
          font-size: 0.9rem;
          outline: none;
          transition: border-color 0.15s, box-shadow 0.15s;
        }
        .form-input:focus {
          border-color: var(--color-primary);
          box-shadow: 0 0 0 3px oklch(0.62 0.28 300 / 0.25);
        }
      `}</style>
    </div>
  );
}

function Field({ label, children, required, className }: { label: string; children: React.ReactNode; required?: boolean; className?: string }) {
  return (
    <label className={`block ${className ?? ""}`}>
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {label} {required && <span className="text-accent">*</span>}
      </span>
      {children}
    </label>
  );
}
