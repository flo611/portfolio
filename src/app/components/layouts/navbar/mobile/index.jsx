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
      <nav className="z-10 grid grid-cols-3 bg-slate-100 dark:bg-indigo-900 dark:text-lime-400 fixed top-0 w-full items-center py-3 lg:hidden ">
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
          <button type="button" onClick={() =>{
            DarkMode();
             setShowButton(!showButton);
             } }
             >
               {showButton === false ? (
                  <BsToggleOff size={40} className="text-amber-800" />
                ) : (
                  <BsToggleOn size={40} className="text-amber-800" />
                )}
          </button>
        </div>
      </nav>
    </header>
  );
};
export default NavbarMobile;
