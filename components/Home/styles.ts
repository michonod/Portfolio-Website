import styled from "@emotion/styled";

export const Container = styled.div`
  height: 100vh;
  display: flex;
`;

export const Text = styled.p`
  font-size: 18px;
  color: #c3c3c3;
`;
export const BigText = styled.span`
  font-size: 70px;
  font-weight: 800;
  color: #ff4d4d;
`;

export const Name = styled(BigText)`
  color: #c3c3c3;
  margin-bottom: 20px;
  margin-top: 10px;
`;

export const Description = styled.p`
  margin-bottom: 20px;
  color: #fff;
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  line-height: 60px;
  margin-left: 250px;
`;

export const Div = styled.div`
  width: 40%;
`;

export const DivFlexed = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;
