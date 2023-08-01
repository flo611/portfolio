"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DarkMode from "@/app/components/tools/darkMode";
import { faSun, faToggleOff } from "@fortawesome/fontawesome-free-solid";
import Image from "next/image";
import Link from "next/link";

const NavbarDesktop = () => {
  return (
    <>
      <section>
        <div className="hidden lg:grid grid-cols-3 items-center justify-center  bg-cyan-600 ">
          <div>
            <div className="flex ">
              <button>
                <Link href="/">
                <Image
                  src="images/logos/logo-portfolio-white.svg"
                  alt="logoPF"
                  width={100}
                  height={100}
                />
                </Link>
              </button>
            </div>
          </div>
          <div className="hidden lg:flex flex-row w-full justify-center items-center list-none text-amber-800 text-4xl ">
            <ul className="flex flex-row justify-center ">
              <li className="px-8 lg:px-3 xl:px-16">
                <Link href="/">Accueil</Link>
              </li>
              <li>
                <Link href="/introduction">Introduction</Link>
              </li>
              <li className="px-8 lg:px-3 xl:px-16">
                <Link href="/cv">CV</Link>
              </li>
              <li>
                <Link href="/skills">Compétences</Link>
              </li>
              <li className="px-8 lg:px-3 xl:px-16">
                <Link href="/projets">Projets</Link>
              </li>
              <li>
                <Link href="/experiences">Expériences</Link>
              </li>
              <li className="px-8 lg:px-3 xl:px-16">
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="hidden lg:flex justify-end  ">
            <button type="button" onClick={() => DarkMode()}>
              <FontAwesomeIcon className="pr-2" icon={faSun} size="2xl" />
              <FontAwesomeIcon icon={faToggleOff} size="2xl" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
export default NavbarDesktop;
