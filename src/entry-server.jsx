import React from "react";
import { renderToString } from "react-dom/server";
import { ServerStyleSheet } from "styled-components";
import App from "./App";

// Used at build time only (see scripts/prerender.js): renders the page to
// static HTML so crawlers and first paint get the full content without JS.
export function render() {
  const sheet = new ServerStyleSheet();
  try {
    const html = renderToString(sheet.collectStyles(<App />));
    return { html, styles: sheet.getStyleTags() };
  } finally {
    sheet.seal();
  }
}
