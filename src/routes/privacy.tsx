import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Studio Tecnico Agrotech" },
      { name: "description", content: "Informativa sul trattamento dei dati personali raccolti tramite il sito dello Studio Tecnico Agrotech." },
      { name: "robots", content: "index,follow" },
    ],
    links: [{ rel: "canonical", href: "https://micheleloiodice.it/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="section-pad">
        <div className="container-page max-w-3xl">
          <p className="eyebrow mb-3">Informativa</p>
          <h1 className="text-[clamp(2rem,4vw,3rem)] leading-[1.05] mb-8">Privacy Policy</h1>

          <div className="prose prose-neutral max-w-none text-foreground/85 leading-relaxed space-y-6">
            <p>
              La presente informativa descrive come lo <strong>Studio Tecnico Agrotech</strong> —
              Dott. Agr. Michele Loiodice, con sede in Piazza Caduti in guerra, 11, Corato (BA) —
              tratta i dati personali raccolti tramite il modulo di contatto del sito, ai sensi
              del Regolamento UE 2016/679 (GDPR).
            </p>

            <h2 className="font-display text-xl mt-8">Titolare del trattamento</h2>
            <p>
              Dott. Agr. Michele Loiodice — Studio Tecnico Agrotech, Piazza Caduti in guerra, 11,
              70033 Corato (BA). Email: <a href="mailto:info@studioagrotech.it" className="text-[var(--green2)] hover:underline">info@studioagrotech.it</a>.
            </p>

            <h2 className="font-display text-xl mt-8">Dati trattati</h2>
            <p>
              Vengono trattati esclusivamente i dati che l'utente fornisce volontariamente
              compilando il modulo di contatto: nome e cognome, email, telefono (facoltativo),
              azienda o località (facoltativo), superficie indicativa (facoltativo), servizio
              richiesto e contenuto del messaggio.
            </p>

            <h2 className="font-display text-xl mt-8">Finalità e base giuridica</h2>
            <p>
              I dati sono trattati per rispondere alla richiesta inviata, fornire una prima
              valutazione tecnica e gestire l'eventuale rapporto professionale che ne consegue.
              La base giuridica è il consenso espresso dell'utente (art. 6.1.a GDPR) e
              l'esecuzione di misure precontrattuali (art. 6.1.b GDPR).
            </p>

            <h2 className="font-display text-xl mt-8">Modalità e conservazione</h2>
            <p>
              Il modulo di contatto inoltra la richiesta come email alla casella dello Studio
              tramite il servizio Web3Forms (responsabile del trattamento), che non conserva
              il contenuto dei messaggi. I dati sono poi conservati nella casella di posta
              dello Studio per il tempo strettamente necessario a evadere la richiesta e, in
              caso di apertura di un rapporto professionale, per il periodo previsto dagli
              obblighi fiscali e deontologici. Non vengono ceduti a terze parti né utilizzati
              per attività di marketing o profilazione.
            </p>

            <h2 className="font-display text-xl mt-8">Diritti dell'interessato</h2>
            <p>
              L'utente può in qualsiasi momento esercitare i diritti previsti dagli artt. 15-22
              del GDPR (accesso, rettifica, cancellazione, limitazione, opposizione, portabilità)
              scrivendo a <a href="mailto:info@studioagrotech.it" className="text-[var(--green2)] hover:underline">info@studioagrotech.it</a>.
              È inoltre possibile proporre reclamo all'Autorità Garante per la Protezione dei
              Dati Personali (<a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer" className="text-[var(--green2)] hover:underline">garanteprivacy.it</a>).
            </p>

            <p className="pt-8">
              <Link to="/" className="text-[var(--green2)] hover:underline">← Torna alla home</Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
