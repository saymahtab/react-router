import { Outlet } from "react-router-dom"

const AuthLayout = () => {
  return (
    <div>
      navbar
      <Outlet />
    </div>
  )
}

export default AuthLayout
