import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { muxInput } from "sanity-plugin-mux-input";
import { schemaTypes } from "./src/sanity/schemaTypes";
import { structure } from "./src/sanity/structure";
import { getStudioSanityConfig } from "./src/lib/sanity.env";

const { projectId, dataset } = getStudioSanityConfig();

export default defineConfig({
  name: "nfg_website",
  title: "Nigerian Foundries Group",
  projectId,
  dataset,
  basePath: "/studio",
  plugins: [structureTool({ structure }), visionTool(), muxInput()],
  schema: {
    types: schemaTypes
  }
});
