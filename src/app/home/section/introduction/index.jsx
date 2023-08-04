"use client";

import Image from "next/image";
import Keyword from "@/app/components/tools/keyword";
import Button from "@/app/components/tools/buttons";
import Link from "next/link";

const Introduction = () => {
  return (
    <section
      className="flex flex-col  from-cyan-300 to-cyan-700  dark:dark:bg-gradient-to-r dark:from-cyan-600 dark:to-purple-950 mx-3 md:mt-0 lg:w-full"
      // data-aos="fade-down-right"
    >
      <div className="mt-28 lg:mt-72">
        <div className="flex flex-col">
          <div className="flex justify-center">
            <Image
              className="flex flex-row justify-center pt-8 pb-2 lg:py-8 "
              src="/images/logos/portfolio.svg"
              alt=""
              width="80"
              height="80"
            />
          </div>
          <p className="text-white pb-28 mx-9 text-xs  md:mx-24 md:text-center md:text-base lg:text-center lg:text-2xl lg:pt-20">
            Bonjour,1000 je suis Florian développeur web junior. Je recherche un
            stage pour Décembre et Janvier 2023/2024. <br />
            Je suis passioné de sports,de nature et de voyages. Si vous voulez
            en savoir plus vous êtes au bon endroit. <br />
          </p>
          <div className="flex flex-col items-center lg:flex-row lg:justify-center">
            <a href="/images/cv.svg" className="pb-2 lg:pb-0 lg:pr-4">
              <Button type="button" value="Mon CV" />
            </a>
            <Link href="/projects" className="pt-2 lg:pt-0 lg:pl-4">
              <Button type="button" value="Mes projets" />
            </Link>
          </div>
          <div className="flex flex-row justify-center pt-16 pb-40">
            <a href="https://www.instagram.com/sports.fr_officiel/">
              <Keyword value="#Sports" />
            </a>
            <a href="https://www.instagram.com/nature/?hl=fr">
              <Keyword value="#Nature" />
            </a>
            <a href="https://www.instagram.com/explore/tags/travels/?hl=fr">
              <Keyword value="#Travels" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
