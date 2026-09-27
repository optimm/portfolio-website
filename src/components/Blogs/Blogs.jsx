import React from "react";
import styled from "styled-components";
import { BlogList, categories } from "../../data/ProjectData";

const MEDIUM_PROFILE = "https://medium.com/@ayushsaxena823";

const Head = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
  gap: 12px 32px;
  margin-bottom: clamp(40px, 5vw, 64px);

  .section-title {
    margin-bottom: 0;
  }

  a {
    font-size: 15px;
  }
`;

const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

const Post = styled.a`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 240px;
  padding: 26px 26px 22px;
  border-radius: 16px;
  border: 1px solid var(--line);
  background: radial-gradient(120% 90% at 100% 0%, color-mix(in srgb, var(--c) 16%, transparent), transparent 60%),
    var(--surface);
  overflow: hidden;
  transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;

  &::before {
    content: "";
    position: absolute;
    left: 26px;
    right: 26px;
    top: 0;
    height: 2px;
    background: var(--c);
    border-radius: 0 0 2px 2px;
  }

  &:hover {
    transform: translateY(-3px);
    border-color: color-mix(in srgb, var(--c) 55%, var(--line));
    box-shadow: 0 20px 44px -28px color-mix(in srgb, var(--c) 70%, transparent);
  }

  .meta {
    display: flex;
    gap: 14px;
    font-size: 14px;
    color: var(--muted);
    font-variant-numeric: tabular-nums;
  }

  .meta span:last-child {
    color: var(--c);
  }

  h3 {
    margin-top: 16px;
    font-size: clamp(21px, 2.2vw, 26px);
    font-weight: 700;
    letter-spacing: -0.02em;
    line-height: 1.2;
  }

  p {
    margin-top: 10px;
    color: var(--muted);
    font-size: 16px;
  }

  footer {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    margin-top: auto;
    padding-top: 24px;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  li {
    padding: 4px 10px;
    border-radius: 999px;
    font-size: 13px;
    border: 1px solid color-mix(in srgb, var(--c) 30%, var(--line));
    background: color-mix(in srgb, var(--c) 8%, transparent);
  }

  .read {
    font-size: 15px;
    font-weight: 600;
    text-decoration: underline;
    text-decoration-color: var(--c);
    text-underline-offset: 4px;
  }
`;

function Blogs() {
  return (
    <section id="blogs" className="section" aria-labelledby="blogs-title">
      <div className="wrap">
        <Head>
          <h2 id="blogs-title" className="section-title" data-reveal>
            Writing
          </h2>
          <a className="text-link" href={MEDIUM_PROFILE} target="_blank" rel="noopener noreferrer">
            All posts on Medium
          </a>
        </Head>
        <Grid>
          {BlogList.map((blog, i) => (
            <li key={blog.url} data-reveal style={{ "--i": i }}>
              <Post
                href={blog.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ "--c": categories[blog.kind].color }}
              >
                <div className="meta">
                  <time>{blog.date}</time>
                  <span>Medium</span>
                </div>
                <h3>{blog.title}</h3>
                <p>{blog.description}</p>
                <footer>
                  <ul aria-label="Topics">
                    {blog.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                  <span className="read">Read post</span>
                </footer>
              </Post>
            </li>
          ))}
        </Grid>
      </div>
    </section>
  );
}

export default Blogs;
