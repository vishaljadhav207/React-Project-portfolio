import React from "react";
import styled from "styled-components";
import ProjectCard from "../cards/ProjectCard";
import { projects } from "../../data/constants";
import SectionHeader from "../common/SectionHeader";
import Reveal from "../common/Reveal";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 40px 16px 80px;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  gap: 12px;
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 340px));
  justify-content: center;
  gap: 28px;
  width: 100%;
  margin-top: 28px;

  @media (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`;

const Projects = () => {
  return (
    <Container id="projects">
      <Wrapper>
        <SectionHeader
          title="Projects"
          desc="Here are some of the projects I have worked on."
        />
        <CardContainer>
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={(index % 3) * 120} style={{ height: "100%" }}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
