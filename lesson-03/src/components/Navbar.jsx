import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/">
        {({ isActive }) => (
          <span className={isActive ? "bg-red-600" : ""}>Home</span>
        )}
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "bg-red-600" : "")}
        to="/about"
        end
      >
        About
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "bg-red-600" : "")}
        to="/contact"
      >
        Contact
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "bg-red-600" : "")}
        to="/about/item"
      >
        About Item
      </NavLink>
    </nav>
  );
};

export default Navbar;
