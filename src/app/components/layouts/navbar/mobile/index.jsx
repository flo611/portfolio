"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faToggleOff, faSun } from "@fortawesome/fontawesome-free-solid";
import Menu from "@/app/components/tools/menuHamburger";
import DarkMode from "@/app/components/tools/darkMode";
import Link from "next/link";
import Image from "next/image";

const NavbarMobile = () => {
  return (
    <nav className="z-10 grid grid-cols-3 bg-cyan-600 fixed top-0 w-full items-center py-3 lg:hidden ">
      <div>
        <Menu />
      </div>
      <div className="flex flex-row justify-center">
        <Link href="/">
        <Image
          src="images/logos/portfolio.svg"
          alt="logoPF"
          width={60}
          height={60}
        />
        </Link>
      </div>
      <div className="flex flex-row justify-center">
        <button type="button" onClick={() => DarkMode()}>
          <FontAwesomeIcon className="pr-2" icon={faSun} size="xl" />
          <FontAwesomeIcon icon={faToggleOff} size="xl" />
        </button>
      </div>
    </nav>
  );
};
export default NavbarMobile;
