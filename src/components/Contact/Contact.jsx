import React from "react";
import styled from "styled-components";
import NetworkCanvas from "../NetworkCanvas/NetworkCanvas";
import { email, socials } from "../../data/ProjectData";

const Section = styled.section`
  position: relative;
  overflow: hidden;

  .network {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    opacity: 0.9;
    mask-image: radial-gradient(ellipse 55% 75% at 85% 50%, #000 0%, transparent 75%);
    -webkit-mask-image: radial-gradient(ellipse 55% 75% at 85% 50%, #000 0%, transparent 75%);
  }

  > .wrap {
    position: relative;
  }

  h2 {
    max-width: 18ch;
    font-size: clamp(40px, 5.6vw, 72px);
  }

  .lead {
    max-width: 48ch;
    margin-top: 24px;
    font-size: 19px;
    color: var(--muted);
  }

  .email {
    display: inline-block;
    margin-top: 40px;
    font-size: clamp(24px, 4vw, 44px);
    font-weight: 600;
    letter-spacing: -0.02em;
    word-break: break-word;
    text-decoration-thickness: 2px;
    text-underline-offset: 8px;
  }

  .email:hover {
    text-decoration-thickness: 3px;
  }

  .socials {
    display: flex;
    flex-wrap: wrap;
    gap: 12px 28px;
    margin-top: 40px;
    font-size: 16px;
  }
`;

const Footer = styled.footer`
  border-top: 1px solid var(--line);
  padding-block: 28px;
  font-size: 14px;
  color: var(--muted);
`;

function Contact() {
  return (
    <>
      <Section id="contact" className="section">
        <NetworkCanvas className="network" />
        <div className="wrap">
          <h2 className="display" data-reveal>Got a hard problem? I'd like to hear it.</h2>
          <p className="lead" data-reveal style={{ "--i": 1 }}>
            I'm always up for a conversation about systems, development, AI or
            anything in between.
          </p>
          <a className="email text-link" href={`mailto:${email}`} data-reveal style={{ "--i": 2 }}>
            {email}
          </a>
          <ul className="socials" data-reveal style={{ "--i": 3 }}>
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  className="text-link"
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Section>
      <Footer>
        <div className="wrap">© {new Date().getFullYear()} Ayush Saxena</div>
      </Footer>
    </>
  );
}

export default Contact;
