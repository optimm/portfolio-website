import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import HeroScene from "./HeroScene";
import { email, heroPhrases, heroProof } from "../../data/ProjectData";

const swapIn = keyframes`
  from { opacity: 0; transform: translateY(0.2em); filter: blur(6px); }
  to { opacity: 1; transform: none; filter: none; }
`;

const Section = styled.section`
  position: relative;
  overflow: hidden;
  min-height: min(88vh, 860px);
  display: flex;
  align-items: center;
  padding-block: clamp(48px, 8vw, 104px);

  /* Soft light from the top right, where the network is densest. */
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(60% 70% at 85% 10%, rgba(143, 125, 255, 0.16), transparent 70%),
      radial-gradient(40% 50% at 100% 80%, rgba(255, 107, 154, 0.08), transparent 70%);
    pointer-events: none;
  }

  /* The 3D scene sits behind the right side and fades out towards the text. */
  .scene {
    position: absolute;
    top: 0;
    right: -4%;
    bottom: 0;
    width: 62%;
    opacity: 0;
    transition: opacity 1.4s ease;
    mask-image: linear-gradient(90deg, transparent 0%, #000 38%);
    -webkit-mask-image: linear-gradient(90deg, transparent 0%, #000 38%);
  }

  .scene[data-ready] {
    opacity: 1;
  }

  > .wrap {
    position: relative;
  }

  /* On phones the scene goes below the intro instead of behind it. */
  @media (max-width: 760px) {
    min-height: 0;
    flex-direction: column;
    align-items: stretch;
    padding-bottom: 0;

    .scene {
      position: relative;
      order: 2;
      right: auto;
      width: 100%;
      height: 320px;
      margin-top: 8px;
      mask-image: linear-gradient(180deg, transparent 0%, #000 25%, #000 80%, transparent 100%);
      -webkit-mask-image: linear-gradient(180deg, transparent 0%, #000 25%, #000 80%, transparent 100%);
    }
  }
`;

/* Kept to the left part of the hero so the rotating phrase never runs into
   the 3D scene; the phrase wraps inside this width instead. */
const Copy = styled.div`
  max-width: 660px;

  @media (max-width: 1100px) {
    max-width: 600px;
  }
  @media (max-width: 760px) {
    max-width: none;
  }

  h1 {
    font-size: clamp(19px, 1.7vw, 22px);
    font-weight: 500;
    line-height: 1.4;
    color: var(--text);
  }

  .statement {
    margin-top: 12px;
    font-size: clamp(40px, 4.8vw, 62px);
  }

  /* Every phrase sits in the same grid cell (the inactive ones invisible), so
     the slot is always exactly as tall as the longest one at this width. */
  .phrase-slot {
    display: grid;
  }

  .phrase-slot > span {
    grid-area: 1 / 1;
  }

  .sizer {
    visibility: hidden;
  }

  .phrase {
    animation: ${swapIn} 500ms cubic-bezier(0.2, 0.7, 0.2, 1) both,
      gradient-drift 9s linear infinite;
  }

  .body {
    max-width: 58ch;
    margin-top: 24px;
    font-size: 19px;
    line-height: 1.6;
    color: var(--muted);

    @media (max-width: 560px) {
      font-size: 17px;
    }
  }

  .actions {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 36px;
  }

  .proof {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 40px;
  }

  .proof li {
    font-size: 14px;
    color: var(--muted);
    padding: 6px 12px;
    border: 1px solid var(--line);
    border-radius: 999px;
    background: rgba(15, 15, 24, 0.7);
    backdrop-filter: blur(6px);
  }

  .proof a {
    color: var(--text);
  }

  .proof a:hover {
    color: var(--focus);
  }
`;

function RotatingPhrase() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    const timer = setInterval(() => setIndex((i) => (i + 1) % heroPhrases.length), 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <span className="sr-only">{heroPhrases.join(" ")}</span>
      <span className="phrase-slot" aria-hidden="true">
        {heroPhrases.map((phrase) => (
          <span key={`sizer-${phrase}`} className="sizer">
            {phrase}
          </span>
        ))}
        <span key={heroPhrases[index]} className="phrase gradient-text">
          {heroPhrases[index]}
        </span>
      </span>
    </>
  );
}

function Hero() {
  return (
    <Section id="top" aria-label="Introduction">
      <HeroScene className="scene" />
      <div className="wrap">
        <Copy>
          <h1>Hi, I'm Ayush Saxena, a software engineer.</h1>
          <p className="statement display">
            I build <RotatingPhrase />
          </p>
          <p className="body">
            I specialize in software architecture, distributed systems and
            generative AI, and I enjoy turning hard problems into simple,
            scalable systems. Right now I'm an SDE 2 and founding engineer at{" "}
            <strong>Meesho AI Services</strong>, building the core platform the
            vertical runs on.
          </p>
          <div className="actions">
            <a className="button" href="#experience">
              See my work
            </a>
            <a className="button ghost" href={`mailto:${email}`}>
              Email me
            </a>
          </div>
          <ul className="proof">
            {heroProof.map((item) => (
              <li key={item.label}>
                {item.url ? (
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    {item.label}
                  </a>
                ) : (
                  item.label
                )}
              </li>
            ))}
          </ul>
        </Copy>
      </div>
    </Section>
  );
}

export default Hero;
