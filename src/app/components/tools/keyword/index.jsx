import PropTypes from "prop-types";

const Keyword = (props) => {
  return (
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 lg:mx-3 lg:px-4 lg:py-3 lg:uppercase lg:text-xl">
      {props.value}
    </span>
  );
};

Keyword.propTypes = {
  value: PropTypes.string,
};

export default Keyword;
