"use client";

import Image from "next/image";
import Keyword from "@/app/components/tools/keyword";
import Button from "@/app/components/tools/buttons";

const Introduction = () => {
  return (
    <section
      className="flex flex-col mt-20 bg-gradient-to-r from-cyan-200 to-cyan-800  dark:dark:bg-gradient-to-r dark:from-orange-700 dark:to-purple-950 lg:mt-0 lg:w-full"
      data-aos="fade-down-right"
    >
      <div className="w-full bg-scroll bg-center">
        <Image
          src={"/images/background.jpg"}
          width={1024}
          height={670}
          alt="laptop"
        />

        <div className="flex flex-row justify-center ">
          <Image
            src="/images/logos/white-logo naturopied.svg"
            alt="Photo-de-profil"
            width={200}
            height={200}
          />
        </div>
        <div className="flex flex-row justify-evenly pb-8 ">
          <a href="/images/cv.svg">
            <Button type="button" value="Mon CV" />
          </a>
          <a href="/projects/index.jsx">
            <Button type="button" value="Mes projets" />
          </a>
        </div>
        <div className="flex flex-col">
          <h2 className="text-center uppercase font-bold text-amber-800">
            Qui suis-je ?
          </h2>
          <p className="text-white px-2 py-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
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
