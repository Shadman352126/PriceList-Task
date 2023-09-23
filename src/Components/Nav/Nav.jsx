import PropTypes from "prop-types";
import { RiMenu2Fill } from "react-icons/ri";
import { GiCrossMark } from "react-icons/gi";
import Link from "../Link/Link";
import { useState } from "react";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { path: "/", name: "Home", id: "home" },
    { path: "/about", name: "About", id: "about" },
    { path: "/products", name: "Products", id: "products" },
    { path: "/contact", name: "Contact", id: "contact" },
    { path: "*", name: "Not Found", id: "not-found" },
  ];
  return (
    <nav className="bg-sky-300 p-6">
      <div className="text-2xl" onClick={() => setOpen(!open)}>
        {open === true ? (
          <GiCrossMark></GiCrossMark>
        ) : (
          <RiMenu2Fill></RiMenu2Fill>
        )}
      </div>
      <ul
        className={`md:flex rounded-md absolute duration-1000 ${
          open ? "top-12" : "-top-80"
        } bg-sky-300 mx-4 px-6`}
      >
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};
Link.propTypes = {
  route: PropTypes.object,
};

export default Nav;
