import Main from "@/app/components/layouts/main";
import Introduction from "@/app/home/section/introduction";

import Skills from "@/app/home/section/skills";
import Projects from "@/app/home/section/projects";
import Experience from "@/app/home/section/experiences";
import Contact from "@/app/home/section/contact";
import Basic from "../components/tools/test";

const HomePage = () => {
  return (
    <Main>
      <Introduction />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Basic/>
    </Main>
  );
};

export default HomePage;
