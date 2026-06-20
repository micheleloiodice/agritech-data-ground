import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

const NOTIFY_TO = "info@studioagrotech.it";
const FROM_EMAIL = "Studio Tecnico Agrotech <info@studioagrotech.it>";

const schema = z.object({
  nome: z.string().trim().min(2, "Nome obbligatorio").max(200),
  email: z.string().trim().email("Email non valida").max(320),
  telefono: z.string().trim().max(50).optional().or(z.literal("")),
  azienda: z.string().trim().max(200).optional().or(z.literal("")),
  superficie: z.string().trim().max(100).optional().or(z.literal("")),
  servizio: z.string().trim().min(1, "Servizio richiesto").max(200),
  messaggio: z.string().trim().min(5, "Messaggio troppo breve").max(5000),
  // Honeypot — must be empty
  website: z.string().max(0).optional().or(z.literal("")),
});

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

type SendPayload = {
  nome: string;
  email: string;
  telefono?: string;
  azienda?: string;
  superficie?: string;
  servizio: string;
  messaggio: string;
  when: string;
};

function buildEmail(payload: SendPayload) {
  const subject = "Nuova richiesta dal sito Studio Tecnico Agrotech";
  const rows: [string, string][] = [
    ["Nome e cognome", payload.nome],
    ["Email", payload.email],
    ["Telefono", payload.telefono || "—"],
    ["Azienda / Località", payload.azienda || "—"],
    ["Superficie indicativa", payload.superficie || "—"],
    ["Servizio richiesto", payload.servizio],
    ["Data e ora", payload.when],
  ];
  const html = `
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#1a1a1a">
      <h2 style="color:#2d5016;margin-bottom:16px">Nuova richiesta dal sito</h2>
      <table style="width:100%;border-collapse:collapse;font-size:14px">
        ${rows
          .map(
            ([k, v]) =>
              `<tr><td style="padding:8px 10px;border-bottom:1px solid #eee;color:#666;width:180px"><strong>${escapeHtml(k)}</strong></td><td style="padding:8px 10px;border-bottom:1px solid #eee">${escapeHtml(v)}</td></tr>`,
          )
          .join("")}
      </table>
      <h3 style="margin-top:24px;color:#2d5016">Messaggio</h3>
      <div style="white-space:pre-wrap;background:#f7f7f4;padding:14px;border-radius:8px;font-size:14px;line-height:1.5">${escapeHtml(payload.messaggio)}</div>
    </div>
  `;
  const text =
    rows.map(([k, v]) => `${k}: ${v}`).join("\n") +
    `\n\nMessaggio:\n${payload.messaggio}`;
  return { subject, html, text };
}

async function sendViaResend(
  payload: SendPayload,
): Promise<{ sent: boolean; error?: string }> {
  const resendKey = process.env.RESEND_API_KEY;
  if (!resendKey) {
    const msg = "missing_env:RESEND_API_KEY";
    console.error(`[contact email] ${msg} — set RESEND_API_KEY as a backend secret`);
    return { sent: false, error: msg };
  }

  const { subject, html, text } = buildEmail(payload);

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${resendKey}`,
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [NOTIFY_TO],
        reply_to: payload.email,
        subject,
        html,
        text,
      }),
    });

    if (!res.ok) {
      const body = await res.text();
      const err = `resend_${res.status}: ${body.slice(0, 400)}`;
      console.error(`[contact email] send failed: ${err}`);
      return { sent: false, error: err };
    }
    return { sent: true };
  } catch (e) {
    const err = e instanceof Error ? e.message : String(e);
    console.error(`[contact email] send threw: ${err}`);
    return { sent: false, error: `exception: ${err}` };
  }
}

export const Route = createFileRoute("/api/public/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let raw: unknown;
        try {
          raw = await request.json();
        } catch {
          return Response.json({ error: "Invalid JSON" }, { status: 400 });
        }

        const parsed = schema.safeParse(raw);
        if (!parsed.success) {
          return Response.json(
            { error: "validation", details: parsed.error.flatten() },
            { status: 400 },
          );
        }

        // Honeypot — silently accept
        if (parsed.data.website && parsed.data.website.length > 0) {
          return Response.json({ ok: true });
        }

        const { supabaseAdmin } = await import(
          "@/integrations/supabase/client.server"
        );

        const ip =
          request.headers.get("cf-connecting-ip") ||
          request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
          null;
        const userAgent = request.headers.get("user-agent") || null;
        const when = new Date().toLocaleString("it-IT", {
          timeZone: "Europe/Rome",
          dateStyle: "long",
          timeStyle: "short",
        });

        // 1) Insert first — guarantees we never lose the contact.
        const { data: inserted, error: dbError } = await supabaseAdmin
          .from("contact_requests")
          .insert({
            nome: parsed.data.nome,
            email: parsed.data.email,
            telefono: parsed.data.telefono || null,
            azienda: parsed.data.azienda || null,
            superficie: parsed.data.superficie || null,
            servizio: parsed.data.servizio,
            messaggio: parsed.data.messaggio,
            user_agent: userAgent,
            ip,
            email_sent: false,
            email_error: null,
            status: "pending",
          })
          .select("id")
          .single();

        if (dbError || !inserted) {
          console.error("[contact] insert failed", dbError);
          return Response.json(
            { error: "Impossibile registrare la richiesta. Riprova." },
            { status: 500 },
          );
        }

        // 2) Try to send email.
        const emailResult = await sendViaResend({
          nome: parsed.data.nome,
          email: parsed.data.email,
          telefono: parsed.data.telefono || undefined,
          azienda: parsed.data.azienda || undefined,
          superficie: parsed.data.superficie || undefined,
          servizio: parsed.data.servizio,
          messaggio: parsed.data.messaggio,
          when,
        });

        // 3) Update the row with the send outcome (don't fail the user request).
        const { error: updateError } = await supabaseAdmin
          .from("contact_requests")
          .update({
            email_sent: emailResult.sent,
            email_error: emailResult.sent ? null : emailResult.error || "unknown_error",
            status: emailResult.sent ? "email_sent" : "email_failed",
          })
          .eq("id", inserted.id);

        if (updateError) {
          console.error("[contact] status update failed", updateError);
        }

        // The contact is saved → respond ok to the user regardless of email outcome.
        return Response.json({ ok: true });
      },
    },
  },
});
