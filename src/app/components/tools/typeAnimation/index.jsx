"use client";

import { TypeAnimation } from "react-type-animation";

const TypeAnimations = () => {
  return (
    <TypeAnimation
      sequence={[
        "Bonjour, je suis Florian !",
        1000,
        // Same substring at the start will only be typed out once, initially
        "Bonjour, je suis un développeur web 💻",
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        "Bonjour, je suis à la recherche d'un poste de développeur front ou back End 💼",
        1000,
        // "Je suis passioné de sports,de nature et de voyages. Si vous voulez en savoir plus vous êtes au bon endroit.",
        // 1000,
      ]}
      wrapper="span"
      speed={40}
      style={{ display: "contents" }}
      repeat={Infinity}
    />
  );
};

export default TypeAnimations;
