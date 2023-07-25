"use client";
import PropTypes from "prop-types";
import Button from "@/app/components/tools/buttons";

const Card = (props) => {
  return (
    <div className="bg-green-500 px-4">
      <h1>Intitulé du poste : {props.title}</h1>
      <h1>Date : {props.date}</h1>
      <p>Objectifs : {props.goal}</p>
      <div className="flex flex-row justify-center">
        <Button type="button" value="En savoir +" onClick={props.onClick} />
      </div>
    </div>
  );
};

Card.propTypes = {
  className: PropTypes.string,
};

export default Card;
