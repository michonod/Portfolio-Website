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

interface ProjectType {
  projects: {
    name: string;
    image: string;
    key: string;
    codeLink: string;
    webLink?: string;
  }[];
}

const ProjectCard = (projects: ProjectType) => {
  return (
    <ProjectContainer>
      {projects.projects.map((project) => {
        return (
          <>
            <SiteName>{project.name}</SiteName>
            <ImageContainer key={project.key}>
              <Image
                src={`/assets/projects/${project.image}`}
                layout="fill"
                alt={project.name}
              />
            </ImageContainer>
            <ButtonsContainer>
              <AnchorTag href={project.codeLink} target="_blank">
                <Button>Code</Button>
              </AnchorTag>

              <Button>Website</Button>
            </ButtonsContainer>
          </>
        );
      })}
    </ProjectContainer>
  );
};

export default ProjectCard;
