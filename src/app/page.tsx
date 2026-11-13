import Image from "next/image";
import { ThemeToggle } from "./Components/Context/ThemeToggle";
import Introduction from "./Components/Intro/Introduction";
import Projects from "./Components/Projects/Projects";

export default function Home() {
  return (
    <>
        <Introduction/>
        <Projects/>
    </>
  );
}
