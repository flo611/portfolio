"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DarkMode from "../Mobile/NavBarMobile/NavbarMobile/darkmode";
import { faSun,faToggleOff } from "@fortawesome/fontawesome-free-solid";

const NavbarDesktop = () => {
  return (
    <>
    <div className="flex flex-row justify-center">
      <div className="bg-cyan-600">
        <ul className="hidden lg:flex flex-row w-full justify-center list-none text-amber-800 text-4xl  ">
          <li className="px-8"><a href="/navbar.jsx">Accueil</a></li>
          <li><a href="/introduction">Introduction</a></li>
          <li className="px-8"><a href="/cv/moncv.jsx">CV</a></li>
          <li><a href="/compétences/compétences.jsx">Compétences</a></li>
          <li className="px-8"><a href="/Projets/Projets.jsx">Projets</a></li>
          <li><a href="/Expériences/experiences.jsx">Expériences</a></li>
          <li className="px-8"><a href="Contact/contact.jsx">Contact</a></li>
        </ul>
      </div>
      <div className="flex flex-row w-full justify-end pr-14 bg-cyan-600">
        <div className="flex flex-row  ">
          <button>
            <let button type="button" onClick={() => DarkMode()}>
              <FontAwesomeIcon className="pr-2" icon={faSun} size="2xl" />
              <FontAwesomeIcon icon={faToggleOff} size="2xl" />
            </let>
          </button>
        </div>
      </div>
      </div>
    </>
  );
};
export default NavbarDesktop;
