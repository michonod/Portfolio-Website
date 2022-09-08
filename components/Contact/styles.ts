import styled from "@emotion/styled";
import {
  InstagramOutlined,
  LinkedinOutlined,
  FacebookOutlined,
  GithubOutlined,
  InstagramFilled,
  LinkedinFilled,
  FacebookFilled,
  GithubFilled,
} from "@ant-design/icons";

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
`;

export const WrapperRight = styled.div`
  transform: rotate(90deg);
  position: fixed;
  right: -50px;
  bottom: 150px;
  color: #fff;
`;

export const InstagramIcon = styled(InstagramFilled)`
  margin-bottom: 10px;
  font-size: 25px;
`;
export const LinkedinIcon = styled(LinkedinFilled)`
  margin-bottom: 10px;
  font-size: 25px;
`;
export const FacebookIcon = styled(FacebookFilled)`
  margin-bottom: 10px;
  font-size: 25px;
`;
export const GithubIcon = styled(GithubFilled)`
  font-size: 25px;
`;
