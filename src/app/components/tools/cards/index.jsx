import PropTypes from "prop-types";

const Card = (props) => {
  return (
    <>
      <title
        type={props.type}
        placeholder={props.placeholder}
        className={props.className}
      />
    </>
  );
};

Card.PropTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  className: PropTypes.string,
};

export default Card;
