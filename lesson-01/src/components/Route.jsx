import { useContext } from 'react'
import { RouterContext } from '../context/RouterContext';

const Route = ({ path, element }) => {

  const { currentPath } = useContext(RouterContext);

  return currentPath === path ? element : null;
}

export default Route
