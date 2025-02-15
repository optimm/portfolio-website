import styled from "styled-components";

export const Container = styled.div`
  background: linear-gradient(
    343.07deg,
    rgba(255, 255, 255, 0.08) 5.71%,
    rgba(255, 255, 255, 0.03) 64.83%
  );
  clip-path: polygon(0 0, 100% 0, 100% 100%, 100% 98%, 0 100%);
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 8rem 0;

  h1 {
    color: rgb(119, 119, 121);
    text-align: left;
    padding-left: 2rem;
    letter-spacing: 0.4px;
    font-size: 2rem;
    margin-bottom: 4rem;
  }

  @media (max-width: 960px) {
    padding: 6rem 0;
  }

  @media (max-width: 500px) {
    h1 {
      font-size: 1.7rem;
    }
  }
`;
