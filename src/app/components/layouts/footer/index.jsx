"use client";

import Image from "next/image";
import Link from "next/link";
import { BsLinkedin, BsGithub, BsDiscord, BsEnvelopeFill} from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col bg-cyan-600 lg:grid lg:grid-cols-3 ">
        <div className="flex flex-row justify-center pt-2 lg:pt-8">
          <Link href="/">
            <Image
              src="images/logos/portfolio.svg"
              alt="logoPF"
              width={60}
              height={60}
              className="lg:w-40"
            />
          </Link>
        </div>
        <div></div>
        <div className="flex justify-center py-2 lg:text-8xl lg:w-full lg:pt-20 ">
          <button>
            <a href="https://fr.linkedin.com/in/florian-sabine-75003a273">
              <BsLinkedin size={40} h />
            </a>
          </button>
          <button className="px-2 lg:px-4">
            <a href="https://github.com/flo611">
            <BsGithub size={40} h />
            </a>
          </button>
          <button>
            <a href="https://discord.com/channels/@flo611">
            <BsDiscord size={40} h />
            </a>
          </button>
          <button className="px-2 lg:px-4">
            <a href="mailto:contact@sabine-portfolio.fr">
            <BsEnvelopeFill size={40} h />
            </a>
          </button>
        </div>
        <hr className="lg:hidden" />
        <div className="text-center py-2 lg:flex lg:justify-center lg:items-start lg:pb-4">
          <span className="italic lg:text-3xl">
            &copy; Tous droits réservés
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
