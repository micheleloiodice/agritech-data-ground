// Dopo `vite build`: rende la SPA compatibile con GitHub Pages.
//  - 404.html → GitHub Pages lo serve per qualsiasi URL sconosciuto, così il
//    router client-side gestisce da solo le route e i redirect.
//  - <route>/index.html → le route note rispondono con HTTP 200 (meglio per SEO).
import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const dist = join(process.cwd(), "dist");
const index = join(dist, "index.html");
if (!existsSync(index)) {
  console.error("dist/index.html non trovato: eseguire prima `vite build`.");
  process.exit(1);
}

const routes = ["privacy", "privacy-policy", "contact", "portfolio-applicazioni-pratiche"];

copyFileSync(index, join(dist, "404.html"));
for (const r of routes) {
  const dir = join(dist, r);
  mkdirSync(dir, { recursive: true });
  copyFileSync(index, join(dir, "index.html"));
}
console.log(`postbuild: creati 404.html e ${routes.length} pagine di route.`);
