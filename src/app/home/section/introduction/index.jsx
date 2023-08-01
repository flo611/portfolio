"use client";

import Image from "next/image";
import Keyword from "@/app/components/tools/keyword";
import Button from "@/app/components/tools/buttons";
import Link from "next/link";

const Introduction = () => {
  return (
    <section
      className="flex flex-col mt-20 bg-gradient-to-r from-cyan-200 to-cyan-700  dark:dark:bg-gradient-to-r dark:from-cyan-600 dark:to-purple-950 lg:mt-0 lg:w-full"
      data-aos="fade-down-right"
    >
      <div className="bg-[url('/images/background.jpg')] sm:h-screen  bg-no-repeat bg-cover lg:w-full ">
      
        <div className="flex flex-row justify-evenly pt-24 lg:pt-96 ">
          <a href="/images/cv.svg">
            <Button type="button" value="Mon CV" />
          </a>
          <Link href="/projects">
            <Button type="button" value="Mes projets" />
          </Link>
        </div>
        <div className="flex flex-col">
          <h2 className="text-center uppercase font-bold text-amber-800">
            Qui suis-je ?
          </h2>
          <p className="text-white px-2 py-4 lg:text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
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
