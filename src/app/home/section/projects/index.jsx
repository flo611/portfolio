"use client";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { GiPlanetCore } from "react-icons/gi";

const Projects = () => {
  return (
    <section id="projects">
      <h2 className="w-full flex justify-center text-amber-800 dark:text-amber-600 uppercase pt-6 pb-4 font-bold font-nunitoRegular lg:py-20 lg:text-3xl">
        Mes projets
      </h2>
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
                <div className="flex flex-col justify-center items-center h-full my-14">
                  <div className=" flex items-center w-44 ">
                    <AnchorLink offset={() => 150} href="#intro">
                      <Image
                        src="/images/logos/be-dev.svg"
                        alt="logoPF"
                        width={120}
                        height={120}
                        className="flex flex-col items-center pl-5"
                      />
                    </AnchorLink>
                  </div>

                  <div className=" flex flex-row justify-center mt-24 ">
                    <button
                      type="button"
                      title="Website"
                      className="  text-amber-800  justify-center pr-6  dark:text-slate-100 hover:text-cyan-900 hover:transition hover:ease-in-out hover:duration-300 dark:hover:text-amber-800 dark:hover:transition dark:hover:ease-in-out dark:hover:duration-300"
                    >
                      <a href="https://be-dev.org">
                        <GiPlanetCore size={30} />
                      </a>
                    </button>
                    <button
                      type="button"
                      title="github"
                      className=" text-amber-800 flex justify-center pl-6 dark:text-slate-100 hover:text-cyan-900 hover:transition hover:ease-in-out hover:duration-300 dark:hover:text-amber-800 dark:hover:transition dark:hover:ease-in-out dark:hover:duration-300"
                    >
                      <a href="https://github.com/bedev-org/be-dev">
                        <BsGithub size={30} />
                      </a>
                    </button>
                  </div>
                </div>

                <div className="flex flex-col justify-center items-center h-full my-14">
                  <div className=" flex items-center w-44 ">
                    <AnchorLink offset={() => 150} href="#intro">
                      <Image
                        src="images/logos/portfolio.svg"
                        alt="logoPF"
                        width={30}
                        height={30}
                        className="flex flex-col items-center"
                      />
                    </AnchorLink>
                  </div>

                  <div className=" flex flex-row justify-center mt-24 ">
                    <button className="  text-amber-800  justify-center pr-6  dark:text-slate-100 hover:text-cyan-900 hover:transition hover:ease-in-out hover:duration-300 dark:hover:text-amber-800 dark:hover:transition dark:hover:ease-in-out dark:hover:duration-300">
                      <AnchorLink offset={() => 150} href="#intro">
                        <a href="https://sabine-portfolio.fr/">
                          <GiPlanetCore size={30} />
                        </a>
                      </AnchorLink>
                    </button>
                    <button className=" text-amber-800 flex justify-center pl-6 dark:text-slate-100 hover:text-cyan-900 hover:transition hover:ease-in-out hover:duration-300 dark:hover:text-amber-800 dark:hover:transition dark:hover:ease-in-out dark:hover:duration-300">
                      <a href="https://github.com/flo611/portfolio">
                        <BsGithub size={30} />
                      </a>
                    </button>
                  </div>
                </div>

                <div>
                  <Image
                    src="/images/logos/white-logo naturopied.svg"
                    className="h-80 w-80"
                    alt="Naturopied"
                    width={50}
                    height={50}
                  />
                  <div className=" flex flex-row justify-center mt-6 ">
                    <button
                      type="button"
                      title="Website"
                      className="  text-amber-800  justify-center pr-6  dark:text-slate-100 hover:text-cyan-900 hover:transition hover:ease-in-out hover:duration-300 dark:hover:text-amber-800 dark:hover:transition dark:hover:ease-in-out dark:hover:duration-300"
                    >
                      <a href="https://naturopied.org/">
                        <GiPlanetCore size={30} />
                      </a>
                    </button>
                    <button
                      type="button"
                      title="github"
                      className=" text-amber-800 flex justify-center pl-6 dark:text-slate-100 hover:text-cyan-900 hover:transition hover:ease-in-out hover:duration-300 dark:hover:text-amber-800 dark:hover:transition dark:hover:ease-in-out dark:hover:duration-300"
                    >
                      <a href="https://github.com/flo611/naturopied">
                        <BsGithub size={30} />
                      </a>
                    </button>
                  </div>
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
