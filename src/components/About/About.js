import React from "react";
import { stackList, toolist } from "../../data/ProjectData";
import {
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function About() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      <svg
        height="20%"
        width="100%"
        id="svg"
        viewBox="0 0 1440 400"
        xmlns="http://www.w3.org/2000/svg"
        class="transition duration-300 ease-in-out delay-150"
      >
        <path
          d="M 0,400 C 0,400 0,200 0,200 C 114.35714285714289,156.53571428571428 228.71428571428578,113.07142857142858 351,131 C 473.2857142857142,148.92857142857142 603.4999999999998,228.25 713,248 C 822.5000000000002,267.75 911.2857142857144,227.92857142857142 1029,210 C 1146.7142857142856,192.07142857142858 1293.3571428571427,196.03571428571428 1440,200 C 1440,200 1440,400 1440,400 Z"
          stroke="none"
          stroke-width="0"
          fill="#151418ff"
          class="transition-all duration-300 ease-in-out delay-150"
          transform="rotate(-180 720 200)"
        ></path>
      </svg>
      <ContactWrapper id="about">
        <div className="Container" data-aos="fade-up">
          <div className="SectionTitle">About Me</div>
          <div className="BigCard">
            <div className="AboutBio">
              Hello! My name is <strong>Ayush Saxena</strong> I am a mern stack
              web developer , i like designing and developing web applications,
              i also develop desktop applications with electron js and cross
              platform mobile applications with react native, i am also a
              competitive coder (now 4 ⭐ on Codechef), i like contributing to
              open source enthusiastically , I am currently pursuing my btech in
              cse from <strong>IIIT Jabalpur</strong>. Apart from coding i like
              football and dancing.
            </div>
            <br />
            <br />

            <div className="AboutBio tagline2">My Technical Skills</div>
            <br />
            <Technologies data-aos="fade-up">
              {stackList.map((stack, index) => (
                <Tech key={index} className="tech">
                  <TechImg src={stack.img} alt={stack.name} />
                  <TechName>{stack.name}</TechName>
                </Tech>
              ))}
            </Technologies>
            <br />

            <div className="AboutBio tagline2">Tools That I Use</div>
            <br />
            <Technologies data-aos="fade-up">
              {toolist.map((stack, index) => (
                <Tech key={index} className="tech">
                  <TechImg src={stack.img} alt={stack.name} />
                  <TechName>{stack.name}</TechName>
                </Tech>
              ))}
            </Technologies>
          </div>
        </div>
      </ContactWrapper>
    </>
  );
}

export default About;
