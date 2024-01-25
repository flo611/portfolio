import PropTypes from "prop-types";

const Input = (props) => {
  return (
    <input
      type={props.type}
      className={`w-80${props.className}`}
    />
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Input;
