import { defineTool } from "@lovable.dev/mcp-js";

import { STUDIO } from "../data";

export default defineTool({
  name: "get_studio_info",
  title: "Informazioni studio e contatti",
  description:
    "Restituisce i dati pubblici dello Studio Tecnico Agrotech: professionista, iscrizione all'Ordine, partita IVA, sede, email, telefono, sito e profili social.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text" as const, text: JSON.stringify(STUDIO, null, 2) }],
    structuredContent: { studio: STUDIO },
  }),
});
