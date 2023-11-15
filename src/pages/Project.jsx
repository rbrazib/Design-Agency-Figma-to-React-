import React from "react";
import Container from "../components/Container";
import ProjectAll from "../components/ProjectAll";
import Breadcrumb from "../components/Breadcrumb";
const Project = () => {
  return (
    <Container>
      <Breadcrumb title="All Project" />
      <ProjectAll />
    </Container>
  );
};

export default Project;
