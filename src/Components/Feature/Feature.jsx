import PropTypes from "prop-types";
import { FiArrowRightCircle } from "react-icons/fi";

const Feature = ({ feature }) => {
  return (
    <div>
      <p className="flex items-center">
        <FiArrowRightCircle className="text-green-300 mr-2"></FiArrowRightCircle>
        {feature}
      </p>
    </div>
  );
};
Feature.propTypes = {
  feature: PropTypes.string,
};

export default Feature;
