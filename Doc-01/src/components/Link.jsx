import { useContext } from "react";
import { RouterContext } from "../context/RouterContext";

const Link = ({ to, children }) => {
  const { navigate } = useContext(RouterContext);

  const handleClick = (event) => {
    event.preventDefault();
    navigate(to);
  };

  return (
    <a href={to} onClick={handleClick}>
      {children}
    </a>
  );
};

export default Link;
