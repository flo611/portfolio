"use client";

import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Carrousel = () => {
  return (
    <>
    <h1 className="w-full justify-center text-amber-800">Mes projets</h1>
      <div>
        <Carousel autoPlay className=" bg-cyan-400 m-8 opacity-80 lg:h-1/2  ">
          <div>
            <img src="/images/logos/white-logo naturopied.svg" alt="Naturopied" />
            <p className="legend">NaturoPied</p>
          </div>
          <div>
            <img src="/images/logos/black-logo.svg" alt="Dvnet" />
            <p className="legend">DV-NET</p>
          </div>
          <div>
            <img src="/images/logos/logo-portfolio-white.svg" alt="Portfolio" width={600} height={200}/>
            <p className="legend">Portfolio</p>
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default Carrousel;
