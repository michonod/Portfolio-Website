import styled from "@emotion/styled";

export const Div = styled.div`
  padding-top: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 1024px) {
    h4,
    p {
      font-size: 25px;
    }
    padding-top: 0px;
  }
  @media (max-width: 376px) {
    h4,
    p {
      font-size: 20px;
    }
  }
`;

export const Title = styled.h4`
  font-size: 30px;
  color: white;
  margin: 20px 0px;
`;

export const Description = styled.p`
  font-size: 30px;
  color: white;
`;
