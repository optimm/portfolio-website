import React, { useEffect, useRef, useState } from "react";

function supportsWebGL() {
  try {
    const canvas = document.createElement("canvas");
    return Boolean(canvas.getContext("webgl2") || canvas.getContext("webgl"));
  } catch {
    return false;
  }
}

// Loads the 3D scene (and three.js) only once the hero is on screen and the
// browser is idle, then fades it in. Without WebGL the hero keeps its glow.
function HeroScene({ className }) {
  const ref = useRef(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const container = ref.current;
    if (!container || !supportsWebGL()) return undefined;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let cleanup;
    let cancelled = false;
    let idleId;

    const start = () =>
      import("./datacenterScene").then(({ mount }) => {
        if (cancelled) return;
        cleanup = mount(container, { reduceMotion, onReady: () => setReady(true) });
      });

    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      io.disconnect();
      idleId = window.requestIdleCallback
        ? window.requestIdleCallback(start, { timeout: 1200 })
        : window.setTimeout(start, 200);
    });
    io.observe(container);

    return () => {
      cancelled = true;
      io.disconnect();
      if (window.cancelIdleCallback && idleId) window.cancelIdleCallback(idleId);
      if (cleanup) cleanup();
    };
  }, []);

  return <div ref={ref} className={className} data-ready={ready || undefined} aria-hidden="true" />;
}

export default HeroScene;
