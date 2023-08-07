"use client";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Button from "@/app/components/tools/buttons";
import Image from "next/image";
import AnchorLink from "react-anchor-link-smooth-scroll";
const Projects = () => {
  return (
    <section id="projects">
      <h1 className="w-full flex justify-center text-amber-800 dark:text-lime-500 uppercase pt-6 pb-4 font-bold lg:py-20 lg:text-3xl">
        Mes projets
      </h1>
      <div>
        <Carousel
          autoPlay
          infiniteLoop
          className="opacity-80 justify-center lg:z-10"
          showThumbs={0}
          showIndicators={0}
          showStatus={0}
          interval={2000}
        >
          <div className="">
            <img
              src="/images/logos/white-logo naturopied.svg"
              className="h-80 w-80"
              alt="Naturopied"
              width={50}
              height={50}
            />
          </div>
          <div>
            <img
              src="/images/logos/black-logo.svg"
              className="h-80 w-80"
              width={50}
              height={50}
              alt="Dvnet"
            />
          </div>
          <div className="flex justify-center items-center h-80">
            <AnchorLink offset={() => 150} href="#intro">
              <div className="w-40">
                <Image
                  src="images/logos/portfolio.svg"
                  alt="logoPF"
                  width={10}
                  height={10}
                />
              </div>
            </AnchorLink>
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Projects;
