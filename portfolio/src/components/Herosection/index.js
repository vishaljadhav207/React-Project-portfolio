import React from "react";
import styled, { keyframes } from "styled-components";
import Typewriter from "typewriter-effect";
import { FaArrowRight, FaHandshake } from "react-icons/fa";
import { Bio } from "../../data/constants";
import HeroImg from "../../Images/HeroImage.jpg";
import HeroBgAnimation from "../HeroBgAnimation";
import WaveDivider from "../common/WaveDivider";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50%      { transform: translateY(-14px); }
`;

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 0.55; transform: scale(1); }
  50%      { opacity: 0.85; transform: scale(1.06); }
`;

const shine = keyframes`
  to { background-position: 200% center; }
`;

const HeroContainer = styled.div`
  background: ${({ theme }) => theme.card_light};
  display: flex;
  justify-content: center;
  position: relative;
  padding: 90px 30px 150px;
  z-index: 1;
  overflow: hidden;

  /* Soft ambient glows */
  &::before,
  &::after {
    content: "";
    position: absolute;
    border-radius: 50%;
    filter: blur(90px);
    z-index: -1;
    pointer-events: none;
  }
  &::before {
    width: 420px;
    height: 420px;
    top: -120px;
    left: -120px;
    background: rgba(133, 76, 230, 0.25);
  }
  &::after {
    width: 380px;
    height: 380px;
    bottom: -80px;
    right: 10%;
    background: rgba(193, 63, 232, 0.18);
  }

  @media (max-width: 960px) {
    padding: 66px 16px 110px;
  }
  @media (max-width: 640px) {
    padding: 32px 16px 80px;
  }
`;

const HeroBg = styled.div`
  position: absolute;
  display: flex;
  justify-content: end;
  width: 100%;
  height: 100%;
  max-width: 1360px;
  overflow: hidden;
  padding: 0 30px;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  pointer-events: none;

  @media (max-width: 960px) {
    justify-content: center;
    padding: 0;
  }
`;

const HeroInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
  width: 100%;
  max-width: 1100px;

  @media (max-width: 960px) {
    flex-direction: column;
    gap: 0;
  }
`;

const HeroLeftContainer = styled.div`
  width: 100%;
  order: 1;

  @media (max-width: 960px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const HeroRightContainer = styled.div`
  width: 100%;
  display: flex;
  order: 2;
  justify-content: end;
  animation: ${fadeUp} 1s cubic-bezier(0.22, 1, 0.36, 1) 0.3s both;

  @media (max-width: 960px) {
    order: 1;
    justify-content: center;
    align-items: center;
    margin-bottom: 60px;
  }

  @media (max-width: 640px) {
    margin-bottom: 30px;
  }
`;

const Animated = styled.div`
  animation: ${fadeUp} 0.9s cubic-bezier(0.22, 1, 0.36, 1) both;
  animation-delay: ${({ $delay = 0 }) => $delay}s;
`;

const CtaRow = styled(Animated)`
  width: 100%;
  display: flex;

  @media (max-width: 960px) {
    justify-content: center;
  }
`;

const ping = keyframes`
  0%   { transform: scale(1);   opacity: 0.75; }
  80%, 100% { transform: scale(2.6); opacity: 0; }
`;

const Availability = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.4px;
  text-decoration: none;
  color: ${({ theme }) => theme.text_primary};
  background: rgba(34, 197, 94, 0.08);
  border: 1px solid rgba(34, 197, 94, 0.35);
  padding: 7px 16px 7px 14px;
  border-radius: 999px;
  margin-bottom: 16px;
  transition: background 0.3s ease, border-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background: rgba(34, 197, 94, 0.15);
    border-color: rgba(34, 197, 94, 0.6);
    transform: translateY(-2px);
  }

  @media (max-width: 640px) {
    font-size: 12.5px;
  }
`;

// Green "online" dot with a soft ping ring
const LiveDot = styled.span`
  position: relative;
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: #22c55e;
  flex-shrink: 0;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 50%;
    background: #22c55e;
    animation: ${ping} 1.6s cubic-bezier(0, 0, 0.2, 1) infinite;
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 16px;
  width: 100%;
  max-width: 560px;

  @media (max-width: 960px) {
    justify-content: center;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    gap: 12px;
  }
`;

const HireButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  flex: 1;
  max-width: 260px;
  width: 95%;
  padding: 16px 0;
  border-radius: 999px;
  font-size: 18px;
  font-weight: 600;
  text-decoration: none;
  color: ${({ theme }) => theme.text_primary};
  border: 1.5px solid rgba(185, 140, 255, 0.6);
  background: rgba(133, 76, 230, 0.08);
  transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), background 0.35s ease,
    border-color 0.35s ease, box-shadow 0.35s ease;

  &:hover {
    transform: translateY(-3px);
    background: rgba(133, 76, 230, 0.18);
    border-color: #b98cff;
    box-shadow: 0 12px 32px rgba(133, 76, 230, 0.3);
  }

  @media (max-width: 640px) {
    padding: 13px 0;
    font-size: 16px;
  }
`;

const Title = styled.h1`
  font-weight: 700;
  font-size: 54px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 38px;
    line-height: 48px;
    margin-bottom: 8px;
  }
`;

const Name = styled.span`
  background: linear-gradient(90deg, #a46cf5, #e05cff, #13adc7, #a46cf5);
  background-size: 200% auto;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${shine} 6s linear infinite;
`;

/*
 * Always a single line with a fixed height, so the typewriter never wraps
 * and never pushes the content below it up/down while roles change.
 * Font size is capped so the longest role ("AI / LLM Integration Engineer")
 * plus "I am a" fits inside the column.
 */
const TextLoop = styled.div`
  font-weight: 600;
  font-size: 26px;
  display: flex;
  flex-wrap: nowrap;
  white-space: nowrap;
  gap: 10px;
  color: ${({ theme }) => theme.text_primary};
  height: 68px;
  line-height: 68px;
  overflow: hidden;

  @media (max-width: 1100px) {
    font-size: clamp(18px, 2.3vw, 26px);
  }

  @media (max-width: 960px) {
    justify-content: center;
    font-size: clamp(14px, calc((100vw - 48px) / 21), 26px);
  }

  @media (max-width: 640px) {
    height: 48px;
    line-height: 48px;
    margin-bottom: 16px;
  }
`;

const Span = styled.span`
  color: ${({ theme }) => theme.primary};
`;

const SubTitle = styled.p`
  font-size: 18px;
  line-height: 32px;
  margin-bottom: 42px;
  max-width: 560px;
  color: ${({ theme }) => theme.text_secondary};

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 16px;
    line-height: 28px;
  }
`;

const ResumeButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  text-decoration: none;
  flex: 1;
  width: 95%;
  max-width: 260px;
  padding: 16px 0;
  color: ${({ theme }) => theme.white};
  border-radius: 999px;
  font-size: 18px;
  font-weight: 600;
  background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  background-size: 150% 150%;
  box-shadow: 0 10px 30px rgba(133, 76, 230, 0.35);
  transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.35s ease, background-position 0.6s ease;

  svg {
    transition: transform 0.35s ease;
  }

  &:hover {
    transform: translateY(-3px) scale(1.03);
    box-shadow: 0 16px 40px rgba(193, 63, 232, 0.5);
    background-position: 100% 0;
  }

  &:hover svg {
    transform: translateX(4px);
  }

  @media (max-width: 640px) {
    padding: 13px 0;
    font-size: 16px;
  }
`;

const ImageFrame = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px;
  aspect-ratio: 1 / 1;
  animation: ${float} 6s ease-in-out infinite;

  /* Glow behind the photo */
  &::before {
    content: "";
    position: absolute;
    inset: -10%;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(133, 76, 230, 0.55), transparent 65%);
    filter: blur(20px);
    animation: ${pulse} 5s ease-in-out infinite;
    z-index: -1;
  }

  /* Rotating gradient ring */
  &::after {
    content: "";
    position: absolute;
    inset: -6px;
    border-radius: 50%;
    background: conic-gradient(from 0deg, #854ce6, #e05cff, #13adc7, #854ce6);
    animation: ${spin} 8s linear infinite;
    z-index: 0;
  }

  @media (max-width: 768px) {
    max-width: 330px;
  }

  @media (max-width: 640px) {
    max-width: 260px;
  }
`;

const Img = styled.img`
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 6px solid ${({ theme }) => theme.card_light};
  object-fit: cover;
  object-position: center;
`;

const Hero = () => {
  return (
    <div id="about">
      <HeroContainer>
        <HeroBg>
          <HeroBgAnimation />
        </HeroBg>
        <HeroInnerContainer>
          <HeroLeftContainer>
            <Animated $delay={0}>
              <Availability href="#contact">
                <LiveDot aria-hidden="true" />
                Available for freelance projects
              </Availability>
            </Animated>
            <Animated $delay={0.1}>
              <Title>
                Hi, I am <br /> <Name>{Bio.name}</Name>
              </Title>
            </Animated>
            <Animated $delay={0.2}>
              <TextLoop>
                I am a
                <Span>
                  <Typewriter
                    options={{
                      strings: Bio.roles,
                      autoStart: true,
                      loop: true,
                      delay: 70,
                      deleteSpeed: 40,
                    }}
                  />
                </Span>
              </TextLoop>
            </Animated>
            <Animated $delay={0.3}>
              <SubTitle>{Bio.description}</SubTitle>
            </Animated>
            <CtaRow $delay={0.4}>
              <Buttons>
                <ResumeButton href={Bio.resume} target="_blank" rel="noopener noreferrer">
                  Check Resume <FaArrowRight size={14} />
                </ResumeButton>
                <HireButton href="#contact">
                  <FaHandshake size={18} aria-hidden="true" /> Hire Me
                </HireButton>
              </Buttons>
            </CtaRow>
          </HeroLeftContainer>
          <HeroRightContainer>
            <ImageFrame>
              <Img src={HeroImg} alt={`${Bio.name} profile`} />
            </ImageFrame>
          </HeroRightContainer>
        </HeroInnerContainer>
        <WaveDivider />
      </HeroContainer>
    </div>
  );
};

export default Hero;
