import { DownloadOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  position: fixed;
  width: 100%;
  background: transparent;
  top: 0;
  left: 0;
  z-index: 100;
  color: white;
`;

export const Logo = styled.h3`
  font-size: 54px;
  margin-left: 70px;
  font-family: "Qwitcher Grypen", cursive;
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  margin-right: 70px;
  font-weight: 600;
  letter-spacing: 0.5px;

  li:last-of-type {
    margin-right: 0;
  }
  li a {
    color: #f2f0f0;
  }
`;

export const ListItem = styled.li`
  margin: 0px 15px;
  font-size: 15px;
  list-style: none;
`;

export const Link = styled.a`
  font-weight: 600;
  font-size: 16px;
  text-decoration: none;
  color: ${(props) => props.theme.color.black};
  transition: all 0.1s ease-in;

  &:hover {
    color: black;
  }
`;

export const DownloadIcon = styled(DownloadOutlined)`
  margin-left: 5px;
  font-size: 18px;
`;
