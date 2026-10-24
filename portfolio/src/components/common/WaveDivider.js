import React from "react";
import styled, { keyframes, useTheme } from "styled-components";

// Each wave layer drifts sideways at a different speed for a parallax feel
const drift = keyframes`
  0%   { transform: translate3d(-90px, 0, 0); }
  100% { transform: translate3d(85px, 0, 0); }
`;

const Wrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: -1px; /* avoid a hairline gap on some screens */
  height: 110px;
  pointer-events: none;
  z-index: 2;

  svg {
    width: 100%;
    height: 100%;
    display: block;
  }

  .layer > use {
    animation: ${drift} 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
  }
  .layer > use:nth-child(1) { animation-delay: -2s;  animation-duration: 7s; }
  .layer > use:nth-child(2) { animation-delay: -3s;  animation-duration: 10s; }
  .layer > use:nth-child(3) { animation-delay: -4s;  animation-duration: 13s; }
  .layer > use:nth-child(4) { animation-delay: -5s;  animation-duration: 20s; }

  @media (max-width: 768px) {
    height: 60px;
  }
`;

/**
 * Animated layered waves. The last (solid) layer uses the page background
 * so the section above blends seamlessly into the one below.
 */
const WaveDivider = () => {
  const theme = useTheme();

  return (
    <Wrapper aria-hidden="true">
      <svg
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        shapeRendering="auto"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <path
            id="hero-wave"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g className="layer">
          <use href="#hero-wave" x="48" y="0" fill="rgba(133, 76, 230, 0.28)" />
          <use href="#hero-wave" x="48" y="3" fill="rgba(193, 63, 232, 0.18)" />
          <use href="#hero-wave" x="48" y="5" fill="rgba(19, 173, 199, 0.12)" />
          <use href="#hero-wave" x="48" y="7" fill={theme.bg} />
        </g>
      </svg>
    </Wrapper>
  );
};

export default WaveDivider;
