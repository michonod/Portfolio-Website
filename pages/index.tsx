import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";
import HomePage from "../components/Home/HomePage";
import { ThemeProvider } from "@emotion/react";
import About from "../components/About/About";
import Contacts from "../components/Contact/Contacts";
import Work from "../components/Work/Work";
import Contact from "../components/ContactMe/Contact";
import { theme } from "../helpers/Theme";
import { Scrollbars } from "react-custom-scrollbars-2";
import { useState } from "react";
import { Wrapper } from "../styles/styles";

const Home: NextPage = () => {
  const [navbarColor, setNavbarColor] = useState(false);

  const changeNavColor = (value: number) => {
    if (value >= 100) {
      setNavbarColor(true);
    } else {
      setNavbarColor(false);
    }
  };
  return (
    <Wrapper>
      <Scrollbars
        universal={true}
        autoHide
        onScrollFrame={(e) => changeNavColor(e.scrollTop)}
      >
        <ThemeProvider theme={theme}>
          <Head>
            <title>Mihail Davidevski - React Developer </title>
          </Head>
          <Navbar styleState={navbarColor} />
          <HomePage />
          <About />
          <Work />
          <Contact />
          <Contacts />
        </ThemeProvider>
      </Scrollbars>
    </Wrapper>
  );
};

export default Home;
