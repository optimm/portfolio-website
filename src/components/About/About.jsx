import React from "react";
import styled from "styled-components";
import NetworkCanvas from "../NetworkCanvas/NetworkCanvas";
import { categories, recognition } from "../../data/ProjectData";

const Section = styled.section`
  position: relative;
  overflow: hidden;

  .network {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    opacity: 0.9;
    mask-image: radial-gradient(ellipse 70% 60% at 80% 30%, #000 0%, transparent 75%);
    -webkit-mask-image: radial-gradient(ellipse 70% 60% at 80% 30%, #000 0%, transparent 75%);
  }

  > .wrap {
    position: relative;
  }
`;

const Layout = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 7fr) minmax(0, 5fr);
  gap: 40px clamp(32px, 5vw, 72px);
  align-items: start;

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`;

const Bio = styled.div`
  max-width: 60ch;

  p {
    font-size: 19px;
    line-height: 1.6;
    color: var(--muted);
  }

  p:first-child {
    font-size: clamp(21px, 2.2vw, 25px);
    line-height: 1.45;
    color: var(--text);
  }

  p + p {
    margin-top: 20px;
  }
`;

// "Right now" card, glassy so the network shows through behind it.
const Now = styled.dl`
  padding: 8px 22px;
  border-radius: 14px;
  border: 1px solid var(--line);
  background: rgba(15, 15, 24, 0.72);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);

  div {
    display: grid;
    grid-template-columns: 110px minmax(0, 1fr);
    gap: 12px;
    padding-block: 16px;
  }

  div + div {
    border-top: 1px solid var(--line);
  }

  dt {
    font-size: 14px;
    color: var(--muted);
  }

  dd {
    font-size: 15.5px;
    line-height: 1.5;
  }
`;

const RecognitionHead = styled.h3`
  margin: clamp(48px, 6vw, 72px) 0 20px;
  font-size: 18px;
  font-weight: 600;
`;

const Tiles = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;

  @media (max-width: 860px) {
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

function About() {
  return (
    <Section id="about" className="section" aria-labelledby="about-title">
      <NetworkCanvas className="network" />
      <div className="wrap">
        <h2 id="about-title" className="section-title" data-reveal>
          About
        </h2>
        <Layout>
          <Bio data-reveal>
            <p>
              I'm a Software Development Engineer 2 at Meesho. I joined as an
              intern in 2024, helped launch India's first LLM-powered customer
              support voice bot at scale, and then became a founding engineer of
              Meesho AI Services.
            </p>
            <p>
              I like problems where distributed systems and AI meet: routing
              across models and regions, keeping latency low on real-time voice,
              and building platforms that let other people ship agents without
              waiting on engineering.
            </p>
          </Bio>
          <Now data-reveal style={{ "--i": 2 }}>
            <div>
              <dt>Building</dt>
              <dd>The core platform behind Meesho AI Services</dd>
            </div>
            <div>
              <dt>Exploring</dt>
              <dd>Deep learning, generative AI and system design</dd>
            </div>
            <div>
              <dt>Off the clock</dt>
              <dd>Football and dancing</dd>
            </div>
          </Now>
        </Layout>

        <RecognitionHead>Recognition and education</RecognitionHead>
        <Tiles>
          {recognition.map((item, i) => (
            <Tile
              key={item.label}
              data-reveal
              style={{
                "--c": categories[item.kind] ? categories[item.kind].color : "var(--accent)",
                "--i": i % 3,
              }}
            >
              <span className="value">{item.value}</span>
              <span className="label">{item.label}</span>
              <span className="detail">{item.detail}</span>
            </Tile>
          ))}
        </Tiles>
      </div>
    </Section>
  );
}

export default About;
