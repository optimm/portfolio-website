import styled from "styled-components";

export const Card = styled.div`
  display: grid;
  grid-gap: 2rem;
  margin-bottom: 4rem;
  grid-template-columns: 1fr;
  border-bottom: 0.1px solid #151418;
  padding: 1.5rem;
  padding-bottom: 2rem;
  border-radius: 12px;
  transition: all 0.25s ease;

  &:hover {
    background: rgba(57, 134, 250, 0.02);
    box-shadow: 0 2px 16px rgba(0, 0, 0, 0.04);
  }

  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
    border-bottom: 0;
    padding-bottom: 0;
  }
  &:last-child {
    margin-bottom: 0;
    border-bottom: 0;
    padding-bottom: 0;
  }
`;

export const CardLeft = styled.div`
  background: #151418;
  border-radius: 8px;
  padding: 5px;
  justify-self: center;
  overflow: hidden;

  img {
    border-radius: 6px;
    height: auto;
  }
`;

export const CardRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h4 {
    font-size: 1.5rem;
    font-weight: 600;
  }
  @media (max-width: 500px) {
    h4 {
      font-size: 1.2rem;
    }
    p {
      font-size: 13px;
    }
  }
  p {
    font-weight: 400;
    max-width: 400px;
    margin-top: 10px;
    margin-bottom: 1rem;
    color: rgba(0, 0, 0, 0.815);
    text-align: center;
    line-height: 1.6;

    @media (min-width: 992px) {
      text-align: start;
    }
  }
  @media (min-width: 992px) {
    align-items: flex-start;
    margin-top: 1rem;
  }
`;

export const Stack = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;

  .stackTitle {
    font-weight: 600;
    margin-right: 10px;
    font-size: 17px;
  }

  .tags {
    font-size: 15px;
    font-weight: 400;
    color: #555;
  }
  @media (max-width: 500px) {
    .stackTitle {
      margin-right: 5px;
      font-size: 14px;
    }
    .tags {
      font-size: 12px;
    }
  }
`;

export const BtnGroup = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
`;
