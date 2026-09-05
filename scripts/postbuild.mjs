// Dopo `vite build`: rende la SPA compatibile con GitHub Pages.
//  - 404.html → GitHub Pages lo serve per qualsiasi URL sconosciuto, così il
//    router client-side gestisce da solo le route e i redirect.
//  - privacy.html → GitHub Pages serve i file .html anche senza estensione,
//    quindi /privacy risponde 200 direttamente (niente redirect a /privacy/),
//    coerente con canonical e sitemap.
//  - <route>/index.html per le route di solo redirect (vecchi URL).
import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const dist = join(process.cwd(), "dist");
const index = join(dist, "index.html");
if (!existsSync(index)) {
  console.error("dist/index.html non trovato: eseguire prima `vite build`.");
  process.exit(1);
}

const pages = ["privacy"];
const redirectRoutes = ["privacy-policy", "contact", "portfolio-applicazioni-pratiche"];

copyFileSync(index, join(dist, "404.html"));
for (const p of pages) {
  copyFileSync(index, join(dist, `${p}.html`));
}
for (const r of redirectRoutes) {
  const dir = join(dist, r);
  mkdirSync(dir, { recursive: true });
  copyFileSync(index, join(dir, "index.html"));
}
console.log(`postbuild: creati 404.html, ${pages.length} pagine e ${redirectRoutes.length} route di redirect.`);
