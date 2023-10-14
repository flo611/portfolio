import PropTypes from "prop-types";

const Input = (props) => {
  return (
    <input
      type={props.type}
      className={`border border-blue-300 focus-visible:border-blue-300 focus:border-blue-300 rounded-lg bg-cyan-800 hover:transition hover:ease-in-out hover:duration-200 hover:bg-slate-100 text-black ${props.className}`}
    />
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Input;
