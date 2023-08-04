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

const MenuHamburger = () => {

  return (
    <Menu styles={styles}>
      <div className="">
        <div className="w-full flex flex-row justify-center">
          <a href="http://localhost:3000">
            <Image
              src="/images/logos/portfolio.svg"
              alt="Photo-de-profil"
              width={100}
              height={100}
            />
          </a>
        </div>
        <div className="pt-6">
          <ul className="flex flex-col list-none text-amber-800">
            <li className="">
              {" "}
              <AnchorLink event offset={() => 150} href="#intro">
                Accueil
              </AnchorLink>
            </li>
            <li className="py-2">CV</li>
            <li>
              <AnchorLink offset={() => 150} href="#skills">
                Compétences
              </AnchorLink>
            </li>
            <li className="py-2">
              <AnchorLink offset={() => 150} href="#projects">
                Projets
              </AnchorLink>
            </li>
            <li >
              <AnchorLink offset={() => 150} href="#timeline">
                Expériences
              </AnchorLink>
            </li>
            <li className="py-2">
              <AnchorLink offset={() => 150} href="#contact">
                Contact
              </AnchorLink>
            </li>
          </ul>
        </div>
        <div className="py-8 text-amber-800">
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
          <div className="flex flex-col items-center italic py-1">
            &copy; Florian Sabine
          </div>
        </div>
      </div>
    </Menu>
  );
};

export default MenuHamburger;
