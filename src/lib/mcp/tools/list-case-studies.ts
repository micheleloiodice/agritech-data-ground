import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

import { CASE_STUDIES } from "../data";

export default defineTool({
  name: "list_case_studies",
  title: "Casi studio",
  description:
    "Elenca i casi studio pubblici dello Studio Tecnico Agrotech: problema, metodo tecnico applicato e output consegnato.",
  inputSchema: {
    tag: z
      .string()
      .optional()
      .describe("Filtro facoltativo per categoria, es. Precisione, Agrivoltaico, Rilievo 3D, Finanza."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ tag }) => {
    const t = tag?.trim().toLowerCase();
    const items = t
      ? CASE_STUDIES.filter((c) => c.tag.toLowerCase().includes(t))
      : CASE_STUDIES;
    return {
      content: [{ type: "text" as const, text: JSON.stringify(items, null, 2) }],
      structuredContent: { caseStudies: items },
    };
  },
});
