import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import heroImg from "@/assets/hero-grove.jpg";
import caseOlive from "@/assets/case-olive.jpg";
import caseAgri from "@/assets/case-agrivoltaico.jpg";
import case3d from "@/assets/case-3d.jpg";
import caseFinance from "@/assets/case-finance.jpg";
import portraitChisono from "@/assets/portrait-chisono.jpg";
import thumb3dSplit from "@/assets/thumb-prima-dopo-3d-split.jpg";
import { sendContactRequest } from "@/lib/contact";
import { LogoMark } from "@/components/LogoMark";

// Il video è in public/media: viene copiato così com'è nel build (niente bundling).
const video3d = "/media/video-prima-dopo-3d-optimized.mp4";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Studio Tecnico Agrotech — Agronomo a Corato, Puglia" },
      { name: "description", content: "Dott. Agr. Michele Loiodice — studio in Piazza Caduti in guerra, 11, Corato (BA). Agricoltura di precisione, rilievi drone, progettazione agraria, agrivoltaico, finanza agevolata e pratiche autorizzative in Puglia." },
      { property: "og:title", content: "Studio Tecnico Agrotech — Agronomo a Corato" },
      { property: "og:description", content: "Dott. Agr. Michele Loiodice — studio in Piazza Caduti in guerra, 11, Corato (BA), Puglia. Decisioni agricole basate su dati." },
      { property: "og:url", content: "https://micheleloiodice.it/" },
    ],
    links: [{ rel: "canonical", href: "https://micheleloiodice.it/" }],
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
  { img: caseOlive, tag: "Precisione", title: "Rilievo multispettrale su oliveto secolare", problem: "Azienda olivicola multiparcellare con cali produttivi e cause non immediatamente chiare.", method: "Volo drone multispettrale, indice NDVI/NDRE, campionamento mirato.", output: "Mappa di vigore, 3 zone omogenee, piano di reintegro nutrizionale differenziato." },
  { img: caseAgri, tag: "Agrivoltaico", title: "Studio agronomico per impianto agrivoltaico", problem: "Sviluppatore con terreno a seminativo, serve compatibilità con coltura.", method: "Analisi pedoclimatica, scelta colturale, simulazione resa sotto pannello.", output: "Relazione agronomica per autorizzazione e cronoprogramma colturale 10 anni." },
  { img: case3d, tag: "Rilievo 3D", title: "Rilievo 3D di fabbricato rurale", problem: "Pratica di ristrutturazione, planimetria catastale non corrispondente.", method: "Volo fotogrammetrico, nuvola di punti, modello mesh georeferenziato.", output: "Planimetrie aggiornate, sezioni e prospetti pronti per progettista e Comune." },
  { img: caseFinance, tag: "Finanza", title: "Business plan e finanza agevolata", problem: "Giovane imprenditrice agricola, primo insediamento e nuovo impianto mandorlo.", method: "Costruzione piano colturale, computo, business plan e domanda PSR.", output: "Pratica ammessa al finanziamento.\u00a0" },
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
        <CaseStudy3D />
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
          <LogoMark size={32} />
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
          <Metric k="40+ ha" v="Analizzati" />
          <Metric k="3" v="Zone omogenee" />
          <Metric k="Input" v="ottimizzati" />
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
    "Rilievi APR con pilota abilitato e analisi GIS",
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
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-14 lg:gap-24 items-start">
          <div className="lg:sticky lg:top-28">
            <p className="eyebrow mb-3" style={{ color: "#b66b3d" }}>Metodo operativo</p>
            <h2 className="text-[clamp(2rem,3.6vw,3rem)] leading-[1.05] text-[var(--paper)]">
              Il cliente non compra<br/>innovazione.
            </h2>
            <p className="mt-6 text-[var(--paper)]/70 text-lg leading-relaxed max-w-md">
              Compra <span className="text-[var(--paper)]">meno rischio</span>,
              {" "}<span className="text-[var(--paper)]">meno confusione</span>
              {" "}e un progetto <span className="text-[var(--paper)]">più difendibile</span>
              {" "}davanti a banche, enti e soci.
            </p>
            <div className="mt-8 inline-flex items-center gap-3 text-sm text-[var(--paper)]/60">
              <span className="h-px w-10 bg-[var(--accent)]" />
              5 fasi · in media 6–10 settimane
            </div>
          </div>

          <ol className="relative">
            <span className="absolute left-[14px] top-2 bottom-2 w-px bg-[var(--paper)]/15" aria-hidden />
            {METHOD.map((m, i) => (
              <li key={m.n} className="relative pl-12 pb-10 last:pb-0">
                <span className="absolute left-0 top-0 grid place-items-center w-8 h-8 rounded-full bg-[var(--green2)] text-[var(--paper)] text-xs font-display border-2 border-[var(--ink)]">
                  {i + 1}
                </span>
                <div className="font-display text-2xl text-[var(--paper)] leading-tight">{m.t}</div>
                <p className="mt-2 text-[var(--paper)]/65 leading-relaxed max-w-md">{m.d}</p>
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

function CaseStudy3D() {
  const [open, setOpen] = useState(false);
  return (
    <section id="caso-studio-3d" className="section-pad bg-[var(--paper)] border-t border-border">
      <div className="container-page">
        <div className="mb-10 max-w-2xl">
          <p className="eyebrow mb-3">Caso studio in evidenza</p>
          <h2 className="text-[clamp(1.9rem,3.5vw,2.8rem)] leading-[1.1]">
            Rilievo 3D di fabbricato rurale
          </h2>
        </div>

        <article className="grid lg:grid-cols-[1.15fr_1fr] gap-0 bg-card border border-border rounded-2xl overflow-hidden">
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Guarda il video del caso studio"
            className="group relative block aspect-[16/10] lg:aspect-auto lg:h-full overflow-hidden bg-[var(--ink)] cursor-pointer"
          >
            <img
              src={thumb3dSplit}
              alt="Confronto prima e dopo: ricostruzione 3D di fabbricato rurale"
              loading="lazy"
              className="w-full h-full object-cover"
            />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[var(--paper)]/95 text-[var(--green1)] shadow-lg transition-transform group-hover:scale-105">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </span>
          </button>

          <div className="p-7 sm:p-9 flex flex-col gap-5">
            <p className="text-[15px] leading-relaxed text-foreground/85">
              Rilievo fotogrammetrico e ricostruzione 3D per documentare lo stato iniziale e finale
              di un fabbricato rurale. Il confronto prima/dopo permette di rappresentare in modo
              chiaro geometrie, coperture, volumi, avanzamento lavori e trasformazioni
              dell'immobile, con un output utile per cliente, tecnico e amministrazione.
            </p>

            <dl className="text-sm grid gap-2.5">
              <div className="grid grid-cols-[80px_1fr] gap-3">
                <dt className="text-[var(--green2)] font-medium">Problema</dt>
                <dd className="text-muted-foreground">
                  Documentare lo stato iniziale, l'avanzamento lavori o il confronto prima/dopo di
                  un fabbricato rurale.
                </dd>
              </div>
              <div className="grid grid-cols-[80px_1fr] gap-3">
                <dt className="text-[var(--green2)] font-medium">Metodo</dt>
                <dd className="text-muted-foreground">
                  Rilievo drone, fotogrammetria e ricostruzione 3D georeferenziata.
                </dd>
              </div>
              <div className="grid grid-cols-[80px_1fr] gap-3">
                <dt className="text-[var(--green2)] font-medium">Output</dt>
                <dd className="text-muted-foreground">
                  Modello 3D, immagini di confronto, documentazione tecnica e materiale utile per
                  relazione, pratica o verifica lavori.
                </dd>
              </div>
            </dl>

            <div className="mt-auto pt-2">
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="btn-primary inline-flex items-center gap-2"
              >
                Guarda il caso studio
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
          </div>
        </article>
      </div>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Video caso studio: rilievo 3D di fabbricato rurale"
          className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--ink)]/90 p-4 sm:p-8"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Chiudi video"
              className="absolute -top-10 right-0 text-[var(--paper)] hover:text-[var(--sand)] text-sm tracking-wide cursor-pointer"
            >
              Chiudi ✕
            </button>
            <video
              src={video3d}
              poster={thumb3dSplit}
              controls
              autoPlay
              preload="metadata"
              playsInline
              className="w-full h-auto rounded-xl bg-black shadow-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
}

function About() {
  return (
    <section id="chi-sono" className="section-pad bg-[var(--paper)]">
      <div className="container-page grid lg:grid-cols-[0.85fr_1fr] gap-12 lg:gap-20 items-center">
        <div className="order-2 lg:order-1 relative">
          <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-border max-w-md">
            <img src={portraitChisono} alt="Dott. Agr. Michele Loiodice" loading="lazy" className="w-full h-full object-cover" />
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
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-px bg-border rounded-xl overflow-hidden border border-border max-w-xl">
            {[
              ["dal 2017", "esperienza diretta in campo"],
              ["120+", "ettari mappati e analizzati"],
              ["35+", "pratiche tecniche seguite"],
            ].map(([k, v]) => (
              <div key={v} className="bg-[var(--paper)] p-4">
                <div className="font-display text-xl text-[var(--ink)]">{k}</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{v}</div>
              </div>
            ))}
          </div>
          <a
            href="https://www.linkedin.com/in/micheleloiodice/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[var(--green2)] hover:text-[var(--ink)] transition"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            Guarda il profilo LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      nome: String(fd.get("nome") || "").trim(),
      email: String(fd.get("email") || "").trim(),
      telefono: String(fd.get("telefono") || "").trim(),
      azienda: String(fd.get("azienda") || "").trim(),
      superficie: String(fd.get("superficie") || "").trim(),
      servizio: String(fd.get("servizio") || "").trim(),
      messaggio: String(fd.get("messaggio") || "").trim(),
      privacy: fd.get("privacy") === "on",
      botcheck: fd.get("botcheck") === "on", // honeypot: solo i bot lo spuntano
    };

    if (!payload.privacy) {
      setStatus("error");
      setErrorMsg("Devi accettare l'informativa privacy per inviare la richiesta.");
      return;
    }

    setStatus("loading");
    setErrorMsg("");
    // Invio diretto dal browser a Web3Forms: nessun server necessario (vedi src/lib/contact.ts).
    const result = await sendContactRequest(payload);
    if (result.ok) {
      setStatus("sent");
      form.reset();
    } else {
      setStatus("error");
      setErrorMsg(result.error);
    }
  }

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
            <div className="flex gap-3"><span className="text-[var(--green2)] w-20">Telefono</span> <a href="tel:+393801428442" className="text-[var(--ink)] hover:underline">+39 3801428442</a></div>
            <div className="flex gap-3"><span className="text-[var(--green2)] w-20">Sede</span> <span>Piazza Caduti in guerra, 11&nbsp;<br />Corato (BA), Puglia</span></div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="bg-card border border-border rounded-2xl p-7 sm:p-9 grid gap-5"
        >
          {status === "sent" ? (
            <div className="py-12 text-center">
              <div className="font-display text-2xl text-[var(--green2)]">Richiesta inviata.</div>
              <p className="text-muted-foreground mt-2">Ti rispondo entro 48 ore lavorative.</p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="mt-6 text-sm text-[var(--green2)] hover:underline"
              >
                Invia un'altra richiesta
              </button>
            </div>
          ) : (
            <>
              <Field label="Nome e cognome" name="nome" required autoComplete="name" />
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Email" name="email" type="email" required autoComplete="email" />
                <Field label="Telefono" name="telefono" type="tel" autoComplete="tel" placeholder="opzionale" />
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Azienda / Località" name="azienda" autoComplete="organization" />
                <Field label="Superficie indicativa" name="superficie" placeholder="es. 12 ha" />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">Servizio richiesto *</label>
                <select name="servizio" required defaultValue="" className="w-full bg-[var(--paper)] border border-border rounded-lg px-3.5 py-3 text-[var(--ink)] focus:outline-none focus:border-[var(--green2)]">
                  <option value="" disabled>Seleziona un servizio…</option>
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
                <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">Messaggio *</label>
                <textarea name="messaggio" rows={4} required minLength={5} className="w-full bg-[var(--paper)] border border-border rounded-lg px-3.5 py-3 text-[var(--ink)] focus:outline-none focus:border-[var(--green2)]" />
              </div>
              {/* Honeypot: checkbox nascosta, il completamento automatico del browser non la tocca */}
              <div hidden aria-hidden="true">
                <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" aria-hidden="true" />
              </div>
              {status === "error" && (
                <p className="text-sm text-red-700 bg-red-50 border border-red-200 rounded-md px-3 py-2">
                  {errorMsg || "Invio non riuscito. Riprova o scrivi a info@studioagrotech.it."}
                </p>
              )}
              <label className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                <input
                  type="checkbox"
                  name="privacy"
                  required
                  className="mt-1 h-4 w-4 rounded border-border text-[var(--green2)] focus:ring-[var(--green2)] cursor-pointer"
                />
                <span>
                  Dichiaro di aver letto l'<Link to="/privacy" className="text-[var(--green2)] hover:underline">informativa privacy</Link>{" "}
                  e acconsento al trattamento dei dati per essere ricontattato in merito alla richiesta inviata. *
                </span>
              </label>
              <button
                type="submit"
                disabled={status === "loading"}
                className="btn-primary justify-center mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "loading" ? "Invio in corso…" : "Invia richiesta →"}
              </button>
              <p className="text-xs text-muted-foreground">
                Trattiamo i dati secondo la <Link to="/privacy" className="underline hover:text-[var(--ink)]">Privacy Policy</Link>. Niente newsletter, niente terze parti.
              </p>
            </>
          )}
        </form>
      </div>
    </section>
  );
}

function Field({ label, name, required, placeholder, type = "text", autoComplete }: { label: string; name: string; required?: boolean; placeholder?: string; type?: string; autoComplete?: string }) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">{label}{required && " *"}</label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        autoComplete={autoComplete}
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
            <LogoMark size={32} variant="negative" />
            <span className="font-display text-[var(--paper)]">Studio Tecnico Agrotech</span>
          </div>
          <p className="max-w-sm leading-relaxed">
            Dott. Agr. Michele Loiodice — iscritto all'Ordine di Bari, sez. A n. 1623.&nbsp;<br />
            Consulenza, progettazione e dati per l'impresa agricola in Puglia.
          </p>
        </div>
        <div>
          <div className="text-[var(--paper)] font-display mb-3">Studio</div>
          <ul className="space-y-2">
            <li>Piazza Caduti in guerra, 11&nbsp;<br />Corato (BA), Puglia</li>
            <li>P.IVA 08603960728</li>
            <li>Ordine Agronomi sez. A</li>
          </ul>
        </div>
        <div>
          <div className="text-[var(--paper)] font-display mb-3">Contatti</div>
          <ul className="space-y-2">
            <li><a href="mailto:info@studioagrotech.it" className="hover:text-[var(--paper)]">info@studioagrotech.it</a></li>
            <li><a href="tel:+393801428442" className="hover:text-[var(--paper)]">+39 3801428442</a></li>
            <li>
              <a
                href="https://www.linkedin.com/in/micheleloiodice/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--paper)]"
              >
                LinkedIn
              </a>
            </li>
            <li><Link to="/privacy" className="hover:text-[var(--paper)]">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[var(--paper)]/10">
        <div className="container-page py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs">© {new Date().getFullYear()} Studio Tecnico Agrotech. Tutti i diritti riservati.</span>
          <div className="flex items-center gap-5">
            <span className="text-xs text-[var(--paper)]/40 uppercase tracking-wider">Seguimi</span>
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/micheleloiodice/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="grid place-items-center w-8 h-8 rounded-md border border-[var(--paper)]/15 text-[var(--paper)]/60 hover:text-[var(--paper)] hover:border-[var(--paper)]/30 transition"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/studiotecnicoagrotech/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="grid place-items-center w-8 h-8 rounded-md border border-[var(--paper)]/15 text-[var(--paper)]/60 hover:text-[var(--paper)] hover:border-[var(--paper)]/30 transition"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/studiotecnicoagrotech"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="grid place-items-center w-8 h-8 rounded-md border border-[var(--paper)]/15 text-[var(--paper)]/60 hover:text-[var(--paper)] hover:border-[var(--paper)]/30 transition"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
