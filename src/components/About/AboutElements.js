import styled from "styled-components";

export const ContactWrapper = styled.div`
  margin-top: 0rem;
`;

export const Image = styled.img`
  max-width: 120px;
  margin: 0 auto;
  margin-bottom: 1rem;
`;

export const Technologies = styled.div`
  display: flex;
  flex-wrap: wrap;

  margin-right: auto;
  margin-left: auto;
  justify-content: center;
  allign-items: center;
  margin-bottom: -2rem;
  @media screen and (max-width: 768px) {
    justify-content: space-evenly;
  }
`;

export const Tech = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 150px;
  min-width: 150px;
  margin-bottom: 3rem;
  @media screen and (max-width: 768px) {
    max-width: 130px;
    min-width: 130px;
  }
  @media screen and (max-width: 500px) {
    max-width: 102px;
    min-width: 102px;
  }
  @media screen and (max-width: 400px) {
    max-width: 90px;
    min-width: 90px;
  }
`;

export const TechImg = styled.img`
  height: 50px;
  width: 50px;
  @media screen and (max-width: 768px) {
    height: 45px;
    width: 45px;
  }
  @media screen and (max-width: 500px) {
    height: 40px;
    width: 40px;
  }
  @media screen and (max-width: 400px) {
    height: 35px;
    width: 35px;
  }
`;

export const TechName = styled.div`
  font-size: 14px;
  @media screen and (max-width: 400px) {
    font-size: 13px;
  }
`;
