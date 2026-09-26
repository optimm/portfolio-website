import React from "react";
import styled from "styled-components";
import { ProjectList } from "../../data/ProjectData";

// Three columns; the first project spans two so the grid of five has rhythm.
const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;

  > li:first-child {
    grid-column: span 2;
  }

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));

    > li:first-child {
      grid-column: 1 / -1;
    }
  }
  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 24px 24px 20px;
  border-radius: 16px;
  border: 1px solid var(--line);
  background: radial-gradient(110% 80% at 0% 0%, rgba(143, 125, 255, 0.1), transparent 60%), var(--surface);
  overflow: hidden;
  transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;

  /* Brand gradient line that grows across the top on hover. */
  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 2px;
    width: 38%;
    background: var(--gradient);
    transition: width 0.4s ease;
  }

  &:hover {
    transform: translateY(-3px);
    border-color: var(--line-strong);
    box-shadow: 0 20px 44px -28px rgba(143, 125, 255, 0.6);
  }

  &:hover::before {
    width: 100%;
  }

  h3 {
    font-size: ${({ $featured }) => ($featured ? "clamp(24px, 2.6vw, 30px)" : "21px")};
    font-weight: 700;
    letter-spacing: -0.02em;
  }

  p {
    margin-top: 8px;
    max-width: 52ch;
    color: var(--muted);
    font-size: ${({ $featured }) => ($featured ? "17px" : "15.5px")};
  }

  .stack {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-top: 16px;
  }

  .stack li {
    padding: 3px 10px;
    border-radius: 999px;
    font-size: 12.5px;
    color: var(--muted);
    border: 1px solid var(--line-strong);
  }

  .links {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: auto;
    padding-top: 22px;
  }

  .links a {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    height: 36px;
    padding-inline: 14px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 600;
    border: 1px solid var(--line-strong);
    transition: background-color 0.15s ease, border-color 0.15s ease, color 0.15s ease;
  }

  .links a:hover {
    border-color: var(--text);
  }

  .links a.primary {
    background: var(--text);
    border-color: var(--text);
    color: var(--bg);
  }

  .links a.primary:hover {
    background: #fff;
  }

  .github {
    width: 16px;
    height: 16px;
    background: currentColor;
    -webkit-mask: url(/icons/github.svg) center / contain no-repeat;
    mask: url(/icons/github.svg) center / contain no-repeat;
  }
`;

function Projects() {
  return (
    <section id="projects" className="section" aria-labelledby="projects-title">
      <div className="wrap">
        <h2 id="projects-title" className="section-title" data-reveal>
          Side projects
        </h2>
        <Grid>
          {ProjectList.map((project, i) => (
            <li key={project.title} data-reveal style={{ "--i": i % 3 }}>
              <Card $featured={i === 0}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul className="stack" aria-label="Built with">
                  {project.tech_stack.split(", ").map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
                <div className="links">
                  <a
                    className="primary"
                    href={project.demo_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.demo_label}
                  </a>
                  <a href={project.github_url} target="_blank" rel="noopener noreferrer">
                    <span className="github" aria-hidden="true" />
                    Code
                  </a>
                </div>
              </Card>
            </li>
          ))}
        </Grid>
      </div>
    </section>
  );
}

export default Projects;
