import { defineTool } from "@lovable.dev/mcp-js";

import { METHOD } from "../data";

export default defineTool({
  name: "get_method",
  title: "Metodo di lavoro",
  description:
    "Descrive le fasi del metodo di lavoro dello studio, dalla diagnosi iniziale all'affiancamento in esecuzione.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text" as const, text: JSON.stringify(METHOD, null, 2) }],
    structuredContent: { method: METHOD },
  }),
});
