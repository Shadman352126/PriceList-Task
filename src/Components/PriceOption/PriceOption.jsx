import PropTypes from "prop-types";
import Feature from "../Feature/Feature";
const PriceOption = ({ option }) => {
  const { price, name, features } = option;
  return (
    <div className="bg-sky-700 rounded-lg py-10 px-6 flex flex-col text-white">
      <h2 className="text-4xl">{name}</h2>
      <h3 className="my-4">
        <span className="text-7xl text-amber-600">{price}</span>
        <span className="text-3xl">/month</span>
      </h3>
      <div className="pl-2 flex-grow">
        {features.map((feature, index) => (
          <Feature key={index} feature={feature}></Feature>
        ))}
      </div>
      <button className="btn btn-accent my-4">Regstrar Now</button>
    </div>
  );
};
PriceOption.propTypes = {
  option: PropTypes.object,
};
export default PriceOption;
