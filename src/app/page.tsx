import Image from "next/image";
import { ThemeToggle } from "./Components/Context/ThemeToggle";
import Introduction from "./Components/Intro/Introduction";
import Projects from "./Components/Projects/Projects";
import Education from "./Components/Education/Education";
import Skills from "./Components/Skills/Skills";
import Contact from "./Components/Contact/Contact";

export default function Home() {
  return (
    <>
        <Introduction/>
        <Projects/>
        <Skills/>
        <Education/>
        <Contact/>
    </>
  );
}
