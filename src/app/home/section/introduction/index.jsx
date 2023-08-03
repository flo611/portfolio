"use client";

import Image from "next/image";
import Keyword from "@/app/components/tools/keyword";
import Button from "@/app/components/tools/buttons";
import Link from "next/link";


const Introduction = () => {
  return (
    <section
      className="flex flex-col mt-16  from-cyan-300 to-cyan-700  dark:dark:bg-gradient-to-r dark:from-cyan-600 dark:to-purple-950 mx-3 md:mt-0 lg:w-full"
      data-aos="fade-down-right"
    >
      <div className="bg-[url('/images/background.png')] bg-no-repeat bg-cover bg-center w-full  lg:my-12 lg:h-screen">
        <div className="flex flex-row justify-evenly pt-2 pb-8 md:pt-44 ">
          <a href="/images/cv.svg">
            <Button type="button" value="Mon CV" />
          </a>
          <Link href="/projects">
            <Button type="button" value="Mes projets" />
          </Link>
        </div>
        <div className="flex flex-col items-center ">
          <Image
            className="flex flex-row justify-center pt-8 pb-2 lg:py-8 "
            src="/images/logos/portfolio.svg"
            alt=""
            width="80"
            height="80"
          />
         
          <p className="text-white pb-36 mx-9 text-xs  md:mx-24 md:text-center md:text-base lg:text-center lg:text-2xl lg:pt-20">

            Bonjour,1000 je suis Florian développeur web junior. Je recherche un
            stage pour Décembre et Janvier 2023/2024. <br />
            Je suis passioné de sports,de nature et de voyages. Si vous voulez
            en savoir plus vous êtes au bon endroit. <br /> 
          
          </p>
        </div>
        <div className="px-6 pt-6 pb-2 md:pt-32 lg:my-72 flex justify-center">
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
    </section>
  );
};

export default Introduction;
