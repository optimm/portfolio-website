// A small isometric data centre for the hero: server racks with status lights,
// data packets travelling along floor cables to a laptop, and a slow sway that
// follows the pointer. Loaded on demand by HeroScene, so three.js never blocks
// the first paint.
import {
  AmbientLight,
  BoxGeometry,
  BufferGeometry,
  CanvasTexture,
  Color,
  DirectionalLight,
  EdgesGeometry,
  Float32BufferAttribute,
  Fog,
  Group,
  InstancedMesh,
  Line,
  LineBasicMaterial,
  LineSegments,
  Mesh,
  MeshBasicMaterial,
  MeshStandardMaterial,
  Object3D,
  PerspectiveCamera,
  PointLight,
  RepeatWrapping,
  Scene,
  SRGBColorSpace,
  Vector3,
  WebGLRenderer,
} from "three";

const BG = 0x07070c;
const PACKET_COLORS = ["#ff6b9a", "#7fa8ff", "#ffb86b", "#5fe0c4", "#c39bff"];
const LED_COLORS = ["#5fe0c4", "#5fe0c4", "#7fa8ff", "#7fa8ff", "#ffb86b", "#ff6b9a"];

const RACK = { width: 1.5, depth: 1.1, slot: 0.34 };
const LANE_Z = 1.7; // the cable run in front of the racks
const HUB = new Vector3(3.1, 0.06, 3.6); // under the laptop desk

// Two rows of racks: [x, z, height]
const RACKS = [
  [-3.15, -3.3, 4.4],
  [-1.05, -3.3, 3.6],
  [1.05, -3.3, 4.8],
  [3.15, -3.3, 3.9],
  [-3.15, -0.7, 3.0],
  [-1.05, -0.7, 3.8],
  [1.05, -0.7, 2.7],
  [3.15, -0.7, 3.3],
];

function codeTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "#0d0d16";
  ctx.fillRect(0, 0, 512, 512);
  const palette = ["#a393ff", "#ff6b9a", "#7fa8ff", "#5fe0c4", "#ffb86b", "#a4a2b9"];
  let y = 22;
  for (let line = 0; y < 512; line += 1) {
    ctx.fillStyle = "#34344a";
    ctx.fillRect(18, y, 16, 8);
    let x = 52 + (line % 5 === 0 ? 0 : 24 * ((line * 7) % 3));
    const tokens = 2 + ((line * 13) % 4);
    for (let t = 0; t < tokens && x < 470; t += 1) {
      const w = 26 + ((line * 31 + t * 17) % 90);
      ctx.fillStyle = palette[(line + t * 2) % palette.length];
      ctx.globalAlpha = 0.85;
      ctx.fillRect(x, y, w, 8);
      x += w + 12;
    }
    ctx.globalAlpha = 1;
    y += line % 6 === 5 ? 34 : 20;
  }
  const texture = new CanvasTexture(canvas);
  texture.colorSpace = SRGBColorSpace;
  texture.wrapT = RepeatWrapping;
  return texture;
}

// Orthogonal cable route from a rack's front edge to the hub.
function routeFor(x, z, isBackRow) {
  const y = 0.06;
  const points = [new Vector3(x, y, z + RACK.depth / 2)];
  let cx = x;
  if (isBackRow) {
    // Squeeze through the gap between front-row racks.
    cx = x + (x < 0 ? 1.05 : -1.05);
    points.push(new Vector3(x, y, z + RACK.depth / 2 + 0.55));
    points.push(new Vector3(cx, y, z + RACK.depth / 2 + 0.55));
  }
  points.push(new Vector3(cx, y, LANE_Z));
  points.push(new Vector3(HUB.x, y, LANE_Z));
  points.push(new Vector3(HUB.x, y, HUB.z));
  const lengths = points.slice(1).map((p, i) => p.distanceTo(points[i]));
  return { points, lengths, total: lengths.reduce((a, b) => a + b, 0) };
}

function pointOnRoute(route, distance, target) {
  let d = distance;
  for (let i = 0; i < route.lengths.length; i += 1) {
    if (d <= route.lengths[i]) {
      return target.lerpVectors(route.points[i], route.points[i + 1], d / route.lengths[i]);
    }
    d -= route.lengths[i];
  }
  return target.copy(route.points[route.points.length - 1]);
}

export function mount(container, { reduceMotion = false, onReady } = {}) {
  const renderer = new WebGLRenderer({ antialias: true, alpha: true, powerPreference: "low-power" });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
  renderer.outputColorSpace = SRGBColorSpace;
  renderer.domElement.style.width = "100%";
  renderer.domElement.style.height = "100%";
  renderer.domElement.style.display = "block";
  container.appendChild(renderer.domElement);

  const scene = new Scene();
  scene.fog = new Fog(BG, 26, 46);

  const camera = new PerspectiveCamera(30, 1, 0.1, 100);
  camera.position.set(15, 12.5, 17);
  // On wide screens aim a little to the scene's front-left so it sits towards
  // the right of the frame; on narrow ones (phones) keep it centred.
  const lookAt = new Vector3();

  scene.add(new AmbientLight(0x9d98d0, 0.9));
  const key = new DirectionalLight(0xffffff, 1.6);
  key.position.set(8, 14, 10);
  scene.add(key);
  const violet = new PointLight(0x8f7dff, 60, 20, 1.6);
  violet.position.set(-4, 6, -1);
  scene.add(violet);
  const pink = new PointLight(0xff6b9a, 34, 14, 1.6);
  pink.position.set(5, 2.5, 5);
  scene.add(pink);

  const world = new Group();
  scene.add(world);
  const disposables = [];
  const keep = (thing) => {
    disposables.push(thing);
    return thing;
  };

  const lineMaterial = keep(new LineBasicMaterial({ color: 0x4a4a6e }));

  // Platform with a floor grid
  const platformGeo = keep(new BoxGeometry(13, 0.4, 13));
  const platform = new Mesh(
    platformGeo,
    keep(new MeshStandardMaterial({ color: 0x0d0d17, metalness: 0.3, roughness: 0.75 }))
  );
  platform.position.y = -0.2;
  world.add(platform);
  const platformEdges = new LineSegments(keep(new EdgesGeometry(platformGeo)), lineMaterial);
  platformEdges.position.copy(platform.position);
  world.add(platformEdges);

  const grid = [];
  for (let i = -6; i <= 6; i += 1) {
    grid.push(i, 0.005, -6.5, i, 0.005, 6.5, -6.5, 0.005, i, 6.5, 0.005, i);
  }
  const gridGeo = keep(new BufferGeometry());
  gridGeo.setAttribute("position", new Float32BufferAttribute(grid, 3));
  world.add(new LineSegments(gridGeo, keep(new LineBasicMaterial({ color: 0x1b1b2a }))));

  // Racks
  const rackMaterial = keep(new MeshStandardMaterial({ color: 0x1e1e31, metalness: 0.5, roughness: 0.45 }));
  const slotTransforms = [];
  const ledTransforms = [];
  const leds = [];
  RACKS.forEach(([x, z, h], rackIndex) => {
    const geo = keep(new BoxGeometry(RACK.width, h, RACK.depth));
    const rack = new Mesh(geo, rackMaterial);
    rack.position.set(x, h / 2, z);
    world.add(rack);
    const edges = new LineSegments(keep(new EdgesGeometry(geo)), lineMaterial);
    edges.position.copy(rack.position);
    world.add(edges);

    const frontZ = z + RACK.depth / 2 + 0.012;
    for (let sy = 0.3; sy < h - 0.2; sy += RACK.slot) {
      slotTransforms.push([x, sy, frontZ]);
      for (let k = 0; k < 2; k += 1) {
        ledTransforms.push([x + 0.46 + k * 0.16, sy, frontZ + 0.012]);
        leds.push({
          rack: rackIndex,
          color: new Color(LED_COLORS[Math.floor(Math.random() * LED_COLORS.length)]),
          on: Math.random() < 0.7,
        });
      }
    }
  });

  const dummy = new Object3D();
  const slots = new InstancedMesh(
    keep(new BoxGeometry(RACK.width - 0.2, 0.22, 0.02)),
    keep(new MeshStandardMaterial({ color: 0x0f0f19, metalness: 0.4, roughness: 0.6 })),
    slotTransforms.length
  );
  slotTransforms.forEach(([x, y, z], i) => {
    dummy.position.set(x, y, z);
    dummy.updateMatrix();
    slots.setMatrixAt(i, dummy.matrix);
  });
  world.add(slots);

  const ledMesh = new InstancedMesh(
    keep(new BoxGeometry(0.1, 0.1, 0.02)),
    keep(new MeshBasicMaterial({ color: 0xffffff })),
    ledTransforms.length
  );
  ledTransforms.forEach(([x, y, z], i) => {
    dummy.position.set(x, y, z);
    dummy.updateMatrix();
    ledMesh.setMatrixAt(i, dummy.matrix);
  });
  world.add(ledMesh);

  const rackActivity = RACKS.map(() => 0);
  const tmpColor = new Color();
  function paintLeds() {
    leds.forEach((led, i) => {
      const boost = rackActivity[led.rack];
      const level = led.on ? 0.75 + boost * 0.25 : 0.1 + boost * 0.6;
      ledMesh.setColorAt(i, tmpColor.copy(led.color).multiplyScalar(level));
    });
    ledMesh.instanceColor.needsUpdate = true;
  }

  // Cables and packets
  const routes = RACKS.map(([x, z], i) => routeFor(x, z, i < 4));
  const cableMaterial = keep(new LineBasicMaterial({ color: 0x4a4a6e }));
  routes.forEach((route) => {
    const geo = keep(new BufferGeometry().setFromPoints(route.points));
    world.add(new Line(geo, cableMaterial));
  });

  const packetGeo = keep(new BoxGeometry(0.22, 0.22, 0.22));
  const packets = Array.from({ length: 14 }, (_, i) => {
    const mesh = new Mesh(
      packetGeo,
      keep(new MeshBasicMaterial({ color: PACKET_COLORS[i % PACKET_COLORS.length] }))
    );
    mesh.position.y = 0.17;
    world.add(mesh);
    const route = Math.floor(Math.random() * routes.length);
    return {
      mesh,
      route,
      toHub: Math.random() < 0.5,
      d: Math.random() * routes[route].total,
      speed: 0.018 + Math.random() * 0.02,
    };
  });

  // Desk and laptop at the hub
  const deskGeo = keep(new BoxGeometry(2.8, 0.9, 2));
  const desk = new Mesh(deskGeo, rackMaterial);
  desk.position.set(HUB.x, 0.45, HUB.z + 0.2);
  world.add(desk);
  const deskEdges = new LineSegments(keep(new EdgesGeometry(deskGeo)), lineMaterial);
  deskEdges.position.copy(desk.position);
  world.add(deskEdges);

  const laptop = new Group();
  laptop.position.set(HUB.x, 0.9, HUB.z + 0.2);
  laptop.rotation.y = 0.55;
  world.add(laptop);
  const bodyMaterial = keep(new MeshStandardMaterial({ color: 0x24243a, metalness: 0.35, roughness: 0.65 }));
  const base = new Mesh(keep(new BoxGeometry(2.1, 0.08, 1.45)), bodyMaterial);
  base.position.y = 0.04;
  laptop.add(base);

  const screenTexture = keep(codeTexture());
  const screenFace = keep(new MeshBasicMaterial({ map: screenTexture }));
  const hinge = new Group();
  hinge.position.set(0, 0.08, -0.7);
  hinge.rotation.x = -0.22;
  laptop.add(hinge);
  const screen = new Mesh(keep(new BoxGeometry(2.1, 1.4, 0.06)), [
    bodyMaterial,
    bodyMaterial,
    bodyMaterial,
    bodyMaterial,
    screenFace,
    bodyMaterial,
  ]);
  screen.position.set(0, 0.7, 0);
  hinge.add(screen);
  const glow = new PointLight(0xa393ff, 2.5, 3, 2);
  glow.position.set(0, 1.1, 0.9);
  hinge.add(glow);

  // Sizing, pointer and loop
  function resize() {
    const { clientWidth: w, clientHeight: h } = container;
    if (!w || !h) return;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    // Pull back on narrow containers so the whole platform stays in view.
    // Matches the 760px breakpoint where the scene moves below the intro.
    const narrow = window.innerWidth <= 760;
    const distance = narrow ? 1.25 : 1.3;
    lookAt.set(narrow ? 0 : -1.6, narrow ? 1.6 : 1.4, narrow ? 0 : 1.6);
    camera.position.set(15 * distance, 12.5 * distance, 17 * distance);
    camera.lookAt(lookAt);
    camera.updateProjectionMatrix();
  }
  resize();

  const pointer = { x: 0, y: 0 };
  const onPointer = (e) => {
    pointer.x = (e.clientX / window.innerWidth) * 2 - 1;
    pointer.y = (e.clientY / window.innerHeight) * 2 - 1;
  };

  let frame = 0;
  let visible = true;
  let time = 0;
  let last = performance.now();
  const position = new Vector3();

  function step(dt) {
    time += dt;
    world.rotation.y += (-0.28 + Math.sin(time * 0.18) * 0.12 + pointer.x * 0.18 - world.rotation.y) * 0.05;
    world.rotation.x += (pointer.y * 0.05 - world.rotation.x) * 0.05;
    screenTexture.offset.y = (time * 0.035) % 1;

    for (let i = 0; i < rackActivity.length; i += 1) rackActivity[i] *= 0.94;
    leds.forEach((led) => {
      if (Math.random() < 0.012) led.on = !led.on;
    });

    packets.forEach((p) => {
      const route = routes[p.route];
      p.d += p.speed * dt * 60;
      if (p.d >= route.total) {
        if (!p.toHub) rackActivity[p.route] = 1; // arrived at a rack
        p.route = Math.floor(Math.random() * routes.length);
        p.toHub = Math.random() < 0.5;
        p.d = 0;
      }
      const r = routes[p.route];
      pointOnRoute(r, p.toHub ? p.d : r.total - p.d, position);
      p.mesh.position.set(position.x, 0.17, position.z);
    });
    paintLeds();
  }

  function loop(now) {
    const dt = Math.min((now - last) / 1000, 0.05);
    last = now;
    if (visible && !document.hidden) {
      step(dt);
      renderer.render(scene, camera);
    }
    frame = requestAnimationFrame(loop);
  }

  paintLeds();
  step(0);
  renderer.render(scene, camera);
  if (onReady) onReady();
  if (!reduceMotion) {
    window.addEventListener("pointermove", onPointer, { passive: true });
    frame = requestAnimationFrame(loop);
  }

  const resizeObserver = new ResizeObserver(() => {
    resize();
    renderer.render(scene, camera);
  });
  resizeObserver.observe(container);
  const io = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
  });
  io.observe(container);

  return () => {
    cancelAnimationFrame(frame);
    window.removeEventListener("pointermove", onPointer);
    resizeObserver.disconnect();
    io.disconnect();
    disposables.forEach((d) => d.dispose());
    slots.dispose();
    ledMesh.dispose();
    renderer.dispose();
    renderer.domElement.remove();
  };
}
