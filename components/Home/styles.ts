import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  padding-top: 200px;

  @media (max-width: 786px) {
    padding-top: 0;
  }
`;

export const Text = styled.p`
  font-size: 18px;
  color: #c3c3c3;
`;
export const BigText = styled.span`
  font-size: 70px;
  font-weight: 800;
  margin-bottom: 30px;
  color: #ff4d4d;
  @media (max-width: 1200px) {
    font-size: 55px;
  }
  @media (max-width: 876px) {
    font-size: 45px;
    margin-bottom: 10px;
  }
`;

export const Name = styled(BigText)`
  color: #c3c3c3;
  margin-top: 10px;
  margin-bottom: 0;

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
  line-height: 30px;
  color: #fff;
  @media (max-width: 1200px) {
    margin-top: 20px;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-left: 250px;
  @media (max-width: 1200px) {
    margin: 0px 40px;
    margin-top: 150px;
  }
`;

export const Div = styled.div`
  width: 40%;
  @media (max-width: 1200px) {
    width: 50%;
  }
  @media (max-width: 768px) {
    width: 65%;
  }
  @media (max-width: 600px) {
    width: 80%;
    margin-top: 40px;
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
