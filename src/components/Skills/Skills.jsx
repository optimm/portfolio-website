import React, { useState } from "react";
import styled from "styled-components";
import { categories, expertise, tools } from "../../data/ProjectData";

// Brand colours that are too dark to see on the page fall back to white on hover.
function hoverColor(hex) {
  const n = parseInt(hex, 16);
  const [r, g, b] = [(n >> 16) & 255, (n >> 8) & 255, n & 255];
  return 0.2126 * r + 0.7152 * g + 0.0722 * b > 90 ? `#${hex}` : "var(--text)";
}

const Areas = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;

// Each focus area is a toggle that highlights its tools below.
const Area = styled.button`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 24px 22px 20px;
  border-radius: 14px;
  text-align: left;
  border: 1px solid ${({ $active }) => ($active ? "var(--c)" : "var(--line)")};
  background: radial-gradient(
      120% 80% at 0% 0%,
      color-mix(in srgb, var(--c) ${({ $active }) => ($active ? 26 : 14)}%, transparent),
      transparent 60%
    ),
    var(--surface);
  box-shadow: ${({ $active }) =>
    $active ? "0 18px 40px -24px color-mix(in srgb, var(--c) 70%, transparent)" : "none"};
  overflow: hidden;
  transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    border-color: color-mix(in srgb, var(--c) 60%, var(--line));
  }

  &::before {
    content: "";
    position: absolute;
    left: 22px;
    right: 22px;
    top: 0;
    height: 2px;
    background: var(--c);
    border-radius: 0 0 2px 2px;
  }

  h3 {
    font-size: 18px;
    font-weight: 650;
  }

  p {
    margin-top: 8px;
    font-size: 15px;
    line-height: 1.55;
    color: var(--muted);
  }

  .keywords {
    margin-top: 14px;
    font-size: 13.5px;
    color: var(--c);
  }

  .toggle {
    margin-top: auto;
    padding-top: 16px;
    font-size: 13.5px;
    font-weight: 600;
    color: var(--text);
  }
`;

const ToolsHead = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  gap: 8px 24px;
  margin: clamp(48px, 6vw, 72px) 0 20px;

  h3 {
    font-size: 18px;
    font-weight: 600;
  }

  p {
    font-size: 14.5px;
    color: var(--muted);
  }

  button {
    font-size: 14.5px;
    font-weight: 600;
    color: var(--text);
    text-decoration: underline;
    text-underline-offset: 4px;
  }
`;

const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(112px, 1fr));
  gap: 10px;

  @media (max-width: 480px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 8px;
  }
`;

const Tool = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 18px 8px 14px;
  border-radius: 12px;
  border: 1px solid var(--line);
  background: var(--surface);
  color: var(--text);
  transition: border-color 0.25s ease, transform 0.25s ease, color 0.25s ease, opacity 0.25s ease,
    background-color 0.25s ease;

  /* The SVG is used as a mask so it takes the tile's text colour. */
  .icon {
    width: 28px;
    height: 28px;
    background: currentColor;
    opacity: 0.9;
    -webkit-mask: var(--src) center / contain no-repeat;
    mask: var(--src) center / contain no-repeat;
  }

  .mark {
    display: grid;
    place-items: center;
    height: 28px;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: -0.01em;
  }

  .name {
    font-size: 13.5px;
    color: var(--muted);
    text-align: center;
    line-height: 1.3;
  }

  &:hover {
    color: var(--brand);
    border-color: var(--line-strong);
    transform: translateY(-2px);
  }

  &[data-match] {
    color: var(--active);
    border-color: color-mix(in srgb, var(--active) 55%, var(--line));
    background: color-mix(in srgb, var(--active) 9%, var(--surface));
    transform: translateY(-2px);
  }

  &[data-match] .name {
    color: var(--text);
  }

  &[data-dim] {
    opacity: 0.28;
  }
`;

function Skills() {
  const [active, setActive] = useState(null);
  const activeCategory = active && categories[active];
  const matches = active ? tools.filter((t) => t.kinds.includes(active)).length : tools.length;

  return (
    <section id="skills" className="section" aria-labelledby="skills-title">
      <div className="wrap">
        <h2 id="skills-title" className="section-title" data-reveal>
          Skills
        </h2>
        <Areas>
          {expertise.map((area, i) => {
            const isActive = active === area.kind;
            return (
              <li key={area.title} data-reveal style={{ "--i": i }}>
                <Area
                  type="button"
                  $active={isActive}
                  aria-pressed={isActive}
                  aria-controls="skills-tools"
                  style={{ "--c": categories[area.kind].color }}
                  onClick={() => setActive(isActive ? null : area.kind)}
                >
                  <h3>{area.title}</h3>
                  <p>{area.text}</p>
                  <p className="keywords">{area.keywords}</p>
                  <span className="toggle">{isActive ? "Showing its tools" : "Show its tools"}</span>
                </Area>
              </li>
            );
          })}
        </Areas>

        <ToolsHead>
          <h3>Tools and techniques</h3>
          {active ? (
            <p aria-live="polite">
              {matches} tools for {activeCategory.label}.{" "}
              <button type="button" onClick={() => setActive(null)}>
                Show all
              </button>
            </p>
          ) : (
            <p aria-live="polite">Pick a focus area above to highlight what I use for it.</p>
          )}
        </ToolsHead>
        <Grid id="skills-tools" style={activeCategory ? { "--active": activeCategory.color } : undefined}>
          {tools.map((tool, i) => {
            const match = active && tool.kinds.includes(active);
            const brand = tool.hex ? hoverColor(tool.hex) : categories[tool.kinds[0]].color;
            return (
              <Tool
                key={tool.name}
                data-match={match ? "" : undefined}
                data-dim={active && !match ? "" : undefined}
                data-reveal
                style={{ "--brand": brand, "--i": i % 8 }}
              >
                {tool.icon ? (
                  <span
                    className="icon"
                    aria-hidden="true"
                    style={{ "--src": `url(/icons/${tool.icon}.svg)` }}
                  />
                ) : (
                  <span className="mark" aria-hidden="true">
                    {tool.mark}
                  </span>
                )}
                <span className="name">{tool.name}</span>
              </Tool>
            );
          })}
        </Grid>
      </div>
    </section>
  );
}

export default Skills;
