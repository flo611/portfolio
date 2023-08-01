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
    <section>
      <h1 className="w-full justify-center flex flex-row text-amber-800 uppercase pt-6 font-bold">
        Mes Expériences
      </h1>
      <div className="flex flex-col items-center md:mx-6 lg:mx-8 lg:grid lg:grid-cols-2">
        {data.map((element) => {
          return (
            <div
              className="mt-8 px-4 md:w-full"
              data-aos="fade-right"
            >
              <Card 
                title={element.title}
                date={element.date}
                goal={element.goal}
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
