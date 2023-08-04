"use client";
import PropTypes from "prop-types";
import Button from "@/app/components/tools/buttons";

const Card = (props) => {
  return (
    <div className="pb-4 lg:pb-0 lg:my-14 lg:mx-16">
      <div className="bg-cyan-900 px-4 lg:py-6 ">
        <div className="flex flex-row justify-center py-4 lg:pb-16 lg:h-60 lg:w-full">
          <img src={props.icon} width="100px" height="80px" />
        </div>
        <div className="lg:mx-4">
          <h1>Intitulé du poste : {props.title} </h1>
          <h1 className="lg:py-10">Date : {props.date}</h1>
          <p>Description : {props.description}</p>
        </div>
        <div className="flex flex-row justify-center py-4 lg:py-10">
          <Button type="button" value="En savoir +" onClick={props.onClick} />
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  className: PropTypes.string,
};

export default Card;
