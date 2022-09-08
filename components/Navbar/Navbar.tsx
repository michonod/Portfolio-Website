import { NextPage } from "next";
import React from "react";
import Button from "../Button/Button";
import { DownloadIcon, Logo } from "./styles";
import { NavbarContainer, List, ListItem, Link as LinkA } from "./styles";
import Link from "next/link";

type NavbarProps = {
  styleState: boolean;
};
const Navbar: NextPage<NavbarProps> = ({ styleState }) => {
  const ActiveStyle = {
    backgroundColor: "#00416a",
    transition: "0.5s ease-in",
  };

  return (
    <NavbarContainer style={styleState ? ActiveStyle : undefined}>
      <Logo>michonoD.</Logo>
      <List>
        <ListItem>
          <LinkA href="#home">Home</LinkA>
        </ListItem>
        <ListItem>
          <LinkA href="#about">About Me</LinkA>
        </ListItem>
        <ListItem>
          <LinkA href="#myWork">My work</LinkA>
        </ListItem>
        <ListItem>
          <LinkA href="#contact">Contact</LinkA>
        </ListItem>
        <ListItem>
          <LinkA href="/assets/cv.pdf" target="_blank" download>
            <Button>
              Resume
              <DownloadIcon />
            </Button>
          </LinkA>
        </ListItem>
      </List>
    </NavbarContainer>
  );
};

export default Navbar;
