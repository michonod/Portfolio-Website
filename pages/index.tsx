import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";
import HomePage from "../components/Home/HomePage";
import { HomeContainer } from "../styles/styles";
import { Theme, ThemeProvider } from "@emotion/react";
import About from "../components/About";
import Contact from "../components/Contact/Contact";

const Home: NextPage = () => {
  const theme: Theme = {
    dark: {
      primary: "aliceblue",
    },
  };
  return (
    <ThemeProvider theme={theme}>
      <HomeContainer>
        <Head>
          <title>Mihail Davidevski - React Developer </title>
        </Head>
        <Navbar />
        <HomePage />
        <About />
        <Contact position="left" />
        <Contact position="right" />
      </HomeContainer>
    </ThemeProvider>
  );
};

export default Home;
