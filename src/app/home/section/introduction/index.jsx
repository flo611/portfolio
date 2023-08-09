"use client";

import Image from "next/image";
import Keyword from "@/app/components/tools/keyword";
import Button from "@/app/components/tools/buttons";
import Link from "next/link";
import AnchorLink from "react-anchor-link-smooth-scroll";
import TypeAnimations from "@/app/components/tools/typeAnimation";

const Introduction = () => {
  return (
    <section
      id="intro"
      className="flex flex-col  from-cyan-300 to-cyan-700  dark:dark:bg-gradient-to-r dark:from-cyan-600 dark:to-purple-950 mx-3 md:mt-0 lg:w-full"
      // data-aos="fade-down-right"
    >
      <div className="mt-28 lg:mt-56">
        <div className="flex flex-col">
          <div className="flex justify-center">
            <Image
              className="flex flex-row justify-center py-6 lg:py-8 "
              src="/images/logos/portfolio.svg"
              alt=""
              width="80"
              height="80"
            />
          </div>
          <div className="flex flex-col items-center pt-8 lg:pt-0 lg:flex-row lg:justify-center">
            <a href="/images/cv.svg" className="pb-2 lg:pb-0 lg:pr-4">
              <Button type="button" value="Mon CV" />
            </a>
            <AnchorLink href="#projects" className="pt-2 lg:pt-0 lg:pl-4">
              <Button type="button" value="Mes projets" />
            </AnchorLink>
          </div>
          <p className="py-12 text-white mx-7 text-xs  md:mx-24 md:text-center md:text-base lg:text-center lg:text-lg font-nunitoRegular">
            Bonjour, je suis Florian !
            <br/>
            <TypeAnimations/>
          </p>
          <div className="flex flex-row justify-center pb-26 lg:pb-24 ">
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
