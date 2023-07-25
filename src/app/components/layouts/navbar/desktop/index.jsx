"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DarkMode from "@/app/components/tools/darkMode";
import { faSun, faToggleOff } from "@fortawesome/fontawesome-free-solid";
import Image from "next/image";

const NavbarDesktop = () => {
  return (
    <>
      <div>
        <div className="hidden lg:grid grid-cols-[200px_minmax(900px,_1fr)_100px]  bg-cyan-600">
          <div>
            <div className="flex justify-center">
              <button>
                <Image
                  src="images/logos/logo-portfolio-white.svg"
                  alt="logoPF"
                  width={60}
                  height={40}
                />
              </button>
            </div>
          </div>
          <div className="hidden lg:flex flex-row w-full justify-around items-center list-none text-amber-800 text-2xl ">
            <ul className="flex flex-row justify-center">
              <li className="px-8">
                <a href="/navbar.jsx">Accueil</a>
              </li>
              <li>
                <a href="/introduction">Introduction</a>
              </li>
              <li className="px-8">
                <a href="/cv/moncv.jsx">CV</a>
              </li>
              <li>
                <a href="/compétences/compétences.jsx">Compétences</a>
              </li>
              <li className="px-8">
                <a href="/Projets/Projets.jsx">Projets</a>
              </li>
              <li>
                <a href="/Expériences/experiences.jsx">Expériences</a>
              </li>
              <li className="px-8">
                <a href="Contact/contact.jsx">Contact</a>
              </li>
            </ul>
          </div>

          <div className=" hidden lg:flex flex-row w-full  bg-cyan-600 ">
            <div className="flex flex-row  ">
              <button type="button" onClick={() => DarkMode()}>
                <FontAwesomeIcon className="pr-2" icon={faSun} size="2xl" />
                <FontAwesomeIcon icon={faToggleOff} size="2xl" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default NavbarDesktop;
