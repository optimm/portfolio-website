import React from "react";
import SocialIcon from "../SocialIcon/SocialIcon";
import { ContactWrapper, Email } from "./ContactElements";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function Contact() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <ContactWrapper id="contact">
      <div className="Container">
        <div className="SectionTitle">Get In Touch</div>
        <div className="BigCard">
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
      </div>
    </ContactWrapper>
  );
}

export default Contact;
