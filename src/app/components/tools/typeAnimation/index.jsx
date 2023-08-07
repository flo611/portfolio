"use client";

import { TypeAnimation } from "react-type-animation";

const TypeAnimations = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "Je suis un développeur web junior",
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        "Je suis à la recherche d'un stage pour Décembre et Janvier 2023/2024",
        1000,
        "Je suis passioné de sports,de nature et de voyages. Si vous voulez en savoir plus vous êtes au bon endroit.",
        1000,
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: "2em", display: "inline-block" }}
      repeat={Infinity}
    />
  );
};

export default TypeAnimations;
