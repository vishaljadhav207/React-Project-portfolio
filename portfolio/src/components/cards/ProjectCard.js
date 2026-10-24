import React, { useLayoutEffect, useRef, useState } from "react";
import styled from "styled-components";
import { FaExternalLinkAlt, FaGithub, FaCode, FaChevronDown } from "react-icons/fa";

const MAX_TAGS = 5;

const Card = styled.article`
  height: 100%;
  min-height: 460px;
  background-color: ${({ theme }) => theme.card};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 18px;
  box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  padding: 18px 18px 22px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  transition: transform 0.45s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.45s ease, border-color 0.45s ease;

  &:hover {
    transform: translateY(-10px);
    border-color: rgba(133, 76, 230, 0.6);
    box-shadow: 0 24px 60px rgba(133, 76, 230, 0.28);
  }
`;

const ImageWrap = styled.div`
  position: relative;
  width: 100%;
  height: 190px;
  border-radius: 12px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.bgLight};
  flex-shrink: 0;

  /* Subtle gradient overlay that fades in on hover */
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, transparent 40%, rgba(133, 76, 230, 0.45));
    opacity: 0;
    transition: opacity 0.45s ease;
  }

  ${Card}:hover &::after {
    opacity: 1;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);

  ${Card}:hover & {
    transform: scale(1.08);
  }
`;

const Placeholder = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 16px;
  text-align: center;
  color: ${({ theme }) => theme.white};
  background: radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.18), transparent 45%),
    linear-gradient(135deg, #5b2bb8 0%, #854ce6 45%, #c13fe8 100%);
  transition: transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);

  svg {
    font-size: 34px;
    opacity: 0.9;
  }

  span {
    font-size: 16px;
    font-weight: 600;
    line-height: 1.3;
  }

  ${Card}:hover & {
    transform: scale(1.06);
  }
`;

const Tags = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
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

const Details = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 0 2px;
`;

const Title = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  line-height: 1.35;
  /* Allow up to 2 lines before truncating long titles */
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  transition: color 0.3s ease;

  ${Card}:hover & {
    color: #b98cff;
  }
`;

const Date = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.soft2};
`;

const Description = styled.p`
  font-size: 14px;
  line-height: 1.6;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary};
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: ${({ $expanded }) => ($expanded ? "unset" : 3)};
  -webkit-box-orient: vertical;
  margin-top: 6px;
`;

const ReadMore = styled.button`
  align-self: flex-start;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-top: 6px;
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 13px;
  font-weight: 600;
  color: #b98cff;
  transition: color 0.25s ease;

  svg {
    transition: transform 0.3s ease;
    transform: rotate(${({ $expanded }) => ($expanded ? "180deg" : "0deg")});
  }

  &:hover {
    color: ${({ theme }) => theme.white};
  }
`;

const ViewButton = styled.a`
  margin-top: auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  padding: 11px 16px;
  border-radius: 12px;
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;
  color: ${({ theme }) => theme.white};
  background: ${({ theme }) => theme.gradient};
  box-shadow: 0 6px 18px rgba(133, 76, 230, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease, filter 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    filter: brightness(1.1);
    box-shadow: 0 10px 26px rgba(193, 63, 232, 0.45);
  }
`;

const ProjectCard = ({ project }) => {
  const [expanded, setExpanded] = useState(false);
  const [isClamped, setIsClamped] = useState(false);
  const descRef = useRef(null);
  const descId = `desc-${project.title.replace(/\W+/g, "-").toLowerCase()}`;

  // Only show "Read more" when the description is actually truncated
  useLayoutEffect(() => {
    const el = descRef.current;
    if (!el || expanded) return undefined;
    const check = () => setIsClamped(el.scrollHeight > el.clientHeight + 1);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, [expanded, project.description]);

  const isRepo = project.webapp?.includes("github.com");
  const visibleTags = project.tags.slice(0, MAX_TAGS);
  const hiddenCount = project.tags.length - visibleTags.length;

  return (
    <Card>
      <ImageWrap>
        {project.image ? (
          <Image src={project.image} alt={`${project.title} preview`} loading="lazy" />
        ) : (
          <Placeholder aria-hidden="true">
            <FaCode />
            <span>{project.title}</span>
          </Placeholder>
        )}
      </ImageWrap>
      <Tags>
        {visibleTags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
        {hiddenCount > 0 && <Tag title={project.tags.slice(MAX_TAGS).join(", ")}>+{hiddenCount}</Tag>}
      </Tags>
      <Details>
        <Title title={project.title}>{project.title}</Title>
        <Date>{project.date}</Date>
        <Description ref={descRef} id={descId} $expanded={expanded}>
          {project.description}
        </Description>
        {(isClamped || expanded) && (
          <ReadMore
            type="button"
            $expanded={expanded}
            aria-expanded={expanded}
            aria-controls={descId}
            onClick={() => setExpanded((v) => !v)}
          >
            {expanded ? "Show less" : "Read more"} <FaChevronDown size={10} />
          </ReadMore>
        )}
      </Details>
      {project.webapp && (
        <ViewButton href={project.webapp} target="_blank" rel="noopener noreferrer">
          {isRepo ? (
            <>
              <FaGithub /> View Code
            </>
          ) : (
            <>
              View Live <FaExternalLinkAlt size={12} />
            </>
          )}
        </ViewButton>
      )}
    </Card>
  );
};

export default ProjectCard;
