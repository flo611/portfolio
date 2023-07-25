import PropTypes from "prop-types";

const Button = (props) => {
  return (
    <button
      type={props.type}
      className={`text-white bg-cyan-800 font-bold  rounded-full px-2 flex flex-row justify-center items-center hover:bg-white hover:text-black ${props.className}`}
    >
      {props.label}
    </button>
  );
};

Button.PropTypes = {
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Button;
