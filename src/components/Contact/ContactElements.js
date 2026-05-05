import styled from "styled-components";

export const ContactWrapper = styled.div`
  background: #111118;
  margin-top: -10px;

  .footer {
    text-align: center;
    padding-top : 3rem;
    padding-bottom:2rem;
    color: rgb(150, 150, 150);
    font-size: 14px;
    a {
      text-decoration: underline;
      transition: color 0.2s ease;
      &:hover {
        color: rgb(57, 134, 250);
      }
    }
  }
`;

export const Email = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
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
