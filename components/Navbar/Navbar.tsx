import { NextPage } from "next";
import React from "react";
import Button from "../Button/Button";
import { Logo } from "./styles";
import { NavbarContainer, List, ListItem, Link } from "./styles";

type NavbarProps = {
  styleState: boolean;
};
const Navbar: NextPage<NavbarProps> = ({ styleState }) => {
  const ActiveStyle = {
    backgroundColor: "#38ef7d",
    transition: "0.5s ease-in",
  };

  return (
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
          <Button title="Resume" />
        </ListItem>
      </List>
    </NavbarContainer>
  );
};

export default Navbar;
