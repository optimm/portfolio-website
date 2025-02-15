import React from "react";
import { stackList, toolist } from "../../data/ProjectData";
import {
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";

function About() {
  return (
    <React.Fragment>
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
          <div className="AboutBio">
            I'm a <strong>Software Developer</strong> passionate about building{" "}
            scalable and intelligent systems With a strong focus on system
            design, distributed computing, and generative AI. I'm currently
            developing <strong>LLM-powered solutions</strong> as a{" "}
            <strong>Founding Engineer at Meesho AI Services</strong>.<br />I
            played a key role as a core developer in building{" "}
            <strong>India's first GenAI-powered voicebot at scale</strong>.
            <br />
            <br />I was also among the <strong>44 students</strong> selected for
            the <strong>Summer of Bitcoin 2023</strong> from over{" "}
            <strong>10,000 applicants</strong>.
            <br />
            In my problem-solving journey, I earned a{" "}
            <strong>5⭐ rating on CodeChef</strong>,{" "}
            <strong>Specialist rating on Codeforces</strong>, and{" "}
            <strong>Knight badge on Leetcode</strong>, having solved over{" "}
            <strong>700 problems</strong> on various coding platforms.
            <br />
            <br />I hold a{" "}
            <strong>
              B.Tech in Computer Science and Engineering from IIIT Jabalpur
            </strong>{" "}
            and have a deep interest in problem-solving.
            <br />
            As a well-rounded individual, I also served as the Coordinator of
            the Counseling Committee at IIIT Jabalpur.
            <br />
            Currently, I'm exploring{" "}
            <strong>Deep Learning, Generative AI, and System Design</strong>,
            while also enjoying <strong>football and dancing</strong>.<br />
            Let's connect and build something incredible together! 🚀
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
      </ContactWrapper>
    </React.Fragment>
  );
}

export default About;
