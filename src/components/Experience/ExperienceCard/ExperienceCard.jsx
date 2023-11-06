import React from "react";
import { useEffect } from "react";
import { ExperienceList } from "../../../data/ProjectData";
import Aos from "aos";
import { BtnGroup } from "../../Projects/ProjectCard/ProjectCardElements";
import { ExpCard, ExperienceCardRight } from "./styles";

function ExperienceCard() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <React.Fragment>
      {ExperienceList.map((list, index) => (
        <ExpCard key={index}>
          <ExperienceCardRight data-aos="fade-up-left">
            <h4>{list.title}</h4>

            <div className="role">{list.role}</div>

            <p>{list.description}</p>

            {list.isc && (
              <BtnGroup>
                <a
                  className="btn PrimaryBtn"
                  href={list.certificate}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Certificate ➜
                </a>
              </BtnGroup>
            )}
          </ExperienceCardRight>
        </ExpCard>
      ))}
    </React.Fragment>
  );
}

export default ExperienceCard;
