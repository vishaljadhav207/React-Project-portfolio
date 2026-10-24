import styled from "styled-components";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import { Bio } from "../../data/constants";

const FooterContainer = styled.div`
  width: 100%;
  padding: 2rem 0 1rem;
  display: flex;
  justify-content: center;
  position: relative;
  background: linear-gradient(180deg, transparent, rgba(133, 76, 230, 0.06));

  /* Gradient divider line */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: min(90%, 1100px);
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(133, 76, 230, 0.6), transparent);
  }
`;

const FooterWrapper = styled.footer`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  padding: 1rem;
  color: ${({ theme }) => theme.text_primary};
`;

const Logo = styled.h2`
  font-weight: 700;
  font-size: 22px;
  background: ${({ theme }) => theme.gradient};
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Nav = styled.nav`
  width: 100%;
  max-width: 800px;
  margin-top: 0.5rem;
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

const NavLink = styled.a`
  position: relative;
  color: ${({ theme }) => theme.text_secondary};
  text-decoration: none;
  font-size: 1.05rem;
  transition: color 0.3s ease;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -4px;
    width: 100%;
    height: 2px;
    border-radius: 2px;
    background: ${({ theme }) => theme.gradient};
    transform: scaleX(0);
    transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1);
  }

  &:hover {
    color: ${({ theme }) => theme.white};
  }

  &:hover::after {
    transform: scaleX(1);
  }

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
`;

const SocialMediaIcons = styled.div`
  display: flex;
  gap: 14px;
  margin-top: 1rem;
`;

const SocialMediaIcon = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  color: ${({ theme }) => theme.text_primary};
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid ${({ theme }) => theme.border};
  transition: all 0.35s cubic-bezier(0.22, 1, 0.36, 1);

  &:hover {
    color: ${({ theme }) => theme.white};
    background: ${({ theme }) => theme.gradient};
    border-color: transparent;
    transform: translateY(-4px);
    box-shadow: 0 10px 24px rgba(133, 76, 230, 0.4);
  }
`;

const Copyright = styled.p`
  margin-top: 1.25rem;
  font-size: 0.85rem;
  color: ${({ theme }) => theme.soft2};
  text-align: center;
`;

const socials = [
  { href: Bio.github, label: "GitHub", Icon: GitHubIcon },
  { href: Bio.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
  { href: Bio.twitter, label: "Twitter", Icon: TwitterIcon },
  { href: Bio.insta, label: "Instagram", Icon: InstagramIcon },
  { href: Bio.email && `mailto:${Bio.email}`, label: "Email", Icon: EmailIcon },
].filter((s) => Boolean(s.href));

function Footer() {
  return (
    <FooterContainer>
      <FooterWrapper>
        <Logo>{Bio.name}</Logo>
        <Nav>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#education">Education</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </Nav>
        <SocialMediaIcons>
          {socials.map(({ href, label, Icon }) => (
            <SocialMediaIcon
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
            >
              <Icon fontSize="small" />
            </SocialMediaIcon>
          ))}
        </SocialMediaIcons>
        <Copyright>
          &copy; {new Date().getFullYear()} {Bio.name}. All rights reserved.
        </Copyright>
      </FooterWrapper>
    </FooterContainer>
  );
}

export default Footer;
