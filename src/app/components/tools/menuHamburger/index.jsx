"use client";

import { slide as Menu } from "react-burger-menu";
import { styles } from "./styles";
import Image from "next/image";
import Link from "next/link";
import AnchorLink from "react-anchor-link-smooth-scroll";
import {
  BsLinkedin,
  BsGithub,
  BsDiscord,
  BsEnvelopeFill,
} from "react-icons/bs";
import { useState } from "react";

const MenuHamburger = () => {
  const [hideMenu, setHideMenu] = useState(false);

  const HideMenu = () => {
    setHideMenu(!hideMenu);
  };

  return (
    <Menu styles={styles} isOpen={hideMenu === true ? false : null}>
      <div className="">
        <div className="w-full flex flex-row justify-center dark:hidden">
          <a href="http://localhost:3000">
            <Image
              src="/images/logos/portfolio.svg"
              alt="Photo-de-profil"
              width={100}
              height={100}
            />
          </a>
        </div>
        <div className="w-full flex-row justify-center hidden dark:flex">
          <a href="http://localhost:3000">
            <Image
              src="/images/logos/whiteportfolio.svg"
              alt="Photo-de-profil"
              width={100}
              height={100}
            />
          </a>
        </div>
        <div className="py-16 font-nunitoRegular">
          <ul className="flex flex-col list-none text-amber-800 dark:text-slate-100">
            <li className="">
              <AnchorLink
                event
                offset={() => 150}
                href="#intro"
                onClick={() => HideMenu()}
              >
                Accueil
              </AnchorLink>
            </li>
            <li className="pt-2">
              <AnchorLink
                offset={() => 150}
                href="#skills"
                onClick={() => HideMenu()}
              >
                Compétences
              </AnchorLink>
            </li>
            <li className="py-2">
              <AnchorLink
                offset={() => 150}
                href="#projects"
                onClick={() => HideMenu()}
              >
                Projets
              </AnchorLink>
            </li>
            <li>
              <AnchorLink
                offset={() => 150}
                href="#timeline"
                onClick={() => HideMenu()}
              >
                Expériences
              </AnchorLink>
            </li>
            <li className="py-2">
              <AnchorLink
                offset={() => 150}
                href="#contact"
                onClick={() => HideMenu()}
              >
                Contact
              </AnchorLink>
            </li>
          </ul>
        </div>
        <div className="py-8 text-amber-800 dark:text-slate-100 font-nunitoRegular">
          <div className="flex flex-row justify-center">
            <button>
              <a href="https://fr.linkedin.com/in/florian-sabine-75003a273">
                <BsLinkedin size={30} h />
              </a>
            </button>
            <button className="px-4">
              {" "}
              <a href="https://github.com/flo611">
                <BsGithub size={30} h />
              </a>
            </button>
            <button>
              <a href="https://discord.com/channels/@flo611">
                <BsDiscord size={30} h />
              </a>
            </button>
            <button className="px-4">
              <a href="mailto:contact@sabine-portfolio.fr">
                <BsEnvelopeFill size={30} h />
              </a>
            </button>
          </div>
          <div className="flex flex-col items-center italic py-1 ">
            &copy; Florian Sabine
          </div>
        </div>
      </div>
    </Menu>
  );
};

export default MenuHamburger;
