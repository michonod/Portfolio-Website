import styled from "@emotion/styled";
import {
  InstagramOutlined,
  LinkedinOutlined,
  FacebookOutlined,
  GithubOutlined,
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
`;

export const InstagramIcon = styled(InstagramOutlined)`
  margin-bottom: 10px;
  font-size: 25px;
`;
export const LinkedinIcon = styled(LinkedinOutlined)`
  margin-bottom: 10px;
  font-size: 25px;
`;
export const FacebookIcon = styled(FacebookOutlined)`
  margin-bottom: 10px;
  font-size: 25px;
`;
export const GithubIcon = styled(GithubOutlined)`
  font-size: 25px;
`;
