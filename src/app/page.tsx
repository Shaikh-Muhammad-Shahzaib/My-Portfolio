import About from "./pages/about";
import Contact from "./pages/contact";
import Education from "./pages/education";
import Experience from "./pages/experience";
import Intro from "./pages/intro";
import Projects from "./pages/projects";
import Skills from "./pages/skills";

export default function Home() {
  return (
    <>
    <main>
      <Intro/>
      <About/>
      <Education/>
      <Experience/>
      <Projects/>
      <Skills/>
      <Contact/>
    </main>
    </>
  );
}
