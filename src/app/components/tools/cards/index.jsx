"use client";
import PropTypes from "prop-types";
import Button from "@/app/components/tools/buttons";
import "./styles.css";

const Card = (props) => {
  return (
    <div className=" pb-4 lg:pb-0 lg:my-14 lg:mx-16 hover:transition hover:ease-in-out hover:duration-200 lg:hover:scale-105">
      <div className="contain rounded-lg p-4 ">
        <div className="flex flex-row justify-center py-4  lg:pb-2 lg:h-44 lg:w-full">
          <img src={props.icon} width="100px" height="80px" />
        </div>
        <hr className="border-2 rounded-lg border-white mx-8 lg:mx-16 my-6" />
        <div className="card rounded-lg p-4 lg:p-8 ">
          <div className="lg:mx-4 font-assistantRegular  ">
            <h1 >
              <span className="font-bold  border-b-2 border-cyan-900 ">
                Intitulé du poste
              </span>
             <br />
              <span className="">{props.title}</span>
            </h1>
            <h1 className="py-3 lg:py-10">
              <span className="font-bold border-b-2 border-cyan-900">Date</span>
              <br />
              {props.date}
            </h1>
            <p>
              <span className="font-bold border-b-2 border-cyan-900">
                Description
              </span>
              <br />
              {props.description}
            </p>
          </div>
          <div className="flex flex-row justify-center pt-6 lg:pt-12">
            <Button type="button" value="En savoir +" onClick={props.onClick} />
          </div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  className: PropTypes.string,
};

export default Card;
