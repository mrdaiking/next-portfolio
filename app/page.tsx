import Image from "next/image";
import NavBar from "./component/NavBar";
import About from "./component/About";
import WorkExperience from "./component/WorkExperience";
import Skills from "./component/Skills";
import Education from "./component/Education";
import Contact from "./component/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <NavBar />
        <About />
        <WorkExperience />
        <Skills />
        <Education />
        <Contact />
    </main>
  );
}
