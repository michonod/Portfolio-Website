/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { BigText, Container, Description, FlexContainer, Text } from "./styles";
import { useLottie } from "lottie-react";
import LottieAnimation from "../../utils/lottie.json";

const HomePage = () => {
  const options = {
    animationData: LottieAnimation,
    loop: true,
  };

  const { View } = useLottie(options, { width: "50%" });

  return (
    <Container id="home">
      <FlexContainer>
        <Text>Hi there, my name is</Text>
        <BigText>Mihail Davidevski.</BigText>
        <BigText>I build things for the web.</BigText>
        <Description>
          I'm front-end developer who design and code beautifull simple things
        </Description>
      </FlexContainer>
      {View}
    </Container>
  );
};

export default HomePage;
