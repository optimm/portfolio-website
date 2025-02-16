import React from "react";
import { ExperienceList } from "../../../data/ProjectData";
import { BtnGroup } from "../../Projects/ProjectCard/ProjectCardElements";
import { ExpCard, ExperienceCardRight } from "./styles";

function ExperienceCard() {
  return (
    <React.Fragment>
      {ExperienceList.map((list, index) => (
        <ExpCard key={index}>
          <ExperienceCardRight data-aos="fade-up-left">
            <h4>{list.title}</h4>

            <div className="role">{list.role}</div>

            <div className="description">
              <ul>
                {list.description.length > 0 &&
                  list.description.map((desc, ind) => (
                    <li
                      className="description-item"
                      key={ind}
                      dangerouslySetInnerHTML={{ __html: desc }}
                    />
                  ))}
              </ul>
            </div>

            <BtnGroup>
              {list.isc && (
                <a
                  className="btn PrimaryBtn"
                  href={list.certificate}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Certificate ➜
                </a>
              )}

              {list.media_links &&
                list.media_links.map((media, idx) => (
                  <a
                    key={idx}
                    className="btn PrimaryBtn"
                    href={media.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {media.label} ➜
                  </a>
                ))}
            </BtnGroup>
          </ExperienceCardRight>
        </ExpCard>
      ))}
    </React.Fragment>
  );
}

export default ExperienceCard;
