import { defineMcp } from "@lovable.dev/mcp-js";

import getMethodTool from "./tools/get-method";
import getStudioInfoTool from "./tools/get-studio-info";
import listCaseStudiesTool from "./tools/list-case-studies";
import listServicesTool from "./tools/list-services";

export default defineMcp({
  name: "studio-agrotech-mcp",
  title: "Studio Tecnico Agrotech",
  version: "0.1.0",
  instructions:
    "Tool pubblici dello Studio Tecnico Agrotech (Dott. Agr. Michele Loiodice, Corato, Puglia). Usa `get_studio_info` per contatti e dati dello studio, `list_services` per le aree di intervento, `list_case_studies` per i lavori tecnici svolti e `get_method` per le fasi di lavoro.",
  tools: [getStudioInfoTool, listServicesTool, listCaseStudiesTool, getMethodTool],
});
