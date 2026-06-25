import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";
import { z } from "zod";
import type { Database } from "@/integrations/supabase/types";
import ws from "ws";
import { Resend } from "resend";

const sender = process.env.EMAIL_SENDER || 'onboarding@resend.dev';
const adminEmail = process.env.ADMIN_EMAIL || 'admin@example.com';

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
    try {
      const supabase = createClient<Database>(
        process.env.SUPABASE_URL!,
        process.env.SUPABASE_PUBLISHABLE_KEY!,
        { 
          auth: { storage: undefined, persistSession: false, autoRefreshToken: false },
          global: { headers: { 'x-my-custom-header': 'mayday-app' } },
          realtime: { transport: ws as any } // Provide native websocket support for Node 20
        },
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
        return { error: "Could not save your RSVP. Please try again." };
      }

      // Send Email Notifications
      if (process.env.RESEND_API_KEY) {
        try {
          const resend = new Resend(process.env.RESEND_API_KEY);
          
          // Send Admin Notification
          const adminRes = await resend.emails.send({
            from: sender,
            to: adminEmail,
            subject: `New MayDay RSVP: ${data.full_name}`,
            html: `
              <h2>New RSVP Received!</h2>
              <p><strong>Name:</strong> ${data.full_name}</p>
              <p><strong>Email:</strong> ${data.email}</p>
              <p><strong>Phone:</strong> ${data.phone || 'N/A'}</p>
              <p><strong>Party Size:</strong> ${data.party_size}</p>
              <p><strong>Interest:</strong> ${data.interest || 'N/A'}</p>
              <p><strong>Notes:</strong> ${data.notes || 'N/A'}</p>
            `
          });
          if (adminRes.error) {
            console.error("[rsvp] Admin email blocked by Resend:", adminRes.error);
          }

          // Send User Confirmation
          const userRes = await resend.emails.send({
            from: sender,
            to: data.email,
            subject: "You're in! \u2014 MayDay Registration Confirmed",
            html: `
              <h2>Hi ${data.full_name.split(' ')[0]},</h2>
              <p>Thanks for registering for MayDay! We have saved your spot.</p>
              <p>We'll be in touch closer to the date with venue details and schedules.</p>
              <br/>
              <p>See you there!</p>
            `
          });
          if (userRes.error) {
            console.error("[rsvp] User email blocked by Resend:", userRes.error);
          }
        } catch (emailError) {
          console.error("[rsvp] email sending failed", emailError);
          // Don't fail the registration if email fails
        }
      }

      return { ok: true as const };
    } catch (err: any) {
      console.error("[rsvp] exception during insert", err);
      return { error: err?.message || "An unexpected error occurred." };
    }
  });
