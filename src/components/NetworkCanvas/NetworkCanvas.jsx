import React, { useEffect, useRef } from "react";

// A slowly drifting service graph with packets hopping between nodes, used as
// an ambient background behind some sections. Plain 2D canvas. It only runs
// while on screen, pauses in background tabs and draws one still frame for
// reduced motion.
const PACKET_COLORS = ["--c-ai", "--c-systems", "--c-platform", "--c-infra", "--c-frontend"];

function NetworkCanvas({ className, density = 16000, lineAlpha = 0.1, packetRatio = 0.22 }) {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");
    const styles = getComputedStyle(document.documentElement);
    const colors = PACKET_COLORS.map((v) => styles.getPropertyValue(v).trim());
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = 0;
    let height = 0;
    let nodes = [];
    let edges = [];
    let packets = [];
    let frame = 0;
    let visible = false;
    const pointer = { x: -9999, y: -9999 };
    const rand = (min, max) => min + Math.random() * (max - min);

    function spawnPacket() {
      const edge = edges[Math.floor(Math.random() * edges.length)];
      const forward = Math.random() < 0.5;
      return {
        from: forward ? edge[0] : edge[1],
        to: forward ? edge[1] : edge[0],
        t: Math.random(),
        speed: rand(0.004, 0.011),
        color: colors[Math.floor(Math.random() * colors.length)],
      };
    }

    function setup() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.max(14, Math.min(60, Math.round((width * height) / density)));
      nodes = Array.from({ length: count }, () => ({
        x: rand(0, width),
        y: rand(0, height),
        vx: rand(-0.12, 0.12),
        vy: rand(-0.12, 0.12),
        hub: Math.random() < 0.14,
      }));

      // Connect each node to its nearest neighbours once, like a service mesh.
      const seen = new Set();
      edges = [];
      nodes.forEach((a, i) => {
        nodes
          .map((b, j) => ({ j, d: (a.x - b.x) ** 2 + (a.y - b.y) ** 2 }))
          .filter((n) => n.j !== i)
          .sort((p, q) => p.d - q.d)
          .slice(0, a.hub ? 4 : 2)
          .forEach(({ j }) => {
            const key = i < j ? `${i}-${j}` : `${j}-${i}`;
            if (!seen.has(key)) {
              seen.add(key);
              edges.push([i, j]);
            }
          });
      });
      packets = Array.from({ length: Math.round(edges.length * packetRatio) }, spawnPacket);
    }

    // When a packet arrives, route it on to a neighbour of the node it reached.
    function hop(packet) {
      const next = edges.filter((e) => e[0] === packet.to || e[1] === packet.to);
      const edge = next[Math.floor(Math.random() * next.length)];
      if (!edge) return spawnPacket();
      const from = packet.to;
      return { ...packet, from, to: edge[0] === from ? edge[1] : edge[0], t: 0 };
    }

    function draw() {
      ctx.clearRect(0, 0, width, height);
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;
      }

      ctx.lineWidth = 1;
      for (const [i, j] of edges) {
        const a = nodes[i];
        const b = nodes[j];
        const mx = (a.x + b.x) / 2 - pointer.x;
        const my = (a.y + b.y) / 2 - pointer.y;
        const near = Math.max(0, 1 - Math.sqrt(mx * mx + my * my) / 220);
        ctx.strokeStyle = `rgba(164, 162, 185, ${lineAlpha + near * 0.35})`;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }

      for (const n of nodes) {
        const dx = n.x - pointer.x;
        const dy = n.y - pointer.y;
        const near = Math.max(0, 1 - Math.sqrt(dx * dx + dy * dy) / 180);
        ctx.fillStyle = `rgba(242, 241, 248, ${0.35 + near * 0.6})`;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.hub ? 2.6 : 1.5, 0, Math.PI * 2);
        ctx.fill();
        if (n.hub) {
          ctx.strokeStyle = `rgba(163, 147, 255, ${0.25 + near * 0.5})`;
          ctx.beginPath();
          ctx.arc(n.x, n.y, 6, 0, Math.PI * 2);
          ctx.stroke();
        }
      }

      packets = packets.map((p) => {
        const a = nodes[p.from];
        const b = nodes[p.to];
        const x = a.x + (b.x - a.x) * p.t;
        const y = a.y + (b.y - a.y) * p.t;
        ctx.globalAlpha = 0.18;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(x, y, 6, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
        ctx.beginPath();
        ctx.arc(x, y, 1.8, 0, Math.PI * 2);
        ctx.fill();
        const t = p.t + p.speed;
        return t >= 1 ? hop(p) : { ...p, t };
      });
    }

    function loop() {
      if (visible && !document.hidden) draw();
      frame = requestAnimationFrame(loop);
    }

    const onPointer = (e) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = e.clientX - rect.left;
      pointer.y = e.clientY - rect.top;
    };

    setup();
    draw();
    if (!reduceMotion) {
      frame = requestAnimationFrame(loop);
      window.addEventListener("pointermove", onPointer, { passive: true });
    }

    const resize = new ResizeObserver(() => {
      setup();
      draw();
    });
    resize.observe(canvas);
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
    });
    io.observe(canvas);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onPointer);
      resize.disconnect();
      io.disconnect();
    };
  }, [density, lineAlpha, packetRatio]);

  return <canvas ref={ref} className={className} aria-hidden="true" />;
}

export default NetworkCanvas;
