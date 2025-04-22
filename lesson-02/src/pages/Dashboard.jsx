import { Link, NavLink } from 'react-router-dom'
import Product from '../components/Product'

const Dashboard = () => {
  return (
    <div>
      Dashboard
      <NavLink to={"/dashboard/products"}>
        Products
      </NavLink>
    </div>
  )
}

export default Dashboard
