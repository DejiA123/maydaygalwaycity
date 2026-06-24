import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";
import { z } from "zod";
import type { Database } from "@/integrations/supabase/types";

const RsvpSchema = z.object({
  full_name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(254),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  party_size: z.number().int().min(1).max(50),
  interest: z.string().trim().max(120).optional().or(z.literal("")),
  notes: z.string().trim().max(1000).optional().or(z.literal("")),
});

export const submitRsvp = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => RsvpSchema.parse(data))
  .handler(async ({ data }) => {
    const supabase = createClient<Database>(
      process.env.SUPABASE_URL!,
      process.env.SUPABASE_PUBLISHABLE_KEY!,
      { auth: { storage: undefined, persistSession: false, autoRefreshToken: false } },
    );

    const { error } = await supabase.from("rsvps").insert({
      full_name: data.full_name,
      email: data.email,
      phone: data.phone || null,
      party_size: data.party_size,
      interest: data.interest || null,
      notes: data.notes || null,
    });

    if (error) {
      console.error("[rsvp] insert failed", error);
      throw new Error("Could not save your RSVP. Please try again.");
    }

    return { ok: true as const };
  });
