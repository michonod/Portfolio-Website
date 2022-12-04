import Image from "next/image";
import React from "react";
import Button from "../Button/Button";
import {
  AnchorTag,
  ButtonsContainer,
  ImageContainer,
  ProjectContainer,
  SiteName,
} from "./styled";

type Project = {
  name: string;
  image: string;
  key: string;
  codeLink: string;
  webLink?: string;
};

const ProjectCard = ({ key, codeLink, image, name, webLink }: Project) => {
  return (
    <ProjectContainer>
      <>
        <ImageContainer key={key}>
          <Image src={`/assets/projects/${image}`} layout="fill" alt={name} />
        </ImageContainer>
        <SiteName>{name}</SiteName>
        <ButtonsContainer>
          <AnchorTag href={codeLink} target="_blank">
            <Button>Code</Button>
          </AnchorTag>

          <AnchorTag href={webLink} target="_blank">
            <Button disabled={Boolean(!webLink)}>Website</Button>
          </AnchorTag>
        </ButtonsContainer>
      </>
    </ProjectContainer>
  );
};

export default ProjectCard;
