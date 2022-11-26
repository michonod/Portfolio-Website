import React from "react";
import ProjectCard from "./ProjectCard";
import { Description, Div, Title } from "./styled";
import { projects } from "../../helpers/projects";

const Work = () => {
  return (
    <Div id="myWork">
      <Title>My projects</Title>
      <ProjectCard projects={projects} />
    </Div>
  );
};

export default Work;
