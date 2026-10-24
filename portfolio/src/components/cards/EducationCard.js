import React from "react";
import styled from "styled-components";
import { FaGraduationCap } from "react-icons/fa";

const Description = styled.div`
  width: 100%;
  font-size: 15px;
  font-weight: 400;
  line-height: 1.6;
  color: ${({ theme }) => theme.text_primary + "B3"};
  @media only screen and (max-width: 768px) {
    font-size: 13px;
  }
`;

const Span = styled.span`
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;

const Card = styled.div`
  width: 650px;
  max-width: 100%;
  border-radius: 16px;
  background: ${({ theme }) => theme.card + "CC"};
  border: 1px solid ${({ theme }) => theme.border};
  box-shadow: rgba(23, 92, 230, 0.12) 0px 4px 24px;
  padding: 18px 20px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.4s ease,
    border-color 0.4s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: rgba(133, 76, 230, 0.6);
    box-shadow: 0 16px 40px rgba(133, 76, 230, 0.22);
  }

  &:hover ${Span} {
    -webkit-line-clamp: unset;
  }

  @media only screen and (max-width: 768px) {
    width: 300px;
    padding: 14px;
    gap: 8px;
  }
`;

const Top = styled.div`
  width: 100%;
  display: flex;
  gap: 14px;
`;

const Logo = styled.div`
  flex-shrink: 0;
  width: 56px;
  height: 56px;
  border-radius: 12px;
  overflow: hidden;
  background: ${({ theme }) => theme.white};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.primary};
  font-size: 26px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  @media only screen and (max-width: 768px) {
    width: 44px;
    height: 44px;
    font-size: 20px;
  }
`;

const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const Name = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

const Degree = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary};
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const Date = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.soft2};
  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

const Grade = styled.div`
  display: inline-flex;
  align-self: flex-start;
  gap: 6px;
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
  background: rgba(133, 76, 230, 0.15);
  border: 1px solid ${({ theme }) => theme.border};
  padding: 4px 12px;
  border-radius: 999px;
  @media only screen and (max-width: 768px) {
    font-size: 11px;
  }
`;

const EducationCard = ({ education }) => {
  return (
    <Card>
      <Top>
        <Logo>
          {education.img ? (
            <img src={education.img} alt={`${education.school} logo`} loading="lazy" />
          ) : (
            <FaGraduationCap aria-hidden="true" />
          )}
        </Logo>
        <Body>
          <Name>{education.school}</Name>
          <Degree>{education.degree}</Degree>
          <Date>{education.date}</Date>
        </Body>
      </Top>
      <Grade>
        <b>Grade:</b> {education.grade}
      </Grade>
      <Description>
        <Span>{education.desc}</Span>
      </Description>
    </Card>
  );
};

export default EducationCard;
