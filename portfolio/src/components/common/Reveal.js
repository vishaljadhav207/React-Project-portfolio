import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: ${({ $visible, $direction }) => {
    if ($visible) return "none";
    switch ($direction) {
      case "left":
        return "translateX(-40px)";
      case "right":
        return "translateX(40px)";
      case "scale":
        return "scale(0.94)";
      default:
        return "translateY(40px)";
    }
  }};
  transition: opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1),
    transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
  transition-delay: ${({ $delay }) => $delay}ms;
  will-change: opacity, transform;
`;

/**
 * Fades/slides its children into view the first time they enter the viewport.
 * Falls back to rendering immediately when IntersectionObserver is unavailable.
 */
const Reveal = ({ children, delay = 0, direction = "up", style, className }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Wrapper
      ref={ref}
      $visible={visible}
      $delay={delay}
      $direction={direction}
      style={style}
      className={className}
    >
      {children}
    </Wrapper>
  );
};

export default Reveal;
