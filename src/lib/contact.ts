import { z } from "zod";
import { SITE } from "@/config/site";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const PRIVACY_VERSION = "v1-2026-06";

export const contactSchema = z.object({
  nome: z.string().trim().min(2, "Inserisci nome e cognome.").max(200),
  email: z.email("Inserisci un indirizzo email valido.").max(320),
  telefono: z.string().trim().max(50).optional().or(z.literal("")),
  azienda: z.string().trim().max(200).optional().or(z.literal("")),
  superficie: z.string().trim().max(100).optional().or(z.literal("")),
  servizio: z.string().trim().min(1, "Seleziona il servizio richiesto.").max(200),
  messaggio: z.string().trim().min(5, "Il messaggio è troppo breve.").max(5000),
  privacy: z
    .boolean()
    .refine((v) => v === true, "Devi accettare l'informativa privacy per inviare la richiesta."),
  // Honeypot: i bot lo compilano, gli utenti reali no (campo nascosto).
  website: z.string().max(0).optional().or(z.literal("")),
});

export type ContactInput = z.input<typeof contactSchema>;

export type ContactResult = { ok: true } | { ok: false; error: string };

/**
 * Invia la richiesta di contatto tramite Web3Forms.
 * Non serve alcun server: la chiamata parte dal browser verso api.web3forms.com,
 * che inoltra l'email a info@studioagrotech.it con reply-to del mittente.
 */
export async function sendContactRequest(raw: ContactInput): Promise<ContactResult> {
  const parsed = contactSchema.safeParse(raw);
  if (!parsed.success) {
    const first = parsed.error.issues[0]?.message ?? "Controlla i campi obbligatori.";
    return { ok: false, error: first };
  }
  const data = parsed.data;

  // Honeypot compilato → probabile bot: fingiamo successo senza inviare nulla.
  if (data.website && data.website.length > 0) {
    return { ok: true };
  }

  if (!SITE.web3formsAccessKey) {
    console.error("[contact] chiave Web3Forms non configurata (vedi src/config/site.ts)");
    return {
      ok: false,
      error: `Il modulo non è ancora attivo. Scrivi direttamente a ${SITE.email}.`,
    };
  }

  const when = new Date().toLocaleString("it-IT", {
    timeZone: "Europe/Rome",
    dateStyle: "long",
    timeStyle: "short",
  });

  const body = {
    access_key: SITE.web3formsAccessKey,
    subject: `Nuova richiesta dal sito ${SITE.name} — ${data.servizio}`,
    from_name: `${SITE.name} (sito web)`,
    replyto: data.email,
    "Nome e cognome": data.nome,
    Email: data.email,
    Telefono: data.telefono || "—",
    "Azienda / Località": data.azienda || "—",
    "Superficie indicativa": data.superficie || "—",
    "Servizio richiesto": data.servizio,
    Messaggio: data.messaggio,
    "Data e ora": when,
    "Consenso privacy": `sì (${PRIVACY_VERSION})`,
    // Campo anti-spam riconosciuto da Web3Forms: deve restare vuoto.
    botcheck: "",
  };

  try {
    const res = await fetch(WEB3FORMS_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(body),
    });

    const json = (await res.json().catch(() => null)) as {
      success?: boolean;
      message?: string;
    } | null;

    if (!res.ok || !json?.success) {
      const detail = json?.message ? ` (${json.message})` : "";
      console.error(`[contact] invio fallito: HTTP ${res.status}${detail}`);
      return {
        ok: false,
        error: `Invio non riuscito. Riprova tra qualche minuto o scrivi a ${SITE.email}.`,
      };
    }
    return { ok: true };
  } catch (e) {
    console.error("[contact] errore di rete", e);
    return {
      ok: false,
      error: `Errore di rete. Controlla la connessione o scrivi a ${SITE.email}.`,
    };
  }
}
