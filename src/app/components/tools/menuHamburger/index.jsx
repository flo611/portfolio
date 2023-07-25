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

const MenuHamburger = () => {
  return (
    <Menu styles={styles}>
      <div className="">
        <div className="w-full flex flex-row justify-center">
          <Image
            src="/images/logos/white-logo naturopied.svg"
            alt="Photo-de-profil"
            width={150}
            height={150}
          />
        </div>
        <div>
          <ul className="flex flex-col list-none text-amber-800">
            <li className="py-2">Accueil</li>
            <li>Introduction</li>
            <li className="py-2">CV</li>
            <li>Compétences</li>
            <li className="py-2">Projets</li>
            <li>Expériences</li>
            <li className="py-2">Contact</li>
          </ul>
        </div>
        <div className="py-8 text-amber-800">
          <div className="flex flex-row justify-center">
            <button>
              <FontAwesomeIcon width={22} height={20} icon={faLinkedin} />
            </button>
            <button className="px-2">
              <FontAwesomeIcon width={22} height={20} icon={faSquareGithub} />
            </button>
            <button>
              <FontAwesomeIcon width={22} height={20} icon={faDiscord} />
            </button>
            <button className="px-2">
              <FontAwesomeIcon width={22} height={20} icon={faEnvelope} />
            </button>
          </div>
          <div className="flex flex-col items-center italic">&copy; Florian Sabine</div>
        </div>
      </div>
    </Menu>
  );
};

export default MenuHamburger;
