/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";
import {
  Container,
  Description,
  FlexContainer,
  ImageContainer,
  ImageWrapper,
  List,
  ListItem,
  TehContainer,
  TehTitle,
  Title,
} from "./styles";

const technologies: string[] = [
  "Html",
  "Css",
  "Javascript (ES6+)",
  "TypeScript",
  "React",
  "NextJs",
  "Jest",
  "Cypress",
  "Styled Components",
  "Git",
];

const AboutMe = () => {
  return (
    <FlexContainer>
      <Container>
        <Title>About Me</Title>
        <Description>
          Hello! My name is Mihail and I enjoy creating things that live on the
          internet. My interest in web development started back in 2019 when I
          decided to write my first code. I'm extremely motivated to constantly
          develop my skills, eager to gain experience and learn new things that
          will help me to grow professionally.
        </Description>
        <TehTitle>
          Here are a few technologies I’ve been working with recently:
        </TehTitle>
        <TehContainer>
          <List>
            {technologies.map((item, index) => (
              <ListItem key={`${item}${index}`}>{item}</ListItem>
            ))}
          </List>
        </TehContainer>
      </Container>
      <ImageContainer>
        <ImageWrapper>
          <Image
            src="/assets/Mihail.png"
            alt="mihail"
            height={500}
            width={350}
          />
        </ImageWrapper>
      </ImageContainer>
    </FlexContainer>
  );
};

export default AboutMe;
