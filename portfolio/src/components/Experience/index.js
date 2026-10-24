import React from "react";
import styled from "styled-components";
import { FaBriefcase, FaMapMarkerAlt, FaCheckCircle } from "react-icons/fa";
import { experience } from "../../data/constants";
import SectionHeader from "../common/SectionHeader";
import Reveal from "../common/Reveal";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 1;
  padding: 60px 16px 20px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
`;

const Card = styled.article`
  width: 100%;
  margin-top: 28px;
  background: ${({ theme }) => theme.card + "E6"};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 20px;
  box-shadow: rgba(23, 92, 230, 0.12) 0px 4px 24px;
  padding: 28px 32px;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: ${({ theme }) => theme.gradient};
  }

  @media (max-width: 640px) {
    padding: 20px 18px;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;
  flex-wrap: wrap;
  padding-bottom: 20px;
  border-bottom: 1px solid ${({ theme }) => theme.border};
`;

const HeaderLeft = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

const CompanyIcon = styled.div`
  flex-shrink: 0;
  width: 56px;
  height: 56px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: ${({ theme }) => theme.white};
  background: ${({ theme }) => theme.gradient};
  box-shadow: 0 8px 24px rgba(133, 76, 230, 0.4);

  @media (max-width: 640px) {
    width: 46px;
    height: 46px;
    font-size: 20px;
  }
`;

const Role = styled.h3`
  font-size: 22px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};

  @media (max-width: 640px) {
    font-size: 18px;
  }
`;

const Company = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #b98cff;
`;

const Location = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 2px;
  font-size: 13px;
  color: ${({ theme }) => theme.soft2};
`;

const DateBadge = styled.span`
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
  background: rgba(133, 76, 230, 0.15);
  border: 1px solid ${({ theme }) => theme.border};
  padding: 6px 14px;
  border-radius: 999px;
  white-space: nowrap;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 24px;

  @media (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectBlock = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 20px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid ${({ theme }) => theme.text_primary + "14"};
  transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), border-color 0.4s ease,
    box-shadow 0.4s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: rgba(133, 76, 230, 0.55);
    box-shadow: 0 16px 40px rgba(133, 76, 230, 0.2);
  }
`;

const ProjectName = styled.h4`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;

const Bullets = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Bullet = styled.li`
  display: flex;
  gap: 10px;
  font-size: 14px;
  line-height: 1.6;
  color: ${({ theme }) => theme.text_secondary};

  svg {
    flex-shrink: 0;
    margin-top: 4px;
    color: ${({ theme }) => theme.primary};
  }

  strong {
    color: ${({ theme }) => theme.text_primary};
    font-weight: 600;
  }
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: auto;
  padding-top: 6px;
`;

const Tag = styled.span`
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.primary};
  background-color: ${({ theme }) => theme.primary + "1F"};
  border: 1px solid ${({ theme }) => theme.primary + "33"};
  padding: 3px 10px;
  border-radius: 999px;
`;

// Renders "**bold**" segments as <strong> without using dangerouslySetInnerHTML
const RichText = ({ text }) =>
  text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={i}>{part.slice(2, -2)}</strong>
    ) : (
      <React.Fragment key={i}>{part}</React.Fragment>
    )
  );

const Experience = () => {
  return (
    <Container id="experience">
      <Wrapper>
        <SectionHeader
          title="Experience"
          desc="Where I've been building production-grade, AI-powered applications."
        />
        {experience.map((job) => (
          <Reveal key={job.id} style={{ width: "100%" }}>
            <Card>
              <Header>
                <HeaderLeft>
                  <CompanyIcon aria-hidden="true">
                    <FaBriefcase />
                  </CompanyIcon>
                  <div>
                    <Role>{job.role}</Role>
                    <Company>{job.company}</Company>
                    <Location>
                      <FaMapMarkerAlt size={11} aria-hidden="true" /> {job.location}
                    </Location>
                  </div>
                </HeaderLeft>
                <DateBadge>{job.date}</DateBadge>
              </Header>

              <ProjectsGrid>
                {job.projects.map((project, index) => (
                  <Reveal key={project.name} delay={index * 120} style={{ height: "100%" }}>
                    <ProjectBlock>
                      <ProjectName>{project.name}</ProjectName>
                      <Bullets>
                        {project.bullets.map((bullet, i) => (
                          <Bullet key={i}>
                            <FaCheckCircle size={12} aria-hidden="true" />
                            <span>
                              <RichText text={bullet} />
                            </span>
                          </Bullet>
                        ))}
                      </Bullets>
                      <Tags>
                        {project.tags.map((tag) => (
                          <Tag key={tag}>{tag}</Tag>
                        ))}
                      </Tags>
                    </ProjectBlock>
                  </Reveal>
                ))}
              </ProjectsGrid>
            </Card>
          </Reveal>
        ))}
      </Wrapper>
    </Container>
  );
};

export default Experience;
