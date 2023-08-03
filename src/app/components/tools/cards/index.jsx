"use client";
import PropTypes from "prop-types";
import Button from "@/app/components/tools/buttons";

const Card = (props) => {
  return (
    <div className="pb-4 lg:pb-0 lg:my-14 ">
      <div className="bg-cyan-900  px-4 lg:py-6 lg:h-screen ">
        <div className="flex flex-row justify-center py-4 lg:pb-16 lg:h-80">
          <img src={props.icon} width="100px" height="80px" />
        </div>
        <h1 className="lg:py-3 ">Intitulé du poste : {props.title} </h1>
        <h1 className="lg:py-3">Date : {props.date}</h1>
        <p className="lg:py-3">Description : {props.description}</p>
        <div className="flex flex-row justify-center py-4 lg:pt-20  ">
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
