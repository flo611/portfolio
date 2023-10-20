"use client";

import "./styles.css";
import React from "react";
import ReactCardFlip from "react-card-flip";


class Card extends React.Component {
  constructor() {
    super();
    this.state = {
      isFlipped: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState((prevState) => ({ isFlipped: !prevState.isFlipped }));
  }

  render() {
    const { title, description, longdescription, date, icon } = this.props;
    return (
      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
        <div className=" pb-4 lg:pb-0 lg:my-14 lg:mx-16 hover:transition hover:ease-in-out hover:duration-200 lg:hover:scale-105">
          <div className="contain rounded-lg p-4 ">
            <div className="flex flex-row justify-center py-4  lg:pb-2 lg:h-44 lg:w-full">
              <img src={icon} width="100px" height="80px" alt="logo" />
            </div>
            <div className="card rounded-lg p-4 lg:p-8 ">
           <div className="lg:mx-4 font-assistantRegular  ">
            <hr className="border-2 rounded-lg border-white mx-8 lg:mx-16 my-6" />
            <h1>
              <span className="font-bold  border-b-2 border-cyan-900 ">
                Intitulé du poste
              </span>
              <br />
              <span className="">{title}</span>
            </h1>
            <h1 className="py-3 lg:py-10">
         <span className="font-bold border-b-2 border-cyan-900">Date</span>
             <br />
             {date}
           </h1>
           <p>
           <span className="font-bold border-b-2 border-cyan-900">
              Description
             </span>
             <br />
             {description}
           </p>
           <div className="flex flex-row justify-center pt-6 lg:pt-12">
           <button  className="text-white bg-cyan-800 font-bold font-nunitoRegular  rounded-full flex flex-row uppercase px-2 py-2 w-36 justify-center items-center hover:bg-white hover:text-amber-800 hover:transition hover:ease-in-out hover:duration-200  dark:hover:bg-cyan-950 dark:hover:text-amber-800 lg:text-lg lg:w-48" onClick={this.handleClick}>
            En savoir +
            </button>
            </div>
            </div>
            </div>
          </div>
        </div>
        <div className=" pb-4 lg:pb-0 lg:my-14 lg:mx-16 hover:transition hover:ease-in-out hover:duration-200 lg:hover:scale-105">
          <div className="contain rounded-lg p-4 ">
            <div className="flex flex-row justify-center py-4  lg:pb-2 lg:h-44 lg:w-full">
              <img src={icon} width="100px" height="80px" alt="logo" />
            </div>
            <hr className="border-2 rounded-lg border-white mx-8 lg:mx-16 my-6" />
            <div className="card rounded-lg p-4 lg:p-8 ">
           <div className="lg:mx-4 font-assistantRegular  ">
            <p>
           <span className="font-bold border-b-2 border-cyan-900">
              Description
             </span>
             <br />
            {longdescription}
            </p>
            <div className="flex flex-row justify-center pt-6 lg:pt-12">
           <button  className="text-white bg-cyan-800 font-bold font-nunitoRegular  rounded-full flex flex-row uppercase px-2 py-2 w-36 justify-center items-center hover:bg-white hover:text-amber-800 hover:transition hover:ease-in-out hover:duration-200  dark:hover:bg-cyan-950 dark:hover:text-amber-800 lg:text-lg lg:w-48" onClick={this.handleClick}>
            Retour
            </button>
            </div>
            </div>
            </div>
          </div>
        </div>
      </ReactCardFlip>
    );
  }
}

export default Card;
