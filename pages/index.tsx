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
const Home: NextPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Mihail Davidevski - React Developer </title>
      </Head>
      <Navbar />
      <HomePage />
      <About />
      <Work />
      <Contact />
      <Contacts position="left" />
      <Contacts position="right" />
    </ThemeProvider>
  );
};

export default Home;
