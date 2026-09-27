// Injects the server-rendered page into build/index.html after `vite build`.
import { readFile, rm, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const { render } = await import(`${root}build-ssr/entry-server.js`);
const { html, styles } = render();

const file = `${root}build/index.html`;
const template = await readFile(file, "utf8");
if (!template.includes('<div id="root"></div>')) {
  throw new Error("build/index.html has no empty #root to render into");
}
const page = template
  .replace("</head>", `${styles}\n</head>`)
  .replace('<div id="root"></div>', `<div id="root">${html}</div>`);

await writeFile(file, page);
await rm(`${root}build-ssr`, { recursive: true, force: true });
console.log(`prerendered ${Math.round(html.length / 1024)} kB of HTML into build/index.html`);
