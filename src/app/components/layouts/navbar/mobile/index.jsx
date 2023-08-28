"use client";

import Menu from "@/app/components/tools/menuHamburger";
import DarkMode from "@/app/components/tools/darkMode";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BsToggleOff, BsToggleOn } from "react-icons/bs";

const NavbarMobile = () => {
  const [showButton, setShowButton] = useState(false);
  return (
    <header>
      <nav className=" z-10 grid grid-cols-3 text-amber-800 bg-slate-100 dark:bg-indigo-950 dark:text-slate-100 fixed top-0 w-full items-center py-3 lg:hidden ">
        <div>
          <Menu />
        </div>
        <div className="flex flex-row justify-center">
          <Link href="https://sabine-portfolio.fr/">
            <Image
              src="images/logos/portfolio.svg"
              alt="logoPF"
              width={60}
              height={60}
              className="dark:hidden"
            />
          </Link>
          <Link href="/">
            <Image
              src="images/logos/whiteportfolio.svg"
              alt="logoPF"
              width={60}
              height={60}
              className="hidden dark:flex"
            />
          </Link>
        </div>
        <div className="flex flex-row justify-center">
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
      </nav>
    </header>
  );
};
export default NavbarMobile;
