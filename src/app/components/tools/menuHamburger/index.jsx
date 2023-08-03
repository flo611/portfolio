"use client";

import { slide as Menu } from "react-burger-menu";
import { styles } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faSquareGithub,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import Image from "next/image";
import Link from "next/link";

const MenuHamburger = () => {
  return (
    <Menu styles={styles}>
      <div className="">
        <div className="w-full flex flex-row justify-center">
          <Link href="/">
          <Image
            src="/images/logos/portfolio.svg"
            alt="Photo-de-profil"
            width={100}
            height={100}
          />
          </Link>
        </div>
        <div className="pt-3">
          <ul className="flex flex-col list-none text-amber-800">
            <li className="py-2">
              {" "}
              <Link href="/">Accueil</Link>
            </li>
            <li>
              <Link href="/introduction"> Introduction </Link>
            </li>
            <li className="py-2">CV</li>
            <li>
              <Link href="/skills">Compétences</Link>
            </li>
            <li className="py-2">
              <Link href="/projects">Projets</Link>
            </li>
            <li>
              <Link href="/experience">Expériences</Link>
            </li>
            <li className="py-2">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="py-8 text-amber-800">
          <div className="flex flex-row justify-center">
            <button>
              <a href="https://fr.linkedin.com/in/florian-sabine-75003a273">
                <FontAwesomeIcon width={22} height={20} icon={faLinkedin} />
              </a>
            </button>
            <button className="px-2">
              {" "}
              <a href="https://github.com/flo611">
                <FontAwesomeIcon width={22} height={20} icon={faSquareGithub} />
              </a>
            </button>
            <button>
              <a href="https://discord.com/channels/@flo611">
                <FontAwesomeIcon width={22} height={20} icon={faDiscord} />
              </a>
            </button>
            <button className="px-2">
              <a href="mailto:contact@sabine-portfolio.fr">
                <FontAwesomeIcon width={22} height={20} icon={faEnvelope} />
              </a>
            </button>
          </div>
          <div className="flex flex-col items-center italic">
            &copy; Florian Sabine
          </div>
        </div>
      </div>
    </Menu>
  );
};

export default MenuHamburger;
