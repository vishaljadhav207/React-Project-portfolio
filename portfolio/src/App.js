import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "./utils/Themes";
import Navbar from "./components/Navbar";
import Hero from "./components/Herosection";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/projects";
import Contact from "./components/Contact";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Footer";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  min-height: 100vh;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  background: radial-gradient(
      circle at 0% 100%,
      rgba(204, 0, 187, 0.12) 0%,
      rgba(201, 32, 184, 0) 45%
    ),
    radial-gradient(
      circle at 100% 0%,
      rgba(0, 70, 209, 0.14) 0%,
      rgba(0, 70, 209, 0) 45%
    );
  width: 100%;
  padding: 40px 0;
  /* No hard edges: the radial glows fade into the page background */
`;

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
        <Navbar />
        <Body>
          <Hero />
          <Wrapper>
            <Skills />
            <Experience />
            <Education />
          </Wrapper>
          <Projects />
          <Wrapper>
            <Contact />
          </Wrapper>
          <Footer />
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;
