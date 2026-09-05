import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { tanstackRouter } from "@tanstack/router-plugin/vite";

// Sito statico (SPA) pubblicato su GitHub Pages con dominio personalizzato,
// quindi il base path resta "/". Se un giorno il sito venisse servito da
// https://<utente>.github.io/<repo>/ impostare base: "/<repo>/".
export default defineConfig({
  base: "/",
  plugins: [
    tanstackRouter({ target: "react", autoCodeSplitting: true }),
    react(),
    tailwindcss(),
    tsconfigPaths(),
  ],
  build: {
    outDir: "dist",
    sourcemap: false,
  },
});
