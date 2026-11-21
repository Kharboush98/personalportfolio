import { Suspense } from "react";
import Introduction from "./Components/sections/Intro/Introduction";
import Projects from "./Components/sections/Projects/Projects";
import Education from "./Components/sections/Education/Education";
import Skills from "./Components/sections/Skills/Skills";
import Contact from "./Components/sections/Contact/Contact";
import Certificate from "./Components/sections/Certificate/Certificate";

export default function Home() {
  return (
    <>
      <Introduction />
      <Projects />
      <Skills />
      <Education />
      <Suspense fallback={<div>Loading certificates...</div>}>
        {" "}
        <Certificate />{" "}
      </Suspense>

      <Contact />
    </>
  );
}
