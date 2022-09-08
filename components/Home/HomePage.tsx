/* eslint-disable react/no-unescaped-entities */
import React from "react";
import {
  BigText,
  Container,
  Description,
  Div,
  DivFlexed,
  FlexContainer,
  Text,
} from "./styles";
import { useLottie } from "lottie-react";
import LottieAnimation from "../../utils/lottie.json";
import Link from "next/link";
import { ContactButton } from "../Button/styles";

const HomePage = () => {
  const options = {
    animationData: LottieAnimation,
    loop: true,
  };

  const { View } = useLottie(options);

  return (
    <Container id="home">
      <DivFlexed>
        <FlexContainer>
          <Text>Hi there, my name is</Text>
          <BigText>Mihail Davidevski.</BigText>
          <BigText>I build things for the web.</BigText>
          <Description>
            I'm front-end developer who design and code beautifull simple things
          </Description>

          <Link href="#contact">
            <ContactButton>Contact Me! </ContactButton>
          </Link>
        </FlexContainer>
        <Div>{View}</Div>
      </DivFlexed>
    </Container>
  );
};

export default HomePage;
