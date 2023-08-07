"use client";

import DarkMode from "@/app/components/tools/darkMode";
import Image from "next/image";
import { BsToggleOff, BsToggleOn } from "react-icons/bs";
import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const NavbarDesktop = () => {
  const [showButton, setShowButton] = useState(false);

  return (
    <header>
      <nav className="font-handjetRegular hidden lg:flex w-full fixed top-0 z-50 flex-col items-center justify-center bg-slate-100 dark:bg-indigo-950">
        <div>
          <div className="pt-5">
            <a href="http://localhost:3000">
              <Image
                src="images/logos/portfolio.svg"
                alt="logoPF"
                width={75}
                height={75}
              />
            </a>
          </div>
        </div>
        <div className="hidden lg:flex flex-row w-full py-5 justify-center items-center list-none text-amber-800 dark:text-slate-100 text-lg uppercase font-medium">
          <ul className="w-full grid grid-cols-4">
            <div className="flex flex-row items-center justify-between col-span-3 pl-40">
              <li className="hover:text-black hover:transition hover:ease-in-out hover:duration-200 hover:border-b-2 hover:border-amber-800">
                <a href="http://localhost:3000">Accueil</a>
              </li>
              <li className="hover:text-black hover:transition hover:ease-in-out hover:duration-200 hover:border-b-2 hover:border-amber-800">
                <AnchorLink offset={() => 150} href="#skills">
                  Compétences
                </AnchorLink>
              </li>
              <li className="hover:text-black hover:transition hover:ease-in-out hover:duration-200 hover:border-b-2 hover:border-amber-800">
                <AnchorLink offset={() => 115} href="#projects">
                  Projets
                </AnchorLink>
              </li>
              <li className="hover:text-black hover:transition hover:ease-in-out hover:duration-200 hover:border-b-2 hover:border-amber-800">
                <AnchorLink offset={() => 118} href="#timeline">
                  Expériences
                </AnchorLink>
              </li>
              <li className="hover:text-black hover:transition hover:ease-in-out hover:duration-200 hover:border-b-2 hover:border-amber-800">
                <AnchorLink offset={() => 118} href="#contact">
                  Contact
                </AnchorLink>
              </li>
            </div>
            <div className="flex justify-center">
              <button
                type="button"
                onClick={() => {
                  DarkMode();
                  setShowButton(!showButton);
                }}
              >
                {showButton === false ? (
                  <BsToggleOff size={30} />
                ) : (
                  <BsToggleOn size={30} />
                )}
              </button>
            </div>
          </ul>
        </div>
      </nav>
    </header>
  );
};
export default NavbarDesktop;
