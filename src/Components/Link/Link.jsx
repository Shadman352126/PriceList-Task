import PropTypes from "prop-types";

const Link = ({ route }) => {
  return (
    <li
      className="list-none rounded-lg p-4 mr-4 hover:bg-sky-600"
      key={route.id}
    >
      <a href={route.path}>{route.name}</a>
    </li>
  );
};

Link.propTypes = {
  route: PropTypes.object,
};
export default Link;
