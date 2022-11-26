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

export const ProjectContainer = styled.div`
  height: 400px;
  width: 300px;
  border: 1px solid white;
  border-radius: 4px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const AnchorTag = styled.a``;

export const SiteName = styled.p`
  color: white;
  margin-bottom: 20px;
`;

export const ImageContainer = styled.div`
  height: 200px;
  width: 300px;
  position: relative;
  padding: 10px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
`;
