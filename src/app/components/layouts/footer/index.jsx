"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faSquareGithub,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col bg-cyan-600 ">
        <div className="flex flex-row justify-center pt-2  ">
          <Link href="/">
          <Image
            src="images/logos/portfolio.svg"
            alt="logoPF"
            width={60}
            height={60}
          />
          </Link>
        </div>
        <div className="flex justify-center py-2 ">
          <button><a href="https://fr.linkedin.com/in/florian-sabine-75003a273">
            <FontAwesomeIcon width={22} height={20} icon={faLinkedin}  /></a>
          </button>
          <button className="px-2"><a href="https://github.com/flo611">
            <FontAwesomeIcon width={22} height={20} icon={faSquareGithub} /></a>
          </button>
          <button><a href="https://discord.com/channels/@flo611">
            <FontAwesomeIcon width={20} height={20} icon={faDiscord} /></a>
          </button>
          <button className="px-2"><a href="mailto:contact@sabine-portfolio.fr">
            <FontAwesomeIcon width={22} height={20} icon={faEnvelope} /></a>
          </button>
        </div>
        <hr />
        <div className="text-center py-2 ">
          <span className="italic lg:text-2xl">
            &copy; Tous droits réservés
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
