import React from "react";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import FixSocialIcon from "../components/SocialIcon/FixSocialIcon";
import Experience from "../components/Experience/Experience";

const Home = () =>
 (
    <React.Fragment>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <FixSocialIcon />
    </React.Fragment>
  );


export default Home;
