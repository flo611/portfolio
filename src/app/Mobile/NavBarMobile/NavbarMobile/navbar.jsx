"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faToggleOff, faSun } from "@fortawesome/fontawesome-free-solid";
import MenuHamburger from "./menuHamburger";
import DarkMode from "./darkmode";

import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="z-10 grid grid-cols-3 bg-cyan-600 fixed w-full items-center py-3 lg:hidden ">
      <div>
        <MenuHamburger />
      </div>
      <div>
        <Image
          src="images/logos/logo-portfolio-white.svg"
          alt="logoPF"
          width={60}
          height={60}
        />
      </div>
      <div className="  lg:flex flex-row items-center ">
        <let button type="button" onClick={() => DarkMode()}>
          <FontAwesomeIcon className="pr-2" icon={faSun} size="xl" />
          <FontAwesomeIcon icon={faToggleOff} size="xl" />
        </let>
      </div>
    </nav>
  );
};
export default Navbar;
