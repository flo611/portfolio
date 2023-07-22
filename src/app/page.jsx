"use client";

import Navbar from "./Mobile/NavBarMobile/NavbarMobile/navbar";
import NavbarDesktop from "./desktop/navbar";
import Intro from "./Mobile/NavBarMobile/introduction/intro";
import Moncv from "./Mobile/cv/moncv";
import Compet from "./Mobile/compétences/compétences";
import Carrousel from "./Mobile/Projets/Projets";
import Exp from "./Mobile/Expériences/experiences";
import Contact from "./Mobile/Contact/contact";
import Footer from "./Mobile/NavBarMobile/Footer/footer";

const Home = () => {
  return (
    <>
   
      <Navbar />
      <NavbarDesktop />
      <main className="bg-cyan-400 text-white dark:bg-black dark:text-white dark:uppercase lg:text-2xl ">
        <Intro />
        <Moncv />
        <Compet />
        <Carrousel />
        <Exp />
        <Contact />
      </main>
      <Footer />
    
    </>
  );
};

export default Home;
