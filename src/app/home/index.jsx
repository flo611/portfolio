import Main from "@/app/components/layouts/main";
import Introduction from "@/app/home/section/introduction";
import Cv from "@/app/home/section/cv";

import Skills from "@/app/home/section/skills";
import Projects from "@/app/home/section/projects";
import Experience from "@/app/home/section/experiences";
import Contact from "@/app/home/section/contact";

const Home = () => {
  return (
    <Main>
        <Introduction />
        <Cv />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
    </Main>
  );
};

export default Home;
