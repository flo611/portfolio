"use client";
import Link from 'next/link';
import Image from "next/image";

import {
  BsLinkedin,
  BsGithub,
  BsDiscord,
  BsEnvelopeFill,
} from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="">
      <div className="flex flex-col bg-slate-100 dark:bg-indigo-950 lg:grid lg:grid-cols-3">
        <div className="flex flex-col justify-center items-center py-4 lg:pt-8 lg:col-span-2">
          <a href="https://sabine-portfolio.fr/">
            <Image
              src="images/logos/portfolio.svg"
              alt="logoPF"
              width={75}
              height={75}
              className=" dark:hidden"
            />
          </a>
          <a href="https://sabine-portfolio.fr/">
            <Image
              src="images/logos/whiteportfolio.svg"
              alt="logoPF"
              width={75}
              height={75}
              className="hidden dark:flex"
            />
          </a>
          <div className="hiddentext-center  py-2 lg:flex lg:justify-center lg:items-start lg:pb-4">
            <span className="italic text-amber-800 dark:text-slate-100 font-nunitoRegular">
              &copy; Tous droits réservés
            </span>
          </div>
          <div className="italic text-amber-800 dark:text-slate-100 font-nunitoRegular hover:underline">
            <ul>
              <li>
              <a href='/cgu' key='cgu'>Politiques d'utilisation</a> 
              </li>
            </ul>
         
          </div>
        </div>
        <hr className="lg:hidden" />
        <div className="flex justify-center py-4 lg:text-8xl lg:w-full">
          <button
            type="button"
            title="linkedin"
            className="text-amber-800 dark:text-slate-100 hover:text-cyan-900 hover:transition hover:ease-in-out hover:duration-300 dark:hover:text-amber-800 dark:hover:transition dark:hover:ease-in-out dark:hover:duration-300"
          >
            <a
              href="https://fr.linkedin.com/in/florian-sabine-75003a273"
              aria-label="Voir mon linkedin"
            >
              <BsLinkedin size={30} />
            </a>
          </button>
          <button
            type="button"
            title="github"
            className="px-4 lg:px-8 text-amber-800 dark:text-slate-100 hover:text-cyan-900 hover:transition hover:ease-in-out hover:duration-300 dark:hover:text-amber-800 dark:hover:transition dark:hover:ease-in-out dark:hover:duration-300"
          >
            <a href="https://github.com/flo611" aria-label="Voir mon github">
              <BsGithub size={30} />
            </a>
          </button>
          <button
            type="button"
            title="discord"
            className="text-amber-800 dark:text-slate-100 hover:text-cyan-900 hover:transition hover:ease-in-out hover:duration-300 dark:hover:text-amber-800 dark:hover:transition dark:hover:ease-in-out dark:hover:duration-300"
          >
            <a
              href="https://discord.com/channels/@flo611"
              aria-label="Voir mon discord"
            >
              <BsDiscord size={30} />
            </a>
          </button>
          <button
            type="button"
            title="email"
            className="pl-4 lg:pl-8 text-amber-800 dark:text-slate-100 hover:text-cyan-900 hover:transition hover:ease-in-out hover:duration-300 dark:hover:text-amber-800 dark:hover:transition dark:hover:ease-in-out dark:hover:duration-300"
          >
            <a
              href="mailto:contact@sabine-portfolio.fr"
              aria-label="Envoyez-moi un email"
            >
              <BsEnvelopeFill size={30} />
            </a>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
