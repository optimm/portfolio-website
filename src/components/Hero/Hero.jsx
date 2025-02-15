import React, { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import Header from "../Header/Header";

import {
  HeroContainer,
  HeroWrapper,
  HeroLeft,
  ScrollDown,
  ScrollLink,
} from "./HeroElements";
function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <main>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <HeroContainer>
        <HeroWrapper>
          <HeroLeft>
            <h1>Hi, I'm Ayush Saxena</h1>
            {/* <h5>Frontend Developer</h5> */}
            <p className="description">
            I'm a software developer specializing in Full-Stack Development, Software Architecture, and Generative AI. I enjoy building and discussing scalable systems, solving complex problems, and crafting efficient solutions. Currently, as a Founding Engineer at Meesho AI Services, I'm developing LLM-powered solutions for the next generation. Let's connect and chat about systems, development, or anything in between!
            </p>
          </HeroLeft>
        </HeroWrapper>
        <ScrollDown to="projects">
          <ScrollLink>
            Scroll down
            <img src="./scroll-down.svg" alt="scroll-down" />
          </ScrollLink>
        </ScrollDown>
      </HeroContainer>
    </main>
  );
}

export default Hero;
