/* eslint-disable react/no-unescaped-entities */
import Image, { StaticImageData } from "next/image";
import React from "react";
import {
  Container,
  Description,
  FlexContainer,
  ImageContainer,
  ImageWrapper,
  TehContainer,
  TehTitle,
  Title,
  Wrapper,
} from "./styles";
import {
  cssLogo,
  cypressLogo,
  gitLogo,
  htmlLogo,
  jestLogo,
  jsLogo,
  nextJsLogo,
  reactLogo,
  styledLogo,
  tailwindLogo,
  tsLogo,
} from "../../public/technologies";

const technologies: {
  name: string;
  width: number;
  height: number;
  image: StaticImageData;
}[] = [
  {
    name: "HTML5",
    image: htmlLogo,
    height: 100,
    width: 90,
  },
  {
    name: "CSS3",
    image: cssLogo,
    height: 100,
    width: 90,
  },
  {
    name: "JS",
    image: jsLogo,
    height: 100,
    width: 60,
  },
  {
    name: "TS",
    image: tsLogo,
    height: 100,
    width: 100,
  },
  {
    name: "React",
    image: reactLogo,
    height: 100,
    width: 100,
  },
  {
    name: "NextJS",
    image: nextJsLogo,
    height: 100,
    width: 150,
  },
  {
    name: "Tailwind",
    image: tailwindLogo,
    height: 50,
    width: 200,
  },
  {
    name: "Styled",
    image: styledLogo,
    height: 150,
    width: 200,
  },
  {
    name: "Cypress",
    image: cypressLogo,
    height: 100,
    width: 200,
  },
  {
    name: "Jest",
    image: jestLogo,
    height: 120,
    width: 100,
  },
  {
    name: "Git",
    image: gitLogo,
    height: 100,
    width: 100,
  },
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
          <Wrapper>
            {technologies.map((item, index) => (
              <Image
                src={item.image}
                width={item.width}
                height={item.height}
                alt={item.name}
                key={`${item.name}-${index}`}
              />
            ))}
          </Wrapper>
        </TehContainer>
      </Container>
      <ImageContainer>
        <ImageWrapper>
          <Image
            src="/assets/Mihail.png"
            alt="mihail"
            height={520}
            width={350}
          />
        </ImageWrapper>
      </ImageContainer>
    </FlexContainer>
  );
};

export default AboutMe;
