import React from "react";
import ProjectCard from "./ProjectCard";
import { Div, ProjectWrapper, Title } from "./styled";
import { projects } from "../../helpers/projects";

const Work = () => {
  return (
    <Div id="myWork">
      <Title>My projects</Title>
      <ProjectWrapper>
        {projects.map(({ codeLink, image, key, name, webLink }) => (
          <ProjectCard
            codeLink={codeLink}
            image={image}
            name={name}
            webLink={webLink}
            key={key}
          />
        ))}
      </ProjectWrapper>
    </Div>
  );
};

export default Work;
