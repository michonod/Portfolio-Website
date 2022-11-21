import {
  CloseOutlined,
  DownloadOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const NavbarContainer = styled.nav<{ showMenu: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 75px;
  position: fixed;
  width: 100%;
  background: transparent;
  top: 0;
  left: 0;
  z-index: 100;
  color: white;
  ${(props) =>
    props.showMenu &&
    css`
      @media (max-width: 786px) {
        display: flex;
        flex-direction: column;
        height: 100%;
        height: 100vh;
        justify-content: center;
        align-items: center;
        background-color: #485563;
      }
    `}
  ${(props) =>
    !props.showMenu &&
    css`
      @media (max-width: 786px) {
        display: none;
      }
    `}
`;

export const Logo = styled.h3<{ showMenu: boolean }>`
  font-size: 54px;
  margin-left: 70px;
  font-family: "Qwitcher Grypen", cursive;
  @media (max-width: 900px) {
    font-size: 40px;
  }
  @media (max-width: 786px) {
    ${(props) =>
      props.showMenu &&
      css`
        display: none;
      `}
  }
`;

export const List = styled.ul<{ showMenu: boolean }>`
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
  ${(props) =>
    props.showMenu &&
    css`
      @media (max-width: 786px) {
        display: flex;
        flex-direction: column;
        margin-right: 0px;
      }
    `}
`;

export const ListItem = styled.li`
  margin: 0px 15px;
  font-size: 16px;
  list-style: none;
  @media (max-width: 900px) {
    margin: 0px 10px;
  }
  @media (max-width: 786px) {
    padding: 20px;
  }
`;

export const Link = styled.a`
  font-weight: 600;
  font-size: 14px;
  text-decoration: none;
  color: black;
  transition: all 0.1s ease-in;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 500;

  &:hover {
    color: #c3c3c3;
  }
`;

export const DownloadIcon = styled(DownloadOutlined)`
  margin-left: 5px;
  font-size: 18px;
`;

export const Menu = styled(MenuOutlined)`
  font-size: 24px;
  display: none;
  position: absolute;
  top: 20px;
  right: 20px;
  @media (max-width: 786px) {
    display: block;
  }
`;

export const MenuClose = styled(CloseOutlined)`
  font-size: 24px;
  display: none;
  margin-top: 20px;
  @media (max-width: 786px) {
    display: block;
    position: absolute;
    top: 0px;
    right: 20px;
  }
`;

export const MenuButton = styled.button`
  background: transparent;
  border: none;
  color: white;
  font-size: 50px;
`;
