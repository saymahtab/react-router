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
        to="/products"
        end
      >
        Products
      </NavLink>
    </nav>
  );
};

export default Navbar;
