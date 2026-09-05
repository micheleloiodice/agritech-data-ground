import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

import { SERVICES } from "../data";

export default defineTool({
  name: "list_services",
  title: "Elenco servizi",
  description:
    "Elenca i servizi offerti dallo Studio Tecnico Agrotech, con il problema affrontato e il risultato consegnato per ciascuno.",
  inputSchema: {
    query: z
      .string()
      .optional()
      .describe("Filtro testuale facoltativo sul titolo o sulla descrizione del servizio."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ query }) => {
    const q = query?.trim().toLowerCase();
    const items = q
      ? SERVICES.filter((s) =>
          `${s.title} ${s.problem} ${s.output}`.toLowerCase().includes(q),
        )
      : SERVICES;
    return {
      content: [{ type: "text" as const, text: JSON.stringify(items, null, 2) }],
      structuredContent: { services: items },
    };
  },
});
