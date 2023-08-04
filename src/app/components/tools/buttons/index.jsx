"use client";
import PropTypes from "prop-types";

const Button = (props) => {
  return (
    <button
      type={props.type}
      className={`text-white bg-cyan-800 font-bold  rounded-full flex flex-row uppercase px-2 py-2 w-36 justify-center items-center hover:bg-white hover:text-black ${props.className} lg:text-lg lg:w-48`}
      onClick={props.onClick}
    >
      {props.value}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
  value: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
