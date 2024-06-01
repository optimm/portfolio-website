import React from "react";
import SocialIcon from "../SocialIcon/SocialIcon";
import { ContactWrapper, Email } from "./ContactElements";

function Contact() {
  return (
    <React.Fragment>
      <svg
        width="100%"
        id="svg"
        viewBox="0 0 1440 300"
        xmlns="http://www.w3.org/2000/svg"
        class="transition duration-300 ease-in-out delay-150"
      >
        <path
          d="M 0,400 C 0,400 0,200 0,200 C 114.35714285714289,156.53571428571428 228.71428571428578,113.07142857142858 351,131 C 473.2857142857142,148.92857142857142 603.4999999999998,228.25 713,248 C 822.5000000000002,267.75 911.2857142857144,227.92857142857142 1029,210 C 1146.7142857142856,192.07142857142858 1293.3571428571427,196.03571428571428 1440,200 C 1440,200 1440,400 1440,400 Z"
          stroke="none"
          stroke-width="0"
          fill="#151418ff"
          class="transition-all duration-300 ease-in-out delay-150"
          transform="rotate(0 720 200)"
        ></path>
      </svg>

      <ContactWrapper id="contact">
        <div className="Container">
          <div className="SectionTitle contact">Get In Touch</div>
          <Email data-aos="fade-right">
            <span>ayushsaxena823@gmail.com</span>
            <a
              className="btn PrimaryBtn"
              href="mailto:ayushsaxena823@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send Mail
            </a>
          </Email>
        </div>
        <SocialIcon />
        <div className="footer">
          Created by{" "}
          <a
            href="https://github.com/optimm/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ayush Saxena
          </a>{" "}
        </div>
      </ContactWrapper>
    </React.Fragment>
  );
}

export default Contact;
