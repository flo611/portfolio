"use client";

import Image from "next/image";
import Link from "next/link";
import {
  BsLinkedin,
  BsGithub,
  BsDiscord,
  BsEnvelopeFill,
} from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="">
      <div className="flex flex-col bg-slate-100 lg:grid lg:grid-cols-3">
        <div className="flex flex-col justify-center items-center pt-2 lg:pt-8 lg:col-span-2">
          <Link href="/">
            <Image
              src="images/logos/portfolio.svg"
              alt="logoPF"
              width={75}
              height={75}
              className=""
            />
          </Link>
          <div className="hiddentext-center py-2 lg:flex lg:justify-center lg:items-start lg:pb-4">
            <span className="italic">&copy; Tous droits réservés</span>
          </div>
        </div>
        <hr className="lg:hidden" />
        <div className="flex justify-center py-4 lg:text-8xl lg:w-full ">
          <button>
            <a href="https://fr.linkedin.com/in/florian-sabine-75003a273">
              <BsLinkedin size={30} />
            </a>
          </button>
          <button className="px-4 lg:px-8">
            <a href="https://github.com/flo611">
              <BsGithub size={30} />
            </a>
          </button>
          <button>
            <a href="https://discord.com/channels/@flo611">
              <BsDiscord size={30} />
            </a>
          </button>
          <button className="pl-4 lg:pl-8">
            <a href="mailto:contact@sabine-portfolio.fr">
              <BsEnvelopeFill size={30}  />
            </a>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
