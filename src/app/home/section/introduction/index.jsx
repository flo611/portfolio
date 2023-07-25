import Image from "next/image";
import Keyword from "@/app/components/tools/keyword";
import Button from "@/app/components/tools/buttons";

const Introduction = () => {
  return (
    <section className="flex flex-col mt-20 dark:bg-cyan-600">
      <div className="flex flex-row justify-center">
        <Image
          src="/images/logos/white-logo naturopied.svg"
          alt="Photo-de-profil"
          width={385}
          height={385}
        />
      </div>
      <div className="flex flex-row justify-evenly pb-8">
        <Button type="button" value="Mon CV" />
        <Button type="button" value="Mes projets" />
      </div>
      <div className="flex flex-col">
        <h2 className="text-center uppercase font-bold text-amber-800">
          Qui suis-je ?
        </h2>
        <p className="text-white px-2 py-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
      </div>
      <div className="px-6 pt-4 pb-2 flex justify-center">
        <Keyword value="#Sports" />
        <Keyword value="#Nature" />
        <Keyword value="#Travels" />
      </div>
    </section>
  );
};

export default Introduction;
