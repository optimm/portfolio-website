import React, { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import Header from "../Header/Header";

import {
  HeroContainer,
  HeroWrapper,
  HeroLeft,
  HeroRight,
  Image,
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
              I design and code web, desktop and mobile applications and also do
              competitive coding.
            </p>
          </HeroLeft>
          <HeroRight>
            <Image className="main-image" src="./pf.png" alt="man-svgrepo" />
          </HeroRight>
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
