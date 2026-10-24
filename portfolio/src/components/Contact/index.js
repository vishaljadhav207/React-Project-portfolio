import React, { useState } from "react";
import styled from "styled-components";
import { Snackbar, Alert } from "@mui/material";
import { FaEnvelope, FaPhoneAlt, FaRegCopy, FaCheck, FaMapMarkerAlt } from "react-icons/fa";
import SectionHeader from "../common/SectionHeader";
import Reveal from "../common/Reveal";
import { Bio } from "../../data/constants";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 20px 16px 0;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 900px;
  padding-bottom: 80px;
  gap: 12px;
`;

const Cards = styled.div`
  width: 100%;
  margin-top: 28px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
`;

const Card = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 14px;
  padding: 32px 24px 28px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.card + "E6"};
  border: 1px solid ${({ theme }) => theme.border};
  box-shadow: 0 20px 60px rgba(23, 92, 230, 0.12);
  overflow: hidden;
  transition: transform 0.45s cubic-bezier(0.22, 1, 0.36, 1), border-color 0.45s ease,
    box-shadow 0.45s ease;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: ${({ theme }) => theme.gradient};
  }

  &:hover {
    transform: translateY(-6px);
    border-color: rgba(133, 76, 230, 0.6);
    box-shadow: 0 24px 60px rgba(133, 76, 230, 0.25);
  }
`;

const IconCircle = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: ${({ theme }) => theme.white};
  background: ${({ theme }) => theme.gradient};
  box-shadow: 0 10px 28px rgba(133, 76, 230, 0.45);
  transition: transform 0.45s cubic-bezier(0.22, 1, 0.36, 1);

  ${Card}:hover & {
    transform: scale(1.08) rotate(-8deg);
  }
`;

const Label = styled.div`
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.soft2};
`;

const Value = styled.a`
  font-size: 19px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  text-decoration: none;
  word-break: break-word;
  transition: color 0.3s ease;

  &:hover {
    color: #b98cff;
  }

  @media (max-width: 400px) {
    font-size: 17px;
  }
`;

const Actions = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 6px;
  flex-wrap: wrap;
  justify-content: center;
`;

const PrimaryAction = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  border-radius: 999px;
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;
  color: ${({ theme }) => theme.white};
  background: ${({ theme }) => theme.gradient};
  box-shadow: 0 8px 22px rgba(133, 76, 230, 0.35);
  transition: transform 0.3s ease, box-shadow 0.3s ease, filter 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    filter: brightness(1.08);
    box-shadow: 0 12px 30px rgba(193, 63, 232, 0.45);
  }
`;

const CopyButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 18px;
  border-radius: 999px;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  color: ${({ theme }) => theme.text_primary};
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid ${({ theme }) => theme.border};
  transition: all 0.3s ease;

  &:hover {
    border-color: ${({ theme }) => theme.primary};
    background: rgba(133, 76, 230, 0.12);
  }
`;

const Location = styled.p`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 24px;
  font-size: 14px;
  color: ${({ theme }) => theme.soft2};
  text-align: center;
`;

// "+91 99604 39680" -> "+919960439680" for the tel: link
const toTelHref = (phone) => `tel:${phone.replace(/[^\d+]/g, "")}`;

const Contact = () => {
  const [copied, setCopied] = useState(null);

  const copy = async (key, text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(key);
      setTimeout(() => setCopied((current) => (current === key ? null : current)), 2000);
    } catch {
      // Clipboard can be blocked (e.g. non-HTTPS); the mailto/tel links still work.
    }
  };

  const contacts = [
    {
      key: "email",
      label: "Email",
      value: Bio.email,
      href: `mailto:${Bio.email}`,
      action: "Send Email",
      Icon: FaEnvelope,
    },
    {
      key: "phone",
      label: "Phone",
      value: Bio.phone,
      href: toTelHref(Bio.phone),
      action: "Call Me",
      Icon: FaPhoneAlt,
    },
  ].filter((c) => Boolean(c.value));

  return (
    <Container id="contact">
      <Wrapper>
        <SectionHeader
          title="Contact"
          desc="Have a freelance project, a full-time opportunity, or just a question? Reach out and let's build something great together."
        />
        <Cards>
          {contacts.map(({ key, label, value, href, action, Icon }, index) => (
            <Reveal key={key} delay={index * 120} style={{ height: "100%" }}>
              <Card>
                <IconCircle aria-hidden="true">
                  <Icon />
                </IconCircle>
                <Label>{label}</Label>
                <Value href={href}>{value}</Value>
                <Actions>
                  <PrimaryAction href={href}>
                    <Icon size={13} aria-hidden="true" /> {action}
                  </PrimaryAction>
                  <CopyButton
                    type="button"
                    onClick={() => copy(key, value)}
                    aria-label={`Copy ${label.toLowerCase()}`}
                  >
                    {copied === key ? <FaCheck size={13} /> : <FaRegCopy size={13} />}
                    {copied === key ? "Copied" : "Copy"}
                  </CopyButton>
                </Actions>
              </Card>
            </Reveal>
          ))}
        </Cards>
        {Bio.location && (
          <Reveal>
            <Location>
              <FaMapMarkerAlt aria-hidden="true" /> {Bio.location}
            </Location>
          </Reveal>
        )}
        <Snackbar
          open={Boolean(copied)}
          autoHideDuration={2000}
          onClose={() => setCopied(null)}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
          <Alert severity="success" variant="filled" sx={{ width: "100%" }}>
            Copied to clipboard
          </Alert>
        </Snackbar>
      </Wrapper>
    </Container>
  );
};

export default Contact;
