import React, { useEffect, useState } from "react";
import styled from "styled-components";

const navItems = [
  { id: "experience", label: "Work" },
  { id: "skills", label: "Skills" },
  { id: "about", label: "About" },
  { id: "blogs", label: "Writing" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const Bar = styled.header`
  position: sticky;
  top: 0;
  z-index: 20;
  background: rgba(12, 10, 20, 0.82);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid ${({ $scrolled }) => ($scrolled ? "var(--line)" : "transparent")};
  transition: border-color 0.2s ease;
`;

const Inner = styled.div`
  height: var(--header-h);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
`;

const Wordmark = styled.a`
  font-size: 19px;
  font-weight: 700;
  letter-spacing: -0.02em;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 32px;

  a {
    position: relative;
    font-size: 15px;
    color: var(--muted);
    transition: color 0.15s ease;
    &:hover {
      color: var(--text);
    }
  }

  /* Underline for the section currently on screen. */
  a::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: -6px;
    height: 2px;
    border-radius: 2px;
    background: var(--gradient);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
  }

  a[aria-current] {
    color: var(--text);
  }

  a[aria-current]::after {
    transform: scaleX(1);
  }

  @media (max-width: 860px) {
    display: none;
  }
`;

const MenuButton = styled.button`
  display: none;
  font-size: 15px;
  font-weight: 600;
  padding: 8px 0 8px 12px;

  @media (max-width: 860px) {
    display: block;
  }
`;

const MobileNav = styled.nav`
  display: none;

  @media (max-width: 860px) {
    display: ${({ $open }) => ($open ? "block" : "none")};
    border-top: 1px solid var(--line);
    padding-block: 12px 24px;

    a {
      display: block;
      padding-block: 12px;
      font-size: 24px;
      font-weight: 600;
    }

  }
`;

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [current, setCurrent] = useState(null);

  // Track which section is in the middle of the screen for the nav underline.
  useEffect(() => {
    const sections = navItems.map((item) => document.getElementById(item.id)).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setCurrent(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((section) => io.observe(section));
    const onTop = () => window.scrollY < 200 && setCurrent(null);
    window.addEventListener("scroll", onTop, { passive: true });
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onTop);
    };
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  const close = () => setOpen(false);

  return (
    <Bar $scrolled={scrolled || open}>
      <Inner className="wrap">
        <Wordmark href="#top" onClick={close}>
          Ayush Saxena
        </Wordmark>
        <Nav aria-label="Main">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              aria-current={current === item.id ? "true" : undefined}
            >
              {item.label}
            </a>
          ))}
        </Nav>
        <MenuButton
          type="button"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen(!open)}
        >
          {open ? "Close" : "Menu"}
        </MenuButton>
      </Inner>
      <MobileNav id="mobile-nav" className="wrap" aria-label="Main" $open={open}>
        {navItems.map((item) => (
          <a key={item.id} href={`#${item.id}`} onClick={close}>
            {item.label}
          </a>
        ))}
      </MobileNav>
    </Bar>
  );
};

export default Header;
