import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: { port: 3000 },
  build: { outDir: "build" },
  // Bundle styled-components into the prerender build so Node gets its ESM entry.
  ssr: { noExternal: ["styled-components"] },
});
