import styled from "styled-components";

export const BlogCardContainer = styled.div`
  margin-bottom: 4rem;
  padding-bottom: 2rem;
  border-bottom: 0.1px solid rgba(255, 255, 255, 0.1);
  background: #111118;
  padding: 2rem;
  border-radius: 12px;
  transition: all 0.25s ease;

  &:hover {
    background: #1a1a22;
    transform: translateY(-2px);
  }

  &:last-child {
    margin-bottom: 0;
    border-bottom: 0;
    padding-bottom: 2rem;
  }

  @media (min-width: 992px) {
    border-bottom: 0;
    padding-bottom: 2rem;
  }
`;

export const BlogCardRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  h4 {
    font-size: 1.4rem;
    font-weight: 600;
    color: #ffffff;
    margin-bottom: 1rem;
  }

  .date {
    font-size: 0.9rem;
    color: #e0e0e0;
    margin-bottom: 1rem;
  }

  .description {
    color: #e0e0e0;
    margin-bottom: 1rem;
    text-align: justify;
    line-height: 1.6;
  }

  @media (max-width: 500px) {
    h4 {
      font-size: 1.2rem;
    }
    .description {
      font-size: 13px;
    }
    .date {
      font-size: 13px;
    }
  }
`;

export const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

export const Tag = styled.span`
  background: rgba(57, 134, 250, 0.15);
  color: #ffffff;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(57, 134, 250, 0.3);
  }
`;
