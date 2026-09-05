export const STUDIO = {
  name: "Studio Tecnico Agrotech",
  professional: "Dott. Agr. Michele Loiodice",
  registration: "Ordine dei Dottori Agronomi e Forestali di Bari, sez. A n. 1623",
  vat: "08603960728",
  address: "Piazza Caduti in guerra, 11 — 70033 Corato (BA), Puglia, Italia",
  email: "info@studioagrotech.it",
  phone: "+39 380 142 8442",
  website: "https://micheleloiodice.it",
  social: {
    linkedin: "https://www.linkedin.com/in/micheleloiodice/",
    instagram: "https://www.instagram.com/studiotecnicoagrotech/",
    facebook: "https://www.facebook.com/studiotecnicoagrotech",
  },
  positioning:
    "Studio tecnico agronomico in Puglia: agricoltura di precisione, rilievi drone e GIS, progettazione agraria, agrivoltaico, titoli abilitativi in zone vincolate e finanza agevolata per aziende agricole.",
  responseTime: "Risposta entro 48 ore. Prima lettura gratuita.",
};

export const SERVICES = [
  {
    id: "agricoltura-di-precisione",
    title: "Agricoltura di precisione",
    problem: "Concimi, acqua e fitofarmaci distribuiti uniformi su campi che non sono uniformi.",
    output: "Mappe di prescrizione per zone omogenee, riduzione input e dati confrontabili nel tempo.",
  },
  {
    id: "rilievi-drone-gis",
    title: "Rilievi drone e GIS",
    problem: "Servono dati metrici certi su superfici, fabbricati e colture, senza giorni di campagna.",
    output: "Ortofoto, modelli 3D, multispettrale NDVI/NDRE e shapefile pronti per progetto o pratica.",
  },
  {
    id: "progettazione-finanza-agevolata",
    title: "Progettazione agraria e finanza agevolata",
    problem: "Bandi PSR, PNRR, ISMEA: opportunità reali ma documentazione tecnica complessa.",
    output: "Business plan, computi, relazioni agronomiche e domanda costruita per essere finanziabile.",
  },
  {
    id: "agrivoltaico",
    title: "Agrivoltaico",
    problem: "Aziende e sviluppatori devono dimostrare compatibilità agricola e resa colturale.",
    output: "Studio agronomico, scelta colturale, layout impianto e relazione per iter autorizzativo.",
  },
  {
    id: "titoli-abilitativi",
    title: "Titoli abilitativi in zone vincolate",
    problem: "PUTT, vincolo idrogeologico, paesaggistico: ogni intervento rischia di bloccarsi.",
    output: "Istruttoria completa, dialogo con gli enti e pratica conforme depositata.",
  },
  {
    id: "consulenza-agronomica",
    title: "Consulenza agronomica",
    problem: "Olivo, mandorlo, cereali: gestioni che vanno aggiornate su clima, mercato e costi.",
    output: "Piani colturali, difesa integrata, nutrizione e calendario operativo per la tua azienda.",
  },
];

export const METHOD = [
  { step: 1, title: "Diagnosi", description: "Capiamo l'obiettivo reale, non quello dichiarato." },
  { step: 2, title: "Rilievo", description: "Dati di campo, drone, catasto, vincoli. Niente stime a occhio." },
  { step: 3, title: "Analisi", description: "Elaborazione tecnica, GIS, agronomica ed economica." },
  { step: 4, title: "Progetto", description: "Documento difendibile davanti a banca, ente e socio." },
  { step: 5, title: "Affiancamento", description: "Restiamo accanto fino a esecuzione e collaudo." },
  { note: "5 fasi, tipicamente 6–10 settimane." },
];

export const CASE_STUDIES = [
  {
    id: "oliveto-multispettrale",
    tag: "Precisione",
    title: "Rilievo multispettrale su oliveto secolare",
    problem: "Azienda olivicola multiparcellare con cali produttivi e cause non immediatamente chiare.",
    method: "Volo drone multispettrale, indice NDVI/NDRE, campionamento mirato.",
    output: "Mappa di vigore, 3 zone omogenee, piano di reintegro nutrizionale differenziato.",
  },
  {
    id: "studio-agrivoltaico",
    tag: "Agrivoltaico",
    title: "Studio agronomico per impianto agrivoltaico",
    problem: "Sviluppatore con terreno a seminativo, serve compatibilità con coltura.",
    method: "Analisi pedoclimatica, scelta colturale, simulazione resa sotto pannello.",
    output: "Relazione agronomica per autorizzazione e cronoprogramma colturale 10 anni.",
  },
  {
    id: "rilievo-3d-fabbricato",
    tag: "Rilievo 3D",
    title: "Rilievo 3D di fabbricato rurale",
    problem: "Pratica di ristrutturazione, planimetria catastale non corrispondente.",
    method: "Volo fotogrammetrico, nuvola di punti, modello mesh georeferenziato.",
    output: "Planimetrie aggiornate, sezioni e prospetti pronti per progettista e Comune.",
  },
  {
    id: "business-plan-psr",
    tag: "Finanza",
    title: "Business plan e finanza agevolata",
    problem: "Giovane imprenditrice agricola, primo insediamento e nuovo impianto mandorlo.",
    method: "Costruzione piano colturale, computo, business plan e domanda PSR.",
    output: "Pratica ammessa al finanziamento.",
  },
];
