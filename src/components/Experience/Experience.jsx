import React from "react";
import styled from "styled-components";
import NetworkCanvas from "../NetworkCanvas/NetworkCanvas";
import { categories, ExperienceList } from "../../data/ProjectData";

const usedKinds = [
  ...new Set(
    ExperienceList.flatMap((c) => c.roles.flatMap((r) => r.highlights.map((h) => h.kind)))
  ),
];

// A sparse slice of the network animation behind the heading only. Kept to
// the top corner so the canvas stays small on a very tall section.
const Section = styled.section`
  position: relative;
  overflow: hidden;

  .network {
    position: absolute;
    top: 0;
    right: 0;
    width: 60%;
    height: 680px;
    opacity: 0.75;
    mask-image: radial-gradient(ellipse 80% 90% at 70% 35%, #000 35%, transparent 80%);
    -webkit-mask-image: radial-gradient(ellipse 80% 90% at 70% 35%, #000 35%, transparent 80%);
  }

  > .wrap {
    position: relative;
  }

  @media (max-width: 760px) {
    .network {
      width: 100%;
      height: 420px;
    }
  }
`;

const Head = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
  gap: 16px 40px;
  margin-bottom: clamp(40px, 5vw, 64px);

  .section-title {
    margin-bottom: 0;
  }
`;

// The vertical line on the left is the timeline; each company is a stop on it.
const Timeline = styled.ol`
  --rail: 120px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: calc(var(--rail) - 24px);
    top: 8px;
    bottom: 0;
    width: 1px;
    background: linear-gradient(var(--line), var(--line) 85%, transparent);
  }

  &::after {
    content: "";
    position: absolute;
    left: calc(var(--rail) - 24px);
    top: 8px;
    bottom: 0;
    width: 1px;
    background: linear-gradient(180deg, #8f7dff, #ff6b9a 55%, #ffb86b);
    transform-origin: top;
    transform: scaleY(0);
  }

  /* Where the browser supports scroll-driven animations, the line fills with
     the brand gradient as you scroll through the timeline. */
  @supports (animation-timeline: view()) {
    &::after {
      animation: timeline-fill linear both;
      animation-timeline: view();
      animation-range: entry 20% cover 75%;
    }
  }

  @keyframes timeline-fill {
    to {
      transform: scaleY(1);
    }
  }

  @media (max-width: 760px) {
    --rail: 28px;
  }
`;

const Company = styled.li`
  position: relative;
  display: grid;
  grid-template-columns: var(--rail) minmax(0, 1fr);

  & + & {
    margin-top: clamp(56px, 7vw, 88px);
  }

  .years {
    padding-top: 6px;
    padding-right: 40px;
    font-size: 14px;
    font-weight: 500;
    color: ${({ $current }) => ($current ? "var(--accent)" : "var(--muted)")};
    font-variant-numeric: tabular-nums;
    text-align: right;
    white-space: nowrap;
  }

  .stop {
    position: absolute;
    left: calc(var(--rail) - 29px);
    top: 8px;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background: ${({ $current }) => ($current ? "var(--accent)" : "var(--bg)")};
    border: 2px solid ${({ $current }) => ($current ? "var(--accent)" : "var(--muted)")};
    box-shadow: ${({ $current }) =>
      $current ? "0 0 0 5px rgba(163, 147, 255, 0.2)" : "0 0 0 5px var(--bg)"};
  }

  @media (max-width: 760px) {
    .years {
      display: none;
    }
    .stop {
      left: 0;
    }
  }
`;

const Body = styled.div`
  grid-column: 2;
  min-width: 0;

  > header {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 24px;
  }

  /* Monogram tile; the current company gets the brand gradient border. */
  .logo {
    flex: none;
    display: grid;
    place-items: center;
    width: 52px;
    height: 52px;
    border-radius: 14px;
    font-size: 22px;
    font-weight: 700;
    border: 1.5px solid transparent;
    background: linear-gradient(var(--surface-2), var(--surface-2)) padding-box,
      ${({ $current }) => ($current ? "var(--gradient)" : "linear-gradient(var(--line-strong), var(--line-strong))")} border-box;
    box-shadow: ${({ $current }) => ($current ? "0 10px 30px -12px rgba(143, 125, 255, 0.55)" : "none")};
  }

  .sub {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    gap: 4px 16px;
    margin-top: 4px;
  }

  h3 {
    font-size: clamp(24px, 2.6vw, 30px);
    font-weight: 700;
    letter-spacing: -0.02em;
    line-height: 1.15;
  }

  .summary {
    font-size: 15px;
    color: var(--accent);
  }

  .mobile-years {
    display: none;
    width: 100%;
    font-size: 14px;
    color: var(--muted);
  }

  @media (max-width: 760px) {
    .mobile-years {
      display: block;
    }
  }
`;

// Intern -> SDE 1 -> SDE 2, oldest on the left.
const Steps = styled.ol`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: minmax(0, 1fr);
  margin-bottom: 32px;
  max-width: 560px;

  li {
    position: relative;
    padding-top: 22px;
  }

  li::before {
    content: "";
    position: absolute;
    top: 5px;
    left: 0;
    right: 0;
    height: 2px;
    background: var(--line);
  }

  li:last-child::before {
    background: linear-gradient(90deg, var(--line), transparent);
  }

  li::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: var(--surface-2);
    border: 2px solid var(--muted);
  }

  li[data-current]::after {
    background: var(--accent);
    border-color: var(--accent);
    box-shadow: 0 0 0 5px rgba(163, 147, 255, 0.2);
  }

  a {
    display: block;
    font-size: 15px;
    font-weight: 600;
  }

  a:hover {
    color: var(--accent);
  }

  span {
    display: block;
    font-size: 13px;
    color: var(--muted);
  }
`;

const Role = styled.section`
  scroll-margin-top: calc(var(--header-h) + 24px);

  /* Roles at the same company get a clear break between them. */
  & + & {
    margin-top: 48px;
    padding-top: 40px;
    border-top: 1px dashed var(--line-strong);
  }

  > header {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 8px 14px;
    margin-bottom: 18px;
  }

  .badge {
    padding: 3px 10px;
    border-radius: 6px;
    font-size: 13px;
    font-weight: 600;
    color: var(--text);
    background: var(--surface-2);
    border: 1px solid var(--line-strong);
  }

  .badge[data-current] {
    color: var(--bg);
    background: var(--accent);
    border-color: var(--accent);
  }

  h4 {
    font-size: 19px;
    font-weight: 600;
  }

  .period {
    margin-left: auto;
  }

  .period {
    font-size: 14px;
    color: var(--muted);
    font-variant-numeric: tabular-nums;
  }

  .stack {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-top: 16px;
  }

  .stack li {
    padding: 3px 10px;
    border-radius: 6px;
    font-size: 12.5px;
    color: var(--muted);
    background: var(--surface-2);
    border: 1px solid var(--line);
  }

`;

// Press coverage, set apart from the dark tiles so it reads as a clipping.
// Press coverage, set like newsprint so it reads as outside validation.
const PressList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
  margin-top: 12px;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

const Press = styled.a`
  display: flex;
  flex-direction: column;
  gap: 8px;
  height: 100%;
  padding: 20px 24px;
  border-radius: 12px;
  background: #f4f1ea;
  color: #15131c;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 32px -12px rgba(255, 184, 107, 0.45);
  }

  .outlet {
    font-family: Georgia, "Times New Roman", serif;
    font-size: 19px;
    font-weight: 700;
  }

  .headline {
    font-family: Georgia, "Times New Roman", serif;
    font-size: 17px;
    line-height: 1.4;
  }

  .about {
    font-size: 14px;
    color: #57536a;
  }

  .read {
    margin-top: auto;
    padding-top: 6px;
    font-size: 15px;
    font-weight: 600;
    text-decoration: underline;
    text-underline-offset: 4px;
  }

  @media (max-width: 760px) {
    padding: 18px 20px;
  }
`;

const Highlights = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

// Title first with a small icon for the kind of work; a headline number, where
// there is one, sits below as a badge. A soft spotlight follows the pointer.
const Highlight = styled.li`
  position: relative;
  grid-column: ${({ $wide }) => ($wide ? "1 / -1" : "auto")};
  display: flex;
  flex-direction: column;
  padding: 20px 22px;
  border-radius: 14px;
  border: 1px solid color-mix(in srgb, var(--c) 16%, var(--line));
  background: var(--surface);
  overflow: hidden;
  isolation: isolate;
  transition: border-color 0.25s ease, transform 0.25s ease;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    z-index: -1;
    background: radial-gradient(
      420px circle at var(--x, 20%) var(--y, 0%),
      color-mix(in srgb, var(--c) 16%, transparent),
      transparent 65%
    );
    opacity: 0.55;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-2px);
    border-color: color-mix(in srgb, var(--c) 45%, var(--line));
  }

  &:hover::after {
    opacity: 1;
  }

  .head {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .kind {
    flex: none;
    display: grid;
    place-items: center;
    width: 34px;
    height: 34px;
    border-radius: 10px;
    background: color-mix(in srgb, var(--c) 14%, transparent);
    border: 1px solid color-mix(in srgb, var(--c) 30%, transparent);
    transition: background-color 0.25s ease;
  }

  .kind::before {
    content: "";
    width: 18px;
    height: 18px;
    background: var(--c);
    -webkit-mask: var(--src) center / contain no-repeat;
    mask: var(--src) center / contain no-repeat;
  }

  &:hover .kind {
    background: color-mix(in srgb, var(--c) 24%, transparent);
  }

  h5 {
    font-size: ${({ $wide }) => ($wide ? "19px" : "17px")};
    font-weight: 650;
    line-height: 1.3;
  }

  p {
    margin-top: 10px;
    max-width: 72ch;
    font-size: 15px;
    line-height: 1.6;
    color: var(--muted);
  }

  .stat {
    display: inline-flex;
    align-items: baseline;
    gap: 8px;
    align-self: flex-start;
    margin-top: 16px;
    padding: 5px 12px;
    border-radius: 999px;
    font-size: 13.5px;
    color: var(--muted);
    background: color-mix(in srgb, var(--c) 12%, transparent);
    border: 1px solid color-mix(in srgb, var(--c) 30%, transparent);
  }

  .stat strong {
    font-size: 15px;
    font-weight: 700;
    color: var(--c);
    font-variant-numeric: tabular-nums;
  }
`;

// Moves the tile's spotlight to follow the pointer.
function trackSpotlight(e) {
  const rect = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);
  e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
}

function Experience() {
  return (
    <Section id="experience" className="section">
      <NetworkCanvas className="network" density={26000} lineAlpha={0.08} packetRatio={0.1} />
      <div className="wrap">
        <Head>
          <h2 className="section-title" data-reveal>Work</h2>
          <ul className="legend" aria-label="Colour key" data-reveal style={{ "--i": 2 }}>
            {usedKinds.map((kind) => (
              <li key={kind} style={{ "--c": categories[kind].color }}>
                {categories[kind].label}
              </li>
            ))}
          </ul>
        </Head>

        <Timeline>
          {ExperienceList.map((company) => (
            <Company key={company.company} $current={company.current}>
              <span className="years">{company.years}</span>
              <span className="stop" aria-hidden="true" />
              <Body $current={company.current}>
                <header>
                  <span className="logo" aria-hidden="true">
                    {company.company[0]}
                  </span>
                  <div>
                    <span className="mobile-years">{company.years}</span>
                    <h3>{company.company}</h3>
                    {(company.summary || company.certificate) && (
                      <div className="sub">
                        {company.summary && <span className="summary">{company.summary}</span>}
                        {company.certificate && (
                          <a
                            className="text-link"
                            href={company.certificate}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Certificate
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </header>

                {company.roles.length > 1 && (
                  <Steps aria-label="Roles" data-reveal>
                    {[...company.roles].reverse().map((role, i, all) => (
                      <li key={role.id} data-current={i === all.length - 1 ? "" : undefined}>
                        <a href={`#${role.id}`}>{role.short}</a>
                        <span>{role.period.split(" - ")[0]}</span>
                      </li>
                    ))}
                  </Steps>
                )}

                {company.roles.map((role) => (
                  <Role key={role.id} id={role.id}>
                    <header>
                      {role.short && (
                        <span
                          className="badge"
                          data-current={role.period.endsWith("Present") ? "" : undefined}
                        >
                          {role.short}
                        </span>
                      )}
                      <h4>{role.title}</h4>
                      <span className="period">{role.period}</span>
                    </header>
                    <Highlights>
                      {role.highlights.map((h, i) => (
                        <Highlight
                          key={h.title}
                          data-reveal
                          $wide={h.featured || role.highlights.length === 1}
                          style={{ "--c": categories[h.kind].color, "--i": i % 2 }}
                          onPointerMove={trackSpotlight}
                        >
                          <div className="head">
                            <span
                              className="kind"
                              aria-hidden="true"
                              style={{ "--src": `url(/icons/kind-${h.kind}.svg)` }}
                            />
                            <h5>{h.title}</h5>
                          </div>
                          <p>{h.text}</p>
                          {h.value && (
                            <span className="stat">
                              <strong>{h.value}</strong>
                              {h.label}
                            </span>
                          )}
                        </Highlight>
                      ))}
                    </Highlights>
                    {role.press && (
                      <PressList aria-label="Press coverage">
                        {role.press.map((story, i) => (
                          <li key={story.url} data-reveal style={{ "--i": i }}>
                            <Press href={story.url} target="_blank" rel="noopener noreferrer">
                              <span className="outlet">{story.outlet}</span>
                              <span className="headline">“{story.headline}”</span>
                              <span className="about">{story.about}</span>
                              <span className="read">Read the story</span>
                            </Press>
                          </li>
                        ))}
                      </PressList>
                    )}
                    <ul className="stack" aria-label="Built with">
                      {role.stack.map((tech) => (
                        <li key={tech}>{tech}</li>
                      ))}
                    </ul>
                  </Role>
                ))}
              </Body>
            </Company>
          ))}
        </Timeline>
      </div>
    </Section>
  );
}

export default Experience;
