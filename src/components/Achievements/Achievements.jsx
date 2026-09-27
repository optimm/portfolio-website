import React from "react";
import styled from "styled-components";
import { achievements, categories } from "../../data/ProjectData";

// Four across on desktop and two on phones, so eight tiles fill both evenly.
const Tiles = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 14px;

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (max-width: 480px) {
    gap: 10px;
  }
`;

const Tile = styled.li`
  position: relative;
  padding: 22px 22px 20px;
  border-radius: 14px;
  border: 1px solid color-mix(in srgb, var(--c) 22%, var(--line));
  background: radial-gradient(110% 90% at 100% 0%, color-mix(in srgb, var(--c) 16%, transparent), transparent 60%),
    var(--surface);
  transition: transform 0.2s ease, border-color 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    border-color: color-mix(in srgb, var(--c) 50%, var(--line));
  }

  .value {
    display: block;
    font-size: clamp(30px, 3vw, 38px);
    font-weight: 700;
    letter-spacing: -0.02em;
    line-height: 1.1;
    color: var(--c);
    font-variant-numeric: tabular-nums;
  }

  .label {
    display: block;
    margin-top: 10px;
    font-size: 16px;
    font-weight: 600;
  }

  .detail {
    display: block;
    margin-top: 4px;
    font-size: 14.5px;
    line-height: 1.5;
    color: var(--muted);
  }

  @media (max-width: 480px) {
    padding: 16px 14px;

    .value {
      font-size: 26px;
    }
    .label {
      font-size: 14.5px;
    }
    .detail {
      font-size: 13px;
    }
  }
`;

function Achievements() {
  return (
    <section id="achievements" className="section" aria-labelledby="achievements-title">
      <div className="wrap">
        <h2 id="achievements-title" className="section-title" data-reveal>
          Achievements
        </h2>
        <Tiles>
          {achievements.map((item, i) => (
            <Tile
              key={item.label}
              data-reveal
              style={{
                "--c": categories[item.kind] ? categories[item.kind].color : "var(--accent)",
                "--i": i % 4,
              }}
            >
              <span className="value">{item.value}</span>
              <span className="label">{item.label}</span>
              <span className="detail">{item.detail}</span>
            </Tile>
          ))}
        </Tiles>
      </div>
    </section>
  );
}

export default Achievements;
