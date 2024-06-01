import styled from "styled-components";

export const ContactWrapper = styled.div`
  background: #151418;
  margin-top: -10px;

  .footer {
    text-align: center;
    padding-top : 3rem;
    padding-bottom:2rem;
    color: #fff;
    a {
      text-decoration: underline;
    }
  }
`;

export const Email = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom:3rem;
  span {
    font-size: 1.5rem;
    font-weight: 500;
    color: rgb(200, 200, 200);
    margin-bottom: 0rem;
  }

  @media (max-width: 992px) {
    padding-bottom:1rem;
    flex-direction: column;
    align-items: center;
    span {
      margin-bottom: 0.8rem;
      font-size: 1.2rem;
    }
  }
`;
