import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";
import HomePage from "../components/Home/HomePage";
import { ThemeProvider } from "@emotion/react";
import About from "../components/About";
import Contacts from "../components/Contact/Contacts";
import Work from "../components/Work";
import Contact from "../components/Contact";
import { theme } from "../helpers/Theme";
import { Scrollbars } from "react-custom-scrollbars-2";
import { useState } from "react";

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
    <div style={{ width: "100vw", height: "100vh" }}>
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
          <Contacts position="left" />
          <Contacts position="right" />
        </ThemeProvider>
      </Scrollbars>
    </div>
  );
};

export default Home;
