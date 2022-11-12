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
  @media (max-width: 1200px) {
    font-size: 55px;
  }
  @media (max-width: 876px) {
    font-size: 45px;
    margin-bottom: 0;
  }
`;

export const Name = styled(BigText)`
  color: #c3c3c3;
  margin-bottom: 20px;
  margin-top: 10px;

  @media (max-width: 1200px) {
    font-size: 50px;
    margin-bottom: 0;
  }
  @media (max-width: 876px) {
    font-size: 40px;
    margin-bottom: 0;
  }
`;

export const Description = styled.p`
  margin-bottom: 20px;
  color: #fff;
  @media (max-width: 1200px) {
    line-height: 30px;
    margin-top: 20px;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  line-height: 60px;
  margin-left: 250px;
  @media (max-width: 1200px) {
    margin: 0px 40px;
    margin-top: 100px;
  }
`;

export const Div = styled.div`
  width: 40%;
  @media (max-width: 1200px) {
    width: 45%;
  }
`;

export const DivFlexed = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  @media (max-width: 1200px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
