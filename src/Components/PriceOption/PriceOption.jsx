import PropTypes from "prop-types";
const PriceOption = ({ option }) => {
  return (
    <div>
      <h2 className="text-4xl">{option.name}</h2>
      <p>{option.features}</p>
      <h3 className="text-2xl">
        <span className="text-amber-600">{option.price}</span>/month
      </h3>
    </div>
  );
};
PriceOption.propTypes = {
  option: PropTypes.object,
};
export default PriceOption;
