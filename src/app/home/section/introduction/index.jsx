"use client";

import Image from "next/image";
import Keyword from "@/app/components/tools/keyword";
import Button from "@/app/components/tools/buttons";
import Link from "next/link";

const Introduction = () => {
  return (
    <section
      className="flex flex-col mt-20  from-cyan-300 to-cyan-700  dark:dark:bg-gradient-to-r dark:from-cyan-600 dark:to-purple-950 lg:mt-0 lg:w-full"
      data-aos="fade-down-right"
    >
      <div className="bg-[url('/images/background.png')] bg-no-repeat bg-cover bg-center md:pt-2  sm:max-w md:w-full lg:h-screen ">
        <div className="flex flex-row justify-evenly  md:pt-12 lg:pt-52 ">
          <a href="/images/cv.svg">
            <Button type="button" value="Mon CV" />
          </a>
          <Link href="/projects">
            <Button type="button" value="Mes projets" />
          </Link>
        </div>
        <div className="flex flex-col">
          <h2 className="text-center uppercase font-bold text-amber-800  md:pt-6 lg:pt-8">
            Qui suis-je ?
          </h2>
          <img src="/images/logos/portfolio.svg" alt="" />
          <p className="text-white text-sm px-2 md:text-center lg:text-center lg:text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />
            Voluptatibus quia, nulla! Maiores et perferendis eaque, <br />
            exercitationem praesentium nihil.
          </p>
        </div>
        <div className="px-6 pt-4 pb-2 flex justify-center">
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
