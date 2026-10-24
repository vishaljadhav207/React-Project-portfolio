import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { DiCssdeck } from "react-icons/di";
import { FaBars, FaTimes, FaGithub } from "react-icons/fa";
import { Bio } from "../../data/constants";

const SECTIONS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const Nav = styled.nav`
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: ${({ $scrolled }) =>
    $scrolled ? "rgba(15, 15, 23, 0.72)" : "rgba(25, 25, 36, 1)"};
  backdrop-filter: ${({ $scrolled }) => ($scrolled ? "blur(14px) saturate(160%)" : "none")};
  -webkit-backdrop-filter: ${({ $scrolled }) =>
    $scrolled ? "blur(14px) saturate(160%)" : "none"};
  border-bottom: 1px solid
    ${({ $scrolled, theme }) => ($scrolled ? theme.border : "transparent")};
  box-shadow: ${({ $scrolled }) =>
    $scrolled ? "0 8px 32px rgba(0, 0, 0, 0.35)" : "none"};
  transition: background-color 0.4s ease, box-shadow 0.4s ease,
    border-color 0.4s ease, backdrop-filter 0.4s ease;
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
`;

const NavLogo = styled(LinkR)`
  display: flex;
  align-items: center;
  gap: 4px;
  text-decoration: none;
  color: ${({ theme }) => theme.white};
  flex-shrink: 0;
  transition: transform 0.3s ease;

  svg {
    color: ${({ theme }) => theme.primary};
    transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
  }

  &:hover svg {
    transform: rotate(-12deg) scale(1.08);
  }
`;

const LogoText = styled.span`
  font-weight: 700;
  font-size: 20px;
  letter-spacing: 0.5px;
`;

const MobileIcon = styled.button`
  display: none;
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.text_primary};
  font-size: 1.5rem;
  cursor: pointer;
  padding: 6px;
  line-height: 0;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

const NavItems = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  list-style: none;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  position: relative;
  color: ${({ theme, $active }) => ($active ? theme.white : theme.text_secondary)};
  font-weight: 500;
  padding: 8px 14px;
  border-radius: 10px;
  text-decoration: none;
  transition: color 0.3s ease, background-color 0.3s ease;

  &::after {
    content: "";
    position: absolute;
    left: 14px;
    right: 14px;
    bottom: 2px;
    height: 2px;
    border-radius: 2px;
    background: ${({ theme }) => theme.gradient};
    transform: scaleX(${({ $active }) => ($active ? 1 : 0)});
    transform-origin: center;
    transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1);
  }

  &:hover {
    color: ${({ theme }) => theme.white};
    background-color: rgba(133, 76, 230, 0.1);
  }

  &:hover::after {
    transform: scaleX(1);
  }
`;

const GitHubButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  border: 1.5px solid ${({ theme }) => theme.primary};
  border-radius: 999px;
  color: ${({ theme }) => theme.primary};
  padding: 8px 20px;
  font-weight: 500;
  font-size: 15px;
  text-decoration: none;
  flex-shrink: 0;
  transition: all 0.35s ease;

  &:hover {
    background: ${({ theme }) => theme.gradient};
    border-color: transparent;
    color: ${({ theme }) => theme.white};
    box-shadow: 0 6px 24px rgba(133, 76, 230, 0.45);
    transform: translateY(-2px);
  }

  @media screen and (max-width: 768px) {
    display: ${({ $mobile }) => ($mobile ? "inline-flex" : "none")};
  }
`;

const MobileMenu = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 6px;
    position: absolute;
    top: 70px;
    left: 0;
    width: 100%;
    padding: 16px 24px 24px;
    background: rgba(15, 15, 23, 0.92);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border-bottom: 1px solid ${({ theme }) => theme.border};
    border-radius: 0 0 20px 20px;
    box-shadow: 0 16px 32px rgba(0, 0, 0, 0.4);
    opacity: ${({ $open }) => ($open ? 1 : 0)};
    transform: translateY(${({ $open }) => ($open ? "0" : "-12px")});
    pointer-events: ${({ $open }) => ($open ? "auto" : "none")};
    visibility: ${({ $open }) => ($open ? "visible" : "hidden")};
    transition: opacity 0.35s ease, transform 0.35s ease, visibility 0.35s;
  }
`;

const MobileLink = styled.a`
  color: ${({ theme, $active }) => ($active ? theme.white : theme.text_secondary)};
  background-color: ${({ $active }) => ($active ? "rgba(133, 76, 230, 0.15)" : "transparent")};
  font-weight: 500;
  padding: 12px 14px;
  border-radius: 10px;
  text-decoration: none;
  transition: all 0.25s ease;

  &:hover {
    color: ${({ theme }) => theme.white};
    background-color: rgba(133, 76, 230, 0.15);
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("about");

  // Add the glass effect once the user scrolls away from the top
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the nav link for the section currently in view
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <Nav $scrolled={scrolled || isOpen}>
      <NavContainer>
        <NavLogo to="/" aria-label="Home">
          <DiCssdeck size="2.8rem" />
          <LogoText>Portfolio</LogoText>
        </NavLogo>

        <NavItems>
          {SECTIONS.map(({ id, label }) => (
            <li key={id}>
              <NavLink href={`#${id}`} $active={active === id}>
                {label}
              </NavLink>
            </li>
          ))}
        </NavItems>

        <GitHubButton href={Bio.github} target="_blank" rel="noopener noreferrer">
          <FaGithub /> GitHub
        </GitHubButton>

        <MobileIcon
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </MobileIcon>

        <MobileMenu $open={isOpen} aria-hidden={!isOpen}>
          {SECTIONS.map(({ id, label }) => (
            <MobileLink
              key={id}
              href={`#${id}`}
              $active={active === id}
              onClick={closeMenu}
              tabIndex={isOpen ? 0 : -1}
            >
              {label}
            </MobileLink>
          ))}
          <GitHubButton
            $mobile
            href={Bio.github}
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={isOpen ? 0 : -1}
            style={{ marginTop: 8, width: "max-content" }}
          >
            <FaGithub /> GitHub Profile
          </GitHubButton>
        </MobileMenu>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
