import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import heroImg from "@/assets/hero-grove.jpg";
import caseOlive from "@/assets/case-olive.jpg";
import caseAgri from "@/assets/case-agrivoltaico.jpg";
import case3d from "@/assets/case-3d.jpg";
import caseFinance from "@/assets/case-finance.jpg";
import portrait from "@/assets/portrait.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Studio Tecnico Agrotech — Agronomo a Corato, Puglia" },
      { name: "description", content: "Dott. Agr. Michele Loiodice: agricoltura di precisione, rilievi drone, progettazione agraria, agrivoltaico, finanza agevolata e pratiche autorizzative in Puglia." },
      { property: "og:title", content: "Studio Tecnico Agrotech — Agronomo a Corato" },
      { property: "og:description", content: "Decisioni agricole basate su dati, non su impressioni." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const SERVICES = [
  { n: "01", title: "Agricoltura di precisione", problem: "Concimi, acqua e fitofarmaci distribuiti uniformi su campi che non sono uniformi.", output: "Mappe di prescrizione per zone omogenee, riduzione input e dati confrontabili nel tempo." },
  { n: "02", title: "Rilievi drone e GIS", problem: "Servono dati metrici certi su superfici, fabbricati e colture, senza giorni di campagna.", output: "Ortofoto, modelli 3D, multispettrale NDVI/NDRE e shapefile pronti per progetto o pratica." },
  { n: "03", title: "Progettazione agraria e finanza agevolata", problem: "Bandi PSR, PNRR, ISMEA: opportunità reali ma documentazione tecnica complessa.", output: "Business plan, computi, relazioni agronomiche e domanda costruita per essere finanziabile." },
  { n: "04", title: "Agrivoltaico", problem: "Aziende e sviluppatori devono dimostrare compatibilità agricola e resa colturale.", output: "Studio agronomico, scelta colturale, layout impianto e relazione per iter autorizzativo." },
  { n: "05", title: "Titoli abilitativi in zone vincolate", problem: "PUTT, vincolo idrogeologico, paesaggistico: ogni intervento rischia di bloccarsi.", output: "Istruttoria completa, dialogo con gli enti e pratica conforme depositata." },
  { n: "06", title: "Consulenza agronomica", problem: "Olivo, mandorlo, cereali: gestioni che vanno aggiornate su clima, mercato e costi.", output: "Piani colturali, difesa integrata, nutrizione e calendario operativo per la tua azienda." },
];

const METHOD = [
  { n: "01", t: "Diagnosi", d: "Capiamo l'obiettivo reale, non quello dichiarato." },
  { n: "02", t: "Rilievo", d: "Dati di campo, drone, catasto, vincoli. Niente stime a occhio." },
  { n: "03", t: "Analisi", d: "Elaborazione tecnica, GIS, agronomica ed economica." },
  { n: "04", t: "Progetto", d: "Documento difendibile davanti a banca, ente e socio." },
  { n: "05", t: "Affiancamento", d: "Restiamo accanto fino a esecuzione e collaudo." },
];

const CASES = [
  { img: caseOlive, tag: "Precisione", title: "Rilievo multispettrale su oliveto secolare", problem: "Cliente con 42 ha di olivo in calo produttivo, cause non chiare.", method: "Volo drone multispettrale, indice NDVI/NDRE, campionamento mirato.", output: "Mappa di vigore, 3 zone omogenee, piano di reintegro nutrizionale differenziato." },
  { img: caseAgri, tag: "Agrivoltaico", title: "Studio agronomico per impianto agrivoltaico", problem: "Sviluppatore con terreno a seminativo, serve compatibilità con coltura.", method: "Analisi pedoclimatica, scelta colturale, simulazione resa sotto pannello.", output: "Relazione agronomica per autorizzazione e cronoprogramma colturale 10 anni." },
  { img: case3d, tag: "Rilievo 3D", title: "Rilievo 3D di fabbricato rurale", problem: "Pratica di ristrutturazione, planimetria catastale non corrispondente.", method: "Volo fotogrammetrico, nuvola di punti, modello mesh georeferenziato.", output: "Planimetrie aggiornate, sezioni e prospetti pronti per progettista e Comune." },
  { img: caseFinance, tag: "Finanza", title: "Business plan e finanza agevolata", problem: "Giovane imprenditrice agricola, primo insediamento e nuovo impianto mandorlo.", method: "Costruzione piano colturale, computo, business plan e domanda PSR.", output: "Pratica ammessa al finanziamento, ~340k€ tra contributo e premio." },
];

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <Method />
        <Portfolio />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const links: [string, string][] = [
    ["Servizi", "#servizi"],
    ["Metodo", "#metodo"],
    ["Portfolio", "#portfolio"],
    ["Chi sono", "#chi-sono"],
    ["Contatti", "#contatti"],
  ];
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[color-mix(in_oklab,var(--background)_85%,transparent)] border-b border-border/60">
      <div className="container-page flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2.5">
          <span className="grid place-items-center w-8 h-8 rounded-md bg-[var(--ink)] text-[var(--paper)] font-display text-sm">A</span>
          <span className="font-display text-[15px] leading-tight">
            Studio Tecnico <span className="text-[var(--green2)]">Agrotech</span>
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {links.map(([l, h]) => (
            <a key={l} href={h} className="text-[var(--ink)]/80 hover:text-[var(--ink)] transition">{l}</a>
          ))}
        </nav>
        <a href="#contatti" className="hidden md:inline-flex btn-primary text-sm">Richiedi audit</a>
        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2 rounded-md border border-border"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d={open ? "M6 6l12 12M6 18L18 6" : "M3 6h18M3 12h18M3 18h18"} />
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-[var(--paper)]">
          <div className="container-page py-4 flex flex-col gap-3 text-sm">
            {links.map(([l, h]) => (
              <a key={l} href={h} onClick={() => setOpen(false)} className="py-1.5">{l}</a>
            ))}
            <a href="#contatti" onClick={() => setOpen(false)} className="btn-primary justify-center mt-2">Richiedi audit</a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="section-pad relative overflow-hidden">
      <div className="container-page grid lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-16 items-center">
        <div>
          <p className="eyebrow mb-5">
            <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />
            Dott. Agr. Michele Loiodice · Corato / Puglia
          </p>
          <h1 className="text-[clamp(2.5rem,5.8vw,4.4rem)] leading-[1.02]">
            Decisioni agricole basate su <em className="not-italic text-[var(--green2)]">dati</em>, non su impressioni.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
            Agricoltura di precisione, rilievi drone, progettazione agraria, pratiche
            autorizzative e finanza agevolata per aziende agricole che vogliono investire
            senza improvvisare.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contatti" className="btn-primary">Parliamo del progetto →</a>
            <a href="#portfolio" className="btn-ghost">Vedi applicazioni pratiche</a>
          </div>
          <div className="mt-10 flex items-center gap-6 text-xs text-muted-foreground">
            <span className="flex items-center gap-2"><Dot /> Risposta entro 48 h</span>
            <span className="flex items-center gap-2"><Dot /> Prima lettura gratuita</span>
          </div>
        </div>

        <HeroVisual />
      </div>
    </section>
  );
}

function Dot() {
  return <span className="w-1.5 h-1.5 rounded-full bg-[var(--green2)]" aria-hidden />;
}

function HeroVisual() {
  return (
    <div className="relative">
      <div className="absolute -inset-8 bg-gradient-to-br from-[var(--green2)]/20 via-transparent to-[var(--accent)]/10 rounded-[2rem] blur-2xl" aria-hidden />
      <div className="relative rounded-2xl overflow-hidden border border-border bg-[var(--ink)] shadow-[0_40px_80px_-40px_rgba(19,40,31,0.55)]">
        {/* aerial */}
        <div className="relative aspect-[5/4]">
          <img
            src={heroImg}
            alt="Vista aerea drone di un oliveto in Puglia"
            width={1024}
            height={1024}
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* NDVI overlay */}
          <div className="absolute inset-0 mix-blend-multiply opacity-60" aria-hidden
               style={{background: "linear-gradient(135deg, rgba(47,93,70,0.55) 0%, rgba(19,40,31,0.25) 50%, rgba(182,107,61,0.35) 100%)"}} />
          {/* zone markers */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden>
            <path d="M5,15 L42,8 L48,38 L18,45 Z" fill="none" stroke="#f8f5ef" strokeWidth="0.3" strokeDasharray="0.8 0.6" />
            <path d="M50,42 L92,30 L95,68 L58,72 Z" fill="none" stroke="#b66b3d" strokeWidth="0.35" strokeDasharray="0.8 0.6" />
            <path d="M22,58 L52,75 L40,92 L8,82 Z" fill="none" stroke="#f8f5ef" strokeWidth="0.3" strokeDasharray="0.8 0.6" />
          </svg>
          {/* floating labels */}
          <span className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.18em] text-[var(--paper)]/90 font-medium bg-[var(--ink)]/55 backdrop-blur px-2.5 py-1 rounded-full border border-[var(--paper)]/15">
            NDVI · Vol. 14 Mag
          </span>
          <span className="absolute top-4 right-4 flex items-center gap-1.5 text-[10px] uppercase tracking-[0.18em] text-[var(--paper)]/90 font-medium bg-[var(--ink)]/55 backdrop-blur px-2.5 py-1 rounded-full border border-[var(--paper)]/15">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse" /> Live
          </span>
          {/* zone chips */}
          <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2 text-[10px] font-medium">
            <Chip color="#f8f5ef" label="Zona A · vigore alto" />
            <Chip color="#b66b3d" label="Zona B · stress idrico" />
            <Chip color="#2f5d46" label="Zona C · da reintegrare" />
          </div>
        </div>
        {/* metrics bar */}
        <div className="grid grid-cols-3 divide-x divide-[var(--paper)]/10 bg-[var(--ink)] text-[var(--paper)]">
          <Metric k="42,3 ha" v="Superficie" />
          <Metric k="3" v="Zone omogenee" />
          <Metric k="−18%" v="Input previsti" />
        </div>
      </div>
    </div>
  );
}

function Chip({ color, label }: { color: string; label: string }) {
  return (
    <span className="flex items-center gap-1.5 bg-[var(--ink)]/70 backdrop-blur text-[var(--paper)] px-2 py-1 rounded-full border border-[var(--paper)]/15">
      <span className="w-1.5 h-1.5 rounded-full" style={{ background: color }} />
      {label}
    </span>
  );
}

function Metric({ k, v }: { k: string; v: string }) {
  return (
    <div className="p-4">
      <div className="font-display text-2xl">{k}</div>
      <div className="text-[10px] uppercase tracking-[0.18em] opacity-60 mt-1">{v}</div>
    </div>
  );
}

function TrustBar() {
  const items = [
    "Dottore Agronomo",
    "Rilievi APR / drone certificati",
    "Master agricoltura di precisione",
    "Olivo · Mandorlo · Cereali · Agrivoltaico",
  ];
  return (
    <section className="border-y border-border bg-[var(--paper)]">
      <div className="container-page py-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-sm text-muted-foreground">
        {items.map((i, idx) => (
          <span key={i} className="flex items-center gap-3">
            {idx > 0 && <span className="w-1 h-1 rounded-full bg-[var(--green2)]/40 hidden sm:inline-block" />}
            {i}
          </span>
        ))}
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="servizi" className="section-pad">
      <div className="container-page">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="eyebrow mb-3">Servizi</p>
            <h2 className="text-[clamp(1.9rem,3.5vw,2.8rem)] leading-[1.1]">
              Tecnica, dati e visione progettuale<br/>
              <span className="text-[var(--green2)]">applicati al tuo investimento agricolo.</span>
            </h2>
          </div>
          <p className="text-muted-foreground md:max-w-sm">
            Sei aree di intervento, integrate. Ogni servizio nasce da un problema reale di chi fa impresa agricola in Puglia.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden border border-border">
          {SERVICES.map((s) => (
            <article key={s.n} className="bg-card p-7 flex flex-col gap-4 group hover:bg-[var(--paper)] transition">
              <div className="flex items-baseline justify-between">
                <span className="font-display text-sm text-[var(--accent)]">{s.n}</span>
                <span className="h-px flex-1 ml-4 bg-border" />
              </div>
              <h3 className="font-display text-xl leading-tight">{s.title}</h3>
              <div className="text-sm space-y-2.5 mt-1">
                <p><span className="text-[var(--green2)] font-medium">Problema. </span><span className="text-muted-foreground">{s.problem}</span></p>
                <p><span className="text-[var(--green2)] font-medium">Output. </span><span className="text-muted-foreground">{s.output}</span></p>
              </div>
              <a href="#contatti" className="mt-auto pt-3 text-sm font-medium text-[var(--ink)] inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                Approfondisci <span aria-hidden>→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Method() {
  return (
    <section id="metodo" className="section-pad bg-[var(--ink)] text-[var(--paper)] relative">
      <div className="container-page">
        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-20 items-start">
          <div>
            <p className="eyebrow mb-3" style={{ color: "#b66b3d" }}>Metodo operativo</p>
            <h2 className="text-[clamp(1.9rem,3.5vw,2.8rem)] leading-[1.1] text-[var(--paper)]">
              Il cliente non compra innovazione.
            </h2>
            <p className="mt-5 text-[var(--paper)]/75 text-lg leading-relaxed max-w-md">
              Compra <span className="text-[var(--paper)]">meno rischio</span>, <span className="text-[var(--paper)]">meno confusione</span>
              {" "}e un progetto <span className="text-[var(--paper)]">più difendibile</span> davanti a banche, enti e soci.
            </p>
          </div>

          <ol className="relative grid gap-px lg:grid-cols-5 bg-[var(--paper)]/10 rounded-xl overflow-hidden">
            {METHOD.map((m) => (
              <li key={m.n} className="bg-[var(--ink)] p-6 lg:p-5 flex lg:flex-col gap-4 lg:gap-3">
                <div className="font-display text-sm text-[var(--accent)] shrink-0">{m.n}</div>
                <div>
                  <div className="font-display text-lg text-[var(--paper)]">{m.t}</div>
                  <p className="text-sm text-[var(--paper)]/65 mt-1.5 leading-relaxed">{m.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function Portfolio() {
  return (
    <section id="portfolio" className="section-pad">
      <div className="container-page">
        <div className="mb-12 max-w-2xl">
          <p className="eyebrow mb-3">Casi studio</p>
          <h2 className="text-[clamp(1.9rem,3.5vw,2.8rem)] leading-[1.1]">
            Progetti reali, output verificabili.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {CASES.map((c) => (
            <article key={c.title} className="bg-card border border-border rounded-2xl overflow-hidden flex flex-col">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src={c.img} alt={c.title} loading="lazy" className="w-full h-full object-cover" />
                <span className="absolute top-4 left-4 text-xs uppercase tracking-wider bg-[var(--paper)] text-[var(--ink)] px-2.5 py-1 rounded-full">
                  {c.tag}
                </span>
              </div>
              <div className="p-7 flex flex-col gap-4 flex-1">
                <h3 className="font-display text-xl leading-tight">{c.title}</h3>
                <dl className="text-sm grid gap-2.5">
                  <div className="grid grid-cols-[80px_1fr] gap-3">
                    <dt className="text-[var(--green2)] font-medium">Problema</dt>
                    <dd className="text-muted-foreground">{c.problem}</dd>
                  </div>
                  <div className="grid grid-cols-[80px_1fr] gap-3">
                    <dt className="text-[var(--green2)] font-medium">Metodo</dt>
                    <dd className="text-muted-foreground">{c.method}</dd>
                  </div>
                  <div className="grid grid-cols-[80px_1fr] gap-3">
                    <dt className="text-[var(--green2)] font-medium">Output</dt>
                    <dd className="text-muted-foreground">{c.output}</dd>
                  </div>
                </dl>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="chi-sono" className="section-pad bg-[var(--paper)]">
      <div className="container-page grid lg:grid-cols-[0.85fr_1fr] gap-12 lg:gap-20 items-center">
        <div className="order-2 lg:order-1 relative">
          <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-border max-w-md">
            <img src={portrait} alt="Dott. Agr. Michele Loiodice" loading="lazy" className="w-full h-full object-cover" />
          </div>
          <div className="hidden lg:block absolute -bottom-6 -right-6 bg-[var(--ink)] text-[var(--paper)] p-5 rounded-xl max-w-[220px]">
            <div className="font-display text-2xl">Corato</div>
            <div className="text-xs uppercase tracking-wider text-[var(--paper)]/60 mt-1">Puglia · Italia</div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <p className="eyebrow mb-3">Chi sono</p>
          <h2 className="text-[clamp(1.9rem,3.5vw,2.8rem)] leading-[1.1]">
            Agronomo, non venditore di tecnologia.
          </h2>
          <div className="mt-6 space-y-4 text-lg text-muted-foreground leading-relaxed max-w-xl">
            <p>
              Lavoro in Puglia, su un territorio che conosco: olivo, mandorlo, cereali,
              fabbricati rurali, zone vincolate. Uso drone, GIS e dati perché aiutano a
              decidere meglio, non perché fa effetto in un PDF.
            </p>
            <p>
              Parlo la lingua dell'<span className="text-[var(--ink)]">imprenditore agricolo</span> e
              quella del <span className="text-[var(--ink)]">progettista o dell'ente</span>.
              È così che un progetto arriva fino all'autorizzazione, al finanziamento e al campo.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-px bg-border rounded-xl overflow-hidden border border-border max-w-xl">
            {[
              ["10+", "anni di campo"],
              ["120+", "ettari rilevati"],
              ["35+", "pratiche concluse"],
              ["€4M+", "finanziamenti ottenuti"],
            ].map(([k, v]) => (
              <div key={v} className="bg-[var(--paper)] p-4">
                <div className="font-display text-xl text-[var(--ink)]">{k}</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contatti" className="section-pad">
      <div className="container-page grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20">
        <div>
          <p className="eyebrow mb-3">Contatti</p>
          <h2 className="text-[clamp(1.9rem,3.5vw,2.8rem)] leading-[1.05]">
            Hai un investimento agricolo<br/>
            <span className="text-[var(--green2)]">da valutare?</span>
          </h2>
          <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
            Raccontami in poche righe il contesto. Ti rispondo entro 48 ore con
            una prima lettura tecnica e ti dico se ha senso approfondire.
          </p>
          <div className="mt-8 space-y-3 text-sm">
            <div className="flex gap-3"><span className="text-[var(--green2)] w-20">Email</span> <a href="mailto:info@studioagrotech.it" className="text-[var(--ink)] hover:underline">info@studioagrotech.it</a></div>
            <div className="flex gap-3"><span className="text-[var(--green2)] w-20">Telefono</span> <a href="tel:+390000000000" className="text-[var(--ink)] hover:underline">+39 080 000 0000</a></div>
            <div className="flex gap-3"><span className="text-[var(--green2)] w-20">Sede</span> <span>Corato (BA), Puglia</span></div>
          </div>
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="bg-card border border-border rounded-2xl p-7 sm:p-9 grid gap-5"
        >
          {sent ? (
            <div className="py-12 text-center">
              <div className="font-display text-2xl text-[var(--green2)]">Richiesta inviata.</div>
              <p className="text-muted-foreground mt-2">Ti rispondo entro 48 ore lavorative.</p>
            </div>
          ) : (
            <>
              <Field label="Nome e cognome" name="nome" required />
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Azienda / Località" name="azienda" />
                <Field label="Superficie indicativa" name="superficie" placeholder="es. 12 ha" />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">Servizio richiesto</label>
                <select name="servizio" className="w-full bg-[var(--paper)] border border-border rounded-lg px-3.5 py-3 text-[var(--ink)] focus:outline-none focus:border-[var(--green2)]">
                  <option>Agricoltura di precisione</option>
                  <option>Rilievi drone e GIS</option>
                  <option>Progettazione e finanza agevolata</option>
                  <option>Agrivoltaico</option>
                  <option>Zone vincolate / titoli abilitativi</option>
                  <option>Consulenza agronomica</option>
                  <option>Altro / da valutare</option>
                </select>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">Messaggio</label>
                <textarea name="messaggio" rows={4} required className="w-full bg-[var(--paper)] border border-border rounded-lg px-3.5 py-3 text-[var(--ink)] focus:outline-none focus:border-[var(--green2)]" />
              </div>
              <button type="submit" className="btn-primary justify-center mt-2">Invia richiesta →</button>
              <p className="text-xs text-muted-foreground">Trattiamo i dati secondo la Privacy Policy. Niente newsletter, niente terze parti.</p>
            </>
          )}
        </form>
      </div>
    </section>
  );
}

function Field({ label, name, required, placeholder }: { label: string; name: string; required?: boolean; placeholder?: string }) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">{label}{required && " *"}</label>
      <input
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full bg-[var(--paper)] border border-border rounded-lg px-3.5 py-3 text-[var(--ink)] focus:outline-none focus:border-[var(--green2)]"
      />
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-[var(--ink)] text-[var(--paper)]/70 text-sm">
      <div className="container-page py-14 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="grid place-items-center w-8 h-8 rounded-md bg-[var(--paper)] text-[var(--ink)] font-display">A</span>
            <span className="font-display text-[var(--paper)]">Studio Tecnico Agrotech</span>
          </div>
          <p className="max-w-sm leading-relaxed">
            Dott. Agr. Michele Loiodice — Agronomo iscritto all'Ordine.
            Consulenza, progettazione e dati per l'impresa agricola in Puglia.
          </p>
        </div>
        <div>
          <div className="text-[var(--paper)] font-display mb-3">Studio</div>
          <ul className="space-y-2">
            <li>Corato (BA), Puglia</li>
            <li>P.IVA 0000000000</li>
            <li>Ordine Agronomi sez. A</li>
          </ul>
        </div>
        <div>
          <div className="text-[var(--paper)] font-display mb-3">Contatti</div>
          <ul className="space-y-2">
            <li><a href="mailto:info@studioagrotech.it" className="hover:text-[var(--paper)]">info@studioagrotech.it</a></li>
            <li><a href="tel:+390000000000" className="hover:text-[var(--paper)]">+39 080 000 0000</a></li>
            <li><a href="#" className="hover:text-[var(--paper)]">LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[var(--paper)]/10">
        <div className="container-page py-5 flex flex-wrap justify-between gap-3 text-xs">
          <span>© {new Date().getFullYear()} Studio Tecnico Agrotech. Tutti i diritti riservati.</span>
          <span className="flex gap-5">
            <a href="#" className="hover:text-[var(--paper)]">Privacy</a>
            <a href="#" className="hover:text-[var(--paper)]">Cookie</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
