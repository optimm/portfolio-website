import styled from "styled-components";

export const ExpCard = styled.div`
  margin-bottom: 4rem;
  border-bottom: 1px solid rgb(0, 0, 0);
  padding-bottom: 2rem;
  @media (min-width: 992px) {
    border-bottom: 0;
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
    font-weight: 400;
  }

  .role {
    font-size: 1rem;
    margin-top: 10px;
  }
  @media (max-width: 500px) {
    h4 {
      font-size: 1.2rem;
    }
    p {
      font-size: 13px;
      text-align: justify;
    }
    .role {
      font-size: 15px;
      margin-top: 10px;
      text-align: center;
    }
  }

  p {
    font-weight: 400;
    width: 100%;
    margin-top: 10px;
    margin-bottom: 1rem;
    color: rgba(0, 0, 0, 0.815);
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
