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
`;

export const Logo = styled.h3`
  font-size: 24px;
  margin-left: 70px;
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  margin-right: 70px;

  li:last-of-type {
    margin-right: 0;
  }
`;

export const ListItem = styled.li`
  margin: 0px 20px;
  font-size: 16px;
  list-style: none;
`;

export const Link = styled.a`
  text-decoration: none;
  color: black;
`;
