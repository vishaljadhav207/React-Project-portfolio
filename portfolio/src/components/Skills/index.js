import React from "react";
import styled from "styled-components";
import { skills } from "../../data/constants";
import SectionHeader from "../common/SectionHeader";
import Reveal from "../common/Reveal";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 40px 16px 20px;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
`;

const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  gap: 30px;
  justify-content: center;
`;

const Skill = styled.div`
  position: relative;
  width: 100%;
  max-width: 500px;
  height: 100%;
  background: ${({ theme }) => theme.card};
  border: 1px solid ${({ theme }) => theme.border};
  box-shadow: rgba(23, 92, 230, 0.12) 0px 4px 24px;
  border-radius: 20px;
  padding: 24px 32px;
  overflow: hidden;
  transition: transform 0.45s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.45s ease, border-color 0.45s ease;

  /* Gradient sheen along the top edge */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: ${({ theme }) => theme.gradient};
    opacity: 0.6;
    transition: opacity 0.45s ease;
  }

  &:hover {
    transform: translateY(-6px);
    border-color: rgba(133, 76, 230, 0.6);
    box-shadow: 0 18px 50px rgba(133, 76, 230, 0.25);
  }

  &:hover::before {
    opacity: 1;
  }

  @media (max-width: 768px) {
    max-width: 400px;
    padding: 18px 24px;
  }
  @media (max-width: 500px) {
    max-width: 340px;
    padding: 16px 18px;
  }
`;

const SkillTitle = styled.h3`
  font-size: 26px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 20px;
  text-align: center;
`;

const SkillList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 12px;
`;

const SkillItem = styled.div`
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + "CC"};
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid ${({ theme }) => theme.text_primary + "30"};
  border-radius: 12px;
  padding: 10px 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: default;
  transition: all 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.white};
    border-color: ${({ theme }) => theme.primary};
    background: rgba(133, 76, 230, 0.14);
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(133, 76, 230, 0.25);
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }
  @media (max-width: 500px) {
    padding: 6px 10px;
  }
`;

const SkillImage = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
  filter: ${({ $invert }) => ($invert ? "invert(1)" : "none")};
  transition: transform 0.3s ease;

  ${SkillItem}:hover & {
    transform: scale(1.15) rotate(-6deg);
  }
`;

const SkillIcon = styled.span`
  display: inline-flex;
  font-size: 20px;
  color: ${({ theme }) => theme.primary};
  transition: transform 0.3s ease, color 0.3s ease;

  ${SkillItem}:hover & {
    color: #c79bff;
    transform: scale(1.15) rotate(-6deg);
  }
`;

const Skills = () => {
  return (
    <Container id="skills">
      <Wrapper>
        <SectionHeader
          title="Skills"
          desc="The languages, frameworks and tools I use to build scalable, AI-driven applications."
        />
        <SkillsContainer>
          {skills.map((item, index) => (
            <Reveal
              key={item.title}
              delay={index * 120}
              style={{ width: "100%", maxWidth: 500, display: "flex", justifyContent: "center" }}
            >
              <Skill>
                <SkillTitle>{item.title}</SkillTitle>
                <SkillList>
                  {item.skills.map(({ name, image, icon: Icon, invert }) => (
                    <SkillItem key={name}>
                      {image ? (
                        <SkillImage src={image} alt="" loading="lazy" $invert={invert} />
                      ) : (
                        Icon && (
                          <SkillIcon aria-hidden="true">
                            <Icon />
                          </SkillIcon>
                        )
                      )}
                      {name}
                    </SkillItem>
                  ))}
                </SkillList>
              </Skill>
            </Reveal>
          ))}
        </SkillsContainer>
      </Wrapper>
    </Container>
  );
};

export default Skills;
