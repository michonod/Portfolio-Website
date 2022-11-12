import styled from "@emotion/styled";

export const Div = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const ImageContainer = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:hover {
    opacity: 1;
  }
`;

export const ImageWrapper = styled.div`
  opacity: 0.8;
  transition: all 0.5s ease-in;
  border-bottom: 4px solid black;
  border-right: 4px solid black;
  padding: 0 20px 20px 0;

  &:hover {
    opacity: 1;
    padding: 0px 5px;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  width: 30%;
  line-height: 25px;
  @media (max-width: 1500px) {
    margin-right: 100px;
  }
`;

export const Title = styled.h3`
  font-size: 30px;
  margin-bottom: 20px;
  color: white;
`;

export const TehTitle = styled.h5`
  color: white;
  margin: 20px 0;
  font-size: 17px;
`;

export const Description = styled.p`
  color: white;
  line-height: 30px;
`;
export const TehContainer = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const List = styled.ul``;
export const ListItem = styled.li`
  font-size: 16px;
  margin-right: 30px;
`;
