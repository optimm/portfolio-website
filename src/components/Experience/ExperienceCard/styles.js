import styled from "styled-components";

export const ExpCard = styled.div`
  margin-bottom: 4rem;
  border-bottom: 0.1px solid rgb(180, 180, 180);
  padding-bottom: 2rem;

  &:last-child {
    margin-bottom: 0;
    border-bottom: 0;
    padding-bottom: 0;
  }

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
    font-weight: 600;
    color: rgb(224, 224, 224);
  }
  ul{
    list-style-type: disc;
    margin-left : 20px;
  }
  .description{
    padding: 5px 0px;
  }

  .description-item {
    color: rgb(180, 180, 180);
  }

  .role {
    font-size: 1rem;
    font-weight: 500;
    margin-top: 10px;
    color: rgb(224, 224, 224);
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
