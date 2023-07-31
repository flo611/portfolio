"use client";


import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Button from "@/app/components/tools/buttons";

const Projects = () => {
  return (
    <section>
      <h1 className="w-full flex justify-center text-amber-800 uppercase pt-6 font-bold">
        Mes projets
      </h1>
      <div>
        <Carousel
          autoPlay
          infiniteLoop
          className="bg-gradient-to-r from-cyan-200 to-blue-500 mx-8 opacity-80 justify-center lg:z-10 "
          showThumbs={0}
          showIndicators={0}
          showStatus={0}
          interval={2000}
        >
          <div>
            <img
              src="/images/logos/white-logo naturopied.svg"
              alt="Naturopied"
              width={150}
              height={200}
            />
            <p className="legend">NaturoPied</p>
          </div>
          <div>
            <img
              src="/images/logos/black-logo.svg"
              width={150}
              height={200}
              alt="Dvnet"
            />
            <p className="legend">DV-NET</p>
          </div>
          <div>
            <img
              src="/images/logos/logo-portfolio-white.svg"
              alt="Portfolio"
              width={150}
              height={200}
            />
            <p className="legend">Portfolio</p>
          </div>
          
        </Carousel>
      </div>
      <div className="flex justify-center pt-8">
      <Button type="button" value="En savoir +" />
      </div>
    </section>
  );
};

export default Projects;
