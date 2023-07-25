import PropTypes from "prop-types";

const Input = (props) => {
  return (
    <>
      <label htmlFor="name">{props.name}</label>
      <br />
      <input
        type={props.type}
        className={`rounded-lg bg-cyan-800 my-6 hover:bg-white hover:text-black ${props.className}`}
      />
    </>
  );
};

Input.PropTypes = {
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
  name: PropTypes.string,
};

export default Input;
