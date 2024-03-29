"use client";
import Card from "@/app/components/tools/cards";
import data from "./data.json";
import ReactCardFlip from "react-card-flip";
import React, { Component } from "react";

const Experiences = () => {
  const showContent = (props) => {
    alert(
      `Pour mon poste de ${props.title}, j'ai effectué des tâches tel que ${props.description}`
    );
  };

  return (
    <section id="timeline">
      <h2 className="w-full justify-center flex flex-row text-amber-800 dark:text-amber-600 uppercase pt-6 font-bold font-nunitoRegular lg:py-20 lg:text-3xl">
        Mes Expériences
      </h2>
      <div className="flex flex-col items-center md:mx-14  lg:grid lg:grid-cols-2">
        {data.map((element) => {
          return (
            <div key={element.id} className="mt-6 px-4 ">
              <Card
                title={element.title}
                date={element.date}
                description={element.description}
                longdescription={element.longdescription}
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
