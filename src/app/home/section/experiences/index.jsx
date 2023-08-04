"use client";
import Card from "@/app/components/tools/cards";
import data from "./data.json";

const Experiences = () => {
  const showContent = (props) => {
    alert(
      `Pour mon poste de ${props.title}, j'ai effectué des tâches tel que ${props.description}`
    );
  };

  return (
    <section id="timeline">
      <h1 className="w-full justify-center flex flex-row text-amber-800 uppercase pt-6 font-bold lg:py-20 lg:text-3xl">
        Mes Expériences
      </h1>
      <div className="flex flex-col items-center md:mx-6  lg:grid lg:grid-cols-2">
        {data.map((element) => {
          return (
            <div key={element.id} className="mt-6 px-4" data-aos="fade-right">
              <Card
                title={element.title}
                date={element.date}
                description={element.description}
                icon={element.icon}
                
                onClick={() => showContent(element)}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experiences;
