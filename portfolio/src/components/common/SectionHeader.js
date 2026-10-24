import React from "react";
import styled from "styled-components";
import Reveal from "./Reveal";

export const Title = styled.h2`
  font-size: 42px;
  text-align: center;
  font-weight: 700;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  position: relative;
  padding-bottom: 14px;

  &::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: 0;
    width: 64px;
    height: 4px;
    border-radius: 4px;
    transform: translateX(-50%);
    background: ${({ theme }) => theme.gradient};
  }

  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

export const Desc = styled.p`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  line-height: 1.6;
  margin-top: 8px;
  padding: 0 16px;
  color: ${({ theme }) => theme.text_secondary};

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const SectionHeader = ({ title, desc }) => (
  <Reveal style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
    <Title>{title}</Title>
    {desc && <Desc>{desc}</Desc>}
  </Reveal>
);

export default SectionHeader;
