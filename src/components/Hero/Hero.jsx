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
            I'm a software developer specializing in Software Architecture, Distributed Systems, and Generative AI. I enjoy building scalable systems, solving complex problems, and crafting efficient solutions. Currently, as an SDE-2 and Founding Engineer at Meesho AI Services, I'm helping scale the vertical by building the core platform. Let's connect and chat about systems, development, or anything in between!
            </p>
          </HeroLeft>
        </HeroWrapper>
        <ScrollDown to="experience">
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
