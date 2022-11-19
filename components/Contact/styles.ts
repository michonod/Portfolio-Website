import styled from "@emotion/styled";
import {
  InstagramFilled,
  LinkedinFilled,
  FacebookFilled,
  GithubFilled,
} from "@ant-design/icons";

export const Container = styled.div`
  @media (max-width: 678px) {
    display: none;
  }
`;

export const ContactLeft = styled.div`
  position: fixed;
  bottom: 50px;
  left: 70px;
`;

export const ContactRight = styled(ContactLeft)``;

export const WrapperLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 100;

  * {
    transition: all 0.2s ease-in;
    margin-bottom: 5px;
    opacity: 0.95;

    &:hover {
      transform: translateY(-1px);
      background-color: transparent;
      opacity: 1;
    }
    &:active {
      transform: translateY(0px);
      opacity: 1;
    }
  }
`;

export const WrapperRight = styled.div`
  transform: rotate(90deg);
  position: fixed;
  right: -50px;
  bottom: 150px;
  color: #333;
  font-family: "Qwitcher Grypen", cursive;
  font-size: 30px;
  a {
    font-family: "Qwitcher Grypen", cursive;
  }
`;

export const InstagramIcon = styled(InstagramFilled)`
  margin-bottom: 10px;
  font-size: 25px;
  color: #e1306c;
`;
export const LinkedinIcon = styled(LinkedinFilled)`
  margin-bottom: 10px;
  font-size: 25px;
  color: #0072b1;
`;
export const FacebookIcon = styled(FacebookFilled)`
  font-size: 25px;
  color: #0165e1;
`;
export const GithubIcon = styled(GithubFilled)`
  font-size: 25px;
  color: #171515;
`;

export const LinkA = styled.a`
  text-decoration: none;
  font-size: 30px;
  color: white;
  transition: all 0.2s ease-in;
  margin: 0;
  padding: 0;

  &:hover {
    color: #7cf8de;
  }
`;
