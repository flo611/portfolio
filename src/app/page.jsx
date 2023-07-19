"use client";

import Navbar from "./Mobile/NavBarMobile/NavbarMobile/navbar";
import Intro from "./Mobile/NavBarMobile/introduction/intro";
import Compet from "./Mobile/compétences/compétences";
import Carrousel from "./Mobile/Projets/Projets";
import Exp from "./Mobile/Expériences/experiences";
import Contact from "./Mobile/Contact/contact";
import Formulaire from "./Mobile/Formulaire/formulaire";

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <Intro />
        <Compet />
        <Carrousel />
        <Exp />
        <Contact />
        <Formulaire />
      </main>
    </>
  );
};

export default Home;
