import { NextPage } from "next";
import React, { useState, useEffect } from "react";
import Button from "../Button/Button";
import { DownloadIcon, Logo, Menu, MenuButton, MenuClose } from "./styles";
import { NavbarContainer, List, ListItem, Link } from "./styles";
import { useRouter } from "next/router";
import { routes } from "../../helpers/routes";
import { v4 } from "uuid";

type NavbarProps = {
  styleState: boolean;
};
const Navbar: NextPage<NavbarProps> = ({ styleState }) => {
  const [showMenu, setShowMenu] = useState(false);
  const ActiveStyle = {
    backgroundColor: "#485563",
    transition: "0.5s ease-in",
  };
  const router = useRouter();

  return (
    <div>
      <NavbarContainer
        style={styleState ? ActiveStyle : undefined}
        showMenu={showMenu}
      >
        <Logo showMenu={showMenu}>michonoD.</Logo>
        <List showMenu={showMenu}>
          {routes.map((route) => (
            <ListItem key={v4()}>
              <Link href={`#${route.href}`} onClick={() => setShowMenu(false)}>
                {route.name}
              </Link>
            </ListItem>
          ))}
          <ListItem>
            <Link href="/assets/MihailCV.pdf" target="_blank" download>
              <Button>
                Resume
                <DownloadIcon />
              </Button>
            </Link>
          </ListItem>
          <MenuClose onClick={() => setShowMenu(false)} />
        </List>
      </NavbarContainer>

      <MenuButton>
        <Menu onClick={() => setShowMenu(true)} />
      </MenuButton>
    </div>
  );
};

export default Navbar;
