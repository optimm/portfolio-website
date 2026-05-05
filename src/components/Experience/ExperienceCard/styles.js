import styled from "styled-components";

export const ExpCard = styled.div`
  margin-bottom: 3rem;
  padding: 1.5rem;
  padding-left: 1.5rem;
  border-left: 2px solid rgba(57, 134, 250, 0.3);
  transition: border-color 0.3s ease;

  &:hover {
    border-left-color: rgb(57, 134, 250);
  }

  &:last-child {
    margin-bottom: 0;
  }

  @media (min-width: 992px) {
    padding-bottom: 0;
  }
`;

export const ExperienceCardRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h4 {
    font-size: 1.4rem;
    font-weight: 600;
    color: rgb(224, 224, 224);
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  .description {
    padding: 5px 0px;
  }

  .description-item {
    color: rgb(180, 180, 180);
    padding: 3px 0px;
    line-height: 1.7;
  }

  strong {
    color: rgb(224, 224, 224);
    font-weight: 500;
  }

  .role {
    font-size: 0.95rem;
    font-weight: 500;
    margin-top: 10px;
    color: rgb(57, 134, 250);
  }

  @media (max-width: 500px) {
    h4 {
      font-size: 1.2rem;
    }
    .description-item {
      font-size: 13px;
      text-align: justify;
    }
    .role {
      font-size: 15px;
      margin-top: 10px;
      text-align: center;
    }
  }

  .description-item {
    font-weight: 400;
    width: 100%;
    margin-top: 5px;
    margin-bottom: 5px;
    text-align: justify;

    @media (min-width: 992px) {
      text-align: justify;
    }
  }

  @media (min-width: 992px) {
    align-items: flex-start;
    margin-top: 1rem;
  }
`;
