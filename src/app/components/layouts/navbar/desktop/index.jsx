"use client";

import DarkMode from "@/app/components/tools/darkMode";
import Image from "next/image";
import Link from "next/link";
import { BsToggleOff, BsToggleOn } from "react-icons/bs";
import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const NavbarDesktop = () => {
  const [showButton, setShowButton] = useState(false);

  return (
    <header>
      <nav className="hidden lg:flex w-full fixed top-0 z-50 flex-col items-center justify-center bg-white">
        <div>
          <div className="pt-6">
            <a href="http://localhost:3000">
              <Image
                src="images/logos/portfolio.svg"
                alt="logoPF"
                width={100}
                height={100}
              />
            </a>
          </div>
        </div>
        <div className="hidden lg:flex flex-row w-full py-6 justify-center items-center list-none text-amber-800 text-2xl uppercase font-medium">
          <ul className="w-full grid grid-cols-4">
            <div className="flex flex-row items-center justify-between col-span-3 pl-40">
              <li className="">
                <a href="http://localhost:3000">Accueil</a>
              </li>
              <li>
                <AnchorLink offset={() => 150} href="#skills">
                  Compétences
                </AnchorLink>
              </li>
              <li className="">
                <AnchorLink offset={() => 150} href="#projects">
                  Projets
                </AnchorLink>
              </li>
              <li>
                <AnchorLink offset={() => 150} href="#timeline">
                  Expériences
                </AnchorLink>
              </li>
              <li className="">
                <AnchorLink offset={() => 150} href="#contact">
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
                  <BsToggleOff size={40} />
                ) : (
                  <BsToggleOn size={40} />
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
