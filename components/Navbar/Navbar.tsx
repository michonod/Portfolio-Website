import { NextPage } from "next";
import React, { useState } from "react";
import Button from "../Button/Button";
import { Logo } from "./styles";
import { NavbarContainer, List, ListItem, Link } from "./styles";

const Navbar: NextPage = () => {
  const [navbarColor, setNavbarColor] = useState(false);

  const ActiveStyle = {
    backgroundColor: "#FCF3CF",
    transition: "0.4s ease-in",
  };

  const changeNavColor = () => {
    if (window.scrollY >= 100) {
      setNavbarColor(true);
    } else {
      setNavbarColor(false);
    }
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", changeNavColor);
  }

  return (
    <NavbarContainer style={navbarColor ? ActiveStyle : undefined}>
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
