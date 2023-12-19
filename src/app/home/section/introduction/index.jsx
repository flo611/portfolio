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
      className="h-screen md:h-1/2 flex flex-col  mx-3 md:mt-0 lg:w-full"
      
    >
      <div className="mt-24 md:mt-32 lg:mt-52">
        <div className="flex flex-col ">
          <div className="flex flex-row w-full justify-center lg:pr-9 lg:pt-3 ">  
            <Image
              className="flex flex-row  rounded-full w-32 h-32 lg:w-40 lg:h-40 lg:px-1 lg:py-1 border-solid border-4 border-amber-800 shadow-lg shadow-amber-800/80 opacity-80  items-center justify-center "
              src="/images/profil.jpg"
              alt="profil"
              width="100"
              height="100"
            />
          </div>
        
          <div className="flex flex-col items-center pt-10 md:pt-20 lg:pt-24 lg:flex-row lg:justify-center">
            <a href="/images/cv.pdf" className="pb-2 lg:pb-0 lg:pr-4">
              <Button type="button" value="Mon CV" />
            </a>
            <AnchorLink  href="#projects" className="pt-2 lg:pt-0 lg:pl-4">
              <Button type="button" value="Mes projets" />
            </AnchorLink>
          </div>
          <div className="py-10 text-white mx-7 md:mx-24 md:text-center md:text-base lg:text-center lg:text-2xl font-nunitoRegular">
            <TypeAnimations />
            <p className="pt-4 ">
              Je suis passioné de sports,de nature et de voyages. Si vous voulez
              en savoir plus vous êtes au bon endroit!
            </p>
          </div>
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
