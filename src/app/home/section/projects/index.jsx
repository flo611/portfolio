"use client";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";


const Projects = () => {
  return (  
  
    <section id="projects">
      
      <h1 className="w-full flex justify-center text-amber-800 dark:text-amber-600 uppercase pt-6 pb-4 font-bold font-nunitoRegular lg:py-20 lg:text-3xl">
        Mes projets
      </h1>
      <div className=" pb-4 mx-4 md:mx-16 lg:pb-0 lg:my-14 lg:mx-72 hover:transition hover:ease-in-out hover:duration-200 lg:hover:scale-105 ">
        <div className="contain rounded-lg p-4  ">
          <div className="card rounded-lg p-4 lg:p-8 lg:m-4 ">
      <div>
        <Carousel
          autoPlay
          infiniteLoop
          className="opacity-90 justify-center lg:z-10"
          showThumbs={0}
          showIndicators={0}
          showStatus={0}
          arr
          interval={2000}
        >
          <div >
            <img
              src="/images/logos/white-logo naturopied.svg"
              className="h-80 w-80"
              alt="Naturopied"
              width={50}
              height={50}
            />
            <button className=" text-amber-800 lg:flex flex-col items-center w-full dark:text-slate-100 hover:text-cyan-900 hover:transition hover:ease-in-out hover:duration-300 dark:hover:text-amber-800 dark:hover:transition dark:hover:ease-in-out dark:hover:duration-300">
            <a href="https://github.com/flo611/naturopied">
              <BsGithub size={30} />
            </a>
          </button>
          </div>
          
          <div>
            <img
              src="/images/logos/black-logo.svg"
              className="h-80 w-80"
              width={50}
              height={50}
              alt="Dvnet"
            />
            <button className=" text-amber-800 lg:flex flex-col items-center w-full dark:text-slate-100 hover:text-cyan-900 hover:transition hover:ease-in-out hover:duration-300 dark:hover:text-amber-800 dark:hover:transition dark:hover:ease-in-out dark:hover:duration-300">
            <a href="https://github.com/Agence-BFC/BFC">
              <BsGithub size={30} />
            </a>
          </button>
          </div>
          <div className="flex justify-center items-center h-80">
            <AnchorLink offset={() => 150} href="#intro">
              <div className="w-40 ">
                <Image
                  src="images/logos/portfolio.svg"
                  alt="logoPF"
                  width={10}
                  height={10}
                />
                 <button className="lg:mt-10 text-amber-800 lg:flex flex-col lg:my-20 items-center w-full dark:text-slate-100 hover:text-cyan-900 hover:transition hover:ease-in-out hover:duration-300 dark:hover:text-amber-800 dark:hover:transition dark:hover:ease-in-out dark:hover:duration-300">
            <a href="https://github.com/flo611/portfolio">
              <BsGithub size={30} />
            </a>
          </button>
          <button className="lg:mt-10 text-amber-800 lg:flex flex-col items-center w-full dark:text-slate-100 hover:text-cyan-900 hover:transition hover:ease-in-out hover:duration-300 dark:hover:text-amber-800 dark:hover:transition dark:hover:ease-in-out dark:hover:duration-300">
            <a href="https://github.com/flo611/portfolio">
              <BsGithub size={30} />
            </a>
          </button>
              </div>
            </AnchorLink>
          </div>
        </Carousel>
      </div>
      </div>
      </div>
      </div>
    </section>
  );
};

export default Projects;
