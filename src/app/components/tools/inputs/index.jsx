import PropTypes from "prop-types";

const Input = (props) => {
  return (
    <input
      type={props.type}
      className={`rounded-lg bg-cyan-800 hover:bg-white hover:text-black ${props.className}`}
    />
  );
};

Input.PropTypes = {
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Input;
