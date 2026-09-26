import React from "react";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Experience from "../components/Experience/Experience";
import Skills from "../components/Skills/Skills";
import About from "../components/About/About";
import Blogs from "../components/Blogs/Blogs";
import Projects from "../components/Projects/Projects";
import Contact from "../components/Contact/Contact";

const Home = () => (
  <>
    <Header />
    <main>
      <Hero />
      <Experience />
      <Skills />
      <About />
      <Blogs />
      <Projects />
    </main>
    <Contact />
  </>
);

export default Home;
