import React from "react";
import styled from "styled-components";
import ProjectCard from "../cards/ProjectCard";
import { projects } from "../../data/constants";

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
z-index: 1;
align-items: center;
padding: 0px 0px 60px 0px;
@media (max-width: 960px) {
    flex-direction: column;
}
  
`;

const Wrapper = styled.div`
   position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1350px;
    padding: 40px 0px 0px 0px;
    gap: 12px;
@media (max-width: 960px) {
    flex-direction: column;
}
`;

export const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

export const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;
const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-item: center;
  flex-wrap: wrap;
  gap: 28px;
  
`;

const Projects = () => {
  return (
    <Container id="projects">
      <Wrapper >
        <Title>Projects</Title>
        <Desc>"Here are some of the projects I have worked on."</Desc>
        <CardContainer>
          {projects.map((project) => (
            <ProjectCard project={project}/>
          ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
