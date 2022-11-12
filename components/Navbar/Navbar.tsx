import { NextPage } from "next";
import React, { useState } from "react";
import Button from "../Button/Button";
import { DownloadIcon, Logo, Menu, MenuButton, MenuClose } from "./styles";
import { NavbarContainer, List, ListItem, Link } from "./styles";

type NavbarProps = {
  styleState: boolean;
};
const Navbar: NextPage<NavbarProps> = ({ styleState }) => {
  const [showMenu, setShowMenu] = useState(false);
  const ActiveStyle = {
    backgroundColor: "#485563",
    transition: "0.5s ease-in",
  };

  return (
    <div>
      <NavbarContainer style={styleState ? ActiveStyle : undefined}>
        <Logo>michonoD.</Logo>
        <List>
          <ListItem>
            <Link href="#home">Home</Link>
          </ListItem>
          <ListItem>
            <Link href="#about">About Me</Link>
          </ListItem>
          <ListItem>
            <Link href="#myWork">My work</Link>
          </ListItem>
          <ListItem>
            <Link href="#contact">Contact</Link>
          </ListItem>
          <ListItem>
            <Link href="/assets/cv.pdf" target="_blank" download>
              <Button>
                Resume
                <DownloadIcon />
              </Button>
            </Link>
            {showMenu && <MenuClose onClick={() => setShowMenu(false)} />}
          </ListItem>
        </List>
      </NavbarContainer>

      <MenuButton onClick={() => setShowMenu(true)}>
        {!showMenu && <Menu />}
      </MenuButton>
    </div>
  );
};

export default Navbar;
