"use client";

import Image from "next/image";
import MenuHamburger from "./Mobile/NavBarMobile/NavbarMobile/menuHamburger";
import Navbar from "./Mobile/NavBarMobile/NavbarMobile/navbar";
import Intro from "./Mobile/NavBarMobile/introduction/intro";
import Compet from "./Mobile/compétences/compétences";
import Carrousel from "./Mobile/Projets/Projets";
import Exp from "./Mobile/Expériences/experiences";
import Contact from "./Mobile/Contact/contact";
import Formulaire from "./Mobile/Formulaire/formulaire";

const Home = () => {
  return (
    <main>
      <div>
        <nav className="bg-cyan-300 grid grid-cols-3 fixed w-full">
          <div className="lg:hidden">
          <MenuHamburger/>
          </div>
          <Navbar />
        </nav>
        </div>
        <div>
        <Intro />
        </div>
        <div>
          <Compet/>
        </div>
        <div>
          <Carrousel/>
        </div>
        <div>
          <Exp/>
        </div>
        <div>
          <Contact/>
          <Formulaire/>
        </div>
    </main>
  );
};

export default Home;
