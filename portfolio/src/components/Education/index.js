import React from "react";
import styled from "styled-components";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { education } from "../../data/constants";
import EducationCard from "../cards/EducationCard";
import SectionHeader from "../common/SectionHeader";
import Reveal from "../common/Reveal";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 40px 0 60px;

  @media (max-width: 960px) {
    padding: 20px 0 40px;
  }
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

const TimelineSection = styled.div`
  width: 100%;
  max-width: 1000px;
  margin-top: 16px;
  display: flex;
  justify-content: center;
`;

const Education = () => {
  return (
    <Container id="education">
      <Wrapper>
        <SectionHeader
          title="Education"
          desc="My education has been a journey of self-discovery and growth. My educational details are as follows."
        />
        <TimelineSection>
          <Timeline sx={{ p: { xs: 1, sm: 2 }, m: 0, flex: "0 1 auto" }}>
            {education.map((item, index) => (
              <TimelineItem
                key={item.id}
                // Remove MUI's empty "opposite content" column so cards sit beside the line
                sx={{ "&::before": { flex: 0, padding: 0 } }}
              >
                <TimelineSeparator>
                  <TimelineDot
                    sx={{
                      background: "linear-gradient(135deg, #854CE6, #C13FE8)",
                      boxShadow: "0 0 0 4px rgba(133, 76, 230, 0.2)",
                    }}
                  />
                  {index !== education.length - 1 && (
                    <TimelineConnector
                      sx={{ background: "linear-gradient(#854CE6, rgba(133,76,230,0.15))" }}
                    />
                  )}
                </TimelineSeparator>
                <TimelineContent sx={{ py: "12px", px: { xs: 1, sm: 2 } }}>
                  <Reveal direction="right" delay={index * 120}>
                    <EducationCard education={item} />
                  </Reveal>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </TimelineSection>
      </Wrapper>
    </Container>
  );
};

export default Education;
