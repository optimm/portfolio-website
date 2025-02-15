import React from "react";
import { BlogList } from "../../../data/ProjectData";
import { BlogCardContainer, BlogCardRight, TagContainer, Tag } from "./styles";

function BlogCard() {
  return (
    <React.Fragment>
      {BlogList.map((blog, index) => (
        <BlogCardContainer key={index}>
          <BlogCardRight data-aos="fade-up-left">
            <h4>{blog.title}</h4>
            <div className="date">{blog.date}</div>
            <div className="description">{blog.description}</div>
            <TagContainer>
              {blog.tags.map((tag, idx) => (
                <Tag key={idx}>{tag}</Tag>
              ))}
            </TagContainer>
            <a
              className="btn PrimaryBtn"
              href={blog.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Read More ➜
            </a>
          </BlogCardRight>
        </BlogCardContainer>
      ))}
    </React.Fragment>
  );
}

export default BlogCard;
