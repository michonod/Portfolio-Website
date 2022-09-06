import styled from "@emotion/styled";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  background-color: ${(props) => props.theme.color.primary};
`;

export const Text = styled.p``;
export const BigText = styled.span`
  font-size: 60px;
  font-weight: 800;
  color: ${(props) => props.theme.color.grey};
`;

export const Description = styled.p``;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 100%;
  margin: 0 auto;
`;
