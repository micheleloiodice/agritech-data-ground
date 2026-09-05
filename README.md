# Studio Tecnico Agrotech — sito web

Sito professionale del Dott. Agr. Michele Loiodice (Corato, Puglia).
Sito **statico** (React + Vite + TanStack Router + Tailwind) pubblicato su
**GitHub Pages**: nessun server, nessuna dipendenza da Lovable, Supabase o Aruba.

Il modulo di contatto invia le email tramite [Web3Forms](https://web3forms.com),
chiamato direttamente dal browser.

## Struttura

```
index.html                 pagina base (meta statici, font, JSON-LD)
src/main.tsx               entry point React
src/router.tsx             router client-side
src/routes/                route file-based (index, privacy + redirect)
src/lib/contact.ts         invio del form a Web3Forms + validazione (zod)
src/config/site.ts         configurazione (nome, email, chiave Web3Forms)
public/                    file copiati così come sono: favicon, video, sitemap, robots, CNAME
scripts/postbuild.mjs      genera 404.html e le pagine di route per GitHub Pages
.github/workflows/         deploy automatico su GitHub Pages a ogni push su main
```

## 1. Attivare il modulo di contatto (Web3Forms)

1. Vai su <https://web3forms.com>, inserisci `info@studioagrotech.it` e premi *Create Access Key*.
2. Apri l'email di conferma e copia la **Access Key** (formato UUID).
3. Inseriscila in **uno** di questi due modi:
   - **consigliato**: su GitHub → *Settings → Secrets and variables → Actions → Variables →
     New repository variable* con nome `VITE_WEB3FORMS_ACCESS_KEY` e valore la chiave;
   - **oppure** incollala nella costante `DEFAULT_ACCESS_KEY` in `src/config/site.ts`.

La chiave è pubblica per design (identifica solo la casella di destinazione), quindi
può stare nel codice senza rischi. Finché non è impostata, il form mostra il
messaggio "Il modulo non è ancora attivo" con l'email diretta.

Piano gratuito: 250 invii al mese, anti-spam incluso, reply-to impostato sull'email
di chi scrive. Web3Forms non conserva il contenuto dei messaggi.

## 2. Pubblicare su GitHub Pages

1. Carica questo progetto nel repository GitHub (branch `main`).
2. Su GitHub → *Settings → Pages* → *Build and deployment* → **Source: GitHub Actions**.
3. A ogni push su `main` il workflow `Deploy su GitHub Pages` compila e pubblica il sito.
   Si può lanciare a mano da *Actions → Deploy su GitHub Pages → Run workflow*.

## 3. Dominio micheleloiodice.it (DNS su Aruba)

Il file `public/CNAME` contiene già `micheleloiodice.it`. Sul pannello DNS di Aruba
(mantenendo solo la registrazione del dominio, senza hosting) impostare:

| Tipo  | Host | Valore                      |
| ----- | ---- | --------------------------- |
| A     | @    | 185.199.108.153             |
| A     | @    | 185.199.109.153             |
| A     | @    | 185.199.110.153             |
| A     | @    | 185.199.111.153             |
| CNAME | www  | `<utente-github>.github.io` |

Poi su GitHub → *Settings → Pages → Custom domain* inserire `micheleloiodice.it`,
attendere la verifica DNS e spuntare **Enforce HTTPS**.
La propagazione DNS può richiedere fino a 24-48 ore.

## Sviluppo in locale

Richiede Node.js 20 o superiore.

```bash
npm install
npm run dev        # server di sviluppo su http://localhost:5173
npm run build      # build di produzione in dist/ (+ 404.html e pagine di route)
npm run preview    # anteprima della cartella dist/
npm run typecheck  # controllo TypeScript
```

Per provare il form in locale, copiare `.env.example` in `.env.local` e valorizzare
`VITE_WEB3FORMS_ACCESS_KEY`.

## Note tecniche

- Le route sono gestite dal browser (SPA). `scripts/postbuild.mjs` crea `404.html`
  e una copia di `index.html` per ogni route nota (`/privacy`, `/contact`, ...) così
  GitHub Pages risponde 200 anche sugli URL diretti.
- Titolo e meta di ogni pagina vengono impostati dalle route tramite `HeadContent`;
  React 19 li sposta automaticamente nell'`<head>`.
- Il video del caso studio 3D è in `public/media/` e non passa dal bundler.
- `src/routeTree.gen.ts` è generato automaticamente dal plugin del router a ogni
  build e non va committato.
